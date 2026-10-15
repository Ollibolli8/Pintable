import * as THREE from "three";
import { lightAt, type Light } from "./sky";
import { loadWeather, weatherAt, type Weather } from "./weather";
import { CITY_AZ, PINS_COUNT, PINS_FINE, PINS_RADIUS, PLACES } from "./places";
import { BOATS, BOAT_SIZE, placeBoats } from "./boats";
import { warmUp } from "./warm";

/**
 * The opening: Copenhagen's inner harbour as a table of steel pins set into the plinth's top, one pin for every 1.25 m
 * of the city (Københavns Kommune's 3D model, CC BY; the water from OpenStreetMap, ODbL), 823,592 of them, raised to
 * the buildings' heights at 1:2,246 (`?pins=coarse`: the first table, a pin for every 2.5 m, 205,892 of them). The
 * land's pins are satin, the water's polished. Lit by the sun as it stands over Copenhagen at a moment (now, or as
 * many hours on as the scroll has run), the moon after dark; pressed by the pointer or a finger.
 *
 * Nothing is a mesh of pins. One shader traces a ray per pixel through the heights (case-production/opening/heights.py
 * makes them: public/opening/city-fine.png), stepping over whole blocks of the city at once: each texel of the tracing
 * texture holds its pin's height and the tallest pin of its 4, 16 and 64 block, so the ray drops a level only where it
 * could hit something. The light's shadows come from a second texture, the height above which each pin sees the light,
 * built in eleven doubling passes along the light. A press runs a small simulation on the GPU: each land pin springs back
 * to its height and pulls at its neighbours, so a dent rings out across the roofs; the harbour's pins carry a wave,
 * held in by the quays, so a touch on the water runs on down the canals. The water traces a second ray, so the
 * harbour mirrors the palace (desktop). Boats go round the canals and up and down the harbour, raised out of the
 * water's pins as they pass, leaving their wakes in its wave. After dark the city lights up: lamps along its streets
 * and quays, their light on the ground round them, windows along its facades, the boats' cabins and running lights,
 * and the landmarks floodlit from below (each named building's pins, from OpenStreetMap: public/opening/landmarks.png).
 * A landmark whose name is pointed at or clicked stands up out of the table, all its pins together.
 *
 * Grid space: one unit 2.5 m of the city (the first table's pin; the fine table has two pins a unit each way), x east,
 * z south (row 0 is the north edge), y up from the plinth's top; the places and the boats
 * are all in it. The textures have RES texels a unit (one a pin). The table turns so the hero's camera looks across the
 * harbour from the north-east at Slotsholmen, as in the look frame chosen for it.
 */
const N = 512;                                             // units across the table
const PITCH = PINS_RADIUS / (N / 2);                       // m a unit: 1.113 mm
const WELL = N / 2 + 1.5;                                  // the pocket's radius, units (a 1.7 mm gap round the pins)
const FLOOR = -6;                                          // the pocket's floor, units
const TOP = 58;                                            // the tracing volume's top, units (the tower is 38.7)
const CITY_M = 2.5;                                        // city metres a unit
const WATER = -1;                                          // the harbour sits 2.5 m below the quays
export const RISE = 4.0;                                   // the arrival: seconds of the rise, the last pin settled
/** The grid (pins across), a pin in city metres and in metres, and the pocket's radius (m): for the page round the table. */
export const GRID = { n: N, cityM: CITY_M, pitch: PITCH, pocket: WELL * PITCH };
const SLOW = 3.0;                                          // shown in slow motion: real seconds to one of the rise (12 s)
const BOAT_DIP = 0.35;                                     // how far a hull holds the water under it down, units
// The tracer's steps a ray: enough to cross the table at the hero's low angles (`?pins-debug=6` shows rays out of steps
// in red). The fine table's blocks are half as wide, so a ray takes more of them.
const STEPS_AT = (phone: boolean, res: number) => Math.round((phone ? 88 : 132) * (res > 1 ? 1.4 : 1));


const PASS_VERT = /* glsl */ `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`;
// A texel's middle in grid units (RES texels a unit, NT across: the materials' defines).
const GRID_GLSL = /* glsl */ `
vec2 mid(ivec2 c) { return (vec2(c) + 0.5) / RES; }`;

// The boats (boats.ts): where a point of the water is under a hull. Each hull a long box drawn to a rounded point over
// its front part, its cabin a step up from the deck between a short foredeck and a shorter stern. Returns how much of
// the pin there the nearest hull covers (0 to 1; at the table's rim a hull sinks into it) and, through out, its height
// over the water there, which boat it is, where the point is on it (along it, the bow ahead; across, port positive) and
// how far outside the hull it is (units; not an exact distance, enough for a pin's share and a glow).
const BOATS_GLSL = /* glsl */ `
#define BOATS ${BOATS}
uniform vec4 uBoat[BOATS]; uniform vec4 uBoatSize[BOATS]; uniform float uBoatOn;
float cabinAt(vec2 l, vec4 z) { return smoothstep(-z.x * 0.85, -z.x * 0.7, l.x) * (1.0 - smoothstep(z.x * 0.3, z.x * 0.45, l.x)); }
float boatAt(vec2 q, out float top, out int which, out vec2 l, out float sd) {
  float best = 0.0; top = 0.0; which = -1; l = vec2(0.0); sd = 1e4;
  if (uBoatOn <= 0.0) return 0.0;
  for (int i = 0; i < BOATS; i++) {
    vec4 b = uBoat[i], z = uBoatSize[i];
    vec2 d = q - b.xy;
    if (dot(d, d) > (z.x + 6.0) * (z.x + 6.0)) continue;
    vec2 m = vec2(dot(d, b.zw), dot(d, vec2(b.w, -b.z)));
    float f = clamp((m.x - z.x * 0.3) / (z.x * 0.7), 0.0, 1.0);
    float s = max(abs(m.x) - z.x, abs(m.y) - z.y * sqrt(max(1.0 - f * f, 0.0)));
    if (s < sd) { sd = s; l = m; which = i; }
    float cov = clamp(0.5 - s, 0.0, 1.0) * (1.0 - smoothstep(236.0, 250.0, length(b.xy - 256.0))) * uBoatOn;
    if (cov > best) { best = cov; top = mix(z.z, z.w, cabinAt(m, z)); }
  }
  return best;
}`;

// The heights as drawn: each pin's own height, raised by the arrival wave (a spring per pin, delayed by its distance
// from the tower, so the wave runs out from Slotsholmen), sunk flat by the page (from the centre out), plus the press, plus the boats on the water. G keeps the height without the press, for the
// simulation's hand; B the height without the boats, which is what casts the shadows (so a boat moving on needs the
// heights again, not the shadows). The towers and spires (over 25 m) climb slower and give less at the top, as
// something heavier would. Up to two landmarks stand lifted (uLift: a landmark's number and its lift in pins, twice,
// so one can come down while the next goes up).
const COMPOSE = /* glsl */ `
uniform highp sampler2D tRest; uniform highp sampler2D tSim;
uniform float uTime; uniform float uSink; uniform float uFloor; uniform float uBoatDip; uniform vec4 uLift;
${GRID_GLSL}
${BOATS_GLSL}
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  vec4 r = texelFetch(tRest, c, 0);                        // height, kind (0 pocket, 1 land, 2 water), delay, lamp
  if (r.g < 0.5) { gl_FragColor = vec4(uFloor, uFloor, 0.0, 0.0); return; }
  // (a landmark's pins carry minus its number where a street's carry their lamp)
  float lift = r.a < -0.5 ? (abs(r.a + uLift.x) < 0.5 ? uLift.y : 0.0) + (abs(r.a + uLift.z) < 0.5 ? uLift.w : 0.0) : 0.0;
  float tall = smoothstep(10.0, 30.0, r.r);
  float tau = (uTime - r.b) * mix(1.0, 0.42, tall);
  // The spring: 13 rad/s, damping 0.32 (one bounce you see), 0.62 for the tallest.
  float Z = mix(0.32, 0.62, tall), W = 13.0, WD = W * sqrt(1.0 - Z * Z);
  float rise = tau <= 0.0 ? 0.0 : tau > 3.0 ? 1.0 : 1.0 - exp(-Z * W * tau) * (cos(WD * tau) + Z * W / WD * sin(WD * tau));
  float u = length(mid(c) - 256.0) / 256.0;
  float sink = smoothstep(u, u + 0.4, uSink * 1.4);
  float rest = (r.r * rise + lift) * (1.0 - sink);
  float level = rest + texelFetch(tSim, c, 0).r, hull = 0.0;
  if (r.g > 1.5) {
    // (the simulation holds the water under a hull down by uBoatDip, so the deck stands its height over the water round it)
    float top, sd; int which; vec2 l;
    float cov = boatAt(mid(c), top, which, l, sd);
    hull = cov * (top + uBoatDip * cov);
  }
  gl_FragColor = vec4(level + hull, rest, level, 0.0);
}`;
// The tallest pin of each 4 x 4 block of the level below.
const REDUCE = /* glsl */ `
uniform highp sampler2D tSrc;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy) * 4;
  float m = -1e4;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) m = max(m, texelFetch(tSrc, c + ivec2(i, j), 0).r);
  gl_FragColor = vec4(m);
}`;
const COMBINE = /* glsl */ `
uniform highp sampler2D tH; uniform highp sampler2D t4; uniform highp sampler2D t16; uniform highp sampler2D t64;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  gl_FragColor = vec4(texelFetch(tH, c, 0).r, texelFetch(t4, c / 4, 0).r, texelFetch(t16, c / 16, 0).r, texelFetch(t64, c / 64, 0).r);
}`;
// The height above which a pin sees the light: the highest of every pin towards the light, less the light's climb to
// it. Each pass doubles how far it looks (1, 2, 4 ... 1024 texels).
const SHADOW = /* glsl */ `
uniform highp sampler2D tSrc; uniform vec2 uDir; uniform float uTan; uniform float uStep; uniform int uInit;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 q = ivec2(floor(vec2(c) + 0.5 + uDir * uStep));
  bool inside = all(greaterThanEqual(q, ivec2(0))) && all(lessThan(q, ivec2(NT)));
  // (the first pass reads the heights without the boats, the rest what it made; uStep is in texels)
  vec4 src = inside ? texelFetch(tSrc, q, 0) : vec4(0.0);
  float far = inside ? (uInit == 1 ? src.b : src.r) - uTan * uStep / RES : -1e4;
  gl_FragColor = vec4(uInit == 1 ? far : max(texelFetch(tSrc, c, 0).r, far));
}`;
// The press: each land pin a damped spring to its height, pulling at its four neighbours (the ring that runs out), held
// under the fingertip (a sphere's underside) while it is there. The harbour's pins are a wave instead: they barely
// spring back, so a dent runs on as rings down the canals, and the quays hold it (water and land don't pull at each
// other, so a ring meets a quay as a wall and comes back off it). A fingertip on the water presses a hollow into it,
// and drawn across it, heaps the water up ahead of it (its bow wave, uHandV its speed in units a second) and leaves a
// wake: faster than the water's waves run (about 15 units a second), the two fold back into a V. So does a boat: each
// hull holds the water under it down as it goes, and the water it pushes aside runs off as its bow wave and wake, down
// the canal and back off the quays.
const SIM = /* glsl */ `
uniform highp sampler2D tSim; uniform highp sampler2D tH; uniform highp sampler2D tRest; uniform float uDt;
uniform vec4 uHand; uniform vec2 uHandV; uniform float uHandOn; uniform float uDip; uniform vec4 uDrops[6]; uniform float uBoatDip;
${GRID_GLSL}
${BOATS_GLSL}
float nb(ivec2 q, float kind, float own) {
  q = clamp(q, ivec2(0), ivec2(NT - 1));
  return abs(texelFetch(tRest, q, 0).g - kind) < 0.5 ? texelFetch(tSim, q, 0).r : own;
}
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  float kind = texelFetch(tRest, c, 0).g;
  if (kind < 0.5) { gl_FragColor = vec4(0.0); return; }   // the pocket
  vec4 s = texelFetch(tSim, c, 0);
  float rest = texelFetch(tH, c, 0).g;
  float off = s.r, vel = s.g;
  // (the Laplacian a unit: RES^2 that of the texels, so the rings run as fast over the city on either table)
  float lap = (nb(c + ivec2(1, 0), kind, off) + nb(c - ivec2(1, 0), kind, off) + nb(c + ivec2(0, 1), kind, off) + nb(c - ivec2(0, 1), kind, off) - 4.0 * off) * RES * RES;
  bool water = kind > 1.5;
  vel += (water ? -1.5 * off + 240.0 * lap - 0.45 * vel : -38.0 * off + 210.0 * lap - 2.6 * vel) * uDt;
  off += vel * uDt;
  if (uHandOn > 0.5) {
    float r = distance(mid(c), uHand.xy);
    if (water) {
      float R = uHand.w * 0.55;
      if (r < R) {
        float hollow = -uDip * (1.0 - r * r / (R * R));
        if (off > hollow) { off = hollow; vel = min(vel, 0.0); }
      }
      float sp = length(uHandV);
      if (sp > 0.5 && r < R * 1.9) {
        float ahead = dot(mid(c) - uHand.xy, uHandV) / (max(r, 0.5) * sp);
        vel += smoothstep(0.1, 0.9, ahead) * smoothstep(R * 0.6, R, r) * (1.0 - smoothstep(R * 1.25, R * 1.9, r)) * 1.3 * min(sp, 30.0) * uDt;
      }
    } else if (r < uHand.w) {
      float surface = uHand.z + uHand.w - sqrt(uHand.w * uHand.w - r * r);
      if (rest + off > surface) { off = surface - rest; vel = min(vel, 0.0); }
    }
  }
  // Rain on the harbour: each drop knocks a small dent into the water where it lands, and a ring runs out from it.
  if (water) for (int i = 0; i < 6; i++) {
    float r = distance(mid(c), uDrops[i].xy);
    if (r < 1.8) vel -= uDrops[i].z * (1.0 - r * r / 3.24);
  }
  if (water) {
    float top, sd; int which; vec2 l;
    float cov = boatAt(mid(c), top, which, l, sd);
    float hollow = -uBoatDip * cov;
    if (cov > 0.0 && off > hollow) { off = hollow; vel = min(vel, 0.0); }
  }
  gl_FragColor = vec4(off, vel, 0.0, 0.0);
}`;
const ZERO = /* glsl */ `void main() { gl_FragColor = vec4(0.0); }`;

