# The table's data: Copenhagen's inner harbour from Københavns Kommune's 3D city model (CC BY, 2013) and the
# harbour's water from OpenStreetMap (© OpenStreetMap contributors, ODbL: data/water.json), in local metres
# round (725250, 6175750) in EPSG:25832: x east, y north, z up.
#
#   python3 pipeline/prep.py core.bin
#
# core.bin is dxf2bin.py's triangle soup of the 800 m disc (the district DXFs from the city's "3D bymodel" zip on
# opendata.dk): python3 dxf2bin.py core.bin 725250 6175750 800 <district>.dxf ...
# Needs numpy, shapely. Reads data/water.json and writes data/ next to this file:
#   city.npz    the buildings welded at 1 cm, each dropped so its lowest point stands on z = 0 (the model's
#               elevations are above sea level, so ground floors stood 1–15 m up); verts float32, tris uint32
#   pins.npz    a 512 × 512 grid of 2.5 m cells: h, the tallest roof in each cell above its ground (0 = street),
#               water (1 where the cell's centre is harbour, canal or lake); row 0 is the north edge
# (data/water.json: {"water": [...], "land": [...]}, polygons (outer ring, then holes) in metres, OpenStreetMap's
# harbour, canals and lakes inside the table's 640 m radius and the land that stands round it)
import json, sys
from pathlib import Path
import numpy as np
from shapely import contains_xy
from shapely.geometry import Polygon
from shapely.ops import unary_union

HERE = Path(__file__).parent
OUT = HERE / "data"
CX, CY = 725250.0, 6175750.0
N, CELL = 512, 2.5
R_TABLE = N * CELL / 2                     # 640 m: the round table holds the grid's inscribed circle

# ---------------------------------------------------------------------------------------------------- buildings
soup = np.fromfile(sys.argv[1], dtype="<f4").reshape(-1, 3)          # x east, y up, z = -north (three.js order)
p = np.stack([soup[:, 0], -soup[:, 2], soup[:, 1]], 1)                # -> x east, y north, z up
q = np.round(p * 100).astype(np.int64)
uniq, inv = np.unique(q, axis=0, return_inverse=True)
verts = (uniq / 100).astype(np.float64)
tris = inv.reshape(-1, 3)
tris = tris[(tris[:, 0] != tris[:, 1]) & (tris[:, 1] != tris[:, 2]) & (tris[:, 0] != tris[:, 2])]

# Buildings are the mesh's connected parts: spread the smallest vertex id through each triangle until nothing changes.
lab = np.arange(len(verts))
for it in range(400):
    m = lab[tris].min(1)
    new = lab.copy()
    for k in range(3):
        np.minimum.at(new, tris[:, k], m)
    new = new[new]                                                    # jump along chains
    if np.array_equal(new, lab):
        break
    lab = new
parts, part = np.unique(lab, return_inverse=True)
floor = np.full(len(parts), np.inf)
np.minimum.at(floor, part, verts[:, 2])
verts[:, 2] -= floor[part] + 0.3                                      # 30 cm into the ground, so no part floats
print(f"{len(verts)} vertices, {len(tris)} triangles, {len(parts)} buildings (labels settled in {it} passes);",
      f"ground floors were {np.percentile(floor, 5):.1f}–{np.percentile(floor, 95):.1f} m above sea level")
np.savez_compressed(OUT / "city.npz", verts=verts.astype(np.float32), tris=tris.astype(np.uint32))

# ---------------------------------------------------------------------------------------------------- water
# OpenStreetMap's harbour, canals and lakes inside the table's disc (data/water.json, © OpenStreetMap contributors).
fix = lambda g: g if g.is_valid else g.buffer(0)
water = unary_union([fix(Polygon(p[0], p[1:])) for p in json.loads((OUT / "water.json").read_text())["water"]])

# ---------------------------------------------------------------------------------------------------- pins
# The tallest roof over each cell (after the drop), barycentric per triangle; facades add nothing.
t = verts[tris]
gx = (t[:, :, 0] + N * CELL / 2) / CELL
gy = (N * CELL / 2 - t[:, :, 1]) / CELL                              # row 0 = north
H = np.zeros((N, N), np.float32)
x0 = np.floor(gx.min(1)).astype(int); x1 = np.ceil(gx.max(1)).astype(int)
y0 = np.floor(gy.min(1)).astype(int); y1 = np.ceil(gy.max(1)).astype(int)
for i in range(len(t)):
    xs = np.arange(max(x0[i], 0), min(x1[i], N)); ys = np.arange(max(y0[i], 0), min(y1[i], N))
    if not len(xs) or not len(ys):
        continue
    (ax, bx, cx), (ay, by, cy) = gx[i], gy[i]
    d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy)
    if abs(d) < 1e-9:
        continue
    X, Y = np.meshgrid(xs + .5, ys + .5)
    l1 = ((by - cy) * (X - cx) + (cx - bx) * (Y - cy)) / d
    l2 = ((cy - ay) * (X - cx) + (ax - cx) * (Y - cy)) / d
    l3 = 1 - l1 - l2
    inside = (l1 >= -.02) & (l2 >= -.02) & (l3 >= -.02)
    if inside.any():
        z = l1 * t[i, 0, 2] + l2 * t[i, 1, 2] + l3 * t[i, 2, 2]
        sub = H[ys[0]:ys[-1] + 1, xs[0]:xs[-1] + 1]
        np.maximum(sub, np.where(inside, z, 0), out=sub)
cx_, cy_ = np.meshgrid((np.arange(N) + .5) * CELL - N * CELL / 2, N * CELL / 2 - (np.arange(N) + .5) * CELL)
wet = contains_xy(water, cx_, cy_) & (H < 1)
on_table = np.hypot(cx_, cy_) <= R_TABLE
np.savez_compressed(OUT / "pins.npz", h=H.astype(np.float16), water=wet.astype(np.uint8))
r, c = np.unravel_index(np.argmax(H), H.shape)
print(f"pins: {int(on_table.sum())} on the table, {int((on_table & (H > 1)).sum())} under roofs, {int((on_table & wet).sum())} in water;",
      f"tallest {H.max():.1f} m at row {r}, column {c} ({cx_[r, c]:.0f} m east, {cy_[r, c]:.0f} m north)")
