"""The table's landmarks: which pins are each named building's, from OpenStreetMap (data/landmarks.json).

    python3 pipeline/landmarks.py            # from data/landmarks.json
    python3 pipeline/landmarks.py --fetch    # fetch the outlines again first (OSM API)
    python3 pipeline/landmarks.py --fine     # the 1.25 m grid (pins.py): landmarks-fine.png, 1024 x 1024

Writes demo/public/landmarks.png: 512 x 512, one 8-bit pixel a pin on the pins' grid (row 0 the north edge, 2.5 m a
pin), holding 1 + the building's place in PLACES (src/engine/places.ts), 0 for none. A pin is a landmark's when
its centre is inside the building's outline and it stands 4 m or more (the building, not the street round it). The
table floodlights them after dark and lifts one when its name is chosen.

Each outline is the OSM building way or relation under the place's point (the API's map call round it); the arsenal
(Krigsmuseet) is long and thin, so its way is named by id. Data © OpenStreetMap contributors, ODbL (fetched 15 October
2026).
"""
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

import numpy as np
from PIL import Image
from pyproj import Transformer
from shapely import contains_xy
from shapely.geometry import Point, Polygon
from shapely.ops import unary_union

HERE = Path(__file__).parent
ROOT = HERE.parent
DATA = HERE / "data/landmarks.json"
FINE = "--fine" in sys.argv
OUT = ROOT / "demo/public" / ("landmarks-fine.png" if FINE else "landmarks.png")
N, CELL = 512, 2.5                         # PLACES' grid (places.ts): 2.5 m a unit, whichever grid is drawn
CX, CY = 725250.0, 6175750.0
to_utm = Transformer.from_crs("EPSG:4326", "EPSG:25832", always_xy=True)
to_ll = Transformer.from_crs("EPSG:25832", "EPSG:4326", always_xy=True)
BY_ID = {"Krigsmuseet": ("way", 25451113)}

# PLACES as the page has them: name, grid x and z, kind.
src = (ROOT / "src/engine/places.ts").read_text()
PLACES = [(m[1], float(m[2]), float(m[3]), m[4]) for m in
          re.finditer(r'\{ name: "([^"]+)", x: ([\d.]+), z: ([\d.]+), kind: "(\w+)"', src)]
BUILDINGS = [p for p in PLACES if p[3] == "building"]


def get(path):
    for k in range(4):
        try:
            req = urllib.request.Request(f"https://api.openstreetmap.org/api/0.6/{path}",
                                         headers={"User-Agent": "pintable/1.0 (github.com/Ollibolli8/pintable)"})
            return json.load(urllib.request.urlopen(req, timeout=60))
        except Exception as e:  # the API drops a request now and then
            print("retry", path, e, file=sys.stderr)
            time.sleep(2 ** k)
    raise SystemExit(f"failed: {path}")


def shape(rings):
    parts = []
    for ring in rings:
        x, y = to_utm.transform([p[1] for p in ring], [p[0] for p in ring])
        if len(x) >= 3:
            parts.append(Polygon(list(zip(x, y))).buffer(0))
    return unary_union(parts)


def full(kind, id_):
    d = get(f"{kind}/{id_}/full.json")
    nodes = {e["id"]: (e["lat"], e["lon"]) for e in d["elements"] if e["type"] == "node"}
    ways = {e["id"]: e for e in d["elements"] if e["type"] == "way"}
    if kind == "way":
        return ways[id_]["tags"], [[nodes[i] for i in ways[id_]["nodes"]]]
    rel = next(e for e in d["elements"] if e["type"] == "relation" and e["id"] == id_)
    return rel["tags"], [[nodes[i] for i in ways[m["ref"]]["nodes"]] for m in rel["members"]
                         if m["type"] == "way" and m.get("role") == "outer" and m["ref"] in ways]


def fetch():
    out = {}
    for name, x, z, _ in BUILDINGS:
        e, n = CX + (x - N / 2) * CELL, CY - (z - N / 2) * CELL
        if name in BY_ID:
            kind, id_ = BY_ID[name]
        else:
            lon, lat = to_ll.transform(e, n)
            d = get(f"map.json?bbox={lon - 4e-4:.6f},{lat - 2.5e-4:.6f},{lon + 4e-4:.6f},{lat + 2.5e-4:.6f}")
            cands = [(el["type"], el["id"]) for el in d["elements"]
                     if el["type"] in ("way", "relation") and "building" in el.get("tags", {})]
            shapes = {c: shape(full(*c)[1]) for c in cands}
            kind, id_ = min(cands, key=lambda c: (not shapes[c].contains(Point(e, n)), shapes[c].distance(Point(e, n))))
        tags, rings = full(kind, id_)
        keep = {k: v for k, v in tags.items() if k in ("name", "building", "wikidata", "wikipedia")}   # (not its contacts)
        out[name] = {"type": kind, "id": id_, "tags": keep, "rings": rings}
        print(f"{name}: {kind} {id_} {tags.get('name')}")
    DATA.write_text(json.dumps(out, ensure_ascii=False))


if "--fetch" in sys.argv or not DATA.exists():
    fetch()
L = json.loads(DATA.read_text())
NP, CP = (1024, 1.25) if FINE else (N, CELL)
h = np.load(HERE / "data" / ("pins-fine.npz" if FINE else "pins.npz"))["h"].astype(np.float64)
c = np.arange(NP) + 0.5
E, Nn = np.meshgrid(CX + (c - NP / 2) * CP, CY - (c - NP / 2) * CP)
mark = np.zeros((NP, NP), np.uint8)
for i, (name, *_rest) in enumerate(PLACES):
    if name not in L:
        continue
    m = contains_xy(shape(L[name]["rings"]), E, Nn) & (h >= 4.0)
    mark[m & (mark == 0)] = i + 1
    print(f"{i + 1:2d} {name}: {int(m.sum())} pins, tallest {h[m].max() if m.any() else 0:.1f} m")
Image.fromarray(mark, "L").save(OUT, optimize=True)
print(f"{OUT.relative_to(ROOT)}: {OUT.stat().st_size} bytes")
