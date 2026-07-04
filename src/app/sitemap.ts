import type { MetadataRoute } from 'next';

const BASE_URL = 'https://vgcarservice.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const rutas = ['', '/servicios', '/galeria', '/contacto'];

  return rutas.map((ruta) => ({
    url: `${BASE_URL}${ruta}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: ruta === '' ? 1 : 0.8,
  }));
}
