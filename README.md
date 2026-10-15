# Pintable

A city as a table of steel pins. Copenhagen's inner harbour as 823,592 pins, one for every 1.25 m of the city, each
raised to its roof and lit by the sun as it stands over Copenhagen at the hour you set. Press the roofs and they spring
back; touch the harbour and the wave runs on down the canals.

**[Live demo](https://ollibolli8.github.io/pintable/)** · Maquette 04 on [work.draindk.tech](https://work.draindk.tech/lab/pintable/)

three.js and GLSL in plain TypeScript modules, no framework.

## How it works

**Nothing is a mesh of pins.** The table is one cylinder, and its fragment shader traces a ray per pixel through the
city's heights (`src/engine/table.ts`). Each texel of the tracing texture holds its pin's height and the tallest pin of
its 4, 16 and 64 block, so the ray steps over whole blocks at once and drops a level only where it could hit something.
It finds the pin, then the pin's round head, its sides and the gap round it.

- **Shadows** come from a second texture: for each pin, the height above which it sees the light, built in a handful
  of doubling passes along the light's direction. It is redrawn only once the tallest shadow's tip would move.
- **A press** runs a small simulation on the GPU. Each land pin springs back to its height and pulls at its neighbours,
  so a dent rings out across the roofs; the harbour's pins carry a wave, held in by the quays, so a touch on the water
  runs on down the canals. Boats go round the canals, raised out of the water's pins, and leave their wakes in it.
- **The light** is the sun's or the moon's as they stand over the city at that moment (the low-precision formulas of
  Meeus' *Astronomical Algorithms*, `src/engine/sky.ts`), warmer as the sun gets low, blue through twilight. After dark
  the city's lamps come on along its streets and quays, windows light along the facades and the landmarks are floodlit.
- **The weather** is MET Norway's forecast for the hour (`src/engine/weather.ts`): the wind sets the harbour's swell and
  stirs the trees, cloud throws shadows that drift with it, rain wets the steel and rings the water.
- **The lens** (`src/engine/lens.ts`) is a macro lens's depth of field over the whole frame, with bloom for the glints.
- **The sound** (`src/engine/sound.ts`) is synthesized: each pin that moves ticks as a small steel rod struck.

The engine was written for the opening of [work.draindk.tech](https://work.draindk.tech), where the table is set into a
plinth's top and the page's scroll runs the hours, and its comments still speak of that page.

`src/stage.ts` sets the table in a polished ring in a dark room and gives it a camera and hands: on the table a pointer
presses (a resting mouse is a fingertip held over the roofs, which the tall ones dip under); beside it, with the right
button or with two fingers it turns the camera; the wheel or a pinch goes closer, towards the point under the pointer.

## Use

```ts
import { createStage } from "./src/stage";

const stage = createStage({
  canvas, city: "city.png", marks: "landmarks.png",
  phone: matchMedia("(max-width: 700px)").matches, pixelRatio: Math.min(devicePixelRatio, 2),
  still: matchMedia("(prefers-reduced-motion: reduce)").matches, at: new Date(),
  onReady() {}, onFail() {}, onNews(n) {}, onLabel(i, x, y) {},
});
stage.setMoment(new Date("2026-06-21T21:30:00+02:00"));   // midsummer, the sun going down in the north-west
stage.setSky("rain");                                     // or null for the forecast
stage.choose(0);                                          // a landmark stands up and the camera goes to it
```

`npm install`, then `npm run dev` builds the demo into `docs/` and serves it. It needs WebGL 2 with float render
targets; without them `createStage` throws and the demo shows its still.

## The data

`demo/public/city.png` is the city, one pixel a pin, row 0 the north edge. R and G hold the tallest roof over the pin as
a 16-bit number (R the high byte) in units of 128 m / 65535; B holds flags: 1 water, 2 on the table, and in its next
three bits the pin's material (0 steel, 1 patinated copper, 2 dark copper, 3 gilt, 4 a tree, 5 lawn). `landmarks.png`
holds, for each pin, the number of the landmark it belongs to (`src/engine/places.ts` names them). Read them as data,
never colour-managed or filtered.

## Licences

The code is MIT (`LICENSE`).

The data is not the code's. The heights come from Københavns Kommune's 3D city model (2013), CC BY; the water, the
materials and the landmarks' outlines from OpenStreetMap, © OpenStreetMap contributors, under the
[Open Database License](https://opendatacommons.org/licenses/odbl/). `city.png` and `landmarks.png` are made from both
and are available under the ODbL. Credit both wherever you show them. The forecast is MET Norway's
([api.met.no](https://api.met.no/), CC BY 4.0).

By [Oliver Kure Olsen](https://work.draindk.tech).
