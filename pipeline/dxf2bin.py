# Københavns Kommune's 3D city model (DXF 3DFACEs, EPSG:25832) -> one triangle soup (float32 x, y, z with y up, as
# three.js wants it) cropped to a disc. Streams each file, so the 180 MB districts fit in memory.
#   python3 dxf2bin.py out.bin cx cy r file.dxf ...
# The districts that reach the table's 800 m disc round (725250, 6175750): am1 am2 aoe av ch fm kl koe noe nv oes ro
# sn st uk6 uv2 ve vv (each file's $EXTMIN/$EXTMAX, checked 14 October 2026). Needs `pip install ezdxf`.
import math, struct, sys
from ezdxf.addons import iterdxf

out, cx, cy, r = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4])
n, top = 0, (0, None)
with open(out, "wb") as fh:
    for f in sys.argv[5:]:
        for e in iterdxf.modelspace(f, types=["3DFACE"]):
            if e.dxf.layer == "99 Bygning Bundflade":                 # floors: never seen
                continue
            v = [e.dxf.vtx0, e.dxf.vtx1, e.dxf.vtx2, e.dxf.vtx3]
            if math.hypot(sum(p[0] for p in v) / 4 - cx, sum(p[1] for p in v) / 4 - cy) > r:
                continue
            for p in v:
                if p[2] > top[0]:
                    top = (p[2], (p[0], p[1]))
            q = [(p[0] - cx, p[2], -(p[1] - cy)) for p in v]
            fh.write(struct.pack("<9f", *q[0], *q[1], *q[2])); n += 1
            if tuple(v[3]) != tuple(v[2]):
                fh.write(struct.pack("<9f", *q[0], *q[2], *q[3])); n += 1
        print(f, n, "triangles so far", flush=True)
print(n, "triangles; top", top)
