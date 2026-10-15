/** The table's numbers and its named places, shared by the engine and the page (which keeps three.js out of its own bundle). */

/**
 * The table's pins: 1.25 m of the city a pin, 1,024 across the disc (city-fine.png), or with
 * `?pins=coarse` the first table's 2.5 m, 512 across (city.png), to compare the two. The places and the boats are in
 * 2.5 m units either way.
 */
export const PINS_FINE = typeof location === "undefined" || new URLSearchParams(location.search).get("pins") !== "coarse";
export const PINS_COUNT = PINS_FINE ? 823592 : 205892;
/** m: the pins' disc in the plinth's 0.30 m top (512 units across it, 1.113 mm a unit; a fine pin is half that). */
export const PINS_RADIUS = 0.285;
/** The hero camera's bearing round its target in the studio (degrees); the table turns to meet it. */
export const CITY_AZ = 16;
/** The compass bearing the hero looks from (north-east of the tower, across the city at Slotsholmen). */
export const VIEW_BEARING = 42;
/** Christiansborg's tower, the city's tallest pin: grid column and row of its centre, its height in pins (93.6 m). */
export const TOWER = { x: 200.5, z: 213.5, h: 37.4 };
/** The camera's bearing round its target (scene degrees) for a compass bearing over the city. */
export const bearing = (compass: number) => CITY_AZ + VIEW_BEARING - compass;

/**
 * The places named on the model as the camera passes them: grid column and row (OpenStreetMap's positions, © its
 * contributors, ODbL, in the model's grid), and what kind of name it is: a building (named over its roof, with a
 * leader down to it), water (in italics, on the water), a district (spaced out, on the ground). In order of
 * precedence: where two would sit on top of each other, the first is shown.
 *
 * A building is a landmark too (its outline from OpenStreetMap: case-production/opening/landmarks.py): its name can be
 * clicked to fly to it, and its caption then gives `fact`, each checked against its Wikipedia article (15 October
 * 2026). `flood`: how brightly it is floodlit after dark (0 to 1).
 */
export type Place = { name: string; x: number; z: number; kind: "building" | "water" | "district" | "rim"; fact?: string; flood?: number; mark?: number };
export const PLACES: Place[] = [
  { name: "Christiansborg", x: 200.5, z: 213.5, kind: "building", fact: "Finished 1928 · tower 106 m, the city's tallest", flood: 1 },
  { name: "Børsen", x: 293, z: 240, kind: "building", fact: "Built 1619–1640 · its 56 m dragon spire fell in the 2024 fire", flood: 0.9 },
  { name: "Inderhavnen", x: 330, z: 300, kind: "water" },
  { name: "Holmens Kirke", x: 278, z: 192, kind: "building", fact: "An anchor forge of 1563 · a church since 1619", flood: 1 },
  { name: "Den Sorte Diamant", x: 263, z: 339, kind: "building", fact: "Schmidt Hammer Lassen, 1999", flood: 0.5 },
  { name: "Christianshavn", x: 432, z: 352, kind: "district" },
  { name: "Slotsholmen", x: 236, z: 271, kind: "district" },
  { name: "Thorvaldsens Museum", x: 149, z: 192, kind: "building", fact: "Built 1838–1848 · M. G. Bindesbøll", flood: 0.8 },
  { name: "Christians Kirke", x: 379, z: 377, kind: "building", fact: "Built 1754–1759 · tower 70 m", flood: 1 },
  { name: "Nikolaj", x: 225, z: 104, kind: "building", fact: "Spire raised 1909 · the city's third-tallest tower", flood: 1 },
  { name: "Det Kongelige Teater", x: 346, z: 79, kind: "building", fact: "Founded 1748 · this house built 1872–1874", flood: 1 },
  { name: "Nationalmuseet", x: 63, z: 288, kind: "building", fact: "The Prince's Mansion · a museum since 1892", flood: 0.6 },
  { name: "Frederiksholms Kanal", x: 146, z: 318, kind: "water" },
  { name: "Gammel Strand", x: 148, z: 160, kind: "district" },
  { name: "Børsgraven", x: 316, z: 218, kind: "water" },
  { name: "Christiansborg Slotskirke", x: 172.6, z: 178, kind: "building", fact: "Inaugurated 14 May 1826", flood: 0.9 },
  { name: "Krigsmuseet", x: 203, z: 301, kind: "building", fact: "Christian IV's arsenal · 163 m long, finished 1604", flood: 0.5 },
  { name: "Bibliotekshaven", x: 229, z: 290, kind: "district" },
  { name: "Christian IV's Bryghus", x: 193, z: 349, kind: "building", fact: "Built 1608 as a bastion", flood: 0.7 },
  { name: "Christianshavns Kanal", x: 442, z: 398, kind: "water" },
  { name: "Gammel Dok", x: 474, z: 218, kind: "building", fact: "A warehouse by H. C. Scharling, 1882", flood: 0.5 },
  { name: "Gammelholm", x: 417, z: 128, kind: "district" },
  { name: "Magasin du Nord", x: 285.6, z: 96, kind: "building", fact: "Department store · its building completed 1894", flood: 0.8 },
  { name: "Højbro Plads", x: 183, z: 119, kind: "district" },
  { name: "Helligåndskirken", x: 108, z: 92.5, kind: "building", fact: "One of the city's oldest churches · spire 1594", flood: 0.9 },
  { name: "Amagertorv", x: 141.5, z: 102, kind: "district" },
];

