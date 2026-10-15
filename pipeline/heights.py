"""The table's city: data/pins.npz as one small PNG for the page (demo/public/city.png).

512 x 512, row 0 the north edge, one pixel a pin (2.5 m of Copenhagen). R and G hold the tallest roof over the pin as
a 16-bit number (R the high byte) in units of 128 m / 65535 (2 mm); B holds flags: 1 harbour or canal water, 2 on the
round table (the 205,892 pins inside 640 m of the centre), and in its next three bits the pin's material from
materials.py (B >> 2: 0 steel, 1 patina, 2 dark copper, 3 gilt, 4 tree, 5 lawn). A tree's pins stand to its crown.
Read with texelFetch, never filtered.

    python3 pipeline/materials.py && python3 pipeline/heights.py

`--fine`: the 1.25 m grid (pins.py, materials.py --fine) as demo/public/city-fine.png, 1024 x 1024, the 823,592
pins inside 640 m of the centre, the same encoding. The demo draws this one; the 2.5 m one is its `?pins=coarse`.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image

HERE = Path(__file__).parent
FINE = "--fine" in sys.argv
OUT = HERE.parent / "demo/public" / ("city-fine.png" if FINE else "city.png")
N, TOP_M = 1024 if FINE else 512, 128.0
p = np.load(HERE / "data" / ("pins-fine.npz" if FINE else "pins.npz"))
mats = np.load(HERE / "data" / ("materials-fine.npz" if FINE else "materials.npz"))
h = np.clip(np.maximum(p["h"].astype(np.float64), mats["tree"]), 0, TOP_M)
h[h < 0.5] = 0                                         # streets and squares: a pin at ground level
c = np.arange(N) + 0.5 - N / 2
X, Y = np.meshgrid(c, -c)
on = np.hypot(X, Y) <= N / 2
u = np.round(h / TOP_M * 65535).astype(np.uint32) * on
flags = (p["water"].astype(np.uint8) * 1 + on.astype(np.uint8) * 2 + mats["mat"].astype(np.uint8) * 4) * on
rgb = np.stack([(u >> 8).astype(np.uint8), (u & 255).astype(np.uint8), flags], -1)
OUT.parent.mkdir(parents=True, exist_ok=True)
Image.fromarray(rgb, "RGB").save(OUT, optimize=True)
print(f"{OUT.relative_to(HERE.parent)}: {OUT.stat().st_size // 1024} KB, {int(on.sum())} pins, "
      f"{int((on & (h > 0)).sum())} under roofs, tallest {h[on].max():.1f} m")
