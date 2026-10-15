import { sunAt, type Light } from "./engine/sky";

/**
 * Copenhagen's clock, for setting the table's moment by the city's own hours (whatever the visitor's time zone), and
 * the light in a few words. Dates are set by hand rather than through Intl's formats, which differ between Node and the
 * browsers in their commas (a page rendered on a server would then disagree with itself).
 */
const TZ = "Europe/Copenhagen";
const wall = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h23" });
export type Clock = { y: number; m: number; d: number; min: number; s: number };

/** Copenhagen's wall clock at a moment (month from 0, minutes after midnight). */
export function clockAt(ms: number): Clock {
  const p = Object.fromEntries(wall.formatToParts(new Date(ms)).map(x => [x.type, Number(x.value)]));
  return { y: p.year, m: p.month - 1, d: p.day, min: p.hour * 60 + p.minute, s: p.second };
}

/** The moment of a Copenhagen wall-clock time (minutes after its midnight). */
export function moment(y: number, m: number, d: number, min: number) {
  const guess = Date.UTC(y, m, d, 0, min);
  const ahead = (t: number) => { const c = clockAt(t); return Date.UTC(c.y, c.m, c.d, 0, c.min, c.s) - Math.floor(t / 1000) * 1000; };
  let t = guess - ahead(guess);
  const again = guess - ahead(t);           // (the hour the clocks change: the offset at the answer, not at the guess)
  if (again !== t) t = again;
  return new Date(t);
}

export const hhmm = (min: number) => `${String(Math.floor(min / 60) % 24).padStart(2, "0")}:${String(Math.round(min % 60)).padStart(2, "0")}`;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** "Thu 15 Oct" */
export const dayText = (y: number, m: number, d: number) => `${WEEKDAYS[new Date(Date.UTC(y, m, d)).getUTCDay()]} ${d} ${MONTHS[m]}`;

/** Sunrise and sunset over the city that day (minutes after Copenhagen's midnight), where the sun rises at all. */
export function sunTimes(y: number, m: number, d: number) {
  const el = (min: number) => sunAt(moment(y, m, d, min)).el + 0.83;
  const out: number[] = [];
  for (let a = 0; a < 1440; a += 20) {
    const b = a + 20;
    if (Math.sign(el(a)) === Math.sign(el(b))) continue;
    let lo = a, hi = b;
    for (let k = 0; k < 12; k++) { const mid = (lo + hi) / 2; if (Math.sign(el(mid)) === Math.sign(el(lo))) lo = mid; else hi = mid; }
    out.push(Math.round((lo + hi) / 2));
  }
  return out;
}

const COMPASS = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];
const compass = (az: number) => COMPASS[Math.round((((az % 360) + 360) % 360) / 45) % 8];
/** "Sun 23° south-west", "Moon 12° east", "Night". */
export function lightText(l: Light | null) {
  if (!l) return "";
  if (l.kind === "sun") return `Sun ${Math.max(0, Math.round(l.el))}° ${compass(l.az)}`;
  if (l.kind === "moon") return `Moon ${Math.round(l.el)}° ${compass(l.az)}`;
  return "Night";
}
