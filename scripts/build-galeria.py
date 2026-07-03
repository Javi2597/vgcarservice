# Genera imagenes web-optimizadas en public/galeria/ y el manifiesto src/data/galeria.ts
# a partir de las fotos clasificadas en assets-originales/.
import os, re, json
from PIL import Image, ImageOps
Image.MAX_IMAGE_PIXELS = None

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets-originales")
OUT_IMG = os.path.join(ROOT, "public", "galeria")
OUT_TS = os.path.join(ROOT, "src", "data", "galeria.ts")
MAXPX = 1366
QUALITY = 80

SERV_SLUG = {"Detailing interior": "detailing-interior",
             "Pulido exterior": "pulido-exterior",
             "Mecanica": "mecanica"}
SERV_LABEL = {"detailing-interior": "Estética interior",
              "pulido-exterior": "Pulido y estética exterior",
              "mecanica": "Mecánica"}

def slug(s):
    s = s.lower().replace("(interior)", "").strip()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def veh_label(folder):
    return folder.replace("(interior)", "").strip()

def parte_from(fname, vehslug, estado):
    base = fname[:-4]
    rest = base[len(vehslug) + 1:] if base.startswith(vehslug + "-") else base
    parts = rest.split("-")
    if len(parts) > 3:
        parts = parts[:-3]  # quitar estado, NN, fecha
    return " ".join(parts)

trabajos = {}  # (servslug, vehslug) -> dict
counts = {"img": 0}

for serv in sorted(os.listdir(SRC)):
    if serv not in SERV_SLUG:
        continue
    servslug = SERV_SLUG[serv]
    servdir = os.path.join(SRC, serv)
    for veh in sorted(os.listdir(servdir)):
        vehdir = os.path.join(servdir, veh)
        if not os.path.isdir(vehdir):
            continue
        vslug = slug(veh)
        key = (servslug, vslug)
        if key not in trabajos:
            trabajos[key] = {
                "id": f"{servslug}--{vslug}",
                "vehiculo": veh_label(veh),
                "servicioSlug": servslug,
                "servicio": SERV_LABEL[servslug],
                "titulo": f"{veh_label(veh)} · {SERV_LABEL[servslug]}",
                "antes": [], "despues": [],
            }
        for estado in ("Antes", "Despues"):
            edir = os.path.join(vehdir, estado)
            if not os.path.isdir(edir):
                continue
            est = estado.lower()
            for fn in sorted(os.listdir(edir)):
                if not fn.lower().endswith(".jpg"):
                    continue
                # optimizar
                outdir = os.path.join(OUT_IMG, servslug, vslug, est)
                os.makedirs(outdir, exist_ok=True)
                im = Image.open(os.path.join(edir, fn))
                im = ImageOps.exif_transpose(im).convert("RGB")
                im.thumbnail((MAXPX, MAXPX))
                im.save(os.path.join(outdir, fn), "JPEG", quality=QUALITY, optimize=True, progressive=True)
                counts["img"] += 1
                parte = parte_from(fn, vslug, est)
                trabajos[key][est].append({
                    "src": f"/galeria/{servslug}/{vslug}/{est}/{fn}",
                    "alt": f"{parte} ({est}) — {veh_label(veh)}",
                    "parte": parte,
                })

lista = list(trabajos.values())
# orden: por servicio (mecanica, detailing, pulido) y luego por cantidad
serv_order = {"mecanica": 0, "detailing-interior": 1, "pulido-exterior": 2}
lista.sort(key=lambda t: (serv_order.get(t["servicioSlug"], 9),
                          -(len(t["antes"]) + len(t["despues"]))))

# portada: primera de despues, si no, primera de antes
for t in lista:
    cover = (t["despues"] or t["antes"])[0]["src"]
    t["portada"] = cover
    t["totalFotos"] = len(t["antes"]) + len(t["despues"])

servicios = [{"slug": s, "label": SERV_LABEL[s]} for s in ["mecanica", "detailing-interior", "pulido-exterior"]]

os.makedirs(os.path.dirname(OUT_TS), exist_ok=True)
header = """// ARCHIVO GENERADO por scripts/build-galeria.py — no editar a mano.
export type Estado = 'antes' | 'despues';

export interface FotoGaleria {
  src: string;
  alt: string;
  parte: string;
}

export interface TrabajoGaleria {
  id: string;
  vehiculo: string;
  servicio: string;
  servicioSlug: string;
  titulo: string;
  portada: string;
  totalFotos: number;
  antes: FotoGaleria[];
  despues: FotoGaleria[];
}

export interface ServicioFiltro {
  slug: string;
  label: string;
}

export const SERVICIOS: ServicioFiltro[] = """
with open(OUT_TS, "w", encoding="utf-8") as fh:
    fh.write(header)
    fh.write(json.dumps(servicios, ensure_ascii=False, indent=2))
    fh.write(";\n\nexport const TRABAJOS: TrabajoGaleria[] = ")
    fh.write(json.dumps(lista, ensure_ascii=False, indent=2))
    fh.write(";\n")

print("imagenes optimizadas:", counts["img"])
print("trabajos:", len(lista))
for t in lista:
    print(f"  {t['titulo']}: antes={len(t['antes'])} despues={len(t['despues'])}")
print("manifest ->", OUT_TS)
