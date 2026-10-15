/**
 * The boats on the table's harbour (pin-table.ts): canal tours round Slotsholmen and through Christianshavn, and the
 * harbour bus up and down Inderhavnen, each a few pins raised out of the water as it passes, leaving its wake in the
 * water's wave equation. A miniature's time-lapse, like the clouds: they run about three times as fast as the real ones.
 * Routes: the middle of each channel in the model's grid (x east, z south, in pins), found along the table's water
 * (OpenStreetMap's) by a path that keeps at least four pins off the quays, a point every 8 pins.
 */
type Route = { closed: boolean; pts: number[] };
const ROUTES: Route[] = [
  // Round Slotsholmen, as the canal tours go: from Børsgraven west along Slotsholmens Kanal past Holmens Kirke and
  // Gammel Strand, south down Frederiksholms Kanal, out into the harbour and back up it.
  { closed: true, pts: [303.6,219.5,295.8,217.9,288.4,215,281.7,210.8,274.8,206.9,268.7,201.8,262,197.4,254.7,194.5,248.1,190.1,241.5,185.6,234.8,181.2,228.2,176.8,221.5,172.4,214.9,167.9,208.3,163.5,201.6,159.1,194.6,155.4,187,153,179,153.1,171.4,155.5,163.9,158.2,157.1,162.3,150.2,166.2,144,171.3,137.4,175.8,131.7,181.3,126.4,187.3,121.4,193.4,116.4,199.6,111.2,205.7,106.7,212.2,101.6,218.4,96.5,224.5,91.5,230.7,87.5,237.6,89,245,93.4,251.6,98.5,257.8,102.9,264.4,108,270.5,112.9,276.9,117.5,283.3,122.5,289.5,127.1,296,132.1,302.2,136.7,308.7,141.7,315,146.4,321.4,151.2,327.8,156.3,333.9,160.7,340.5,165.8,346.7,170.3,353.2,175.3,359.4,180.3,365.6,185.6,371.6,191.2,377.2,196.9,382.9,202.5,388.5,208.1,394.1,213.4,400.1,215.3,407.8,216,415.7,217.5,422.4,223.2,416.8,228.9,411.1,234.5,405.5,240.1,399.9,245.8,394.2,251.4,388.6,257.1,382.9,263.2,377.8,268.8,372.2,274.5,366.5,280.1,360.9,285.8,355.2,291.4,349.6,297,344,302.7,338.3,308.3,332.7,314,327,319.7,321.5,326.2,316.8,332.5,312,338.4,306.6,344,301,349.7,295.3,355.3,289.7,361,284,366.6,278.4,372.2,272.8,377.9,267.1,383.2,261.2,384,253.4,383.9,245.4,379.1,239.1,373,234,366.1,230,358.3,229,350.4,228,342.7,226.1,334.9,224.3,327.2,222.7,319.4,221.2,311.5,220] },
  // Through Christianshavn: down the harbour, in across from Den Sorte Diamant, along Christianshavns Kanal (off the
  // table's edge for a stretch, where the model ends: the boats sink into the rim and come up again) and back out at its
  // north end.
  { closed: true, pts: [428.6,210.4,422.5,215.5,416.4,220.6,410.7,226.3,405.1,231.9,399.6,237.7,397.9,245.2,393.4,251.6,387.7,257.3,382.1,262.9,376.4,268.6,370.8,274.2,365.2,279.8,359.5,285.5,353.9,291.1,348.2,296.8,342.6,302.4,337,308,331,313.3,324.4,317.8,318.7,323.3,313,329,307.4,334.6,301.8,340.2,296.1,345.9,290.5,351.5,284.8,357.2,279.2,362.8,273.6,368.4,274.2,372,282.2,372,289.9,373.3,296,378.4,302.2,383.5,307.9,388.9,314.1,394,320.2,399.1,326.3,404.2,332.7,408.9,339.3,413.3,346,417.6,352.1,422.7,358,428,364.1,433.1,370.2,438.3,376.1,443.7,382.2,448.8,388.5,453.5,396.2,452.6,401.9,447,407,440.9,412.1,434.8,417.2,428.7,422.2,422.5,427.3,416.4,432.4,410.3,437.5,404.2,442.6,398.1,447.7,391.9,453,386,458.1,379.9,463.2,373.8,468.3,367.7,473.4,361.6,478.5,355.5,483.7,349.3,488.8,343.2,492.2,336.1,495.3,328.7,500.4,322.6,505.4,316.4,507.7,308.8,509.6,301,511.4,293.3,513.3,285.5,515.1,277.7,516.7,269.9,515.9,262,514.9,254.1,513.9,246.2,512.8,238.3,511.1,230.6,507.2,223.6,503.3,216.7,499.4,209.7,495,203,490.2,196.7,484,191.7,477.4,187.3,470.1,187.6,463.5,192.1,456.9,196.6,450.3,201,443.7,205.4,436,207.6] },
  // The harbour bus: up and down Inderhavnen.
  { closed: false, pts: [200,443,205.2,436.9,210.3,430.8,215.4,424.7,221,419,226.6,413.4,232.3,407.7,237.9,402.1,243.6,396.4,249.2,390.8,254.9,385.1,261,380,266.6,374.4,272.3,368.7,277.9,363.1,283.5,357.5,289.2,351.8,294.8,346.2,300.5,340.5,306.1,334.9,311.8,329.2,317.4,323.6,323.6,318.6,330.2,314.2,336.2,308.8,341.8,303.2,347.5,297.5,353.1,291.9,358.7,286.3,364.4,280.6,370,275,375.7,269.3,381.3,263.7,387,258,392.6,252.4,397.9,246.4,398.9,238.6,404.3,232.7,409.9,227.1,415.5,221.5,421.7,216.3,427.5,211,433.7,205.9,439.8,200.8,446.4,196.3,452.6,191.2,458.7,186.1,464.4,180.6,470,175] },
];

