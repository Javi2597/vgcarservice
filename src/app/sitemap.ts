import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog.server';
import { BASE_URL } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const rutas = ['', '/servicios', '/galeria', '/blog', '/contacto'];

  const paginas: MetadataRoute.Sitemap = rutas.map((ruta) => ({
    url: `${BASE_URL}${ruta}`,
    lastModified,
    changeFrequency: ruta === '/blog' ? 'weekly' : 'monthly',
    priority: ruta === '' ? 1 : 0.8,
  }));

  const articulos: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T12:00:00`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...paginas, ...articulos];
}
