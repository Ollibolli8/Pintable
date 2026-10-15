"""The pins' grid at 1.25 m: the table at 1024 x 1024 (823,592 pins), from the same city as prep.py's
2.5 m grid. Reads prep.py's data/city.npz and data/water.json, so the DXFs aren't needed again, and writes
data/pins-fine.npz as prep.py writes pins.npz: h, the tallest roof over each cell above its ground (0 = street), and
water, 1 where the cell's centre is harbour, canal or lake; row 0 the north edge.

    python3 pipeline/pins.py
    python3 pipeline/materials.py --fine && python3 pipeline/heights.py --fine
    python3 pipeline/landmarks.py --fine
"""
import json
from pathlib import Path

import numpy as np
from shapely import contains_xy
from shapely.geometry import Polygon
from shapely.ops import unary_union

HERE = Path(__file__).parent
N, CELL = 1024, 1.25
R_TABLE = N * CELL / 2                     # 640 m, as the 2.5 m grid

d = np.load(HERE / "data/city.npz")
verts, tris = d["verts"].astype(np.float64), d["tris"]

# The tallest roof over each cell, barycentric per triangle (prep.py's rasteriser); facades add nothing.
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
    dd = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy)
    if abs(dd) < 1e-9:
        continue
    X, Y = np.meshgrid(xs + .5, ys + .5)
    l1 = ((by - cy) * (X - cx) + (cx - bx) * (Y - cy)) / dd
    l2 = ((cy - ay) * (X - cx) + (ax - cx) * (Y - cy)) / dd
    l3 = 1 - l1 - l2
    inside = (l1 >= -.02) & (l2 >= -.02) & (l3 >= -.02)
    if inside.any():
        z = l1 * t[i, 0, 2] + l2 * t[i, 1, 2] + l3 * t[i, 2, 2]
        sub = H[ys[0]:ys[-1] + 1, xs[0]:xs[-1] + 1]
        np.maximum(sub, np.where(inside, z, 0), out=sub)

# The water as prep.py cut it to the table (outer ring, then holes, in metres round the centre).
fix = lambda g: g if g.is_valid else g.buffer(0)
water = unary_union([fix(Polygon(p[0], p[1:])) for p in json.loads((HERE / "data/water.json").read_text())["water"]])
cx_, cy_ = np.meshgrid((np.arange(N) + .5) * CELL - N * CELL / 2, N * CELL / 2 - (np.arange(N) + .5) * CELL)
wet = contains_xy(water, cx_, cy_) & (H < 1)
on_table = np.hypot(cx_, cy_) <= R_TABLE
np.savez_compressed(HERE / "data/pins-fine.npz", h=H.astype(np.float16), water=wet.astype(np.uint8))
r, c = np.unravel_index(np.argmax(H), H.shape)
print(f"pins: {int(on_table.sum())} on the table, {int((on_table & (H > 1)).sum())} under roofs, {int((on_table & wet).sum())} in water;",
      f"tallest {H.max():.1f} m at row {r}, column {c} ({cx_[r, c]:.0f} m east, {cy_[r, c]:.0f} m north)")
