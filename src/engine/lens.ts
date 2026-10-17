import * as THREE from "three";
import { warmUp } from "./warm";

/**
 * The opening's macro lens: depth of field over the whole frame, as a 70 mm lens close to a table model sees it. The
 * scene is drawn into a half-float target with its depth (the sun's glints on the polished pins stay brighter than
 * white), shrunk to half size with each pixel's circle of confusion, gathered there over a disc (a background pixel
 * can't spread over a nearer, sharper one; a blurred foreground spreads over everything behind it), and laid back
 * over the sharp frame where it is out of focus. The glints become discs of light. Tone mapping, the sRGB output and
 * a faint grain happen last, here, instead of in each material.
 *
 * On a 2× screen the scene is drawn at 1.5× (`scale` 0.75: 44% fewer pixels to trace) and brought up to the screen
 * with a sharp (Catmull-Rom) filter, held inside its four nearest pixels so the glints don't ring; the blur, the
 * grain and the tone curve run at the screen's own size. Out of focus nothing is lost; in focus the pins stay crisp.
 *
 * Bloom, the lens's own glare: what comes through the lens brighter than white (the sun's glints on the pins and the
 * harbour, the lamps, the floodlights and the boats after dark) is taken at a quarter of the frame's size, spread over
 * five sizes, each half the last (a 13-tap filter down, a tent back up, each wider size weighing 0.7 of the one inside
 * it, as a lens's glare falls off), and added back before the tone curve, so a glint carries a soft halo and a lit
 * street a glow in the air over it, while a sheet of sun on the harbour only lifts the air round it a little.
 */
