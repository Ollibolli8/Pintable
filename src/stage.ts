import * as THREE from "three";
import { createPinTable, GRID, RISE } from "./engine/table";
import { createMacroDof } from "./engine/lens";
import { warmUp } from "./engine/warm";
import { PLACES } from "./engine/places";
import type { Light } from "./engine/sky";
import { describe, setWeather, weatherSource } from "./engine/weather";

/**
 * Pintable's stage: the pin table (engine/table.ts) on its own, set in a polished steel ring on a black stand in a dark
 * room, seen through the macro lens (engine/lens.ts). The visitor turns the camera round it, takes it in close to the
 * roofs, and presses the pins by hand; the page sets the moment (the sun or the moon over Copenhagen then) and the sky.
 *
 * Hands: on the table a pointer presses (a mouse resting over it is a fingertip held over the roofs, which the tall ones
 * dip under); off the table, or with the right button, or with two fingers, it turns the camera. The wheel or a pinch
 * goes closer, towards the point under the pointer; a double click takes the camera to that point.
 */

const EXPOSURE = 0.3;                                      // as the opening: the table's light is set against it
const NUDGE_M = 1.75, LIFT_M = 6;                          // city metres a landmark stands up: pointed at, chosen
const DEG = Math.PI / 180;

export type News = {
  risen: number; arriving: boolean; light: Light; at: Date; weather: string; source: "met" | "set" | null;
  under: number | null;
};

export type StageOptions = {
  canvas: HTMLCanvasElement;
  /** The heights and the landmarks' outlines (engine/table.ts). */
  city: string; marks: string;
  phone: boolean;
  pixelRatio: number;
  still: boolean;
  /** The moment whose light the table starts in (now, unless the page sets one). */
  at: Date;
  onReady: () => void;
  onFail: (e?: unknown) => void;
  onFrame?: (now: number, target: number) => void;
  /** What the readout says: called when it changes. */
  onNews: (n: News) => void;
  /** The name over a landmark: which (its place in PLACES), where on the canvas (CSS px), or null for none. */
  onLabel: (i: number | null, x: number, y: number) => void;
  /** The part of the frame the whole table fits in, clear of the type (NDC, for a canvas w × h CSS px). */
  region?: (w: number, h: number) => Region;
  /** Where the table first shows (its centre and width, CSS px), for the page's loading ring. */
  onFit?: (x: number, y: number, d: number) => void;
};
export type Region = { x0: number; x1: number; y0: number; y1: number };

