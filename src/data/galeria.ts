// ARCHIVO GENERADO por scripts/build-galeria.py — no editar a mano.
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

export const SERVICIOS: ServicioFiltro[] = [
  {
    "slug": "mecanica",
    "label": "Mecánica"
  },
  {
    "slug": "detailing-interior",
    "label": "Estética interior"
  },
  {
    "slug": "pulido-exterior",
    "label": "Pulido y estética exterior"
  }
];

export const TRABAJOS: TrabajoGaleria[] = [
  {
    "id": "mecanica--peugeot-206",
    "vehiculo": "Peugeot 206",
    "servicioSlug": "mecanica",
    "servicio": "Mecánica",
    "titulo": "Peugeot 206 · Mecánica",
    "antes": [
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-01-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      },
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-02-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      },
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-03-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      },
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-04-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      },
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-05-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      },
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-06-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      },
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-07-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      },
      {
        "src": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-08-20220124.jpg",
        "alt": "motor (antes) — Peugeot 206",
        "parte": "motor"
      }
    ],
    "despues": [],
    "portada": "/galeria/mecanica/peugeot-206/antes/peugeot-206-motor-antes-01-20220124.jpg",
    "totalFotos": 8
  },
  {
    "id": "detailing-interior--peugeot-206",
    "vehiculo": "Peugeot 206",
    "servicioSlug": "detailing-interior",
    "servicio": "Estética interior",
    "titulo": "Peugeot 206 · Estética interior",
    "antes": [
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-apoyacabezas-antes-01-20220805.jpg",
        "alt": "apoyacabezas (antes) — Peugeot 206",
        "parte": "apoyacabezas"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-apoyacabezas-antes-02-20220805.jpg",
        "alt": "apoyacabezas (antes) — Peugeot 206",
        "parte": "apoyacabezas"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-apoyacabezas-antes-03-20220805.jpg",
        "alt": "apoyacabezas (antes) — Peugeot 206",
        "parte": "apoyacabezas"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-baul-antes-01-20220124.jpg",
        "alt": "baul (antes) — Peugeot 206",
        "parte": "baul"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-delantera-antes-01-20220124.jpg",
        "alt": "butaca delantera (antes) — Peugeot 206",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-delantera-antes-02-20220314.jpg",
        "alt": "butaca delantera (antes) — Peugeot 206",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-delantera-antes-03-20220801.jpg",
        "alt": "butaca delantera (antes) — Peugeot 206",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-delantera-antes-04-20220801.jpg",
        "alt": "butaca delantera (antes) — Peugeot 206",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-trasera-antes-01-20220124.jpg",
        "alt": "butaca trasera (antes) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-trasera-antes-02-20220124.jpg",
        "alt": "butaca trasera (antes) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-trasera-antes-03-20220303.jpg",
        "alt": "butaca trasera (antes) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-trasera-antes-04-20220303.jpg",
        "alt": "butaca trasera (antes) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-trasera-antes-05-20220303.jpg",
        "alt": "butaca trasera (antes) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-butaca-trasera-antes-06-20220303.jpg",
        "alt": "butaca trasera (antes) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-interior-general-antes-01-20220124.jpg",
        "alt": "interior general (antes) — Peugeot 206",
        "parte": "interior general"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-interior-general-antes-02-20220713.jpg",
        "alt": "interior general (antes) — Peugeot 206",
        "parte": "interior general"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-interior-general-antes-03-20220714.jpg",
        "alt": "interior general (antes) — Peugeot 206",
        "parte": "interior general"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-panel-puerta-antes-01-20220718.jpg",
        "alt": "panel puerta (antes) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-panel-puerta-antes-02-20220718.jpg",
        "alt": "panel puerta (antes) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-parante-antes-01-20220718.jpg",
        "alt": "parante (antes) — Peugeot 206",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-parante-antes-02-20220718.jpg",
        "alt": "parante (antes) — Peugeot 206",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-parante-antes-03-20220718.jpg",
        "alt": "parante (antes) — Peugeot 206",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-tablero-antes-01-20220124.jpg",
        "alt": "tablero (antes) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-tablero-antes-02-20220124.jpg",
        "alt": "tablero (antes) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-tablero-antes-03-20220124.jpg",
        "alt": "tablero (antes) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-tablero-antes-04-20220721.jpg",
        "alt": "tablero (antes) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-tablero-antes-05-20220722.jpg",
        "alt": "tablero (antes) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-tablero-antes-06-20220722.jpg",
        "alt": "tablero (antes) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-tablero-antes-07-20220722.jpg",
        "alt": "tablero (antes) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-techo-antes-01-20220712.jpg",
        "alt": "techo (antes) — Peugeot 206",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-techo-antes-02-20220712.jpg",
        "alt": "techo (antes) — Peugeot 206",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-techo-antes-03-20220712.jpg",
        "alt": "techo (antes) — Peugeot 206",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-techo-antes-04-20220712.jpg",
        "alt": "techo (antes) — Peugeot 206",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-techo-antes-05-20220712.jpg",
        "alt": "techo (antes) — Peugeot 206",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-techo-antes-06-20220712.jpg",
        "alt": "techo (antes) — Peugeot 206",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/antes/peugeot-206-techo-antes-07-20220713.jpg",
        "alt": "techo (antes) — Peugeot 206",
        "parte": "techo"
      }
    ],
    "despues": [
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-apoyacabezas-despues-01-20220805.jpg",
        "alt": "apoyacabezas (despues) — Peugeot 206",
        "parte": "apoyacabezas"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-butaca-delantera-despues-01-20220805.jpg",
        "alt": "butaca delantera (despues) — Peugeot 206",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-butaca-delantera-despues-02-20220805.jpg",
        "alt": "butaca delantera (despues) — Peugeot 206",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-butaca-trasera-despues-01-20220303.jpg",
        "alt": "butaca trasera (despues) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-butaca-trasera-despues-02-20220304.jpg",
        "alt": "butaca trasera (despues) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-butaca-trasera-despues-03-20220304.jpg",
        "alt": "butaca trasera (despues) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-butaca-trasera-despues-04-20220314.jpg",
        "alt": "butaca trasera (despues) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-butaca-trasera-despues-05-20220805.jpg",
        "alt": "butaca trasera (despues) — Peugeot 206",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-interior-general-despues-01-20220805.jpg",
        "alt": "interior general (despues) — Peugeot 206",
        "parte": "interior general"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-panel-puerta-despues-01-20220718.jpg",
        "alt": "panel puerta (despues) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-panel-puerta-despues-02-20220718.jpg",
        "alt": "panel puerta (despues) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-panel-puerta-despues-03-20220718.jpg",
        "alt": "panel puerta (despues) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-panel-puerta-despues-04-20220720.jpg",
        "alt": "panel puerta (despues) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-panel-puerta-despues-05-20220720.jpg",
        "alt": "panel puerta (despues) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-panel-puerta-despues-06-20220720.jpg",
        "alt": "panel puerta (despues) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-panel-puerta-despues-07-20220720.jpg",
        "alt": "panel puerta (despues) — Peugeot 206",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-parante-despues-01-20220718.jpg",
        "alt": "parante (despues) — Peugeot 206",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-parante-despues-02-20220718.jpg",
        "alt": "parante (despues) — Peugeot 206",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-pieza-despues-01-20220722.jpg",
        "alt": "pieza (despues) — Peugeot 206",
        "parte": "pieza"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-pieza-despues-02-20220722.jpg",
        "alt": "pieza (despues) — Peugeot 206",
        "parte": "pieza"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-tablero-despues-01-20220720.jpg",
        "alt": "tablero (despues) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-tablero-despues-02-20220722.jpg",
        "alt": "tablero (despues) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-tablero-despues-03-20220722.jpg",
        "alt": "tablero (despues) — Peugeot 206",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-techo-despues-01-20220712.jpg",
        "alt": "techo (despues) — Peugeot 206",
        "parte": "techo"
      }
    ],
    "portada": "/galeria/detailing-interior/peugeot-206/despues/peugeot-206-apoyacabezas-despues-01-20220805.jpg",
    "totalFotos": 60
  },
  {
    "id": "detailing-interior--chevrolet-spin",
    "vehiculo": "Chevrolet Spin",
    "servicioSlug": "detailing-interior",
    "servicio": "Estética interior",
    "titulo": "Chevrolet Spin · Estética interior",
    "antes": [
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-baul-antes-01-20220419.jpg",
        "alt": "baul (antes) — Chevrolet Spin",
        "parte": "baul"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-butaca-delantera-antes-01-20220420.jpg",
        "alt": "butaca delantera (antes) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-butaca-delantera-antes-02-20220420.jpg",
        "alt": "butaca delantera (antes) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-butaca-delantera-antes-03-20220420.jpg",
        "alt": "butaca delantera (antes) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-butaca-delantera-antes-04-20220426.jpg",
        "alt": "butaca delantera (antes) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-butaca-delantera-antes-05-20220426.jpg",
        "alt": "butaca delantera (antes) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-butaca-delantera-antes-06-20220426.jpg",
        "alt": "butaca delantera (antes) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-consola-antes-01-20220418.jpg",
        "alt": "consola (antes) — Chevrolet Spin",
        "parte": "consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-consola-antes-02-20220418.jpg",
        "alt": "consola (antes) — Chevrolet Spin",
        "parte": "consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-consola-antes-03-20220418.jpg",
        "alt": "consola (antes) — Chevrolet Spin",
        "parte": "consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-consola-antes-04-20220418.jpg",
        "alt": "consola (antes) — Chevrolet Spin",
        "parte": "consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-interior-general-antes-01-20220413.jpg",
        "alt": "interior general (antes) — Chevrolet Spin",
        "parte": "interior general"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-panel-puerta-antes-01-20220413.jpg",
        "alt": "panel puerta (antes) — Chevrolet Spin",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-panel-puerta-antes-02-20220413.jpg",
        "alt": "panel puerta (antes) — Chevrolet Spin",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-panel-puerta-antes-03-20220413.jpg",
        "alt": "panel puerta (antes) — Chevrolet Spin",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-panel-puerta-antes-04-20220418.jpg",
        "alt": "panel puerta (antes) — Chevrolet Spin",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-parante-antes-01-20220419.jpg",
        "alt": "parante (antes) — Chevrolet Spin",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-pieza-antes-01-20220418.jpg",
        "alt": "pieza (antes) — Chevrolet Spin",
        "parte": "pieza"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-piso-antes-01-20220413.jpg",
        "alt": "piso (antes) — Chevrolet Spin",
        "parte": "piso"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-piso-antes-02-20220413.jpg",
        "alt": "piso (antes) — Chevrolet Spin",
        "parte": "piso"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-tablero-antes-01-20220413.jpg",
        "alt": "tablero (antes) — Chevrolet Spin",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-tablero-antes-02-20220418.jpg",
        "alt": "tablero (antes) — Chevrolet Spin",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/antes/chevrolet-spin-techo-antes-01-20220419.jpg",
        "alt": "techo (antes) — Chevrolet Spin",
        "parte": "techo"
      }
    ],
    "despues": [
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-butaca-delantera-despues-01-20220426.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-butaca-delantera-despues-02-20220426.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Spin",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-butaca-trasera-despues-01-20220420.jpg",
        "alt": "butaca trasera (despues) — Chevrolet Spin",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-butaca-trasera-despues-02-20220420.jpg",
        "alt": "butaca trasera (despues) — Chevrolet Spin",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-consola-despues-01-20220418.jpg",
        "alt": "consola (despues) — Chevrolet Spin",
        "parte": "consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-consola-despues-02-20220419.jpg",
        "alt": "consola (despues) — Chevrolet Spin",
        "parte": "consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-interior-general-despues-01-20220419.jpg",
        "alt": "interior general (despues) — Chevrolet Spin",
        "parte": "interior general"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-parante-despues-01-20220419.jpg",
        "alt": "parante (despues) — Chevrolet Spin",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-parante-despues-02-20220420.jpg",
        "alt": "parante (despues) — Chevrolet Spin",
        "parte": "parante"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-piso-despues-01-20220419.jpg",
        "alt": "piso (despues) — Chevrolet Spin",
        "parte": "piso"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-piso-despues-02-20220419.jpg",
        "alt": "piso (despues) — Chevrolet Spin",
        "parte": "piso"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-piso-despues-03-20220419.jpg",
        "alt": "piso (despues) — Chevrolet Spin",
        "parte": "piso"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-tablero-despues-01-20220419.jpg",
        "alt": "tablero (despues) — Chevrolet Spin",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-tablero-despues-02-20220419.jpg",
        "alt": "tablero (despues) — Chevrolet Spin",
        "parte": "tablero"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-techo-despues-01-20220419.jpg",
        "alt": "techo (despues) — Chevrolet Spin",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-techo-despues-02-20220419.jpg",
        "alt": "techo (despues) — Chevrolet Spin",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-techo-despues-03-20220419.jpg",
        "alt": "techo (despues) — Chevrolet Spin",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-techo-despues-04-20220420.jpg",
        "alt": "techo (despues) — Chevrolet Spin",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-techo-despues-05-20220420.jpg",
        "alt": "techo (despues) — Chevrolet Spin",
        "parte": "techo"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-techo-despues-06-20220420.jpg",
        "alt": "techo (despues) — Chevrolet Spin",
        "parte": "techo"
      }
    ],
    "portada": "/galeria/detailing-interior/chevrolet-spin/despues/chevrolet-spin-butaca-delantera-despues-01-20220426.jpg",
    "totalFotos": 43
  },
  {
    "id": "detailing-interior--chevrolet-corsa",
    "vehiculo": "Chevrolet Corsa",
    "servicioSlug": "detailing-interior",
    "servicio": "Estética interior",
    "titulo": "Chevrolet Corsa · Estética interior",
    "antes": [
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-baul-antes-01-20220326.jpg",
        "alt": "baul (antes) — Chevrolet Corsa",
        "parte": "baul"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-baul-antes-02-20220326.jpg",
        "alt": "baul (antes) — Chevrolet Corsa",
        "parte": "baul"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-antes-01-20220326.jpg",
        "alt": "butaca (antes) — Chevrolet Corsa",
        "parte": "butaca"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-antes-02-20220326.jpg",
        "alt": "butaca (antes) — Chevrolet Corsa",
        "parte": "butaca"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-antes-03-20220326.jpg",
        "alt": "butaca (antes) — Chevrolet Corsa",
        "parte": "butaca"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-delantera-antes-01-20220326.jpg",
        "alt": "butaca delantera (antes) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-trasera-antes-01-20220326.jpg",
        "alt": "butaca trasera (antes) — Chevrolet Corsa",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-trasera-antes-02-20220326.jpg",
        "alt": "butaca trasera (antes) — Chevrolet Corsa",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-trasera-antes-03-20220327.jpg",
        "alt": "butaca trasera (antes) — Chevrolet Corsa",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-trasera-antes-04-20220327.jpg",
        "alt": "butaca trasera (antes) — Chevrolet Corsa",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-butaca-trasera-antes-05-20220327.jpg",
        "alt": "butaca trasera (antes) — Chevrolet Corsa",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-interior-general-antes-01-20220326.jpg",
        "alt": "interior general (antes) — Chevrolet Corsa",
        "parte": "interior general"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-panel-puerta-antes-01-20220326.jpg",
        "alt": "panel puerta (antes) — Chevrolet Corsa",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-panel-puerta-antes-02-20220326.jpg",
        "alt": "panel puerta (antes) — Chevrolet Corsa",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-panel-puerta-antes-03-20220326.jpg",
        "alt": "panel puerta (antes) — Chevrolet Corsa",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-panel-puerta-antes-04-20220327.jpg",
        "alt": "panel puerta (antes) — Chevrolet Corsa",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-panel-puerta-antes-05-20220327.jpg",
        "alt": "panel puerta (antes) — Chevrolet Corsa",
        "parte": "panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/antes/chevrolet-corsa-piso-antes-01-20220326.jpg",
        "alt": "piso (antes) — Chevrolet Corsa",
        "parte": "piso"
      }
    ],
    "despues": [
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-01-20220326.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-02-20220326.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-03-20220327.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-04-20220327.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-05-20220327.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-06-20220327.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-07-20220327.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-08-20220327.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-09-20220327.jpg",
        "alt": "butaca delantera (despues) — Chevrolet Corsa",
        "parte": "butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-trasera-despues-01-20220327.jpg",
        "alt": "butaca trasera (despues) — Chevrolet Corsa",
        "parte": "butaca trasera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-trasera-despues-02-20220327.jpg",
        "alt": "butaca trasera (despues) — Chevrolet Corsa",
        "parte": "butaca trasera"
      }
    ],
    "portada": "/galeria/detailing-interior/chevrolet-corsa/despues/chevrolet-corsa-butaca-delantera-despues-01-20220326.jpg",
    "totalFotos": 29
  },
  {
    "id": "detailing-interior--chevrolet",
    "vehiculo": "Chevrolet",
    "servicioSlug": "detailing-interior",
    "servicio": "Estética interior",
    "titulo": "Chevrolet · Estética interior",
    "antes": [
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-01-20220119.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-02-20220119.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-03-20220119.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-04-20220120.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-05-20220120.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-06-20220120.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-07-20220120.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-08-20220120.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-butaca-delantera-antes-09-20220120.jpg",
        "alt": "interior butaca delantera (antes) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-panel-puerta-antes-01-20220119.jpg",
        "alt": "interior panel puerta (antes) — Chevrolet",
        "parte": "interior panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-volante-antes-01-20220119.jpg",
        "alt": "interior volante (antes) — Chevrolet",
        "parte": "interior volante"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/antes/chevrolet-interior-volante-antes-02-20220119.jpg",
        "alt": "interior volante (antes) — Chevrolet",
        "parte": "interior volante"
      }
    ],
    "despues": [
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-01-20220119.jpg",
        "alt": "interior butaca delantera (despues) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-02-20220119.jpg",
        "alt": "interior butaca delantera (despues) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-03-20220120.jpg",
        "alt": "interior butaca delantera (despues) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-04-20220120.jpg",
        "alt": "interior butaca delantera (despues) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-05-20220120.jpg",
        "alt": "interior butaca delantera (despues) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-06-20220120.jpg",
        "alt": "interior butaca delantera (despues) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-07-20220120.jpg",
        "alt": "interior butaca delantera (despues) — Chevrolet",
        "parte": "interior butaca delantera"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-consola-despues-01-20220119.jpg",
        "alt": "interior consola (despues) — Chevrolet",
        "parte": "interior consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-consola-despues-02-20220119.jpg",
        "alt": "interior consola (despues) — Chevrolet",
        "parte": "interior consola"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-panel-puerta-despues-01-20220119.jpg",
        "alt": "interior panel puerta (despues) — Chevrolet",
        "parte": "interior panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-panel-puerta-despues-02-20220119.jpg",
        "alt": "interior panel puerta (despues) — Chevrolet",
        "parte": "interior panel puerta"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-volante-despues-01-20220119.jpg",
        "alt": "interior volante (despues) — Chevrolet",
        "parte": "interior volante"
      },
      {
        "src": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-volante-despues-02-20220119.jpg",
        "alt": "interior volante (despues) — Chevrolet",
        "parte": "interior volante"
      }
    ],
    "portada": "/galeria/detailing-interior/chevrolet/despues/chevrolet-interior-butaca-delantera-despues-01-20220119.jpg",
    "totalFotos": 25
  },
  {
    "id": "pulido-exterior--peugeot-206",
    "vehiculo": "Peugeot 206",
    "servicioSlug": "pulido-exterior",
    "servicio": "Pulido y estética exterior",
    "titulo": "Peugeot 206 · Pulido y estética exterior",
    "antes": [
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-01-20220124.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-02-20220124.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-03-20220124.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-04-20220124.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-05-20220124.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-06-20220124.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-07-20220124.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-08-20220125.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-09-20220125.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-10-20220128.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-11-20220712.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-completo-antes-12-20220718.jpg",
        "alt": "exterior completo (antes) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/antes/peugeot-206-exterior-panel-antes-01-20220128.jpg",
        "alt": "exterior panel (antes) — Peugeot 206",
        "parte": "exterior panel"
      }
    ],
    "despues": [
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-01-20220128.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-02-20220128.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-03-20220128.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-04-20220128.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-05-20220314.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-06-20220314.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-07-20220407.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-08-20220523.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-09-20220523.jpg",
        "alt": "exterior completo (despues) — Peugeot 206",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-01-20220126.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-02-20220126.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-03-20220127.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-04-20220127.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-05-20220127.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-06-20220127.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-07-20220127.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-08-20220128.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-09-20220128.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-10-20220128.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-11-20220128.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-12-20220523.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-13-20220720.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-14-20220720.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-15-20220720.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-panel-despues-16-20220720.jpg",
        "alt": "exterior panel (despues) — Peugeot 206",
        "parte": "exterior panel"
      }
    ],
    "portada": "/galeria/pulido-exterior/peugeot-206/despues/peugeot-206-exterior-completo-despues-01-20220128.jpg",
    "totalFotos": 38
  },
  {
    "id": "pulido-exterior--chevrolet-prisma",
    "vehiculo": "Chevrolet Prisma",
    "servicioSlug": "pulido-exterior",
    "servicio": "Pulido y estética exterior",
    "titulo": "Chevrolet Prisma · Pulido y estética exterior",
    "antes": [],
    "despues": [
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-01-20220310.jpg",
        "alt": "exterior completo (despues) — Chevrolet Prisma",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-02-20220310.jpg",
        "alt": "exterior completo (despues) — Chevrolet Prisma",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-03-20220310.jpg",
        "alt": "exterior completo (despues) — Chevrolet Prisma",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-04-20220310.jpg",
        "alt": "exterior completo (despues) — Chevrolet Prisma",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-05-20220310.jpg",
        "alt": "exterior completo (despues) — Chevrolet Prisma",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-06-20220328.jpg",
        "alt": "exterior completo (despues) — Chevrolet Prisma",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-07-20220328.jpg",
        "alt": "exterior completo (despues) — Chevrolet Prisma",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-panel-despues-01-20220303.jpg",
        "alt": "exterior panel (despues) — Chevrolet Prisma",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-panel-despues-02-20220303.jpg",
        "alt": "exterior panel (despues) — Chevrolet Prisma",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-panel-despues-03-20220303.jpg",
        "alt": "exterior panel (despues) — Chevrolet Prisma",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-panel-despues-04-20220308.jpg",
        "alt": "exterior panel (despues) — Chevrolet Prisma",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-panel-despues-05-20220310.jpg",
        "alt": "exterior panel (despues) — Chevrolet Prisma",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-panel-despues-06-20220310.jpg",
        "alt": "exterior panel (despues) — Chevrolet Prisma",
        "parte": "exterior panel"
      }
    ],
    "portada": "/galeria/pulido-exterior/chevrolet-prisma/despues/chevrolet-prisma-exterior-completo-despues-01-20220310.jpg",
    "totalFotos": 13
  },
  {
    "id": "pulido-exterior--renault-logan",
    "vehiculo": "Renault Logan",
    "servicioSlug": "pulido-exterior",
    "servicio": "Pulido y estética exterior",
    "titulo": "Renault Logan · Pulido y estética exterior",
    "antes": [
      {
        "src": "/galeria/pulido-exterior/renault-logan/antes/renault-logan-optica-antes-01-20220714.jpg",
        "alt": "optica (antes) — Renault Logan",
        "parte": "optica"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/antes/renault-logan-optica-antes-02-20220714.jpg",
        "alt": "optica (antes) — Renault Logan",
        "parte": "optica"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/antes/renault-logan-optica-antes-03-20220714.jpg",
        "alt": "optica (antes) — Renault Logan",
        "parte": "optica"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/antes/renault-logan-optica-antes-04-20220714.jpg",
        "alt": "optica (antes) — Renault Logan",
        "parte": "optica"
      }
    ],
    "despues": [
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-exterior-completo-despues-01-20220714.jpg",
        "alt": "exterior completo (despues) — Renault Logan",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-exterior-completo-despues-02-20220715.jpg",
        "alt": "exterior completo (despues) — Renault Logan",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-exterior-completo-despues-03-20220715.jpg",
        "alt": "exterior completo (despues) — Renault Logan",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-exterior-completo-despues-04-20220715.jpg",
        "alt": "exterior completo (despues) — Renault Logan",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-exterior-panel-despues-01-20220713.jpg",
        "alt": "exterior panel (despues) — Renault Logan",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-optica-despues-01-20220714.jpg",
        "alt": "optica (despues) — Renault Logan",
        "parte": "optica"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-optica-despues-02-20220714.jpg",
        "alt": "optica (despues) — Renault Logan",
        "parte": "optica"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-optica-despues-03-20220715.jpg",
        "alt": "optica (despues) — Renault Logan",
        "parte": "optica"
      },
      {
        "src": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-optica-despues-04-20220715.jpg",
        "alt": "optica (despues) — Renault Logan",
        "parte": "optica"
      }
    ],
    "portada": "/galeria/pulido-exterior/renault-logan/despues/renault-logan-exterior-completo-despues-01-20220714.jpg",
    "totalFotos": 13
  },
  {
    "id": "pulido-exterior--ford-fiesta",
    "vehiculo": "Ford Fiesta",
    "servicioSlug": "pulido-exterior",
    "servicio": "Pulido y estética exterior",
    "titulo": "Ford Fiesta · Pulido y estética exterior",
    "antes": [
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/antes/ford-fiesta-exterior-panel-antes-01-20230902.jpg",
        "alt": "exterior panel (antes) — Ford Fiesta",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/antes/ford-fiesta-exterior-panel-antes-02-20230902.jpg",
        "alt": "exterior panel (antes) — Ford Fiesta",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/antes/ford-fiesta-exterior-panel-antes-03-20230903.jpg",
        "alt": "exterior panel (antes) — Ford Fiesta",
        "parte": "exterior panel"
      }
    ],
    "despues": [
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-completo-despues-01-20230902.jpg",
        "alt": "exterior completo (despues) — Ford Fiesta",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-completo-despues-02-20230902.jpg",
        "alt": "exterior completo (despues) — Ford Fiesta",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-completo-despues-03-20230902.jpg",
        "alt": "exterior completo (despues) — Ford Fiesta",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-completo-despues-04-20230904.jpg",
        "alt": "exterior completo (despues) — Ford Fiesta",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-panel-despues-01-20230902.jpg",
        "alt": "exterior panel (despues) — Ford Fiesta",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-panel-despues-02-20230902.jpg",
        "alt": "exterior panel (despues) — Ford Fiesta",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-panel-despues-03-20230902.jpg",
        "alt": "exterior panel (despues) — Ford Fiesta",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-panel-despues-04-20230902.jpg",
        "alt": "exterior panel (despues) — Ford Fiesta",
        "parte": "exterior panel"
      }
    ],
    "portada": "/galeria/pulido-exterior/ford-fiesta/despues/ford-fiesta-exterior-completo-despues-01-20230902.jpg",
    "totalFotos": 11
  },
  {
    "id": "pulido-exterior--chevrolet-spin",
    "vehiculo": "Chevrolet Spin",
    "servicioSlug": "pulido-exterior",
    "servicio": "Pulido y estética exterior",
    "titulo": "Chevrolet Spin · Pulido y estética exterior",
    "antes": [],
    "despues": [
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-completo-despues-01-20220531.jpg",
        "alt": "exterior completo (despues) — Chevrolet Spin",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-completo-despues-02-20220531.jpg",
        "alt": "exterior completo (despues) — Chevrolet Spin",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-completo-despues-03-20220531.jpg",
        "alt": "exterior completo (despues) — Chevrolet Spin",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-completo-despues-04-20220531.jpg",
        "alt": "exterior completo (despues) — Chevrolet Spin",
        "parte": "exterior completo"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-panel-despues-01-20220530.jpg",
        "alt": "exterior panel (despues) — Chevrolet Spin",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-panel-despues-02-20220530.jpg",
        "alt": "exterior panel (despues) — Chevrolet Spin",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-panel-despues-03-20220530.jpg",
        "alt": "exterior panel (despues) — Chevrolet Spin",
        "parte": "exterior panel"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-tapacubos-despues-01-20220422.jpg",
        "alt": "tapacubos (despues) — Chevrolet Spin",
        "parte": "tapacubos"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-tapacubos-despues-02-20220422.jpg",
        "alt": "tapacubos (despues) — Chevrolet Spin",
        "parte": "tapacubos"
      },
      {
        "src": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-tapacubos-despues-03-20220422.jpg",
        "alt": "tapacubos (despues) — Chevrolet Spin",
        "parte": "tapacubos"
      }
    ],
    "portada": "/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-completo-despues-01-20220531.jpg",
    "totalFotos": 10
  }
];