const VERT = /* glsl */ `varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const COC = /* glsl */ `
uniform float uNear; uniform float uFar; uniform float uFocus; uniform float uCoc;
// Signed circle of confusion (px): + behind the focus, - in front, from a depth-buffer value. Behind the focus it
// grows at 0.6 of the lens's rate, so the city further off stays legible (a portrait blur hid
// everything beyond the nearest street); in front it keeps the full macro blur.
float coc(float depth) {
  float z = (uNear * uFar) / (uFar - depth * (uFar - uNear));
  float c = 1.0 - uFocus / z;
  return c > 0.0 ? 0.6 * uCoc * c : max(uCoc * c, -1.3 * uCoc);
}`;
const DOWN = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 uTexel;
${COC}
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb
         + texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, o.y)).rgb;
  float d = min(min(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).r, texture2D(tDepth, vUv + vec2(o.x, -o.y)).r),
                min(texture2D(tDepth, vUv + vec2(-o.x, o.y)).r, texture2D(tDepth, vUv + vec2(o.x, o.y)).r));
  gl_FragColor = vec4(c * 0.25, coc(d) * 0.5);            // half-size pixels
}`;
const GATHER = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tDown; uniform vec2 uTexel; uniform float uRadius;
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void main() {
  vec4 c0 = texture2D(tDown, vUv);
  float cc = c0.a;
  vec3 acc = c0.rgb;
  float wsum = 1.0, fg = 0.0;
  float spin = ign(gl_FragCoord.xy) * 6.2831853;
  for (int i = 0; i < SAMPLES; i++) {
    float f = (float(i) + 0.5) / float(SAMPLES);
    float r = sqrt(f) * uRadius;
    float a = float(i) * 2.3999632 + spin;
    vec4 s = texture2D(tDown, vUv + vec2(cos(a), sin(a)) * r * uTexel);
    float size = abs(s.a);
    if (s.a > cc) size = min(size, abs(cc) * 2.0);      // farther: it can't cover a sharper pixel in front
    float w = smoothstep(r - 1.0, r + 1.0, size);
    acc += s.rgb * w;
    wsum += w;
    if (s.a < cc - 1.0) fg += w;
  }
  gl_FragColor = vec4(acc / wsum, clamp(2.0 * fg / max(wsum - 1.0, 1.0), 0.0, 1.0));
}`;
// A 3 x 3 tent over the gathered half-size image: the gather's rotated spirals leave a fine noise in a wide blur.
const TENT = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
void main() {
  vec2 o = uTexel;
  vec4 c = texture2D(tSrc, vUv) * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)) + texture2D(tSrc, vUv - vec2(o.x, 0.0)) + texture2D(tSrc, vUv + vec2(0.0, o.y)) + texture2D(tSrc, vUv - vec2(0.0, o.y))) * 2.0
    + texture2D(tSrc, vUv + o) + texture2D(tSrc, vUv - o) + texture2D(tSrc, vUv + vec2(o.x, -o.y)) + texture2D(tSrc, vUv + vec2(-o.x, o.y));
  gl_FragColor = c / 16.0;
}`;
// The bloom's first level: the frame as the lens shows it (sharp, or its blur where out of focus) at a quarter of the
// drawn size, four reads over 4 x 4 half-size pixels, keeping only the light above the threshold (a soft knee, in the
// tone curve's units, with each read held below 12 so one glint can't flare the frame).
const BRIGHT = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tDown; uniform sampler2D tSoft; uniform vec2 uTexel; uniform float uExposure; uniform float uThreshold;
vec3 lensAt(vec2 uv) {
  vec4 d = texture2D(tDown, uv), s = texture2D(tSoft, uv);
  return mix(d.rgb, s.rgb, max(smoothstep(0.6, 2.2, abs(d.a) * 2.0), s.a));
}
vec3 bright(vec3 c) {
  c = min(c * uExposure, vec3(12.0));
  float b = max(c.r, max(c.g, c.b)), knee = 0.5 * uThreshold;
  float q = clamp(b - uThreshold + knee, 0.0, 2.0 * knee);
  return c * (max(q * q / (4.0 * knee), b - uThreshold) / max(b, 1e-4));
}
void main() {
  vec2 o = uTexel;
  vec3 c = bright(lensAt(vUv + vec2(-o.x, -o.y))) + bright(lensAt(vUv + vec2(o.x, -o.y)))
         + bright(lensAt(vUv + vec2(-o.x, o.y))) + bright(lensAt(vUv + vec2(o.x, o.y)));
  gl_FragColor = vec4(c * 0.25 / uExposure, 1.0);
}`;
// Down a level: thirteen reads over 6 x 6 of the level above, weighted so a small bright point doesn't flicker as it moves.
const SHRINK = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
vec3 at(float x, float y) { return texture2D(tSrc, vUv + uTexel * vec2(x, y)).rgb; }
void main() {
  vec3 c = at(0.0, 0.0) * 0.125
    + (at(-2.0, 2.0) + at(2.0, 2.0) + at(-2.0, -2.0) + at(2.0, -2.0)) * 0.03125
    + (at(0.0, 2.0) + at(-2.0, 0.0) + at(2.0, 0.0) + at(0.0, -2.0)) * 0.0625
    + (at(-1.0, 1.0) + at(1.0, 1.0) + at(-1.0, -1.0) + at(1.0, -1.0)) * 0.125;
  gl_FragColor = vec4(c, 1.0);
}`;
// Back up a level: a tent over the smaller level, weighed and added onto the one above it.
const GROW = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uGain;
void main() {
  vec2 o = uTexel;
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, o.y)).rgb) * 2.0
    + texture2D(tSrc, vUv + o).rgb + texture2D(tSrc, vUv - o).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb;
  gl_FragColor = vec4(c * (uGain / 16.0), 1.0);
}`;
const COMPOSE = /* glsl */ `
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform sampler2D tBlur; uniform vec2 uHalfTexel; uniform float uGrain; uniform float uTime;
uniform float uShade; uniform float uAspect; uniform vec2 uSize; uniform sampler2D tBloom; uniform vec2 uBloomTexel; uniform float uBloom;
${COC}
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// The sharp frame at this pixel: Catmull-Rom from the drawn frame's pixels (five bilinear reads), clamped to the four
// nearest so a glint brighter than white leaves no dark ring. Where the frame is the screen's size it is exact.
vec3 sharpAt(vec2 uv) {
  vec2 p = uv * uSize - 0.5, f = fract(p), t = floor(p) + 0.5;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f)), w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f)), w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2, t0 = (t - 1.0) / uSize, t3 = (t + 2.0) / uSize, t12 = (t + w2 / w12) / uSize;
  vec3 c = texture2D(tColor, vec2(t12.x, t0.y)).rgb * (w12.x * w0.y) + texture2D(tColor, vec2(t0.x, t12.y)).rgb * (w0.x * w12.y)
         + texture2D(tColor, t12).rgb * (w12.x * w12.y) + texture2D(tColor, vec2(t3.x, t12.y)).rgb * (w3.x * w12.y)
         + texture2D(tColor, vec2(t12.x, t3.y)).rgb * (w12.x * w3.y);
  c /= w12.x * w0.y + w0.x * w12.y + w12.x * w12.y + w3.x * w12.y + w12.x * w3.y;
  vec2 a = t / uSize, e = (t + 1.0) / uSize;
  vec3 p00 = texture2D(tColor, a).rgb, p10 = texture2D(tColor, vec2(e.x, a.y)).rgb, p01 = texture2D(tColor, vec2(a.x, e.y)).rgb, p11 = texture2D(tColor, e).rgb;
  return clamp(c, min(min(p00, p10), min(p01, p11)), max(max(p00, p10), max(p01, p11)));
}
void main() {
  float k0 = abs(coc(texture2D(tDepth, vUv).r));
  vec2 o = uHalfTexel * 0.75;
  vec4 b = 0.25 * (texture2D(tBlur, vUv + vec2(-o.x, -o.y)) + texture2D(tBlur, vUv + vec2(o.x, -o.y))
                 + texture2D(tBlur, vUv + vec2(-o.x, o.y)) + texture2D(tBlur, vUv + vec2(o.x, o.y)));
  float k = max(smoothstep(0.6, 2.2, k0), b.a);
  vec3 col = k < 0.999 ? mix(sharpAt(vUv), b.rgb, k) : b.rgb;
  vec2 q = uBloomTexel * 0.75;
  col += uBloom * 0.25 * (texture2D(tBloom, vUv + vec2(-q.x, -q.y)).rgb + texture2D(tBloom, vUv + vec2(q.x, -q.y)).rgb
                        + texture2D(tBloom, vUv + vec2(-q.x, q.y)).rgb + texture2D(tBloom, vUv + vec2(q.x, q.y)).rgb);
  // The lens's own fall-off, and a graduated filter over the lower half, where the name stands: half of it before the
  // tone curve, as glass in front of the lens would, the rest after it, so the sun's glints there darken too.
  float r = length((vUv - 0.5) * vec2(uAspect, 1.0)) / length(vec2(uAspect, 1.0) * 0.5);
  float grad = smoothstep(0.66, 0.0, vUv.y);
  col *= mix(1.0, (1.0 - 0.38 * smoothstep(0.45, 1.0, r)) * (1.0 - 0.5 * grad), uShade);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor.rgb *= 1.0 - 0.45 * grad * uShade;
  // Film grain, finer than a pixel's worth of light, and enough to dither the dark gradients.
  gl_FragColor.rgb += (hash(gl_FragCoord.xy + fract(uTime) * 917.0) - 0.5) * uGrain;
}`;

// The bloom: from what is brighter than this after the exposure (the sunlit roofs stay under it: a glint, a lamp, a
// floodlight goes over), how much of it, and how each wider size weighs against the one inside it. `?bloom=` (checks).
const BLOOM_FROM = 2.4, GLARE_FALL = 0.7, GLARE_SUM = 1 + 0.7 + 0.49 + 0.343 + 0.2401;
const BLOOM = (() => {
  const q = typeof location === "undefined" ? null : new URLSearchParams(location.search).get("bloom");
  return q !== null && Number.isFinite(Number(q)) ? Number(q) : 0.3;
})() / GLARE_SUM;

export function createMacroDof(renderer: THREE.WebGLRenderer, phone: boolean) {
  const hdr = new THREE.WebGLRenderTarget(1, 1, {
    type: THREE.HalfFloatType, depthTexture: new THREE.DepthTexture(1, 1), samples: 0,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false,
  });
  const half = () => new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
  const down = half(), blur = half(), soft = half();
  const glare = [half(), half(), half(), half(), half()];      // the bloom's levels: 1/4 to 1/64 of the drawn frame
  const cocU = { uNear: { value: 0.05 }, uFar: { value: 40 }, uFocus: { value: 1 }, uCoc: { value: 0 } };
  const mk = (frag: string, uniforms: Record<string, THREE.IUniform>, extra: Partial<THREE.ShaderMaterialParameters> = {}) =>
    new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false, ...extra });
  const downMat = mk(DOWN, { tColor: { value: hdr.texture }, tDepth: { value: hdr.depthTexture }, uTexel: { value: new THREE.Vector2() }, ...cocU });
  const gatherMat = mk(GATHER, { tDown: { value: down.texture }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 0 } }, { defines: { SAMPLES: phone ? 30 : 52 } });
  const tentMat = mk(TENT, { tSrc: { value: blur.texture }, uTexel: { value: new THREE.Vector2() } });
  const brightMat = mk(BRIGHT, { tDown: { value: down.texture }, tSoft: { value: soft.texture }, uTexel: { value: new THREE.Vector2() }, uExposure: { value: 1 }, uThreshold: { value: BLOOM_FROM } });
  const shrinkMat = mk(SHRINK, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } });
  const growMat = mk(GROW, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uGain: { value: GLARE_FALL } },
    { blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor });
  const composeMat = mk(COMPOSE, {
    tColor: { value: hdr.texture }, tDepth: { value: hdr.depthTexture }, tBlur: { value: soft.texture }, uHalfTexel: { value: new THREE.Vector2() },
    uGrain: { value: 0 }, uTime: { value: 0 }, uShade: { value: 0 }, uAspect: { value: 1 }, uSize: { value: new THREE.Vector2(1, 1) }, ...cocU,
    tBloom: { value: glare[0].texture }, uBloomTexel: { value: new THREE.Vector2() }, uBloom: { value: 0 },
  });
  const scene = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const tri = new THREE.BufferGeometry();
  tri.setAttribute("position", new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const quad: THREE.Mesh = new THREE.Mesh(tri, composeMat);
  quad.frustumCulled = false;
  scene.add(quad);
  const run = (m: THREE.Material, rt: THREE.WebGLRenderTarget | null, add = false) => {
    quad.material = m; renderer.setRenderTarget(rt);
    const clear = renderer.autoClear;
    renderer.autoClear = !add;                             // (a level grown back up adds onto what is there)
    renderer.render(scene, cam);
    renderer.autoClear = clear;
  };
  const glareTexel = glare.map(() => new THREE.Vector2());
  let w = 1, h = 1, sw = 1;
  const v = new THREE.Vector3();

  return {
    /** The screen's size (device pixels) and the share of it the scene is drawn at (1, or 0.75 on a 2× screen). */
    setSize(width: number, height: number, scale = 1) {
      sw = Math.max(1, Math.round(width * scale));
      const sh = Math.max(1, Math.round(height * scale));
      w = width; h = height;
      hdr.setSize(sw, sh);
      down.setSize(Math.ceil(sw / 2), Math.ceil(sh / 2));
      blur.setSize(Math.ceil(sw / 2), Math.ceil(sh / 2));
      soft.setSize(Math.ceil(sw / 2), Math.ceil(sh / 2));
      glare.forEach((rt, i) => {
        rt.setSize(Math.max(1, Math.ceil(sw / (4 << i))), Math.max(1, Math.ceil(sh / (4 << i))));
        glareTexel[i].set(1 / rt.width, 1 / rt.height);
      });
      (brightMat.uniforms.uTexel.value as THREE.Vector2).set(1 / Math.ceil(sw / 2), 1 / Math.ceil(sh / 2));
      (composeMat.uniforms.uBloomTexel.value as THREE.Vector2).copy(glareTexel[0]);
      (tentMat.uniforms.uTexel.value as THREE.Vector2).set(1 / Math.ceil(sw / 2), 1 / Math.ceil(sh / 2));
      (downMat.uniforms.uTexel.value as THREE.Vector2).set(1 / sw, 1 / sh);
      (gatherMat.uniforms.uTexel.value as THREE.Vector2).set(1 / Math.ceil(sw / 2), 1 / Math.ceil(sh / 2));
      (composeMat.uniforms.uHalfTexel.value as THREE.Vector2).set(1 / Math.ceil(sw / 2), 1 / Math.ceil(sh / 2));
      (composeMat.uniforms.uSize.value as THREE.Vector2).set(sw, sh);
    },
    /**
     * The frame through the lens: `focus` the point in sharp focus (world), `amount` 0 (a pinhole) to 1 (the
     * opening's lens: a blur a fortieth of the frame's width at infinity).
     */
    render(world: THREE.Scene, camera: THREE.PerspectiveCamera, focus: THREE.Vector3, amount: number, time: number) {
      renderer.setRenderTarget(hdr);
      renderer.render(world, camera);
      v.copy(focus).applyMatrix4(camera.matrixWorldInverse);
      cocU.uNear.value = camera.near;
      cocU.uFar.value = camera.far;
      cocU.uFocus.value = Math.max(0.01, -v.z);
      const px = sw / 40 * amount;                         // drawn pixels at infinity (a 70 mm lens at f/8)
      cocU.uCoc.value = px;
      gatherMat.uniforms.uRadius.value = px / 2 * 1.3;
      composeMat.uniforms.uGrain.value = 0.022 * Math.min(1, amount * 1.5);
      composeMat.uniforms.uTime.value = time;
      composeMat.uniforms.uShade.value = Math.min(1, amount * 1.2);
      composeMat.uniforms.uAspect.value = w / h;
      composeMat.uniforms.uBloom.value = BLOOM * Math.min(1, amount * 8);
      run(downMat, down);
      run(gatherMat, blur);
      run(tentMat, soft);
      brightMat.uniforms.uExposure.value = renderer.toneMappingExposure;
      run(brightMat, glare[0]);
      for (let i = 1; i < glare.length; i++) {
        shrinkMat.uniforms.tSrc.value = glare[i - 1].texture;
        shrinkMat.uniforms.uTexel.value = glareTexel[i - 1];
        run(shrinkMat, glare[i]);
      }
      for (let i = glare.length - 2; i >= 0; i--) {
        growMat.uniforms.tSrc.value = glare[i + 1].texture;
        growMat.uniforms.uTexel.value = glareTexel[i + 1];
        run(growMat, glare[i], true);
      }
      run(composeMat, null);
    },
    /** Compiles the lens's own passes now, each as it is drawn (into its target, the last to the screen). */
    warm() {
      const was = renderer.getRenderTarget(), ready: Promise<void>[] = [];
      const passes: [THREE.Material, THREE.WebGLRenderTarget | null][] = [
        [downMat, down], [gatherMat, blur], [tentMat, soft], [brightMat, glare[0]], [shrinkMat, glare[1]], [growMat, glare[0]], [composeMat, null],
      ];
      try {
        for (const [m, rt] of passes) { quad.material = m; renderer.setRenderTarget(rt); ready.push(warmUp(renderer, scene, cam)); }
      } finally { quad.material = composeMat; renderer.setRenderTarget(was); }
      return Promise.all(ready);
    },
    /** Runs `compile` with the lens's own target bound: what the world draws into it compiles to its own shaders. */
    within(compile: () => void) {
      const was = renderer.getRenderTarget();
      renderer.setRenderTarget(hdr);
      try { compile(); } finally { renderer.setRenderTarget(was); }
    },
    dispose() {
      hdr.depthTexture?.dispose(); hdr.dispose(); down.dispose(); blur.dispose(); soft.dispose(); glare.forEach(rt => rt.dispose());
      downMat.dispose(); gatherMat.dispose(); tentMat.dispose(); brightMat.dispose(); shrinkMat.dispose(); growMat.dispose(); composeMat.dispose(); tri.dispose();
    },
  };
}