export function createStage(o: StageOptions) {
  const { canvas, phone } = o;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(o.pixelRatio);
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.toneMappingExposure = EXPOSURE;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x030304, 1);

  let alive = true, raf = 0, still = o.still, ready = false, last = 0, drawnAt = 0, clock = 0;
  const invalidate = () => { if (!raf && alive) raf = requestAnimationFrame(frame); };
  const fail = (e?: unknown) => { if (!alive) return; alive = false; cancelAnimationFrame(raf); o.onFail(e); };

  const made = createPinTable({ renderer, top: 0, phone, at: o.at, city: o.city, marks: o.marks, invalidate, onFail: fail });
  if (!made) { renderer.dispose(); throw new Error("pintable: no float render targets"); }
  const table = made;
  const lens = createMacroDof(renderer, phone);
  const scene = new THREE.Scene();
  scene.add(table.mesh);
  const camera = new THREE.PerspectiveCamera(phone ? 30 : 24, 1, 0.02, 20);
  const n = GRID.n, R = GRID.pocket, PIN = GRID.n / 512;  // (places and press sizes are in 512ths of the table)

  // ------------------------------------------------------------------------------------------ the set
  // The look frame's table: a thin polished ring round the pins, a black anodised body under it, a stem into the dark.
  // The room it stands in is the one the pins mirror (engine/table.ts: a long soft box low beyond the table to the
  // north-west, a dim one overhead), in the table's own frame, so ring and pins catch the same light.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = (() => {
    const sc = new THREE.Scene();
    const lin = (r: number, g: number, b: number) => new THREE.Color().setRGB(r, g, b, THREE.LinearSRGBColorSpace);
    const box = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 8), new THREE.MeshBasicMaterial({ color: lin(0.004, 0.0042, 0.0046), side: THREE.BackSide }));
    sc.add(box);
    const panel = (w: number, h: number, pos: [number, number, number], c: THREE.Color) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
      m.position.set(...pos);
      m.lookAt(0, 0.05, 0);
      sc.add(m);
    };
    panel(2.6, 0.5, [-1.3, 0.75, -1.6], lin(2.3, 2.25, 2.15));
    panel(1.4, 1.4, [0.3, 1.8, 0.4], lin(0.7, 0.7, 0.72));
    const rt = pmrem.fromScene(sc, 0, 0.01, 20);
    sc.traverse(m => { const mesh = m as THREE.Mesh; mesh.geometry?.dispose(); (mesh.material as THREE.Material | undefined)?.dispose(); });
    return rt;
  })();
  scene.environment = room.texture;
  scene.environmentRotation.y = table.mesh.rotation.y;
  scene.environmentIntensity = 1;

  const R1 = R + 0.0085;                                   // the ring's outer edge (m)
  const ringProfile: THREE.Vector2[] = [new THREE.Vector2(R, -0.006), new THREE.Vector2(R, -0.0006), new THREE.Vector2(R + 0.0005, -0.00005), new THREE.Vector2(R + 0.0009, 0)];
  for (let i = 0; i <= 10; i++) {                          // the top, then its outer edge rounded over (r 2.4 mm)
    const a = (i / 10) * Math.PI / 2;
    ringProfile.push(new THREE.Vector2(R1 - 0.0024 + Math.sin(a) * 0.0024, -0.0024 + Math.cos(a) * 0.0024));
  }
  ringProfile.push(new THREE.Vector2(R1, -0.0075), new THREE.Vector2(R1 - 0.0008, -0.0083));
  const ringGeo = new THREE.LatheGeometry(ringProfile, 192);
  const steel = new THREE.MeshPhysicalMaterial({ color: 0xd9dadc, metalness: 1, roughness: 0.16, clearcoat: 0.4, clearcoatRoughness: 0.08 });
  const ring = new THREE.Mesh(ringGeo, steel);
  const bodyGeo = new THREE.LatheGeometry([
    new THREE.Vector2(0, -0.054), new THREE.Vector2(R1 - 0.004, -0.054), new THREE.Vector2(R1 - 0.0008, -0.0505),
    new THREE.Vector2(R1 - 0.0008, -0.0083), new THREE.Vector2(R, -0.0083),
  ], 192);
  const black = new THREE.MeshPhysicalMaterial({ color: 0x0a0a0b, metalness: 0.55, roughness: 0.4, clearcoat: 0.25, clearcoatRoughness: 0.35 });
  const body = new THREE.Mesh(bodyGeo, black);
  const stemGeo = new THREE.CylinderGeometry(0.022, 0.026, 1.6, 64, 1, true);
  stemGeo.translate(0, -0.054 - 0.8, 0);
  const matte = new THREE.MeshStandardMaterial({ color: 0x070708, metalness: 0.2, roughness: 0.7 });
  const stem = new THREE.Mesh(stemGeo, matte);
  scene.add(ring, body, stem);
  // The sun (or the moon) on the ring: a light along the table's own, as bright as the pins have it.
  const sun = new THREE.DirectionalLight(0xffffff, 0);
  scene.add(sun, sun.target);
  // Every shader the table's first frame draws compiles ahead, in the background where the browser can (engine/warm.ts),
  // with the sun in (the light count is part of each program): the pins, ring, body and stem as drawn into the lens's
  // own target, the lens's passes into theirs. On a first visit nothing is cached and the first frame compiled them
  // (some 30 ms on his Mac). The table shows once they are ready; a compile that never reports in is given 4 s.
  let warm = false;
  setTimeout(() => {                                       // (in a task of its own: where nothing compiles in parallel, it is this one)
    if (!alive) return;
    let world: Promise<void> = Promise.resolve();
    lens.within(() => { world = warmUp(renderer, scene, camera); });
    void Promise.race([Promise.all([world, lens.warm()]), new Promise(r => setTimeout(r, 4000))]).then(() => { warm = true; invalidate(); });
  }, 0);

  // ------------------------------------------------------------------------------------------ the camera
  // Where it looks from: a compass bearing (from the target out to the camera), the elevation, the distance (m), and the
  // target on the grid (pins). `want` is where the hands put it, `at` where it is (eased towards it).
  const centre = n / 2;
  type View = { b: number; el: number; dist: number; gx: number; gz: number };
  // The whole table fits the region the page leaves it (its width, and its depth as seen from the view's height), the
  // frame's centre moved to the region's.
  let region: Region = { x0: -1, x1: 1, y0: -1, y1: 1 };
  const fitDist = () => {
    const tv = Math.tan(camera.fov * DEG / 2), th = tv * camera.aspect;
    const dW = (R * (camera.aspect < 0.8 ? 1.14 : 1.08)) / (th * (region.x1 - region.x0) / 2);
    const dH = (R * (Math.sin(31 * DEG) * 1.08 + 0.2)) / (tv * (region.y1 - region.y0) / 2);
    return Math.min(Math.max(dW, dH), 4.2);
  };
  const MIN_DIST = 0.09;
  const want: View = { b: 148, el: 31, dist: 1, gx: centre, gz: centre };
  const at: View = { ...want };
  let wide = 1;                                            // the whole table's distance, for the frame's size
  const dirOf = (b: number, el: number, out: THREE.Vector3) =>
    out.set(Math.sin(b * DEG) * Math.cos(el * DEG), Math.sin(el * DEG), -Math.cos(b * DEG) * Math.cos(el * DEG)).applyAxisAngle(UP, table.mesh.rotation.y);
  const UP = new THREE.Vector3(0, 1, 0), tgt = new THREE.Vector3(), dir = new THREE.Vector3(), focus = new THREE.Vector3();
  const lensP = new THREE.Vector3();
  let lensOff = 0;                                          // (m the focus is pulled off the target, on a landmark)
  const minEl = (dist: number) => THREE.MathUtils.lerp(3, 12, THREE.MathUtils.smoothstep(Math.log(dist), Math.log(0.18), Math.log(0.6)));
  function clampView(v: View) {
    v.dist = THREE.MathUtils.clamp(v.dist, MIN_DIST, wide * 1.2);
    v.el = THREE.MathUtils.clamp(v.el, minEl(v.dist), 82);
    // the target stays on the table, nearer its middle the further out the camera is
    const reach = (n / 2) * 0.92 * (1 - THREE.MathUtils.smoothstep(v.dist, wide * 0.45, wide * 0.95));
    const dx = v.gx - centre, dz = v.gz - centre, d = Math.hypot(dx, dz);
    if (d > reach) { v.gx = centre + (dx / d) * reach; v.gz = centre + (dz / d) * reach; }
  }
  // The arrival: high over the plan as the city starts to rise, coming down to the view as the last pins settle.
  const ARRIVE = { el: 74, dist: 1.25 };

  function placeCamera(dt: number) {
    const k = still ? 1 : 1 - Math.exp(-dt * 7);
    let db = want.b - at.b;
    db -= 360 * Math.round(db / 360);
    at.b += db * k;
    at.el += (want.el - at.el) * k;
    at.dist = Math.exp(Math.log(at.dist) + (Math.log(want.dist) - Math.log(at.dist)) * k);
    at.gx += (want.gx - at.gx) * k;
    at.gz += (want.gz - at.gz) * k;
    const moving = Math.abs(db) > 0.01 || Math.abs(want.el - at.el) > 0.01 || Math.abs(want.dist / at.dist - 1) > 0.0005 || Math.hypot(want.gx - at.gx, want.gz - at.gz) > 0.02;
    if (!moving) Object.assign(at, want);
    let { b, el, dist } = at;
    if (arriving && !handled) {
      const t = table.intro, p = t < 0 ? 0 : Math.min(1, t / (RISE - 0.4)), s = p * p * p * (p * (p * 6 - 15) + 10);
      el = THREE.MathUtils.lerp(ARRIVE.el, el, s);
      dist = Math.exp(THREE.MathUtils.lerp(Math.log(ARRIVE.dist * wide), Math.log(dist), s));
      b = b - 40 * (1 - s);
    }
    table.gridToWorld(at.gx, 0, at.gz, tgt);
    camera.position.copy(tgt).addScaledVector(dirOf(b, el, dir), dist);
    camera.lookAt(tgt);
    camera.near = dist < 0.5 ? 0.003 : 0.02;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    // the lens focuses on the target, at the roofs' height round it once close
    const h = dist < 0.6 ? table.heightAt(at.gx, at.gz) * Math.min(1, (0.6 - dist) / 0.3) : 0;
    table.gridToWorld(at.gx, Math.max(0, h) * 0.6, at.gz, focus);
    // on a chosen landmark, on the whole of it, from its nearest roof to its furthest foot: where the two blur alike
    // (the lens blurs what lies behind the focus at 0.6 of its rate in front: engine/lens.ts), pulled to, not cut
    const depth = (p: THREE.Vector3) => -p.applyMatrix4(camera.matrixWorldInverse).z;
    const aimed = depth(lensP.copy(focus)), m = chosen === null ? null : table.landmark(chosen);
    let off = 0;
    if (m?.hull) {
      let near = Infinity, far = 0;
      for (let i = 0; i < m.hull.length; i += 3) {
        near = Math.min(near, depth(table.gridToWorld(m.hull[i], m.hull[i + 2] + liftPins(), m.hull[i + 1], lensP)));
        far = Math.max(far, depth(table.gridToWorld(m.hull[i], 0, m.hull[i + 1], lensP)));
      }
      if (near > 0 && far > near) off = 1.6 / (1 / near + 0.6 / far) - aimed;
    }
    lensOff = still ? off : lensOff + (off - lensOff) * (1 - Math.exp(-dt * 4));
    if (Math.abs(lensOff) > 1e-5) focus.set(0, 0, -(aimed + lensOff)).applyMatrix4(camera.matrixWorld);
    return moving || Math.abs(off - lensOff) > 1e-4;
  }
  // The lens: a little blur seen whole, the opening's macro close in.
  const lensAmount = (dist: number) => THREE.MathUtils.lerp(0.95, 0.12, THREE.MathUtils.smoothstep(Math.log(dist), Math.log(0.28), Math.log(wide)));

  // ------------------------------------------------------------------------------------------ hands
  const ndc = new THREE.Vector2(), ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hitP = new THREE.Vector3();
  const grid = new THREE.Vector3();
  let width = 1, height = 1;
  const toNdc = (x: number, y: number, out = ndc) => out.set((x / width) * 2 - 1, -((y / height) * 2 - 1));
  /** Where a canvas point (CSS px) meets the table's top: grid x, z, or null off the table. */
  function onTable(x: number, y: number) {
    ray.setFromCamera(toNdc(x, y, new THREE.Vector2()), camera);
    if (!ray.ray.intersectPlane(plane, hitP)) return null;
    if (Math.hypot(hitP.x - table.mesh.position.x, hitP.z - table.mesh.position.z) > R) return null;
    table.worldToGrid(hitP, grid);
    return { x: grid.x, z: grid.z };
  }
  // (beside: a finger that came down off the table; alone it only turns the table sideways, as an up or down swipe there
  // scrolls the page)
  type Hand = { mode: "press" | "turn"; x: number; y: number; id: number; beside: boolean };
  const hands = new Map<number, Hand>();
  let hover: { x: number; y: number } | null = null, fine = false, handled = false, arriving = false;
  let pinch: { d: number; a: number; dist: number; b: number } | null = null;
  const rect = () => canvas.getBoundingClientRect();
  function touched() {
    if (!handled) { handled = true; if (arriving) { Object.assign(at, cameraNow()); table.rush(); } }
  }
  // (the camera as it stands mid-arrival, so taking hold of it doesn't jump)
  function cameraNow(): View {
    const p = camera.position.clone().sub(tgt), dist = p.length();
    const el = Math.asin(THREE.MathUtils.clamp(p.y / dist, -1, 1)) / DEG;
    p.applyAxisAngle(UP, -table.mesh.rotation.y);
    const b = Math.atan2(p.x, -p.z) / DEG;
    const v = { ...at, b, el, dist };
    Object.assign(want, { b, el, dist });
    return v;
  }

  function down(e: PointerEvent) {
    if (!ready) return;
    const r = rect(), x = e.clientX - r.left, y = e.clientY - r.top;
    fine = e.pointerType === "mouse";
    touched();
    canvas.setPointerCapture(e.pointerId);
    const off = !onTable(x, y);
    const turn = e.button === 2 || e.ctrlKey || e.altKey || hands.size > 0 || still || off;
    // a second finger: both turn and pinch (a press under way lets go)
    if (hands.size > 0) for (const h of hands.values()) h.mode = "turn";
    hands.set(e.pointerId, { mode: turn ? "turn" : "press", x, y, id: e.pointerId, beside: off && e.pointerType === "touch" });
    if (hands.size === 2) startPinch();
    invalidate();
  }
  function startPinch() {
    const [a, b] = [...hands.values()];
    pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), a: Math.atan2(b.y - a.y, b.x - a.x), dist: want.dist, b: want.b };
  }
  function move(e: PointerEvent) {
    const r = rect(), x = e.clientX - r.left, y = e.clientY - r.top;
    const h = hands.get(e.pointerId);
    if (!h) {
      if (e.pointerType === "mouse") { hover = { x, y }; fine = true; invalidate(); }
      return;
    }
    const dx = x - h.x, dy = y - h.y;
    h.x = x; h.y = y;
    if (hands.size === 2 && pinch) {
      const [a, b] = [...hands.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), ang = Math.atan2(b.y - a.y, b.x - a.x);
      const f = pinch.d / Math.max(d, 1);
      zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, (pinch.dist * f) / want.dist);
      want.b = pinch.b + (ang - pinch.a) / DEG;
      clampView(want);
    } else if (h.mode === "turn") {
      want.b -= dx * 0.28;
      if (!h.beside) want.el += dy * 0.2;
      clampView(want);
    }
    invalidate();
  }
  function up(e: PointerEvent) {
    hands.delete(e.pointerId);
    if (hands.size < 2) pinch = null;
    if (e.pointerType !== "mouse") hover = null;
    invalidate();
  }
  function leave(e: PointerEvent) { if (e.pointerType === "mouse" && !hands.size) { hover = null; invalidate(); } }
  /** Goes `f` times as far (under 1: closer), towards the point under (x, y) as a map does. */
  function zoomAt(x: number, y: number, f: number) {
    const before = want.dist;
    want.dist *= f;
    clampView(want);
    const g = want.dist / before;
    const p = onTable(x, y);
    if (p && g < 1) { want.gx += (p.x - want.gx) * (1 - g); want.gz += (p.z - want.gz) * (1 - g); }
    else if (g > 1) {                                       // going out, the view comes back towards the middle
      const k = Math.min(1, (g - 1) * 1.6);
      want.gx += (centre - want.gx) * k * THREE.MathUtils.smoothstep(want.dist, wide * 0.35, wide * 0.9);
      want.gz += (centre - want.gz) * k * THREE.MathUtils.smoothstep(want.dist, wide * 0.35, wide * 0.9);
    }
    clampView(want);
  }
  function wheel(e: WheelEvent) {
    if (!ready) return;
    e.preventDefault();
    touched();
    const r = rect(), x = e.clientX - r.left, y = e.clientY - r.top;
    const px = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? height : 1;
    // a trackpad's sideways swipe turns; up and down (or a pinch: ctrlKey) goes in and out
    if (!e.ctrlKey && Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.2) { want.b -= e.deltaX * px * 0.12; clampView(want); }
    else zoomAt(x, y, Math.exp(e.deltaY * px * (e.ctrlKey ? 0.01 : 0.0016)));
    invalidate();
  }
  function dblclick(e: MouseEvent) {
    if (!ready) return;
    const r = rect(), p = onTable(e.clientX - r.left, e.clientY - r.top);
    if (!p) return;
    touched();
    want.gx = p.x; want.gz = p.z;
    want.dist = Math.min(want.dist, 0.3);
    clampView(want);
    invalidate();
  }
  const menu = (e: Event) => e.preventDefault();
  // On a touch screen the canvas is `touch-action: pan-y`, so the page still scrolls under a finger: on a phone the table
  // fills the first screen and the page goes on below it. A finger that comes down on the table holds it (it presses
  // the pins), and so do two fingers (they turn and pinch); one beside the table scrolls the page up or down.
  let held = false;
  function touchStart(e: TouchEvent) {
    if (!ready) return;
    const t = e.touches, r = rect();
    held = t.length > 1 || !!onTable(t[0].clientX - r.left, t[0].clientY - r.top);
    if (held) e.preventDefault();
  }
  const touchMove = (e: TouchEvent) => { if ((held || e.touches.length > 1) && e.cancelable) e.preventDefault(); };
  canvas.addEventListener("touchstart", touchStart, { passive: false });
  canvas.addEventListener("touchmove", touchMove, { passive: false });
  canvas.addEventListener("pointerdown", down);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", up);
  canvas.addEventListener("pointercancel", up);
  canvas.addEventListener("pointerleave", leave);
  canvas.addEventListener("wheel", wheel, { passive: false });
  canvas.addEventListener("dblclick", dblclick);
  canvas.addEventListener("contextmenu", menu);
  const lost = (e: Event) => { e.preventDefault(); fail(new Error("WebGL context lost")); };
  canvas.addEventListener("webglcontextlost", lost);

  // ------------------------------------------------------------------------------------------ the landmarks
  // One name at a time: the landmark the mouse rests on, or the one chosen (it stands up, the camera goes to it).
  let chosen: number | null = null, nudged: number | null = null;
  const nudgePins = () => NUDGE_M / GRID.cityM, liftPins = () => LIFT_M / GRID.cityM;
  function setLift(i: number | null) {
    const pick = chosen ?? i;
    if (pick === nudged) return;
    nudged = pick;
    table.lift(pick, pick === null ? 0 : pick === chosen ? liftPins() : nudgePins());
  }
  const lp = new THREE.Vector3();
  function placeLabel() {
    const i = chosen ?? table.under;
    if (i === null || !PLACES[i]?.fact || !table.landmark(i)) { o.onLabel(null, 0, 0); return; }
    const m = table.landmark(i)!;
    table.gridToWorld(m.x, m.top + (i === chosen ? liftPins() : nudgePins()) + 3 * PIN, m.z, lp);
    lp.project(camera);
    if (lp.z > 1 || Math.abs(lp.x) > 1.05 || Math.abs(lp.y) > 1.05) { o.onLabel(null, 0, 0); return; }
    o.onLabel(i, (lp.x * 0.5 + 0.5) * width, (0.5 - lp.y * 0.5) * height);
  }

  // ------------------------------------------------------------------------------------------ the frame
  let hours = 0, news = "";
  const frameNdc = new THREE.Vector2();
  function update(dt: number, now: number) {
    if (table.ready && warm && !ready) {
      ready = true;
      o.onReady();
    }
    if (ready && table.intro < 0) table.arrive();          // (with motion off the city stands at once)
    arriving = table.arriving && !still;
    const cam = placeCamera(dt);
    // the hand on the table
    const press = [...hands.values()].find(h => h.mode === "press");
    let over = false;
    if (still || !ready) table.pointer(null, camera, null);
    else if (press) over = table.pointer(toNdc(press.x, press.y, frameNdc), camera, "press");
    else if (hover && fine && !hands.size) over = table.pointer(toNdc(hover.x, hover.y, frameNdc), camera, "hover");
    else table.pointer(null, camera, null);
    if (ready && (still || !arriving)) setLift(over && !press ? table.under : null);
    canvas.style.cursor = hands.size ? (press ? "grabbing" : "move") : over ? "pointer" : "grab";
    const moving = table.update({ now, dt, camera, sink: 0, lit: 1, room: 0.35, still, height, hours, blur: lens.blur });
    // the sun (or the moon) on the ring, from where the table has it
    const l = table.light;
    dirOf(l.az - 2.95, Math.max(l.el, 1.5), sun.position);
    sun.position.multiplyScalar(3);
    const e = (l.color[0] + l.color[1] + l.color[2]) / 3;
    sun.color.setRGB(l.color[0] / Math.max(e, 1e-3), l.color[1] / Math.max(e, 1e-3), l.color[2] / Math.max(e, 1e-3), THREE.LinearSRGBColorSpace);
    sun.intensity = e * 0.9 * (1 - 0.8 * (table.weather.cloud > 0.85 ? 1 : 0));
    const risen = table.risen;
    placeLabel();
    // the readout
    const w = table.weather, when = table.lightTime;
    const key = `${Math.round(risen / 997)}|${arriving}|${l.kind}${l.az.toFixed(0)}/${l.el.toFixed(0)}|${Math.floor(when.valueOf() / 60000)}|${describe(w)}|${weatherSource()}|${table.under}`;
    if (key !== news) {
      news = key;
      o.onNews({ risen, arriving, light: l, at: when, weather: describe(w), source: weatherSource(), under: table.under });
    }
    return moving || cam || arriving || hands.size > 0;
  }

  function frame(now: number) {
    raf = 0;
    if (!alive) return;
    // at most 60 fps, on a 16.7 ms grid (a refresh that comes a little early still draws)
    const gap = now - last;
    if (last && gap < 1000 / 60 - 3) { raf = requestAnimationFrame(frame); return; }
    const dt = last ? Math.min(0.05, (now - drawnAt) / 1000) : 1 / 60;
    last = last && gap < 1000 / 30 ? last + 1000 / 60 : now;
    drawnAt = now;
    if (!still) clock += dt;
    const moving = update(dt, now);
    if (ready) lens.render(scene, camera, focus, lensAmount(at.dist), clock);
    else { renderer.setRenderTarget(null); renderer.clear(); }
    o.onFrame?.(now, 1000 / 60);
    // (the table asks for a frame itself while the pointer is over it: one already asked for this frame is the next)
    if (moving || !ready) { if (!raf) raf = requestAnimationFrame(frame); }
    else last = 0;
  }

  function resize() {
    const w = Math.max(1, canvas.clientWidth), h = Math.max(1, canvas.clientHeight);
    width = w; height = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w < 700 ? 30 : 24;
    region = o.region?.(w, h) ?? { x0: -1, x1: 1, y0: -1, y1: 1 };
    camera.setViewOffset(w, h, (-(region.x0 + region.x1) / 2) * (w / 2), ((region.y0 + region.y1) / 2) * (h / 2), w, h);
    camera.updateProjectionMatrix();
    const before = wide;
    wide = fitDist();
    // the view keeps its place in the frame: as far out, in the table's size
    if (before !== wide && ready) { want.dist *= wide / before; at.dist *= wide / before; }
    clampView(want);
    const tv = Math.tan(camera.fov * DEG / 2), arrive = still ? want.dist : ARRIVE.dist * wide;
    o.onFit?.(((region.x0 + region.x1) / 2 + 1) / 2 * w, (1 - (region.y0 + region.y1) / 2) / 2 * h, (R / (arrive * tv)) * h);
    const dpr = renderer.getPixelRatio();
    lens.setSize(Math.round(w * dpr), Math.round(h * dpr), Math.min(1, 1.5 / dpr));
    invalidate();
  }
  wide = 1;
  resize();
  want.dist = wide;
  Object.assign(at, want);
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  invalidate();

  return {
    get ready() { return ready; },
    get places() { return PLACES; },
    /** The moment the table is lit for. */
    setMoment(t: Date) { hours = (t.valueOf() - o.at.valueOf()) / 3600e3; invalidate(); },
    /** The sky: one of the weather's names (clear, rain, storm…), or null for the forecast. */
    setSky(name: string | null) { setWeather(name); table.relight(); invalidate(); },
    /** Chooses a landmark (its place in PLACES; null for none): it stands up and the camera goes to it. */
    choose(i: number | null) {
      touched();
      chosen = i;
      const m = i === null ? null : table.landmark(i);
      if (m) {
        want.gx = m.x; want.gz = m.z;
        want.dist = Math.min(want.dist, THREE.MathUtils.clamp(m.reach * GRID.pitch * 7, 0.28, 0.6));
        want.el = Math.max(want.el, 24);
        clampView(want);
      }
      nudged = -1;
      setLift(null);
      invalidate();
    },
    /** The whole table again. */
    home() { touched(); chosen = null; nudged = -1; setLift(null); Object.assign(want, { b: want.b, el: 31, dist: wide, gx: centre, gz: centre }); invalidate(); },
    /** Arrow keys and +/-: turn, tilt, go in and out. Returns whether the key was used. */
    key(k: string) {
      if (!ready) return false;
      const d = k === "ArrowLeft" ? [-8, 0, 1] : k === "ArrowRight" ? [8, 0, 1] : k === "ArrowUp" ? [0, 5, 1] : k === "ArrowDown" ? [0, -5, 1]
        : k === "+" || k === "=" ? [0, 0, 0.8] : k === "-" || k === "_" ? [0, 0, 1.25] : null;
      if (!d) return false;
      touched();
      want.b += d[0]; want.el += d[1]; want.dist *= d[2];
      clampView(want);
      invalidate();
      return true;
    },
    setStill(s: boolean) { still = s; if (s) hands.clear(); invalidate(); },
    setPixelRatio(dpr: number) { renderer.setPixelRatio(dpr); resize(); },
    /** The type moved (its fonts came in): fit the table to the frame again. */
    refit() { resize(); },
    dispose() {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("touchstart", touchStart);
      canvas.removeEventListener("touchmove", touchMove);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      canvas.removeEventListener("pointerleave", leave);
      canvas.removeEventListener("wheel", wheel);
      canvas.removeEventListener("dblclick", dblclick);
      canvas.removeEventListener("contextmenu", menu);
      canvas.removeEventListener("webglcontextlost", lost);
      table.dispose(); lens.dispose(); room.dispose(); pmrem.dispose();
      ringGeo.dispose(); bodyGeo.dispose(); stemGeo.dispose(); steel.dispose(); black.dispose(); matte.dispose();
      renderer.dispose();
      renderer.forceContextLoss();    // dispose() keeps the context until the canvas is collected
    },
  };
}

export type Stage = ReturnType<typeof createStage>;
