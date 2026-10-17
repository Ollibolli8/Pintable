import "./style.css";
import { createStage, type News, type Region, type Stage } from "../src/stage";
import { PINS_COUNT, PINS_FINE, PLACES } from "../src/engine/places";
import { clockAt, dayText, hhmm, lightText, moment, sunTimes } from "../src/clock";
import { createDial } from "./dial";

/**
 * The demo: the table in its ring, and the moment (an hour of today, midsummer or midwinter on Copenhagen's clock), the
 * sky (the forecast or one picked) and the places round it. Everything it sets goes through the stage's own
 * calls (src/stage.ts); nothing here draws.
 */
const $ = <T extends Element>(s: string) => document.querySelector(s) as T;
const root = $<HTMLElement>(".ps"), canvas = $<HTMLCanvasElement>(".ps canvas"), label = $<HTMLElement>(".ps-label");
const read = $<HTMLElement>(".ps-read"), hint = $<HTMLElement>(".ps-hint");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const touch = matchMedia("(pointer: coarse)").matches;
$<HTMLElement>(".ps-count").textContent = PINS_COUNT.toLocaleString("en-GB");

// ------------------------------------------------------------------------------------------ the moment
const now = clockAt(Date.now());
const days = [
  { label: "Today", y: now.y, m: now.m, d: now.d },
  { label: "21 June", y: now.y, m: 5, d: 21 },
  { label: "21 December", y: now.y, m: 11, d: 21 },
];
let day = 0, minute = Math.round(now.min / 5) * 5, news: News | null = null, stage: Stage | null = null;
const when = () => moment(days[day].y, days[day].m, days[day].d, minute);
const marks = () => sunTimes(days[day].y, days[day].m, days[day].d).map(t => Math.round(t / 5) * 5);
const hour = createDial({
  label: "Hour", value: minute, min: 0, max: 1435, step: 5, gap: 2, every: 12, draw: 3, marks: marks(),
  format: hhmm, spoken: v => `${hhmm(v)} in Copenhagen`, note: () => lightText(news?.light ?? null),
  onChange: v => { minute = v; stage?.setMoment(when()); showRead(); },
});
$<HTMLElement>(".ps-dials").prepend(hour.el);

function radios(sel: string, labels: string[], on: (i: number) => void) {
  const group = $<HTMLElement>(sel);
  labels.forEach((text, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "ps-chip"; b.setAttribute("role", "radio"); b.textContent = text;
    b.setAttribute("aria-checked", String(i === 0));
    b.addEventListener("click", () => {
      group.querySelectorAll("button").forEach((x, j) => x.setAttribute("aria-checked", String(j === i)));
      on(i);
    });
    group.append(b);
  });
}
radios(".ps-day", days.map(d => d.label), i => {
  day = i;
  hour.setMarks(marks());
  stage?.setMoment(when());
  showRead();
});
const SKIES = [null, "clear", "rain", "storm"];
radios(".ps-sky", ["Forecast", "Clear", "Rain", "Storm"], i => stage?.setSky(SKIES[i]));

function showRead() {
  const D = days[day];
  if (!news) { read.textContent = ""; return; }
  read.innerHTML = news.arriving
    ? `<span>${news.risen.toLocaleString("en-GB")} pins</span>`
    : `<span>${dayText(D.y, D.m, D.d)} · ${hhmm(minute)}</span><span>${news.weather}${news.source === "met" ? " · MET Norway" : ""}</span>`;
}

// ------------------------------------------------------------------------------------------ places
const places = $<HTMLSelectElement>(".ps-places");
PLACES.forEach((p, i) => {
  if (p.kind !== "building" || !p.fact) return;
  const o = document.createElement("option");
  o.value = String(i); o.textContent = p.name;
  places.append(o);
});
places.addEventListener("change", () => {
  if (places.value === "") stage?.home();
  else stage?.choose(Number(places.value));
});
hint.textContent = reduced ? "Motion is off: set the hour, the day and the sky." : touch
  ? "Press the pins · two fingers turn the table and go closer" : "Press the pins · drag beside the table or right-drag to turn it · scroll to go closer";

// ------------------------------------------------------------------------------------------ the stage
// The table sits in the dark the type leaves: right of the paragraph and over the dials on a wide screen, between them
// on a tall one.
const region = (w: number, h: number): Region => {
  const c = canvas.getBoundingClientRect();
  const y = (px: number) => 1 - (2 * (px - c.top)) / h, x = (px: number) => -1 + (2 * (px - c.left)) / w;
  const head = $<HTMLElement>(".ps-head").getBoundingClientRect(), dials = $<HTMLElement>(".ps-dials").getBoundingClientRect();
  const low = y(dials.top - 14);
  if (h > w * 1.1) return { x0: -1, x1: 1, y0: low, y1: y(head.bottom + 10) };
  return { x0: x(head.right + 24), x1: 1, y0: low, y1: y(40) };
};
const fail = () => { root.dataset.gl = "off"; };
try {
  stage = createStage({
    canvas, city: PINS_FINE ? "city-fine.png" : "city.png", marks: PINS_FINE ? "landmarks-fine.png" : "landmarks.png", phone: matchMedia("(max-width: 700px)").matches,
    pixelRatio: Math.min(devicePixelRatio || 1, touch ? 1.5 : 2), still: reduced, at: new Date(), region,
    onReady: () => { root.dataset.gl = "on"; void document.fonts?.ready.then(() => stage?.refit()); },
    onFail: fail,
    onFit: (x, y, d) => { root.style.setProperty("--ring-x", `${x | 0}px`); root.style.setProperty("--ring-y", `${y | 0}px`); root.style.setProperty("--ring-d", `${d | 0}px`); },
    onNews: n => { news = n; hour.refresh(); showRead(); },
    onLabel: (i, x, y) => {
      label.hidden = i === null;
      if (i === null) return;
      label.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      const p = PLACES[i];
      if (label.dataset.at !== String(i)) { label.dataset.at = String(i); label.innerHTML = `<b></b><span></span>`; label.querySelector("b")!.textContent = p.name; label.querySelector("span")!.textContent = p.fact ?? ""; }
    },
  });
  stage.setMoment(when());
} catch { fail(); }
const io = new IntersectionObserver(([e]) => stage?.setStill(reduced || !e.isIntersecting), { threshold: 0.05 });
io.observe(root);
canvas.parentElement!.addEventListener("keydown", e => { if (stage?.key(e.key)) e.preventDefault(); });
