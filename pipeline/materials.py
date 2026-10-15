"""The table's materials: which pins are copper, gilt, trees or lawn, from OpenStreetMap (data/osm.json).

    python3 pipeline/materials.py && python3 pipeline/heights.py
    python3 pipeline/materials.py --fine     # the 1.25 m grid (pins.py): data/materials-fine.npz

Writes data/materials.npz on the pins' 512 x 512 grid (row 0 the north edge, 2.5 m a pin):
  mat     0 steel, 1 patinated copper (verdigris), 2 dark copper, 3 gilt, 4 tree, 5 lawn
  tree    each tree's crown over its pins, metres above the street (0 where there is none)

- Roofs: every way tagged roof:material=copper (or gold) in the table's disc, as OSM's mappers drew them on
  Christiansborg, the Slotskirke, the stables and the churches. roof:colour picks the copper's state: green-grey tags
  (#a5bab5, #c0decb) and untagged copper are patina, the dark tags (#46323c, #62535c, #656871) are dark copper. A
  pin is a roof's when its centre is inside the outline and it stands 4 m or more (a roof, not the street beside it);
  a building's mapped parts go over its outline, so the palace's dark copper shows within its patinated wings.
- Børsen: the city model is from 2013, when Børsen still had its green copper roof and dragon spire (it burned in
  April 2024; OSM now maps the rebuilding), so its outline is patina here, as it stood.
- Trees: the 1,162 trees mapped as points, each a crown 7 m across and 9–13 m tall (broadleaved; needleleaved
  narrower and taller), domed over the pins under it; a building taller than the crown keeps its pin.
- Lawn: the parks and gardens (Bibliotekshaven, Glyptotekshaven, the bastion's lawns), at street level only.

Data © OpenStreetMap contributors, ODbL (fetched 14 October 2026 through the OSM API and Overpass).
"""
import json
import sys
from pathlib import Path
import numpy as np
from pyproj import Transformer
from shapely import contains_xy
from shapely.geometry import Polygon

HERE = Path(__file__).parent
FINE = "--fine" in sys.argv
N, CELL = (1024, 1.25) if FINE else (512, 2.5)
CX, CY = 725250.0, 6175750.0
PINS, OUT = ("pins-fine.npz", "materials-fine.npz") if FINE else ("pins.npz", "materials.npz")
to_utm = Transformer.from_crs("EPSG:4326", "EPSG:25832", always_xy=True)
osm = json.loads((HERE / "data/osm.json").read_text())
h = np.load(HERE / "data" / PINS)["h"].astype(np.float64)
water = np.load(HERE / "data" / PINS)["water"].astype(bool)

# The pins' centres in UTM metres.
c = np.arange(N) + 0.5
E, Nn = np.meshgrid(CX + (c - N / 2) * CELL, CY - (c - N / 2) * CELL)


def poly(ring):
    x, y = to_utm.transform([p[1] for p in ring], [p[0] for p in ring])
    return Polygon(list(zip(x, y))).buffer(0)


def inside(ring):
    return contains_xy(poly(ring), E, Nn)


mat = np.zeros((N, N), np.uint8)
LIGHT = {"#a5bab5", "#c0decb"}
# Whole buildings first, then their mapped parts over them (a part's tag is the closer look), the gilt last.
order = sorted(osm["roofs"], key=lambda r: (r["tags"].get("roof:material") == "gold", "building:part" in r["tags"]))
for r in order:
    t = r["tags"]
    kind = {"gold": 3}.get(t.get("roof:material"), 0)
    if t.get("roof:material") == "copper":
        col = t.get("roof:colour")
        kind = 1 if col is None or col.lower() in LIGHT else 2
    if not kind:
        continue
    m = inside(r["ring"]) & (h >= 4.0)
    # Gilt only where it is: the crowns are small, so a part's tallest pins carry it.
    if kind == 3 and m.any():
        m &= h >= h[m].max() - 2.5
    mat[m] = kind
b = inside(osm["borsen"]["ring"]) & (h >= 4.0)
mat[b & (mat == 0)] = 1

# Trees: crowns over the pins, from the points.
tree = np.zeros((N, N))
rng = np.random.default_rng(14)
for lat, lon, t in osm["trees"]:
    x, y = to_utm.transform(lon, lat)
    col, row = (x - CX) / CELL + N / 2, (CY - y) / CELL + N / 2
    needle = t.get("leaf_type") == "needleleaved"
    R = (2.2 if needle else 3.5) * rng.uniform(0.85, 1.2)
    H = (12.5 if needle else 11.0) * rng.uniform(0.82, 1.18)
    c0, c1 = int(max(0, col - R / CELL - 1)), int(min(N, col + R / CELL + 2))
    r0, r1 = int(max(0, row - R / CELL - 1)), int(min(N, row + R / CELL + 2))
    for rr in range(r0, r1):
        for cc in range(c0, c1):
            d = np.hypot(cc + 0.5 - col, rr + 0.5 - row) * CELL
            if d < R:
                # A crown: round on top, from about a third of the tree's height.
                top = H * 0.35 + H * 0.65 * np.sqrt(1 - (d / R) ** 2)
                tree[rr, cc] = max(tree[rr, cc], top)
tree[water] = 0
crown = (tree > h) & (mat == 0)
mat[crown] = 4
tree[~crown] = 0

lawn = np.zeros((N, N), bool)
for g in osm["green"]:
    lawn |= inside(g["ring"])
mat[lawn & (h < 0.5) & ~water & (mat == 0)] = 5

on = np.hypot(*np.meshgrid(c - N / 2, c - N / 2)) <= N / 2
mat[~on] = 0
tree[~on] = 0
np.savez_compressed(HERE / "data" / OUT, mat=mat, tree=tree.astype(np.float32))
names = ["steel", "patina", "dark copper", "gilt", "tree", "lawn"]
print(", ".join(f"{names[k]} {int((mat == k).sum())}" for k in range(1, 6)), "pins")
