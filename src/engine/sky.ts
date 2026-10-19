/**
 * Where the sun and the moon stand over Copenhagen at a moment: the low-precision formulas of Astronomical Algorithms
 * (Meeus) as suncalc uses them, good to a fraction of a degree, which is finer than a pin. Bearings are compass
 * degrees (0 north, 90 east), elevations degrees above the horizon, refraction included.
 */
const RAD = Math.PI / 180, E = RAD * 23.4397;
export const COPENHAGEN = { lat: 55.676, lon: 12.578 };   // Slotsholmen

const days = (t: Date) => t.valueOf() / 86400000 - 0.5 + 2440588 - 2451545;
const rightAscension = (l: number, b: number) => Math.atan2(Math.sin(l) * Math.cos(E) - Math.tan(b) * Math.sin(E), Math.cos(l));
const declination = (l: number, b: number) => Math.asin(Math.sin(b) * Math.cos(E) + Math.cos(b) * Math.sin(E) * Math.sin(l));
const sidereal = (d: number, lw: number) => RAD * (280.16 + 360.9856235 * d) - lw;
const refraction = (h: number) => {
  h = Math.max(h, 0);
  return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
};

function place(d: number, ra: number, dec: number) {
  const lw = -COPENHAGEN.lon * RAD, phi = COPENHAGEN.lat * RAD, H = sidereal(d, lw) - ra;
  let el = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
  el += refraction(el);
  // From south, westward (suncalc's convention), turned into a compass bearing.
  const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi));
  return { az: ((az / RAD + 180) % 360 + 360) % 360, el: el / RAD };
}

export function sunAt(t: Date) {
  const d = days(t);
  const M = RAD * (357.5291 + 0.98560028 * d);
  const C = RAD * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
  const L = M + C + RAD * 102.9372 + Math.PI;
  return place(d, rightAscension(L, 0), declination(L, 0));
}

function moonCoords(d: number) {
  const L = RAD * (218.316 + 13.176396 * d), M = RAD * (134.963 + 13.064993 * d), F = RAD * (93.272 + 13.22935 * d);
  const l = L + RAD * 6.289 * Math.sin(M), b = RAD * 5.128 * Math.sin(F);
  return { ra: rightAscension(l, b), dec: declination(l, b), l, b };
}

/** The moon's place and how much of it is lit (0 new, 1 full). */
export function moonAt(t: Date) {
  const d = days(t), m = moonCoords(d);
  const M = RAD * (357.5291 + 0.98560028 * d);
  const Ls = M + RAD * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M)) + RAD * 102.9372 + Math.PI;
  const sRa = rightAscension(Ls, 0), sDec = declination(Ls, 0);
  const phi = Math.acos(Math.sin(sDec) * Math.sin(m.dec) + Math.cos(sDec) * Math.cos(m.dec) * Math.cos(sRa - m.ra));
  const inc = Math.atan2(149598000 * Math.sin(phi), 385001 - 149598000 * Math.cos(phi));
  return { ...place(d, m.ra, m.dec), lit: (1 + Math.cos(inc)) / 2 };
}

export type Light = {
  kind: "sun" | "moon" | "night";         // what the caption names: the sun while it is up, else the moon, else neither
  az: number; el: number;                 // where the light that casts the shadows stands (degrees): the sun, or the moon
  shadeEl: number;                        // the elevation the shading uses (never quite flat)
  color: [number, number, number];        // that light, linear, times its irradiance on the table (none once both are down)
  day: number;                            // 1 while the sun is well up, 0 once civil twilight ends (7° down): the sky's own light
  night: number;                          // 0 by day, 1 once the sky is dark: the city's lamps come on from sunset
  sky: [number, number, number];          // the room's light: neutral by day, blue through twilight, low and cool at night
};

/**
 * The light on the table at a moment, continuous through the day, so a scroll through the hours never jumps: the sun
 * while it is up (warmer as it gets low), fading out as it sets (to nothing 3° under the horizon), then the moon, coming
 * up from nothing as the sky darkens and fading as it sets, brighter the fuller it is. Through twilight the room turns
 * blue and the city's lamps come on. The twilight sky keeps its light until civil twilight ends and the lamps come on
 * from sunset, as Copenhagen's do, so the half hour after sunset, between the sun gone and the moon not yet shown, is
 * not the darkest of the evening (it was until 19 October, with the lamps coming on only after it).
 */
export function lightAt(t: Date): Light {
  const sun = sunAt(t);
  const night = 1 - smooth(-6, 1, sun.el);
  const twilight = smooth(-12, -2, sun.el) * (1 - smooth(-1, 6, sun.el));
  const tone = (d: [number, number, number], n: [number, number, number]): [number, number, number] =>
    [1 + (d[0] - 1) * twilight + (n[0] - 1) * night * (1 - twilight), 1 + (d[1] - 1) * twilight + (n[1] - 1) * night * (1 - twilight), 1 + (d[2] - 1) * twilight + (n[2] - 1) * night * (1 - twilight)];
  const sky = tone([0.55, 0.7, 1.2], [0.2, 0.23, 0.32]), day = smooth(-7, 8, sun.el);
  if (sun.el > -3) {
    const k = smooth(2, 24, sun.el), e = (6 + 9 * k) * smooth(-3, 3, sun.el);
    return { kind: sun.el > -0.83 ? "sun" : "night", az: sun.az, el: sun.el, shadeEl: Math.max(sun.el, 1.6),
      color: [e, e * (0.56 + 0.38 * k), e * (0.34 + 0.52 * k)], day, night, sky };
  }
  const moon = moonAt(t);
  const e = (3.2 + 4 * moon.lit) * smooth(0, 5, moon.el) * smooth(-3, -8, sun.el);
  return { kind: moon.el > 0 ? "moon" : "night", az: moon.az, el: moon.el, shadeEl: Math.max(moon.el, 3),
    color: [e * 0.72, e * 0.82, e], day, night, sky };
}

function smooth(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