const TRACE_VERT = /* glsl */ `
uniform float uPitch;
varying vec3 vG;
void main() {
  vG = vec3(position.x / uPitch + 256.0, position.y / uPitch, position.z / uPitch + 256.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const TRACE_FRAG = /* glsl */ `
#include <common>
#include <cube_uv_reflection_fragment>
uniform highp sampler2D tMax; uniform highp sampler2D tRest; uniform highp sampler2D tShadow; uniform highp sampler2D tSim;
uniform sampler2D envMap; uniform sampler2D tLamp;
uniform vec3 uCamG; uniform mat4 uGtoClip;
uniform vec3 uLight; uniform vec3 uLightColor; uniform vec2 uSunDir; uniform float uTan; uniform float uEnv; uniform float uPix;
uniform float uWell; uniform float uFloor; uniform float uTop; uniform float uLit; uniform float uSun; uniform float uSwell;
uniform vec3 uFill; uniform vec3 uFillColor; uniform float uNight; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uDome; uniform vec3 uGlow;
uniform float uRiseT; uniform float uSink; uniform sampler2D studioMap; uniform float uRoom;
uniform vec2 uSpin; uniform float uWind; uniform vec2 uWindDir; uniform float uWindT; uniform float uCloud; uniform vec2 uCloudAt; uniform float uWet;
uniform float uFlood[${PLACES.length}]; uniform vec2 uPicked;
varying vec3 vG;
${GRID_GLSL}
${BOATS_GLSL}

// Round pins, 0.93 of the pitch across, their heads domed a little and rounded at the rim (in pins: RES a unit).
const float RAD = 0.465, CHAMFER = 0.1, DOME = 0.7;
// The city's light after dark (linear): sodium-warm lamps, windows a little whiter, floodlights whiter still.
const vec3 LAMP = vec3(1.0, 0.56, 0.24), WINDOW = vec3(1.0, 0.74, 0.46), FLOOD = vec3(1.0, 0.8, 0.56);

uint pcg(uint v) { uint s = v * 747796405u + 2891336453u; uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u; return (w >> 22u) ^ w; }
vec4 rnd(ivec2 c) {
  uint a = pcg(uint(c.x) * 1031u + pcg(uint(c.y))), b = pcg(a), d = pcg(b), e = pcg(d);
  return vec4(uvec4(a, b, d, e) >> 8u) / 16777215.0;
}
// Each pin's material (materials.py, from OpenStreetMap): 0 steel, 1 patinated copper, 2 dark copper, 3 gilt, 4 a
// tree's crown, 5 lawn. The land's kind is 1 + 0.08 x the material (so the press still treats it all as land).
int matOf(float kind) { return kind > 1.5 ? 0 : int((kind - 1.0) * 12.5 + 0.5); }
// How a material looks in the harbour's mirror, against plain steel.
vec3 matTint(int mt) {
  return mt == 1 ? vec3(0.42, 0.78, 0.66) : mt == 2 ? vec3(0.8, 0.5, 0.36) : mt == 3 ? vec3(1.3, 1.0, 0.5) : mt == 4 ? vec3(0.2, 0.3, 0.17) : mt == 5 ? vec3(0.3, 0.42, 0.26) : vec3(1.0);
}
// Whether a pin still stands for the city at the end (1) or has sunk flush (0), as COMPOSE sinks it.
float staying(ivec2 c) {
  float u = length(mid(c) - 256.0) / 256.0;
  return 1.0 - smoothstep(0.6, 1.0, smoothstep(u, u + 0.4, uSink * 1.4));
}
// Whether a pin is the city's yet (1) or still the plinth's blank steel (0). Its part of the plan shows a moment before
// it rises (the harbour polishes, the streets light) and goes as it sinks flush, so the table starts and ends as one
// even satin disc with no trace of the map on it.
float presence(ivec2 c, float delay) { return smoothstep(-0.45, -0.1, uRiseT - delay) * staying(c); }
int gIters = 0;
float pick(vec4 m, int l) { return l == 0 ? m.r : l == 1 ? m.g : l == 2 ? m.b : m.a; }

// Through the city from o (inside the volume) along d, at most tEnd: the first pin it meets. Coarse blocks first; a
// level down only where the ray dips under a block's tallest pin, and straight down to that height when it does. A
// block is 1, 4, 16 or 64 texels across; cell is the texel hit.
bool trace(vec3 o, vec3 d, float tEnd, int steps, out float tHit, out ivec2 cell, out int face) {
  tHit = 0.0; cell = ivec2(0); face = 0;
  vec2 dir = d.xz;
  vec2 sgn = vec2(dir.x >= 0.0 ? 1.0 : -1.0, dir.y >= 0.0 ? 1.0 : -1.0);
  vec2 inv = sgn / max(abs(dir), vec2(1e-7));
  vec2 ahead = step(0.0, dir);
  float t = 0.0;
  int lvl = 3, axis = abs(dir.x) > abs(dir.y) ? 0 : 1;
  bool crossed = false;
  for (int i = 0; i < steps; i++) {
    gIters = i;
    if (t > tEnd) return false;
    vec3 p = o + d * t;
    int n = 1 << (2 * lvl);
    float s = float(n) / RES;
    vec2 blk = floor(p.xz / s);
    vec2 at = blk * s;
    bool out_ = any(lessThan(at, vec2(0.0))) || any(greaterThanEqual(at, vec2(512.0)));
    ivec2 tc = clamp(ivec2(blk) * n, ivec2(0), ivec2(NT - 1));
    float h = out_ ? uFloor : pick(texelFetch(tMax, tc, 0), lvl);
    vec2 tb = ((blk + ahead) * s - o.xz) * inv;
    float tEx = min(tb.x, tb.y);
    float yEx = o.y + d.y * min(tEx, tEnd);
    if (min(p.y, yEx) > h) {
      t = tEx + 2e-3;
      axis = tb.x < tb.y ? 0 : 1;
      crossed = true;
      // A level up where the ray leaves the parent block too (a falling ray stays under a block it went under), or
      // at once for a rising one, which may clear the parent's tallest pin from here on.
      if (lvl < 3 && (d.y > 0.0 || floor((o.xz + d.xz * t) / (s * 4.0)) != floor(blk * 0.25))) lvl++;
      continue;
    }
    if (lvl > 0) {
      if (p.y > h) { t += (h - p.y) / d.y; crossed = false; }
      lvl--;
      continue;
    }
    cell = tc;
    if (p.y > h) { tHit = t + (h - p.y) / d.y; face = 0; }
    else { tHit = t; face = crossed ? 1 + axis : 0; }
    return true;
  }
  // Out of steps (far off, at a grazing angle): down to the pin it is over, which a pixel that far can't tell apart.
  vec3 p = o + d * t;
  cell = clamp(ivec2(floor(p.xz * RES)), ivec2(0), ivec2(NT - 1));
  float h = texelFetch(tMax, cell, 0).r;
  tHit = d.y < 0.0 && p.y > h ? t + (h - p.y) / d.y : t;
  face = 0;
  return true;
}

// Where a ray from o along d leaves the volume (o inside it).
float exitT(vec3 o, vec3 d) {
  vec2 oc = o.xz - 256.0;
  float a = max(dot(d.xz, d.xz), 1e-9), b = dot(oc, d.xz), c = dot(oc, oc) - uWell * uWell;
  float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
  if (d.y > 0.0) t = min(t, (uTop - o.y) / d.y);
  else if (d.y < 0.0) t = min(t, (uFloor - 1.0 - o.y) / d.y);
  return t;
}

float ggx(float a2, float NoH) { float k = (NoH * a2 - NoH) * NoH + 1.0; return a2 / (PI * k * k); }
float smithV(float a2, float NoV, float NoL) {
  return 0.5 / (NoL * sqrt(NoV * NoV * (1.0 - a2) + a2) + NoV * sqrt(NoL * NoL * (1.0 - a2) + a2) + 1e-5);
}
vec2 envBRDF(float r, float NoV) {
  vec4 k = r * vec4(-1.0, -0.0275, -0.572, 0.022) + vec4(1.0, 0.0425, 1.04, -0.04);
  float a = min(k.x * k.x, exp2(-9.28 * NoV)) * k.x + k.y;
  return vec2(-1.04, 1.04) * a + k.zw;
}
// The room (tinted by the sky: blue through twilight, low at night), by day a pale sky over it (what the roofs and the
// harbour mirror), and under the horizon the city's own streets, which is what a facade mirrors: lit by the sun by day
// and by the lamps at night. After dark the city's own glow hangs low in the sky, so the harbour mirrors a dark amber
// with the swell running through it rather than nothing. The city's sky goes with the city: a pin that has sunk flush
// at the end (gCity 0) mirrors the studio it stands in, lit as the studio is, so the empty table reads as the plinth's
// own steel top rather than a dark hole.
float gCity = 1.0;
vec3 env(vec3 dirL, float rough) {
  dirL = vec3(uSpin.x * dirL.x + uSpin.y * dirL.z, dirL.y, uSpin.x * dirL.z - uSpin.y * dirL.x);   // the room stays put as the table turns
  float below = smoothstep(0.04 + 0.2 * rough, -0.12 - 0.5 * rough, dirL.y);
  float above = smoothstep(-0.04 - 0.3 * rough, 0.55, dirL.y);
  float low = smoothstep(-0.06 - 0.2 * rough, 0.02, dirL.y) * (1.0 - smoothstep(0.0, 0.45 + 0.3 * rough, dirL.y));
  vec3 city = (textureCubeUV(envMap, dirL, rough).rgb * uSky + uDome * above + uGlow * low + uGround * below) * uEnv;
  if (gCity > 0.999) return city;
  return mix(textureCubeUV(studioMap, dirL, rough).rgb * uRoom, city, gCity);
}