// The fleet: three canal boats round Slotsholmen and two through Christianshavn (about 22 m by 5.5 m, a long glass
// cabin), and the harbour bus (25 m by 7.5 m, higher). Sizes in pins (2.5 m): half the length, half the beam, the deck's
// and the cabin's height over the water.
const FLEET = [
  { route: 0, phase: 0, speed: 3.2, size: [4.5, 1.1, 0.55, 0.95] },
  { route: 0, phase: 1 / 3, speed: 3.2, size: [4.5, 1.1, 0.55, 0.95] },
  { route: 0, phase: 2 / 3, speed: 3.2, size: [4.5, 1.1, 0.55, 0.95] },
  { route: 1, phase: 0.1, speed: 3.2, size: [4.5, 1.1, 0.55, 0.95] },
  { route: 1, phase: 0.6, speed: 3.2, size: [4.5, 1.1, 0.55, 0.95] },
  { route: 2, phase: 0.3, speed: 5, size: [5, 1.5, 0.7, 1.4] },
] as const;
export const BOATS = FLEET.length;
const BUS_EASE = 14, BUS_WAIT = 6;              // pins it takes to get up to speed and to stop; seconds at each end

// The routes as arc length: each point's distance along its route.
const lengths = ROUTES.map(r => {
  const p = r.pts, n = p.length / 2, s = [0];
  for (let i = 1; i <= (r.closed ? n : n - 1); i++) {
    const a = (i - 1) % n, b = i % n;
    s.push(s[i - 1] + Math.hypot(p[b * 2] - p[a * 2], p[b * 2 + 1] - p[a * 2 + 1]));
  }
  return s;
});

/** Where a route is s pins along it: x, z and the way it runs (a unit vector), on a Catmull-Rom curve through its points. */
function along(ri: number, s: number, out: Float32Array, at: number) {
  const r = ROUTES[ri], p = r.pts, n = p.length / 2, ls = lengths[ri], L = ls[ls.length - 1];
  s = r.closed ? ((s % L) + L) % L : Math.min(Math.max(s, 0), L - 1e-3);
  let i = 0;
  while (i < ls.length - 2 && ls[i + 1] <= s) i++;
  const t = (s - ls[i]) / Math.max(1e-6, ls[i + 1] - ls[i]);
  const k = (j: number) => (r.closed ? ((j % n) + n) % n : Math.min(Math.max(j, 0), n - 1)) * 2;
  const a = k(i - 1), b = k(i), c = k(i + 1), d = k(i + 2);
  for (let e = 0; e < 2; e++) {
    const p0 = p[a + e], p1 = p[b + e], p2 = p[c + e], p3 = p[d + e];
    out[at + e] = 0.5 * (2 * p1 + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (3 * p1 - p0 - 3 * p2 + p3) * t * t * t);
    out[at + 2 + e] = 0.5 * ((p2 - p0) + 2 * (2 * p0 - 5 * p1 + 4 * p2 - p3) * t + 3 * (3 * p1 - p0 - 3 * p2 + p3) * t * t);
  }
  const l = Math.hypot(out[at + 2], out[at + 3]) || 1;
  out[at + 2] /= l; out[at + 3] /= l;
}

/** The harbour bus's place along its route t seconds in: up at speed, easing into each end, a wait there, and back. */
function shuttle(L: number, v: number, t: number) {
  const run = (L + 2 * BUS_EASE) / v, cycle = 2 * (run + BUS_WAIT);
  let u = ((t % cycle) + cycle) % cycle;
  const back = u >= run + BUS_WAIT;
  if (back) u -= run + BUS_WAIT;
  const ta = 2 * BUS_EASE / v;                          // the time it takes to get up to speed (or to stop)
  const s = u >= run ? L : u < ta ? v * u * u / (2 * ta) : u > run - ta ? L - v * (run - u) ** 2 / (2 * ta) : BUS_EASE + v * (u - ta);
  return { s: back ? L - s : s, back };
}

/** Each boat's size (four numbers each: half the length, half the beam, deck and cabin over the water, in pins). */
export const BOAT_SIZE = Float32Array.from(FLEET.flatMap(b => b.size));
/** Each boat's kind: 0 a canal boat, 1 the harbour bus. */
export const BOAT_KIND = FLEET.map(b => (b.route === 2 ? 1 : 0));

/** Where the boats are t seconds in: four numbers each into out (x, z, and the way the bow points, a unit vector). */
export function placeBoats(t: number, out: Float32Array) {
  FLEET.forEach((b, i) => {
    const ls = lengths[b.route], L = ls[ls.length - 1];
    if (ROUTES[b.route].closed) along(b.route, b.phase * L + b.speed * t, out, i * 4);
    else {
      const { s, back } = shuttle(L, b.speed, t + b.phase * 2 * ((L + 2 * BUS_EASE) / b.speed + BUS_WAIT));
      along(b.route, s, out, i * 4);
      if (back) { out[i * 4 + 2] *= -1; out[i * 4 + 3] *= -1; }
    }
  });
  return out;
}
