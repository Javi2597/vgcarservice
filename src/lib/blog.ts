// Parte del blog segura para el cliente (sin fs): tipos, categorías y formato.
// El loader que lee archivos vive en blog.server.ts (solo servidor).

export type CategoriaSlug =
  | 'mecanica'
  | 'frenos'
  | 'mantenimiento'
  | 'neumaticos'
  | 'transmision'
  | 'aire-acondicionado'
  | 'estetica';

/** Categorías del blog, alineadas a los servicios del taller. */
export const CATEGORIAS: { slug: CategoriaSlug; label: string }[] = [
  { slug: 'mecanica', label: 'Mecánica' },
  { slug: 'frenos', label: 'Frenos' },
  { slug: 'mantenimiento', label: 'Mantenimiento' },
  { slug: 'neumaticos', label: 'Neumáticos' },
  { slug: 'transmision', label: 'Transmisión y embrague' },
  { slug: 'aire-acondicionado', label: 'Aire acondicionado' },
  { slug: 'estetica', label: 'Estética' },
];

export function categoriaLabel(slug: string): string {
  return CATEGORIAS.find((c) => c.slug === slug)?.label ?? slug;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: CategoriaSlug;
  date: string;
  cover: string;
  coverAlt: string;
  servicioRelacionado: string;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
}

/** Fecha ISO → "8 de julio de 2026". */
export function formatFecha(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
