import { COPENHAGEN } from "./sky";

/**
 * Copenhagen's weather for the opening, hour by hour: MET Norway's forecast for Slotsholmen (api.met.no's
 * Locationforecast, CC BY 4.0, open to browsers), read once a visit and kept for its own expiry time. The table takes
 * the hour it is lit for (now, or as far on as the flight has run): the wind sets the harbour's swell and stirs the
 * trees, the cloud cover throws shadows that drift with the wind and, past a point, takes the sun, and rain wets the
 * steel and rings the water. Without it (offline, refused, slow) the city has fair weather. `?weather=` sets it
 * (clear, fair, cloudy, overcast, rain, storm) for checks and films. (DMI's forecast API was the first choice; on
 * 14 October it turned requests away, 429 "server busy".)
 */
export type Weather = {
  wind: number;        // m/s at 10 m
  from: number;        // compass degrees the wind comes from
  cloud: number;       // cover, 0 to 1
  rain: number;        // mm in the hour
  temp: number;        // °C
};
type Row = Weather & { t: number };

const FAIR: Weather = { wind: 4, from: 240, cloud: 0.2, rain: 0, temp: 12 };
const SET: Record<string, Weather> = {
  clear: { wind: 2, from: 240, cloud: 0, rain: 0, temp: 14 },
  fair: FAIR,
  cloudy: { wind: 6, from: 250, cloud: 0.7, rain: 0, temp: 11 },
  overcast: { wind: 5, from: 230, cloud: 1, rain: 0, temp: 9 },
  rain: { wind: 7, from: 220, cloud: 1, rain: 2.4, temp: 8 },
  storm: { wind: 17, from: 260, cloud: 0.85, rain: 4, temp: 7 },
};
const KEY = "pintable-weather", URL_ = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${COPENHAGEN.lat}&lon=${COPENHAGEN.lon}`;

let rows: Row[] | null = null;
let fixed: Weather | null = null;
let source: "met" | null = null;

function parse(json: unknown): Row[] {
  const ts = (json as { properties?: { timeseries?: unknown[] } })?.properties?.timeseries ?? [];
  const out: Row[] = [];
  for (const s of ts as { time: string; data: { instant: { details: Record<string, number> }; next_1_hours?: { details?: { precipitation_amount?: number } }; next_6_hours?: { details?: { precipitation_amount?: number } } } }[]) {
    const d = s.data?.instant?.details;
    if (!d) continue;
    const rain = s.data.next_1_hours?.details?.precipitation_amount ?? (s.data.next_6_hours?.details?.precipitation_amount ?? 0) / 6;
    out.push({ t: Date.parse(s.time), wind: d.wind_speed ?? FAIR.wind, from: d.wind_from_direction ?? FAIR.from, cloud: (d.cloud_area_fraction ?? 20) / 100, rain, temp: d.air_temperature ?? FAIR.temp });
  }
  return out.filter(r => Number.isFinite(r.t)).sort((a, b) => a.t - b.t);
}

/** Reads the forecast (once). Resolves when it is in, or has failed (fair weather then). */
export function loadWeather(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const want = new URLSearchParams(location.search).get("weather");
  if (want && SET[want]) { fixed = SET[want]; return Promise.resolve(); }
  try {
    const kept = JSON.parse(localStorage.getItem(KEY) ?? "null") as { until: number; rows: Row[] } | null;
    if (kept && kept.until > Date.now() && kept.rows?.length) { rows = kept.rows; source = "met"; return Promise.resolve(); }
  } catch { /* no storage: fetch */ }
  const ctl = new AbortController();
  const late = setTimeout(() => ctl.abort(), 6000);
  return fetch(URL_, { signal: ctl.signal, credentials: "omit" })
    .then(async r => {
      if (!r.ok) throw new Error(`weather ${r.status}`);
      const got = parse(await r.json());
      if (!got.length) throw new Error("weather: empty");
      rows = got;
      source = "met";
      const until = Date.parse(r.headers.get("expires") ?? "") || Date.now() + 30 * 60e3;
      try { localStorage.setItem(KEY, JSON.stringify({ until: Math.max(until, Date.now() + 10 * 60e3), rows: got })); } catch { /* fine */ }
    })
    .catch(() => { /* fair weather */ })
    .finally(() => clearTimeout(late));
}

const lerpDeg = (a: number, b: number, k: number) => a + ((((b - a) % 360) + 540) % 360 - 180) * k;

/** The weather at a moment: the forecast's two hours either side, blended (fair weather without one). */
export function weatherAt(t: Date, out: Weather = { ...FAIR }): Weather {
  if (fixed) return Object.assign(out, fixed);
  if (!rows?.length) return Object.assign(out, FAIR);
  const ms = t.valueOf();
  let i = 0;
  while (i < rows.length - 1 && rows[i + 1].t <= ms) i++;
  const a = rows[i], b = rows[Math.min(i + 1, rows.length - 1)];
  const k = b.t > a.t ? Math.min(1, Math.max(0, (ms - a.t) / (b.t - a.t))) : 0;
  out.wind = a.wind + (b.wind - a.wind) * k;
  out.from = lerpDeg(a.from, b.from, k);
  out.cloud = a.cloud + (b.cloud - a.cloud) * k;
  out.rain = a.rain + (b.rain - a.rain) * k;
  out.temp = a.temp + (b.temp - a.temp) * k;
  return out;
}

/** Sets the weather: one of SET's names, or null for the forecast. */
export function setWeather(name: string | null) { fixed = name && SET[name] ? SET[name] : null; }
/** Whether the forecast is in (its hours run from `from` to `to`, ms), for the page's Live. */
export const forecastSpan = () => (rows?.length ? { from: rows[0].t, to: rows[rows.length - 1].t } : null);

/** Whose weather it is: MET Norway's forecast ("met", credited), `?weather=` ("set"), or null for the fair weather it
 *  falls back on (which the caption doesn't name, as it isn't Copenhagen's). */
export const weatherSource = (): "met" | "set" | null => (fixed ? "set" : source);

/** The weather in a few words, for the caption: "light rain", "overcast", "clear"; and the wind once it is strong. */
export function describe(w: Weather) {
  const sky = w.rain >= 4 ? "heavy rain" : w.rain >= 0.8 ? "rain" : w.rain >= 0.1 ? "light rain"
    : w.cloud > 0.87 ? "overcast" : w.cloud > 0.55 ? "cloudy" : w.cloud > 0.2 ? "fair" : "clear";
  return w.wind >= 8 ? `${sky}, wind ${Math.round(w.wind)} m/s` : sky;
}