vec3 brdf(vec3 n, vec3 V, vec3 L, vec3 f0, float a2, float NoV) {
  vec3 H = normalize(V + L);
  float NoL = max(dot(n, L), 0.0), NoH = max(dot(n, H), 0.0), VoH = max(dot(V, H), 0.0);
  vec3 F = f0 + (1.0 - f0) * pow(1.0 - VoH, 5.0);
  return ggx(a2, NoH) * smithV(a2, NoV, NoL) * F * NoL;
}
// Steel under the light, the room's own low lamp after dark (no shadows: it is broad and close) and the room. n and V
// in table space; lit is the light's visibility. The land's steel is satin, bead-blasted: besides its sheen it has a
// broad lobe and a matt one (broad of them), so a face the light falls on reads lit from any side, and the shadows
// read as a sundial's at any hour, not only when the sun stands behind the city; the harbour's is polished, all sheen.
vec3 steel(vec3 n, vec3 V, vec3 f0, float rough, float lit, vec3 envC, float broad) {
  float a2 = max(pow4(rough), 1.2e-5), NoV = max(dot(n, V), 1e-3);
  vec3 sun = mix(brdf(n, V, uLight, f0, a2, NoV), brdf(n, V, uLight, f0, 0.16, NoV), broad)
           + f0 * (broad * 0.2 * max(dot(n, uLight), 0.0));
  vec3 direct = sun * uLightColor * lit * uSun;
  if (uNight > 0.01) direct += brdf(n, V, uFill, f0, mix(a2, 0.16, broad), NoV) * uFillColor * uSun;
  vec2 ab = envBRDF(rough, NoV);
  return min(direct, vec3(48.0)) + envC * (f0 * ab.x + ab.y);
}

float hash3(ivec2 c, int a) { return float(pcg(uint(c.x) * 1031u + pcg(uint(c.y) * 7u + pcg(uint(a)))) >> 8u) / 16777215.0; }

// After dark the city lights up: lamps along the streets and quays, pins whose heads glow (each comes on at its own
// moment through dusk), and windows along the facades, floor by floor (3 m, 1.2 units), some of them lit. lamp is the
// pin's lamp (0 none), h its height, fp the pins a pixel spans, many whether it holds several.
// The streets themselves glow faintly, more in some quarters than others (a noise 30 m across), so from far off the
// street plan draws itself in gold between the dark blocks.
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  ivec2 a = ivec2(i) + 4096;
  return mix(mix(hash3(a, 11), hash3(a + ivec2(1, 0), 11), f.x), mix(hash3(a + ivec2(0, 1), 11), hash3(a + ivec2(1, 1), 11), f.x), f.y);
}
vec3 glow(ivec2 c, vec3 P, int face, float h, float fp, float many, float lamp, int mt) {
  if (uNight < 0.01 || mt == 4) return vec3(0.0);             // (no windows in the trees)
  if (face == 0) {
    vec3 e = vec3(0.0);
    if (h > -0.5 && h < 0.3) e = LAMP * (0.55 * uNight * (0.25 + 0.75 * vnoise(mid(c) / 12.0)) * (0.6 + 0.4 * hash3(c, 5)) * (mt == 5 ? 0.2 : 1.0));
    if (lamp <= 0.0 || hash3(c, 3) > uNight * 1.15 - 0.1) return e;
    // (a lamp's light is its own, whatever the pin: a smaller head holds it brighter)
    float rr = length(P.xz - mid(c)) * RES;
    return e + LAMP * (lamp * 16.0 * LAMP_K * mix(1.0 - smoothstep(0.16, 0.4, rr), 0.3, many));
  }
  if (h < 2.5 || P.y < 1.1 || P.y > h - 0.7 || lamp < -0.5) return vec3(0.0);   // (a landmark is floodlit instead)
  float fl = floor(P.y / 1.2), v = fract(P.y / 1.2);
  float k = hash3(c, int(fl) * 4 + face);
  if (k > 0.24 * uNight) return vec3(0.0);
  float band = mix(smoothstep(0.24, 0.32, v) * (1.0 - smoothstep(0.68, 0.76, v)), 0.44, clamp(fp * 1.5 - 0.4, 0.0, 1.0));
  vec3 tone = k < 0.05 * uNight ? vec3(0.62, 0.8, 1.0) : WINDOW;     // a few lit cooler, by screens or LEDs
  return tone * (band * (1.6 + 5.0 * hash3(c, int(fl) * 4 + face + 2)));
}

// A boat's lights after dark: its cabin's windows along its sides and its glass roof lit from inside, and its running
// lights (white at the mast and the stern, red to port, green to starboard), each a point the pixel always holds. P is
// the point hit, on boat i; h its pin's height.
vec3 boatGlow(int i, vec3 P, int face, float h, float many) {
  vec4 b = uBoat[i], z = uBoatSize[i];
  vec2 d = P.xz - b.xy, l = vec2(dot(d, b.zw), dot(d, vec2(b.w, -b.z)));
  float cab = cabinAt(l, z);
  if (face != 0) return WINDOW * (2.2 * cab * smoothstep(-0.9, -0.75, P.y) * (1.0 - smoothstep(h - 0.14, h - 0.05, P.y)));
  vec3 e = WINDOW * (0.45 * cab);
  float mast = length(l - vec2(z.x * 0.55, 0.0)), stern = length(l - vec2(-z.x * 0.95, 0.0));
  float port = length(l - vec2(z.x * 0.3, z.y * 0.75)), star = length(l - vec2(z.x * 0.3, -z.y * 0.75));
  vec4 r = vec4(mast, stern, port, star);
  vec4 pt = mix(vec4(1.0) - smoothstep(vec4(0.1), vec4(0.32), r), vec4(0.22) * step(r, vec4(0.9)), many) * 18.0;
  return e + vec3(1.0, 0.93, 0.82) * (pt.x + pt.y) + vec3(1.0, 0.08, 0.04) * pt.z + vec3(0.1, 1.0, 0.35) * pt.w;
}

// A landmark floodlit after dark: lamps at its walls' foot, spaced along them, so the light is brightest low and fans
// up the wall in scallops; a tower or a spire is lit to its tip, a roof only grazed. id is the landmark's number (its
// pins' rest.a is minus it), P the point hit on its pin, h the pin's height. Returns the light's strength there.
float flood(float id, vec3 P, int face, float h, float many) {
  float k = uFlood[int(id + 0.5) - 1];
  if (k <= 0.0) return 0.0;
  if (face == 0) return 0.1 * k;
  float along = face == 1 ? P.z : P.x;
  float scallop = mix(0.6 + 0.4 * cos(along * 1.15), 0.8, many);
  float spire = smoothstep(14.0, 24.0, h);
  return k * scallop * mix(0.3 + 0.7 * exp(-max(P.y, 0.0) / 7.0), 0.7, spire);
}

// Whether a point sees the light. The shadow texture holds, per pin, the height a point at the pin's centre must clear;
// a point nearer the light clears it lower (the pins that shade it are that much further off), so a shadow's edge
// runs across a pin's top where it falls, not pin by pin.
float sunSeen(ivec2 c, vec3 P, float fp) {
  float need = texelFetch(tShadow, c, 0).r + dot(P.xz - mid(c), uSunDir) * uTan;
  float w = 0.015 + 0.5 * fp / RES * uTan + 0.3 * uCloud * uCloud;
  return smoothstep(-w, w, P.y - need);
}
// The clouds' shadows: the forecast's cover as a field of soft cells 300-600 m across, cast from a layer over the
// table along the sun and drifting with the wind (faster than life, as a miniature's time-lapse runs). Past nine
// tenths of cover the cells close: overcast, the sun's light a tenth of itself everywhere.
float cloudShade(vec3 P) {
  if (uCloud < 0.02) return 1.0;
  vec2 q = (P.xz + uSunDir * min((90.0 - P.y) / max(uTan, 0.08), 900.0)) / 170.0 + uCloudAt;
  float n = 0.68 * vnoise(q) + 0.32 * vnoise(q * 2.3 + 5.1);
  float edge = 1.0 - uCloud * 1.05;
  return 1.0 - 0.88 * smoothstep(edge - 0.1, edge + 0.1, n);
}
// A surface with a colour of its own (the copper's patina, leaves, grass): diffuse in the sun and the room, with a dull
// sheen (glossier wet).
vec3 coat(vec3 n, vec3 V, vec3 alb, float rough, float lit) {
  float NoL = max(dot(n, uLight), 0.0);
  vec3 c = alb * (uLightColor * (NoL * lit * uSun / PI) + env(n, 1.0));
  if (uNight > 0.01) c += alb * uFillColor * (max(dot(n, uFill), 0.0) * uSun / PI);
  float r = mix(rough, 0.16, uWet);
  return c + steel(n, V, vec3(0.04), r, lit, env(reflect(-V, n), r), 0.0);
}

void main() {
  vec3 o = uCamG, d = normalize(vG - uCamG);
  vec2 oc = o.xz - 256.0;
  float a = max(dot(d.xz, d.xz), 1e-9), b = dot(oc, d.xz), cc = dot(oc, oc) - uWell * uWell, disc = b * b - a * cc;
  if (disc <= 0.0) discard;
  float sq = sqrt(disc), y0 = (uFloor - 1.0 - o.y) / d.y, y1 = (uTop - o.y) / d.y;
  float tIn = max(max((-b - sq) / a, min(y0, y1)), 0.0), tOut = min((-b + sq) / a, max(y0, y1));
  if (tIn >= tOut) discard;
  vec3 p0 = o + d * tIn, V = -d;
  gCity = staying(ivec2(NT / 2));                          // (the pocket's floor and wall: as the table's middle)
  float t; ivec2 c; int face;
  vec3 col, P;
  bool hit = trace(p0, d, tOut - tIn, STEPS, t, c, face);
  int iters = gIters;
  if (!hit) {
    // Out through the pocket's wall below the plinth's top: the dark stone inside the pocket. Above it: nothing here.
    P = p0 + d * (tOut - tIn);
    if (P.y > 0.0) discard;
    col = env(normalize(vec3(256.0 - P.x, 0.0, 256.0 - P.z)), 0.8) * 0.012 * smoothstep(FLOOR_G, 0.0, P.y);
  } else {
    P = p0 + d * t;
    vec4 rest = texelFetch(tRest, c, 0);
    float h = texelFetch(tMax, c, 0).r, kind = rest.g;
    float dist = tIn + t;
    vec4 rn = rnd(c);
    bool water = kind > 1.5;
    int mt = matOf(kind);
    gCity = staying(c);
    // A pin a boat has raised out of the water is the boat's, not the harbour's.
    float bTop = 0.0, bSd = 1e4; int bI = -1; vec2 bL = vec2(0.0);
    float bCov = water ? boatAt(mid(c), bTop, bI, bL, bSd) : 0.0;
    bool boat = bCov > 0.3;
    float m = smoothstep(-0.45, -0.1, uRiseT - rest.b) * gCity, wm = water && !boat ? m : 0.0;   // (a blank pin: land's steel, unlit)
    vec2 sgn = vec2(d.x >= 0.0 ? 1.0 : -1.0, d.z >= 0.0 ? 1.0 : -1.0);
    vec3 n = face == 0 ? vec3(0.0, 1.0, 0.0) : face == 1 ? vec3(-sgn.x, 0.0, 0.0) : vec3(0.0, 0.0, -sgn.y);
    float fp = dist * uPix / max(abs(dot(n, V)), 0.2) * RES; // pins a pixel spans here
    float many = smoothstep(0.4, 1.6, fp);                   // past ~1 pin a pixel, the pixel holds their average
    float gap, ao = 1.0;
    if (kind < 0.5) {
      // The pocket's floor and the pins' feet: near black.
      col = env(reflect(-V, n), 0.7) * 0.015;
      gap = 0.0;
    } else {
      float tilt = mix(0.007, 0.012, wm);
      // The harbour's pins are lapped flat and tilted along a slow swell (three trains of it), so the water breaks the
      // sun into glints that run across it.
      vec2 q = mid(c), swell = vec2(0.0);
      if (wm > 0.0) {
        // (the first train runs with the wind, and all three grow with it)
        float sea = 0.55 + 1.5 * uWind;
        swell += sea * 0.024 * uWindDir * cos(dot(q, uWindDir * 0.31) - uSwell * 1.1);
        swell += sea * 0.018 * vec2(-0.45, 0.89) * cos(dot(q, vec2(-0.45, 0.89) * 0.53) - uSwell * 1.6 + 1.7);
        swell += sea * 0.011 * vec2(0.95, -0.31) * cos(dot(q, vec2(0.95, -0.31) * 0.97) - uSwell * 2.3 + 4.1);
        // The wave the hand set off (the simulation's offsets): each pin tilted along its slope (a unit's rise a unit).
        float sl = texelFetch(tSim, max(c - ivec2(1, 0), ivec2(0)), 0).r, sr = texelFetch(tSim, min(c + ivec2(1, 0), ivec2(NT - 1)), 0).r;
        float su = texelFetch(tSim, max(c - ivec2(0, 1), ivec2(0)), 0).r, sd = texelFetch(tSim, min(c + ivec2(0, 1), ivec2(NT - 1)), 0).r;
        swell -= 0.5 * RES * vec2(sr - sl, sd - su);
        swell *= wm;
      }
      vec2 jitter = (rn.zw - 0.5) * 2.0 * tilt * (1.0 - many) + swell;
      // A tree's leaves: each pin's head turned this way and that by the wind, in gusts that run across the city.
      if (mt == 4) {
        float gust = 0.35 + 0.65 * vnoise(P.xz / 26.0 - uWindDir * uWindT * 2.2);
        jitter += (0.06 + 0.32 * uWind * gust) * vec2(sin(uWindT * 6.1 + rn.x * 40.0), cos(uWindT * 4.7 + rn.y * 40.0)) * m;
      }
      if (face == 0) {
        // A domed head: the normal leans out with the radius, harder over the rounded rim; between the heads, the
        // dark gaps down to the pins' feet. Far off, a pixel holds the average.
        vec2 uv = (P.xz - mid(c)) * RES;                       // (in pins)
        float rr = length(uv);
        vec2 out2 = rr > 1e-4 ? uv / rr : vec2(0.0);
        float rim = clamp((rr - (RAD - CHAMFER)) / CHAMFER, 0.0, 1.0) * clamp(CHAMFER / fp - 0.4, 0.0, 1.0);
        float lean = (DOME * rr * (1.0 - wm) + rim * rim * 1.1) * (1.0 - many);
        n = normalize(vec3(out2.x * sin(lean) + jitter.x, cos(lean), out2.y * sin(lean) + jitter.y));
        gap = mix(smoothstep(RAD - 0.5 * fp, RAD + 0.5 * fp, rr), 1.0 - PI * RAD * RAD, many);
        gap *= 0.45 + 0.55 * clamp(V.y * 1.6, 0.0, 1.0);      // at a low angle the heads hide the gaps between them
        // The sky a pin sees past its neighbours (6 m and 15 m off): lower in a courtyard or a narrow street.
        float occ = 0.0;
        for (int k = 0; k < 8; k++) {
          float ang = float(k) * 0.7854 + rn.x;
          float r = k < 4 ? 2.5 : 6.0;
          ivec2 q = clamp(c + ivec2(round(vec2(cos(ang), sin(ang)) * r * RES)), ivec2(0), ivec2(NT - 1));
          occ += clamp((texelFetch(tMax, q, 0).r - h) / (r * 1.6), 0.0, 1.0);
        }
        ao = 1.0 - 0.55 * occ / 8.0;
      } else {
        // A pin's side: a rod, its normal turning across it; rounded into the head at the top.
        float along = ((face == 1 ? P.z : P.x) - (face == 1 ? mid(c).y : mid(c).x)) * RES;   // (in pins)
        float down = (h - P.y) * RES;
        float a = asin(clamp(along / RAD, -1.0, 1.0)) * (1.0 - many);
        n = n * cos(a) + (face == 1 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0)) * sin(a);
        float band = (1.0 - clamp(down / CHAMFER, 0.0, 1.0)) * clamp(CHAMFER / fp - 0.4, 0.0, 1.0);
        n = normalize(n + vec3(0.0, band * 1.2, 0.0));
        gap = mix(smoothstep(RAD - 0.5 * fp, RAD + 0.5 * fp, abs(along)), 1.0 - 2.0 * RAD, many);
        // Darker towards a facade's foot, where the street in front of it meets it.
        ivec2 front = clamp(c - ivec2(face == 1 ? int(sgn.x) : 0, face == 2 ? int(sgn.y) : 0), ivec2(0), ivec2(NT - 1));
        float ground = texelFetch(tMax, front, 0).r;
        ao = 0.28 + 0.72 * (1.0 - exp(-max(P.y - ground, 0.0) / 4.5));
      }
      float rough = mix(mix(0.22, 0.32, rn.x), mix(0.035, 0.08, rn.x), wm);
      rough = mix(rough, mix(0.3, 0.09, wm), many);
      rough *= 1.0 - 0.45 * uWet * (1.0 - wm);                   // rain: the land's steel wet and glossier
      // Up close the tilt is in the normal; far off, a pixel's pins spread the highlight instead.
      rough = sqrt(rough * rough + many * (tilt * 9.0 + 0.06 * (1.0 - wm)));
      vec3 f0 = vec3(mix(mix(0.50, 0.60, rn.y), 0.55, many)) * vec3(0.985, 0.995, 1.0);
      // The palace's copper, browned since it was relaid (2006-09), and the gilt of the tower's crowns: metals, so only
      // their colour and finish change.
      if (mt == 2) { f0 = mix(f0, vec3(0.44, 0.25, 0.17) * mix(0.85, 1.1, rn.y), m); rough = mix(rough, 0.36, m); }
      else if (mt == 3) { f0 = mix(f0, vec3(1.0, 0.77, 0.34), m); rough = mix(rough, 0.2, m); }
      // The landmark picked up (uPicked: its number, how far up): its steel polished, so it gleams apart from the rest.
      float sel = rest.a < -0.5 && abs(rest.a + uPicked.x) < 0.5 ? uPicked.y : 0.0;
      f0 *= 1.0 + 0.22 * sel; rough *= 1.0 - 0.45 * sel;
      float lit = sunSeen(c, P, fp) * cloudShade(P);
      vec3 R = reflect(-V, n);
      vec3 envC = env(R, rough);
#ifdef REFLECT
      // The harbour mirrors what stands over it: a second ray from the polished pins.
      if (wm > 0.0 && face == 0 && R.y > 0.0 && fp < 2.5) {
        vec3 ro = P + vec3(0.0, 0.01, 0.0);
        float tr; ivec2 cr; int fr;
        vec4 rr4 = vec4(0.0);
        if (trace(ro, R, exitT(ro, R), REFLECT_STEPS, tr, cr, fr)) rr4 = texelFetch(tRest, cr, 0);
        if (rr4.g > 0.5) {
          vec3 Pr = ro + R * tr;
          vec2 sr = vec2(R.x >= 0.0 ? 1.0 : -1.0, R.z >= 0.0 ? 1.0 : -1.0);
          vec3 nr = fr == 0 ? vec3(0.0, 1.0, 0.0) : fr == 1 ? vec3(-sr.x, 0.0, 0.0) : vec3(0.0, 0.0, -sr.y);
          float hr = texelFetch(tMax, cr, 0).r;
          int mr = matOf(rr4.g);
          vec3 seen = steel(nr, -R, vec3(0.55), 0.36, sunSeen(cr, Pr, 1.0) * cloudShade(Pr), env(reflect(R, nr), 0.36), 0.4);
          seen *= mix(vec3(1.0), matTint(mr), presence(cr, rr4.b));
          float foot = fr == 0 ? 1.0 : 0.3 + 0.7 * (1.0 - exp(-max(Pr.y, 0.0) / 4.5));
          vec3 em = glow(cr, Pr, fr, hr, 1.0, 1.0, rr4.a, mr);
          if (rr4.a < -0.5 && uNight > 0.01) em += vec3(0.55) * FLOOD * (flood(-rr4.a, Pr, fr, hr, 1.0) * 1.5 * uNight);
          if (rr4.g > 1.5) {
            // (a boat seen in the water: its lights, not the street's)
            float bt, bs; int bw; vec2 bl;
            if (boatAt(vec2(cr) + 0.5, bt, bw, bl, bs) > 0.3) em = uNight > 0.01 ? boatGlow(bw, Pr, fr, hr, 1.0) * uNight : vec3(0.0);
          }
          envC = mix(envC, seen * foot + em * presence(cr, rr4.b), wm);
        }
      }
#endif
      col = steel(n, V, f0, rough, lit, envC, 0.42 * (1.0 - wm)) * ao;
      if ((mt == 1 || mt >= 4) && m > 0.0) {
        // The patina (verdigris), the trees' crowns and the lawns: coloured, matt; darker wet. Leaves glow a little
        // with the sun behind them.
        vec3 alb = mt == 1 ? vec3(0.12, 0.29, 0.22) : mt == 4 ? vec3(0.026, 0.048, 0.02) : vec3(0.038, 0.062, 0.028);
        alb *= mix(0.85, 1.15, rn.y) * (1.0 - 0.3 * uWet);
        vec3 own = coat(n, V, alb, mt == 1 ? 0.55 : 0.8, lit) * ao;
        if (mt == 4) own += vec3(0.05, 0.08, 0.012) * uLightColor * (lit * uSun * pow(max(dot(-V, uLight), 0.0), 3.0) * 0.5);
        col = mix(col, own, m);
      }
      if (boat) {
        // The boats' paint, satin: the canal boats' hulls a deep blue under pale roofs over their cabins, the harbour
        // bus white with a dark band of windows; the decks fore and aft bare steel.
        vec4 z = uBoatSize[bI];
        bool bus = z.w > 1.2, cabin = cabinAt(bL, z) > 0.5;
        vec3 alb = face == 0 ? (cabin ? vec3(0.52, 0.53, 0.52) : vec3(0.0)) : bus ? vec3(0.55, 0.56, 0.55) : vec3(0.011, 0.02, 0.048);
        if (face != 0 && bus && P.y > h - 0.5) alb = vec3(0.01);
        if (alb.r > 0.0 || face != 0) col = coat(n, V, alb, 0.32, lit) * ao;
      }
      if (uNight > 0.01) {
        // The lamps' light on the streets round them and up the feet of the facades (the steel takes it as it takes
        // the room's light), then the lamps and the windows themselves.
        vec2 at = face == 0 ? P.xz : P.xz - vec2(face == 1 ? sgn.x : 0.0, face == 2 ? sgn.y : 0.0) * 0.7;
        float pool = texture2D(tLamp, at / 512.0).r * exp(-max(P.y, 0.0) / 2.2) * mix(1.0, 0.25, wm);
        col += f0 * LAMP * (pool * 2.2 * uNight * m) * ao;
        if (boat) col += boatGlow(bI, P, face, h, many) * (uNight * m);
        else col += glow(c, P, face, h, fp, many, rest.a, mt) * m;
        // A landmark's floodlights on its walls (the patina takes them green).
        if (rest.a < -0.5) col += (mt == 1 ? vec3(0.16, 0.36, 0.28) : f0) * FLOOD * (flood(-rest.a, P, face, h, many) * 1.5 * uNight * m) * mix(1.0, ao, 0.5);
        // The water round a boat, lit by its cabin.
        if (wm > 0.0 && bSd < 5.0) col += f0 * WINDOW * (0.45 * exp(-max(bSd, 0.0) / 1.3) * uNight * wm);
        if (wm > 0.0 && face == 0 && R.y > 0.02) {
          // The quays' lamps in the harbour: the lamp map read where the mirrored ray climbs past a lamp's height,
          // at four heights, so each lamp lies on the water as a streak towards the eye that the swell breaks up.
          vec2 run = R.xz / R.y;
          float seen = 0.0;
          for (int i = 0; i < 4; i++) {
            vec2 q = P.xz + run * min(0.6 * exp2(float(i)), 40.0 / max(length(run), 1e-3));
            seen += texture2D(tLamp, q / 512.0).r;
          }
          col += f0 * LAMP * (seen * 0.9 * uNight * wm);
        }
      }
#ifdef DEBUG
      col = DEBUG == 6 ? (iters >= STEPS - 1 ? vec3(4.0, 0.0, 0.0) : vec3(float(iters) / float(STEPS))) : DEBUG == 1 ? vec3(lit) : DEBUG == 2 ? n * 0.5 + 0.5 : DEBUG == 3 ? envC : DEBUG == 4 ? vec3(ao) : vec3(texelFetch(tShadow, c, 0).r - h) * 0.1 + 0.5;
#endif
    }
    col *= 1.0 - gap * 0.94;
  }
  col *= uLit;
  gl_FragColor = vec4(col, 1.0);
  vec4 clip = uGtoClip * vec4(P, 1.0);
  gl_FragDepth = clamp(0.5 * clip.z / clip.w + 0.5, 0.0, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

type RT = THREE.WebGLRenderTarget;
const target = (w: number, h = w) => new THREE.WebGLRenderTarget(w, h, {
  type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
  depthBuffer: false, stencilBuffer: false, generateMipmaps: false,
});

export type PinTable = NonNullable<ReturnType<typeof createPinTable>>;
const DEBUG = typeof location !== "undefined" ? Number(new URLSearchParams(location.search).get("pins-debug")) || 0 : 0;

/**
 * `at`: the moment whose light to use (tests and films); otherwise now, checked every half minute. Returns null where
 * the GPU can't draw into float textures (the page then shows its still).
 */
export function createPinTable(o: {
  renderer: THREE.WebGLRenderer; top: number; phone: boolean;
  invalidate: () => void; onFail: (e?: unknown) => void; at?: Date | null;
  /** The data: the heights (city-fine.png, or city.png for the coarse table) and the landmarks' outlines (landmarks-fine.png, landmarks.png). */
  city: string; marks: string;
}) {
  const { renderer } = o;
  const ext = renderer.extensions;
  if (!ext.has("EXT_color_buffer_float") && !ext.has("EXT_color_buffer_half_float")) return null;
  // The pins: two a unit each way (1.25 m), or one (2.5 m, `?pins=coarse`). NT texels across.
  const RES = PINS_FINE ? 2 : 1, NT = N * RES;
  /** The texel under a grid point (units, on the table). */
  const texel = (x: number, z: number) => Math.floor(z * RES) * NT + Math.floor(x * RES);

  // ------------------------------------------------------------------------------------------ the city's heights
  const rest = new Float32Array(NT * NT * 4);
  const restTex = new THREE.DataTexture(rest, NT, NT, THREE.RGBAFormat, THREE.FloatType);
  restTex.minFilter = restTex.magFilter = THREE.NearestFilter;
  const heights = new Float32Array(NT * NT);               // for the pointer: the city as it stands (no press)
  let tower = { col: 200.5, row: 213.5, h: 37.4 };         // replaced by the data's own tallest pin (units)
  let loaded = false, failed = false, alive = true;
  // The arrival's clock (seconds of the rise, which runs slowed: SLOW real seconds to one), -1 until it starts; rush()
  // speeds it up when the visitor scrolls before it is over.
  let introT = -1, introSpeed = 1;
  // The arrival's order: each pin's delay, sorted, to count the pins that have risen.
  let order = new Float32Array(0);
  let simLive = false, simIdx = 0, dirty = true, hulls = false, shadowDirty = true, lastSink = -1;
  let waterPins = new Int32Array(0);                       // the harbour's pins, for the rain to fall on
  // The landmarks (PLACES' buildings, by their place in it): where each stands in the grid, its tallest pin and how far
  // its pins reach from its middle; null for a place that isn't one or until they are read.
  type Landmark = { x: number; z: number; top: number; reach: number; pins: number };
  const marks: (Landmark | null)[] = PLACES.map(() => null);

  void (async () => {
    // (the landmarks' map is an extra: without it the city stands as it is, unlit at night and not lifting)
    const marksBmp = fetch(o.marks).then(r => (r.ok ? r.blob() : null))
      .then(b => b && createImageBitmap(b, { colorSpaceConversion: "none", premultiplyAlpha: "none" })).catch(() => null);
    const res = await fetch(o.city);
    if (!res.ok) throw new Error(`city: ${res.status}`);
    const bmp = await createImageBitmap(await res.blob(), { colorSpaceConversion: "none", premultiplyAlpha: "none" });
    const cv = document.createElement("canvas");
    cv.width = cv.height = NT;
    const g = cv.getContext("2d", { willReadFrequently: true })!;
    g.drawImage(bmp, 0, 0);
    bmp.close();
    const px = g.getImageData(0, 0, NT, NT).data;
    let pins = 0, best = -1, bestAt = 0;
    const wet: number[] = [];
    for (let i = 0; i < NT * NT; i++) {
      const flags = px[i * 4 + 2];
      if (flags & 2) {
        pins++;
        const m = ((px[i * 4] << 8) | px[i * 4 + 1]) * 128 / 65535;
        const h = flags & 1 && m < 0.5 ? WATER : m / CITY_M;
        rest[i * 4] = h;
        // Water, or land with its material (heights.py: B >> 2): 1 + 0.08 x the material.
        rest[i * 4 + 1] = flags & 1 && m < 0.5 ? 2 : 1 + 0.08 * Math.min(5, flags >> 2);
        if (rest[i * 4 + 1] === 2) wet.push(i);
        heights[i] = h;
        if (h > best) { best = h; bestAt = i; }
      } else {
        rest[i * 4] = FLOOR;
        heights[i] = FLOOR;
      }
    }
    // A colour-managed decode would shift the bytes: then the counts are off, and the hero stays as it was.
    if (pins !== PINS_COUNT || best < 30 || best > 45) throw new Error(`city: ${pins} pins, tallest ${best.toFixed(1)}`);
    tower = { col: (bestAt % NT + 0.5) / RES, row: (Math.floor(bestAt / NT) + 0.5) / RES, h: best };
    // The wave runs out from the tower after a moment of the bare table: 2 s of the rise to the far edge, each pin a
    // little early or late.
    const delays: number[] = [];
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < NT * NT; i++) {
      const col = (i % NT + 0.5) / RES, row = (Math.floor(i / NT) + 0.5) / RES;
      const r = Math.hypot(col - tower.col, row - tower.row);
      const delay = 0.6 + r * 0.0062 + (rand() - 0.5) * 0.09;
      rest[i * 4 + 2] = delay;
      if (rest[i * 4 + 1] > 0.5) delays.push(delay);
    }
    order = Float32Array.from(delays).sort();
    waterPins = Int32Array.from(wet);
    lamps(rand);
    const mb = await marksBmp;
    if (mb) {
      g.clearRect(0, 0, NT, NT);
      g.drawImage(mb, 0, 0);
      mb.close();
      const mp = g.getImageData(0, 0, NT, NT).data;
      const sum = PLACES.map(() => [0, 0, 0, -1e9]);           // pins, x, z, tallest
      for (let i = 0; i < NT * NT; i++) {
        const kind = rest[i * 4 + 1];
        let id = mp[i * 4];
        if (id > 100) id = 0;
        if (!id || id > PLACES.length || kind < 0.5 || kind > 1.5) continue;     // (land only)
        rest[i * 4 + 3] = -id;
        const s = sum[id - 1];
        s[0]++; s[1] += (i % NT + 0.5) / RES; s[2] += (Math.floor(i / NT) + 0.5) / RES; s[3] = Math.max(s[3], rest[i * 4]);
      }
      sum.forEach(([n, x, z, top], k) => { if (n) marks[k] = { x: x / n, z: z / n, top, reach: 0, pins: n }; });
      for (let i = 0; i < NT * NT; i++) {
        const m = rest[i * 4 + 3] < -0.5 ? marks[-rest[i * 4 + 3] - 1] : null;
        if (m) m.reach = Math.max(m.reach, Math.hypot((i % NT + 0.5) / RES - m.x, (Math.floor(i / NT) + 0.5) / RES - m.z));
      }
    }
    restTex.needsUpdate = true;
    if (!alive) return;
    loaded = true;
    dirty = true;
    o.invalidate();
  })().catch(e => { failed = true; o.onFail(e); o.invalidate(); });

  // ------------------------------------------------------------------------------------------ the lamps
  // Where the city has its lamps after dark: along the streets, a lamp every 25 m or so at a facade's foot, and along
  // the quays every 17 m at the water's edge (rest.a, 0 for none; on the fine table half as many of the pins there,
  // which are twice as many a metre). Their light on the ground round them is the lamps blurred over 2.5 m (tLamp,
  // filtered), as bright under a lamp as the lamp's own pin.
  const lampPx = new Uint8Array(NT * NT);
  const lampTex = new THREE.DataTexture(lampPx, NT, NT, THREE.RedFormat, THREE.UnsignedByteType);
  lampTex.minFilter = lampTex.magFilter = THREE.LinearFilter;
  function lamps(rand: () => number) {
    const near = (test: (i: number) => boolean) => {
      const m = new Uint8Array(NT * NT), out = new Uint8Array(NT * NT);
      for (let i = 0; i < NT * NT; i++) m[i] = test(i) ? 1 : 0;
      for (let r = 0; r < NT; r++) for (let c = 0; c < NT; c++) {
        let v = 0;
        for (let dr = -1; dr <= 1 && !v; dr++) for (let dc = -1; dc <= 1 && !v; dc++) {
          const rr = r + dr, cc = c + dc;
          if (rr >= 0 && cc >= 0 && rr < NT && cc < NT) v = m[rr * NT + cc];
        }
        out[r * NT + c] = v;
      }
      return out;
    };
    const kind = (i: number) => rest[i * 4 + 1];
    const land = (i: number) => kind(i) > 0.5 && kind(i) < 1.5, tree = (i: number) => Math.abs(kind(i) - 1.32) < 0.02;
    const facade = near(i => land(i) && !tree(i) && rest[i * 4] > 2), quay = near(i => kind(i) === 2);
    const lamp = new Float32Array(NT * NT);
    for (let i = 0; i < NT * NT; i++) {
      rest[i * 4 + 3] = 0;
      if (!land(i) || rest[i * 4] > 0.4) continue;
      const p = (quay[i] ? 0.15 : facade[i] ? 0.1 : 0) / RES;
      if (p && rand() < p) rest[i * 4 + 3] = lamp[i] = 0.6 + 0.4 * rand();
    }
    // A separable Gaussian, sigma 2.5 m, then scaled so a lone lamp's peak is its own brightness.
    const S = RES, R = 3 * RES, w: number[] = [];
    for (let k = -R; k <= R; k++) w.push(Math.exp(-(k * k) / (2 * S * S)));
    const norm = 2 * Math.PI, tmp = new Float32Array(NT * NT);
    for (let r = 0; r < NT; r++) for (let c = 0; c < NT; c++) {
      let a = 0;
      for (let k = -R; k <= R; k++) { const cc = c + k; if (cc >= 0 && cc < NT) a += lamp[r * NT + cc] * w[k + R]; }
      tmp[r * NT + c] = a;
    }
    for (let r = 0; r < NT; r++) for (let c = 0; c < NT; c++) {
      let a = 0;
      for (let k = -R; k <= R; k++) { const rr = r + k; if (rr >= 0 && rr < NT) a += tmp[rr * NT + c] * w[k + R]; }
      lampPx[r * NT + c] = Math.min(255, Math.round(a / norm * 2.5 * 255));
    }
    lampTex.needsUpdate = true;
  }

  // ------------------------------------------------------------------------------------------ GPU passes
  const passScene = new THREE.Scene(), passCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const tri = new THREE.BufferGeometry();
  tri.setAttribute("position", new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const quad = new THREE.Mesh(tri);
  quad.frustumCulled = false;
  passScene.add(quad);
  const grid = { RES: RES.toFixed(1), NT: String(NT) };
  const pass = (frag: string, uniforms: Record<string, THREE.IUniform>) =>
    new THREE.ShaderMaterial({ vertexShader: PASS_VERT, fragmentShader: frag, uniforms, defines: grid, depthTest: false, depthWrite: false });
  const simA = target(NT), simB = target(NT), hRT = target(NT), r4 = target(NT / 4), r16 = target(NT / 16), r64 = target(NT / 64);
  const maxRT = target(NT), shA = target(NT), shB = target(NT);
  const sim = [simA, simB];
  // The boats as the heights and the tracer have them (where they are this frame), and as the simulation has them
  // (where they are at each of its steps).
  const v4s = () => Array.from({ length: BOATS }, () => new THREE.Vector4());
  const boatU = {
    uBoat: { value: v4s() }, uBoatOn: { value: 0 }, uBoatDip: { value: 0 },
    uBoatSize: { value: v4s().map((v, i) => v.fromArray(BOAT_SIZE, i * 4)) },
  };
  const composeMat = pass(COMPOSE, { tRest: { value: restTex }, tSim: { value: simA.texture }, uTime: { value: 0 }, uSink: { value: 0 }, uFloor: { value: FLOOR }, uLift: { value: new THREE.Vector4() }, ...boatU });
  const reduceMat = pass(REDUCE, { tSrc: { value: null } });
  const combineMat = pass(COMBINE, { tH: { value: hRT.texture }, t4: { value: r4.texture }, t16: { value: r16.texture }, t64: { value: r64.texture } });
  const shadowMat = pass(SHADOW, { tSrc: { value: null }, uDir: { value: new THREE.Vector2() }, uTan: { value: 0 }, uStep: { value: 1 }, uInit: { value: 1 } });
  const simMat = pass(SIM, { tSim: { value: simA.texture }, tH: { value: hRT.texture }, tRest: { value: restTex }, uDt: { value: 1 / 120 }, uHand: { value: new THREE.Vector4() }, uHandV: { value: new THREE.Vector2() }, uHandOn: { value: 0 }, uDip: { value: 0.5 }, uDrops: { value: Array.from({ length: 6 }, () => new THREE.Vector4()) }, ...boatU, uBoat: { value: v4s() } });
  const zeroMat = pass(ZERO, {});
  const run = (mat: THREE.Material, rt: RT) => { quad.material = mat; renderer.setRenderTarget(rt); renderer.render(passScene, passCam); };
  // The water's step and its reset compile now, in the background, as drawn into the simulation's own target: not at
  // the first boat or touch, which stalled a frame of the arrival.
  for (const m of [simMat, zeroMat]) {
    const was = renderer.getRenderTarget();
    quad.material = m;
    renderer.setRenderTarget(simB);
    warmUp(renderer, passScene, passCam);
    renderer.setRenderTarget(was);
  }

  // ------------------------------------------------------------------------------------------ the room the steel sees
  // As in the look frame: a dark room, a long soft box low beyond the table to the north-west and a dim one overhead.
  // In the table's own space, so it turns with it. What lies under the horizon (the city's own streets, lit by the sun
  // or the lamps) is added in the shader, so the hours can run without making the room again.
  const pmrem = new THREE.PMREMGenerator(renderer);
  let roomEnv: THREE.WebGLRenderTarget | null = null;
  const basic = (c: THREE.Color, side: THREE.Side = THREE.FrontSide) => new THREE.MeshBasicMaterial({ color: c, side });
  const linear = (r: number, g: number, b: number) => new THREE.Color().setRGB(r, g, b, THREE.LinearSRGBColorSpace);
  function room() {
    const sc = new THREE.Scene();
    const parts: THREE.Mesh[] = [];
    const add = (m: THREE.Mesh) => { parts.push(m); sc.add(m); return m; };
    add(new THREE.Mesh(new THREE.BoxGeometry(8, 6, 8), basic(linear(0.004, 0.0042, 0.0046), THREE.BackSide)));
    const panel = (w: number, h: number, pos: [number, number, number], c: THREE.Color) => {
      const m = add(new THREE.Mesh(new THREE.PlaneGeometry(w, h), basic(c, THREE.DoubleSide)));
      m.position.set(...pos);
      m.lookAt(0, 0.05, 0);
    };
    panel(2.6, 0.5, [-1.3, 0.75, -1.6], linear(2.3, 2.25, 2.15));
    panel(1.4, 1.4, [0.3, 1.8, 0.4], linear(0.7, 0.7, 0.72));
    const rt = pmrem.fromScene(sc, 0, 0.01, 20);
    parts.forEach(p => { p.geometry.dispose(); (p.material as THREE.Material).dispose(); });
    return rt;
  }
  roomEnv = room();
  // The studio the plinth stands in, as the empty table mirrors it at the end: a pale grey cyclorama round it, a broad
  // soft light overhead and a key low to one side.
  function studio() {
    const sc = new THREE.Scene();
    const parts: THREE.Mesh[] = [];
    const add = (m: THREE.Mesh) => { parts.push(m); sc.add(m); return m; };
    add(new THREE.Mesh(new THREE.BoxGeometry(8, 6, 8), basic(linear(0.15, 0.148, 0.144), THREE.BackSide)));
    const panel = (w: number, h: number, pos: [number, number, number], c: THREE.Color) => {
      const m = add(new THREE.Mesh(new THREE.PlaneGeometry(w, h), basic(c, THREE.DoubleSide)));
      m.position.set(...pos);
      m.lookAt(0, 0.05, 0);
    };
    panel(3.2, 3.2, [0, 2.8, 0], linear(1.5, 1.48, 1.45));
    panel(2.6, 1.4, [-2.2, 1.2, 1.4], linear(1.9, 1.87, 1.82));
    const rt = pmrem.fromScene(sc, 0, 0.01, 20);
    parts.forEach(p => { p.geometry.dispose(); (p.material as THREE.Material).dispose(); });
    return rt;
  }
  const studioEnv = studio();

  // ------------------------------------------------------------------------------------------ the tracer
  const envH = (roomEnv.texture.image as { height: number }).height;
  const maxMip = Math.log2(envH) - 2;
  const u = {
    tMax: { value: maxRT.texture }, tRest: { value: restTex }, tShadow: { value: shA.texture }, tSim: { value: simA.texture }, tLamp: { value: lampTex }, envMap: { value: roomEnv.texture }, studioMap: { value: studioEnv.texture },
    uFill: { value: new THREE.Vector3(0, 1, 0) }, uFillColor: { value: new THREE.Vector3() }, uNight: { value: 0 }, uSky: { value: new THREE.Vector3(1, 1, 1) }, uGround: { value: new THREE.Vector3() }, uDome: { value: new THREE.Vector3() }, uGlow: { value: new THREE.Vector3() },
    uCamG: { value: new THREE.Vector3() }, uGtoClip: { value: new THREE.Matrix4() },
    uLight: { value: new THREE.Vector3(0, 1, 0) }, uLightColor: { value: new THREE.Vector3(10, 10, 10) }, uSunDir: { value: new THREE.Vector2(0, 1) }, uTan: { value: 1 }, uEnv: { value: 4.5 },
    uPix: { value: 0.001 }, uWell: { value: WELL }, uFloor: { value: FLOOR }, uTop: { value: TOP }, uLit: { value: 1 }, uSun: { value: 1 }, uSwell: { value: 0 }, uPitch: { value: PITCH },
    uRiseT: { value: 0 }, uSink: { value: 0 }, uRoom: { value: 0 },
    uSpin: { value: new THREE.Vector2(1, 0) }, uWind: { value: 0 }, uWindDir: { value: new THREE.Vector2(1, 0) }, uWindT: { value: 0 },
    uCloud: { value: 0 }, uCloudAt: { value: new THREE.Vector2() }, uWet: { value: 0 },
    uBoat: boatU.uBoat, uBoatSize: boatU.uBoatSize, uBoatOn: boatU.uBoatOn,
    uFlood: { value: PLACES.map(p => p.flood ?? 0) }, uPicked: { value: new THREE.Vector2() },
  };
  const material = new THREE.ShaderMaterial({
    vertexShader: TRACE_VERT, fragmentShader: TRACE_FRAG, uniforms: u, side: THREE.BackSide,
    defines: {
      ...grid, STEPS: STEPS_AT(o.phone, RES), REFLECT_STEPS: 56 + 16 * (RES - 1), LAMP_K: (RES * RES).toFixed(1),
      FLOOR_G: FLOOR.toFixed(1), ...(o.phone ? {} : { REFLECT: 1 }),
      ...(DEBUG ? { DEBUG } : {}),
      ENVMAP_TYPE_CUBE_UV: 1, CUBEUV_TEXEL_WIDTH: 1 / (3 * Math.max(2 ** maxMip, 7 * 16)), CUBEUV_TEXEL_HEIGHT: 1 / envH, CUBEUV_MAX_MIP: maxMip.toFixed(1),
    },
  });
  // A cylinder just outside the pocket (its sides flat, so a little wider than the circle they stand for).
  const geo = new THREE.CylinderGeometry(1, 1, 1, 96, 1, false);
  const rOut = WELL * PITCH / Math.cos(Math.PI / 96);
  geo.scale(rOut, (TOP - FLOOR + 1) * PITCH, rOut);
  geo.translate(0, ((TOP + FLOOR - 1) / 2) * PITCH, 0);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.y = o.top;
  // The table turned so the look frame's camera (north-east of the tower, looking south-west) is the hero's.
  const VIEW_BEARING = 42, HERO_AZ = CITY_AZ;
  const cityPhi = Math.atan2(Math.sin(VIEW_BEARING * Math.PI / 180), -Math.cos(VIEW_BEARING * Math.PI / 180));
  const baseRot = THREE.MathUtils.degToRad(HERO_AZ) - cityPhi;
  mesh.rotation.y = baseRot;
  mesh.updateMatrixWorld();

  // ------------------------------------------------------------------------------------------ the light
  // The light as it stands over Copenhagen at a moment (`hours` after now, or after `at`), turned to the model's grid
  // (UTM's grid north is 2.95° east of true north here). The scroll runs the hours, so the light is placed every frame
  // it changes; the shadows follow it (a dozen small passes) once the tallest shadow's tip would have moved 0.4 of a pin,
  // which near noon is a frame in several and near sunset nearly every frame. Until then the shading reads the old
  // shadows with the sun they were cast by, so the two always agree.
  let light: Light = lightAt(o.at ?? new Date()), lightTime = o.at ?? new Date(), lightMs = 0, lightHours = NaN;
  const sunL = new THREE.Vector3(), sunBase = new THREE.Vector3(), tip = new THREE.Vector2(), tipCast = new THREE.Vector2(1e6, 1e6);
  const UP = new THREE.Vector3(0, 1, 0);
  // The visitor's turn of the table (radians, about its centre): the sun and the room stay where they are, so the light
  // falls on the city from another side and the shadows wheel round.
  let spin = 0;
  // The phone's tilt (tilt.ts): degrees the sun stands turned round and up from where it is at the hour.
  let tiltAz = 0, tiltEl = 0;
  // The weather at the hour the table is lit for (weather.ts), and as the shader has it (eased: the steel dries slowly).
  const wx: Weather = weatherAt(lightTime), windDir = new THREE.Vector2(1, 0);
  let wind01 = 0, wet = 0;
  void loadWeather().then(() => { lightHours = NaN; o.invalidate(); });
  const GRID_NORTH = 2.95;
  const toGrid = (az: number, el: number, out: THREE.Vector3) => {
    const a = THREE.MathUtils.degToRad(az - GRID_NORTH), e = THREE.MathUtils.degToRad(el);
    return out.set(Math.sin(a) * Math.cos(e), Math.sin(e), -Math.cos(a) * Math.cos(e));
  };
  function placeLight(hours: number) {
    const ms = Date.now();
    if (hours !== lightHours || ms - lightMs >= 30000) {
      lightHours = hours; lightMs = ms;
      lightTime = new Date((o.at ?? new Date()).valueOf() + hours * 3600e3);
      light = lightAt(lightTime);
      weatherAt(lightTime, wx);
      toGrid(light.az, light.shadeEl, sunBase);
      const [r, g, b] = light.color, n = light.night;
      u.uLightColor.value.set(r, g, b).multiplyScalar(1.5);  // (round heads return less of it than flat tops did)
      u.uGround.value.set(r * 0.038 + 0.05 * n, g * 0.038 + 0.028 * n, b * 0.038 + 0.012 * n);
      u.uFillColor.value.set(3.0, 3.3, 4.0).multiplyScalar(0.55 * n);
      // Under cloud the sky is brighter and greyer (and the sun's own light goes in the shader, cell by cell).
      const cl = wx.cloud;
      u.uSky.value.set(...light.sky).lerp(new THREE.Vector3(0.8, 0.82, 0.86), 0.5 * cl);
      u.uDome.value.set(0.24, 0.3, 0.4).lerp(new THREE.Vector3(0.36, 0.37, 0.39), cl).multiplyScalar(light.day * (1 + 0.9 * cl));
      u.uGlow.value.set(0.5, 0.36, 0.26).multiplyScalar(n * (1 + 0.8 * cl));  // the city's glow on the low sky after dark (on cloud, more)
      u.uNight.value = n;
      // The wind blows towards its bearing + 180°: in the grid (x east, z south), turned with the table below.
      const to = THREE.MathUtils.degToRad(wx.from + 180 - GRID_NORTH);
      windDir.set(Math.sin(to), -Math.cos(to));
    }
    // The sun (moved by the phone's tilt, never down to the horizon), the room's lamp and the wind as the table stands
    // (turned by the visitor's spin).
    if (tiltAz || tiltEl) toGrid(light.az + tiltAz, Math.max(light.shadeEl + tiltEl, light.shadeEl * 0.5), sunL);
    else sunL.copy(sunBase);
    sunL.applyAxisAngle(UP, -spin);
    u.uLight.value.copy(sunL);
    toGrid(305, 11, u.uFill.value).applyAxisAngle(UP, -spin);   // the room's low lamp, beyond the table to the north-west
    u.uSpin.value.set(Math.cos(spin), Math.sin(spin));
    u.uWindDir.value.copy(windDir).rotateAround(new THREE.Vector2(), spin);
    // Where a shadow's tip falls for each pin of height (the tallest pin's shadow is that times its height).
    const flat = Math.hypot(sunL.x, sunL.z), tan = Math.max(sunL.y / flat, 0.02);
    tip.set(sunL.x / flat / tan, sunL.z / flat / tan);
    if (tip.distanceTo(tipCast) * tower.h * RES > 0.4) shadowDirty = true;
  }

  // ------------------------------------------------------------------------------------------ the hand
  const hand = { x: 0, z: 0, px: 0, pz: 0, depth: 5, radius: 9, on: false, lastAt: -1e9, water: false, wet: false };
  let under: number | null = null;
  // What the hand stirs each frame, for the sound (pin-sound.ts): land pins it moves a second, its speed through water.
  const stir = { pins: 0, water: 0 };
  const inv = new THREE.Matrix4(), ray = new THREE.Ray(), ndcV = new THREE.Vector3();
  /** Where a pointer (NDC) meets the city: grid x, z, or null off the table. */
  function hit(ndc: THREE.Vector2, camera: THREE.Camera) {
    if (!loaded) return null;
    inv.copy(mesh.matrixWorld).invert();
    ray.origin.setFromMatrixPosition(camera.matrixWorld);
    ndcV.set(ndc.x, ndc.y, 0.5).unproject(camera);
    ray.direction.copy(ndcV).sub(ray.origin).normalize();
    ray.applyMatrix4(inv);
    const oG = ray.origin.clone().divideScalar(PITCH).add(new THREE.Vector3(N / 2, 0, N / 2));
    const d = ray.direction.clone().normalize();
    if (d.y >= 0) return null;
    // From where the ray comes down through the volume's top, in steps of half a pin, to the first pin above it.
    let t = Math.max(0, (TOP - oG.y) / d.y);
    const end = (FLOOR - oG.y) / d.y, k = sinkNow;
    for (; t < end; t += 0.5 / RES) {
      const x = oG.x + d.x * t, y = oG.y + d.y * t, z = oG.z + d.z * t;
      if (x < 0 || z < 0 || x >= N || z >= N) continue;
      const h = heights[texel(x, z)];
      if (h <= FLOOR) continue;
      if (y <= h * (1 - k)) return { x, z };
    }
    return null;
  }
  let sinkNow = 0, settled = false, rainAt = -1e9;
  // The boats' clock (s): it runs with the water's (two 1/120 s steps a frame), from the moment shown.
  let boatT = ((o.at ?? new Date()).valueOf() / 1000) % 86400, boatsWere = false;
  const boatAt = new Float32Array(BOATS * 4);
  const setBoats = (into: THREE.Vector4[], t: number) => { placeBoats(t, boatAt); into.forEach((v, i) => v.fromArray(boatAt, i * 4)); };
  setBoats(boatU.uBoat.value, boatT);
  // The lifted landmarks: the one wanted (lifts[0]) and the one before it, coming down. Each a spring (9 rad/s, damping
  // 0.42: up a touch past its lift, then settled), as the arrival's pins rise.
  const lifts = [{ id: 0, y: 0, v: 0, to: 0 }, { id: 0, y: 0, v: 0, to: 0 }];
  const liftOf = (a: number) => (a < -0.5 ? (lifts[0].id === -a ? lifts[0].y : 0) + (lifts[1].id === -a ? lifts[1].y : 0) : 0);
  /** A pin's height as it stands (lifted with its landmark; no press). */
  const stand = (k: number) => heights[k] + liftOf(rest[k * 4 + 3]);

  function step(now: number, dt: number, still: boolean) {
    if (introT >= 0) introT = still ? RISE : Math.min(RISE + 1, introT + dt * introSpeed / SLOW);
    const intro = Math.max(introT, 0);
    const rising = loaded && intro < RISE;
    u.uRiseT.value = intro;
    if (sinkNow !== lastSink) { lastSink = sinkNow; dirty = true; }
    // (a ring on the water runs on for a while after the hand has left it)
    const handActive = hand.on || now - hand.lastAt < (hand.water ? 14000 : 4500);
    // Rain falls on the harbour while the forecast has it and the city stands (its rings run on a while after).
    const rain = loaded && !still && sinkNow < 0.6 && intro >= RISE * 0.6 ? wx.rain : 0;
    if (rain > 0.05) rainAt = now;
    const raining = waterPins.length > 0 && now - rainAt < 8000;
    // The boats come up out of the water as the city rises and go down with it as it sinks.
    const boatsTo = loaded && sinkNow < 0.5 && intro >= RISE * 0.75 ? 1 : 0;
    const bo = boatU.uBoatOn;
    bo.value = still ? boatsTo : bo.value + (boatsTo - bo.value) * Math.min(1, dt * 1.2);
    if (Math.abs(bo.value - boatsTo) < 0.002) bo.value = boatsTo;
    const boats = bo.value > 0;
    if (boats !== boatsWere) { boatsWere = boats; dirty = true; }
    const prev = renderer.getRenderTarget();
    if ((handActive || raining || boats) && !still) {
      // Two fixed steps a frame (1/120 s), the fingertip moved along its path between frames; the raindrops fall at
      // random on the water, more of them and harder as the rain is heavier (a shower: a few a frame).
      const drops = simMat.uniforms.uDrops.value as THREE.Vector4[];
      const per = rain > 0.05 ? Math.min(6, rain * 2.2 + 0.6) : 0;
      // (the fingertip's speed over the table, pins a second: what its bow wave heaps up with)
      (simMat.uniforms.uHandV.value as THREE.Vector2).set(hand.x - hand.px, hand.z - hand.pz).multiplyScalar(hand.on ? 1 / Math.max(dt, 1 / 120) : 0);
      for (let k = 1; k <= 2; k++) {
        const f = k / 2;
        simMat.uniforms.tSim.value = sim[simIdx].texture;
        (simMat.uniforms.uHand.value as THREE.Vector4).set(hand.px + (hand.x - hand.px) * f, hand.pz + (hand.z - hand.pz) * f, hand.depth, hand.radius);
        simMat.uniforms.uHandOn.value = hand.on ? 1 : 0;
        simMat.uniforms.uDip.value = hand.depth < 0 ? 1.1 : 0.5;
        drops.forEach((d, j) => {
          if (j >= per || Math.random() > per - j) { d.z = 0; return; }
          const at = waterPins[Math.floor(Math.random() * waterPins.length)];
          d.set((at % NT + Math.random()) / RES, (Math.floor(at / NT) + Math.random()) / RES, 30 + 50 * Math.random(), 0);
        });
        if (boats) { boatT += 1 / 120; setBoats(simMat.uniforms.uBoat.value as THREE.Vector4[], boatT); }
        run(simMat, sim[1 - simIdx]);
        simIdx = 1 - simIdx;
      }
      simLive = true;
      if (handActive) dirty = true;                       // (rain only rings the water's surface: the heights stay)
      else if (boats) hulls = true;                       // (a boat moving on: the heights again, not the shadows)
    } else if (simLive) {
      run(zeroMat, sim[0]); run(zeroMat, sim[1]);
      simIdx = 0;
      simLive = false;
      hand.water = false;
      dirty = true;
    }
    setBoats(boatU.uBoat.value, boatT);
    boatU.uBoatDip.value = simLive ? BOAT_DIP : 0;
    u.tSim.value = sim[simIdx].texture;
    // (a press moves the pins across the fingertip's width; a mouse held over the roofs only dips the tall ones)
    const speed = hand.on && !still ? Math.hypot(hand.x - hand.px, hand.z - hand.pz) / Math.max(dt, 1 / 240) : 0;
    stir.water = hand.wet ? speed : 0;
    stir.pins = hand.wet ? 0 : speed * hand.radius * (hand.depth < 0 ? 1.1 : 0.12);
    hand.px = hand.x; hand.pz = hand.z;
    if (rising || (loaded && !settled)) dirty = true;      // (and once more after the wave, so it ends risen)
    let lifting = false;
    for (const l of lifts) {
      if (l.y === l.to && l.v === 0) continue;
      if (still) { l.y = l.to; l.v = 0; }
      for (let k = 0, h = Math.min(dt, 1 / 30) / 2; k < 2 && !still; k++) {
        l.v += (81 * (l.to - l.y) - 2 * 0.42 * 9 * l.v) * h;
        l.y += l.v * h;
      }
      if (Math.abs(l.to - l.y) < 0.003 && Math.abs(l.v) < 0.02) { l.y = l.to; l.v = 0; } else lifting = true;
      dirty = true;
    }
    (composeMat.uniforms.uLift.value as THREE.Vector4).set(lifts[0].id, lifts[0].y, lifts[1].id, lifts[1].y);
    u.uPicked.value.set(lifts[0].id, Math.min(1, Math.max(0, lifts[0].y / 2)));
    if ((dirty || hulls) && loaded) {
      settled = intro >= RISE;
      composeMat.uniforms.tSim.value = sim[simIdx].texture;
      composeMat.uniforms.uTime.value = intro;
      composeMat.uniforms.uSink.value = sinkNow;
      run(composeMat, hRT);
      reduceMat.uniforms.tSrc.value = hRT.texture; run(reduceMat, r4);
      reduceMat.uniforms.tSrc.value = r4.texture; run(reduceMat, r16);
      reduceMat.uniforms.tSrc.value = r16.texture; run(reduceMat, r64);
      run(combineMat, maxRT);
      if (dirty) shadowDirty = true;
    }
    if (shadowDirty && loaded) {
      const h = Math.hypot(sunL.x, sunL.z);
      (shadowMat.uniforms.uDir.value as THREE.Vector2).set(sunL.x / h, sunL.z / h);
      shadowMat.uniforms.uTan.value = sunL.y / h;
      u.uSunDir.value.set(sunL.x / h, sunL.z / h);
      u.uTan.value = sunL.y / h;
      tipCast.copy(tip);
      shadowMat.uniforms.tSrc.value = hRT.texture;
      shadowMat.uniforms.uStep.value = 1;
      shadowMat.uniforms.uInit.value = 1;
      run(shadowMat, shA);
      let src = shA, dst = shB;
      shadowMat.uniforms.uInit.value = 0;
      for (let s = 1; s < NT; s *= 2) {
        shadowMat.uniforms.tSrc.value = src.texture;
        shadowMat.uniforms.uStep.value = s;
        run(shadowMat, dst);
        [src, dst] = [dst, src];
      }
      u.tShadow.value = src.texture;
      shadowDirty = false;
    }
    dirty = hulls = false;
    renderer.setRenderTarget(prev);
    return rising || handActive || raining || lifting || (boats && !still);
  }

  const pocket = { value: 0 };
  const camL = new THREE.Vector3(), gToL = new THREE.Matrix4().makeScale(PITCH, PITCH, PITCH).multiply(new THREE.Matrix4().makeTranslation(-N / 2, 0, -N / 2));
  return {
    mesh,
    get ready() { return loaded; },
    /** The visitor's turn of the table on the plinth (radians), before the camera is placed on it for the frame. */
    turn(a: number) {
      if (a === spin) return;
      spin = a;
      mesh.rotation.y = baseRot + spin;
      mesh.updateMatrixWorld();
    },
    /** The phone's tilt: the sun turned `az` degrees round and `el` up from where it stands at the hour. */
    tilt(az: number, el: number) {
      if (az === tiltAz && el === tiltEl) return;
      tiltAz = az; tiltEl = el;
      o.invalidate();
    },
    /** The weather or the moment changed from outside (the page's sky): light the table again. */
    relight() { lightHours = NaN; o.invalidate(); },
    get failed() { return failed; },
    get light() { return light; },
    /** What the hand stirred this frame: land pins moved a second, its speed through the water (pins a second). */
    get stir() { return stir; },
    /** How many pins have come up so far (the arrival's count). */
    get risen() {
      if (introT < 0 || !order.length) return 0;
      const t = introT - 0.08;
      let lo = 0, hi = order.length;
      while (lo < hi) { const m = (lo + hi) >> 1; if (order[m] <= t) lo = m + 1; else hi = m; }
      return lo;
    },
    /** Where landmark i (its place in PLACES) stands, or null: its middle in the grid, its tallest pin, its reach. */
    landmark(i: number) { return marks[i] ?? null; },
    /** Pins a unit each way (2 on the fine table): the scene's sounds count the first table's pins. */
    get res() { return RES; },
    /** The landmark (its place in PLACES) under the pointer, or null. */
    get under() { return under; },
    /**
     * Stands landmark i (its place in PLACES; null for none) `pins` up out of the table, on a spring; the one lifted
     * before it goes back down.
     */
    lift(i: number | null, pins: number) {
      const id = i !== null && marks[i] ? i + 1 : 0;
      if (id && lifts[1].id === id) lifts.reverse();
      const [a, b] = lifts;
      if (!id || a.id === id) a.to = id ? pins : 0;
      else {
        if (a.id && (a.y !== 0 || a.v !== 0)) Object.assign(b, a, { to: 0 });
        Object.assign(a, { id, y: 0, v: 0, to: pins });
      }
      o.invalidate();
    },
    /** Start the arrival (the canvas is showing). */
    arrive() { if (introT < 0 && loaded) { introT = 0; o.invalidate(); } },
    /** The visitor scrolled before the arrival was over: finish it quickly. */
    rush() { introSpeed = 7; },
    get arriving() { return introT >= 0 && introT < RISE; },
    /** The arrival's clock: seconds of the rise (0 to RISE), -1 before it starts. */
    get intro() { return introT; },
    /** The moment whose light is on the city. */
    get lightTime() { return lightTime; },
    /** Its weather (weather.ts). */
    get weather() { return wx; },
    /** A point of the grid (x and z in pins from the north-west corner, y in pins up) in the world. */
    gridToWorld(x: number, y: number, z: number, out: THREE.Vector3) {
      return out.set((x - N / 2) * PITCH, y * PITCH, (z - N / 2) * PITCH).applyMatrix4(mesh.matrixWorld);
    },
    /** The world in grid space. */
    worldToGrid(p: THREE.Vector3, out: THREE.Vector3) {
      inv.copy(mesh.matrixWorld).invert();
      out.copy(p).applyMatrix4(inv).divideScalar(PITCH);
      return out.set(out.x + N / 2, out.y, out.z + N / 2);
    },
    /** The city's height at a pin as it stands (no press), in pins. */
    heightAt(x: number, z: number) {
      return x < 0 || z < 0 || x >= N || z >= N ? FLOOR : stand(texel(x, z)) * (1 - sinkNow);
    },
    /** Whether the straight line between two grid points passes over the roofs (a place's label isn't behind them). */
    clear(a: THREE.Vector3, b: THREE.Vector3) {
      const len = Math.hypot(b.x - a.x, b.z - a.z), n = Math.min(400, Math.ceil(len / 1.5));
      for (let i = 2; i < n; i++) {
        const f = i / n, x = a.x + (b.x - a.x) * f, z = a.z + (b.z - a.z) * f;
        if (x < 0 || z < 0 || x >= N || z >= N) break;
        if (stand(texel(x, z)) * (1 - sinkNow) > a.y + (b.y - a.y) * f) return false;
      }
      return true;
    },
    /**
     * Before drawing: the light, the press, the heights, the camera's place in the grid. `sink` 0 raised, 1 flat;
     * `lit` the studio's lights coming up (the room's reflections), `room` how bright the studio stands. Returns
     * whether the pins are still moving.
     */
    update(v: { now: number; dt: number; camera: THREE.PerspectiveCamera; sink: number; lit: number; room: number; still: boolean; height: number; hours: number }) {
      placeLight(v.hours);
      sinkNow = v.sink;
      const moving = step(v.now, v.dt, v.still);
      mesh.visible = loaded;
      pocket.value = loaded ? 1 : 0;
      // The camera in grid space, and grid space to the screen (the depth the pins write).
      mesh.updateMatrixWorld();
      inv.copy(mesh.matrixWorld).invert();
      camL.setFromMatrixPosition(v.camera.matrixWorld).applyMatrix4(inv);
      u.uCamG.value.set(camL.x / PITCH + N / 2, camL.y / PITCH, camL.z / PITCH + N / 2);
      u.uGtoClip.value.copy(v.camera.projectionMatrix).multiply(v.camera.matrixWorldInverse).multiply(mesh.matrixWorld).multiply(gToL);
      u.uPix.value = 2 * Math.tan(THREE.MathUtils.degToRad(v.camera.fov) / 2) / Math.max(1, v.height) / (v.camera.zoom || 1);
      u.uEnv.value = v.lit;
      // The sun goes down on the model as its pins sink into the plinth; the harbour's swell runs while time does.
      u.uSun.value = 1 - THREE.MathUtils.smoothstep(v.sink, 0.25, 0.75);
      // The city's exposure goes with it as the last pins sink flush: the table is the studio's again. (A camera's
      // exposure: by day the steel is opened up, as an eye adjusts; night keeps its dark.)
      u.uSink.value = v.sink;
      u.uRoom.value = v.room;
      u.uLit.value = 1 + 0.6 * light.day * (1 - THREE.MathUtils.smoothstep(v.sink, 0.55, 1.0));
      // The weather: eased, so an hour's change in the flight turns rather than jumps, and the steel dries slowly.
      const k = v.still ? 1 : 1 - Math.exp(-v.dt * 2.5);
      wind01 += (THREE.MathUtils.smoothstep(wx.wind, 1, 14) - wind01) * k;
      const wetTo = THREE.MathUtils.smoothstep(wx.rain, 0.05, 1.2);
      wet += (wetTo - wet) * (wetTo > wet ? k : k * 0.3);
      u.uWind.value = wind01;
      u.uWet.value = wet * (1 - THREE.MathUtils.smoothstep(v.sink, 0.3, 0.8));
      u.uCloud.value += (wx.cloud - u.uCloud.value) * k;
      if (!v.still) {
        u.uSwell.value += v.dt * (0.6 + 0.9 * wind01);
        u.uWindT.value += v.dt * (0.5 + 1.5 * wind01);
        // The clouds drift with the wind, a miniature's time-lapse: a 5 m/s breeze takes a cell across in about 10 s.
        u.uCloudAt.value.addScaledVector(u.uWindDir.value, -v.dt * (0.012 + 0.03 * wx.wind));
      }
      return moving || (!v.still && (wx.cloud > 0.02 || wind01 > 0.05));
    },
    /**
     * The pointer over the table: `hover` (a mouse: a fingertip held a little over the roofs, so the tall ones dip
     * under it), `press` (button down or a finger: down to the street), null when it leaves.
     */
    pointer(ndc: THREE.Vector2 | null, camera: THREE.Camera, mode: "hover" | "press" | null) {
      const at = ndc && mode ? hit(ndc, camera) : null;
      const now = performance.now();
      const id = at ? rest[texel(at.x, at.z) * 4 + 3] : 0;
      // A mouse resting on a landmark doesn't push it down: the page lifts it and names it instead (under).
      under = at && id < -0.5 ? Math.round(-id) - 1 : null;
      if (!at || (under !== null && mode === "hover")) {
        if (hand.on) { hand.on = false; hand.lastAt = now; o.invalidate(); }
        return !!at;
      }
      if (!hand.on) { hand.px = at.x; hand.pz = at.z; }
      hand.x = at.x; hand.z = at.z;
      hand.on = true;
      hand.depth = mode === "press" ? -0.6 : 6.5;
      hand.wet = rest[texel(at.x, at.z) * 4 + 1] > 1.5;
      if (hand.wet) hand.water = true;
      hand.radius = mode === "press" ? 15 : 10;
      hand.lastAt = now;
      o.invalidate();
      return true;
    },
    /** The plinth's stone top gives way to the pocket the pins stand in (once they are there to stand in it). */
    patchPlinth(m: THREE.Material, plinthTop: number) {
      const before = m.onBeforeCompile;
      m.onBeforeCompile = (shader, r) => {
        before.call(m, shader, r);
        shader.uniforms.uPocket = pocket;
        shader.vertexShader = shader.vertexShader
          .replace("#include <common>", "#include <common>\nvarying vec3 vPinW;")
          .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvPinW = (modelMatrix * vec4(transformed, 1.0)).xyz;");
        shader.fragmentShader = shader.fragmentShader
          .replace("#include <common>", "#include <common>\nvarying vec3 vPinW;\nuniform float uPocket;")
          .replace("void main() {", `void main() {\n  if (uPocket > 0.5 && vPinW.y > ${(plinthTop - 0.0008).toFixed(4)} && length(vPinW.xz) < ${(WELL * PITCH).toFixed(5)}) discard;`);
      };
      const key = m.customProgramCacheKey();
      m.customProgramCacheKey = () => "pin-pocket|" + key;
      m.needsUpdate = true;
    },
    dispose() {
      alive = false;
      for (const rt of [simA, simB, hRT, r4, r16, r64, maxRT, shA, shB]) rt.dispose();
      for (const m of [composeMat, reduceMat, combineMat, shadowMat, simMat, zeroMat, material]) m.dispose();
      restTex.dispose(); lampTex.dispose(); tri.dispose(); geo.dispose(); roomEnv?.dispose(); studioEnv.dispose(); pmrem.dispose();
    },
  };
}
