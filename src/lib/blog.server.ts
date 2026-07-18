import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Post } from '@/lib/blog';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function readingMinutes(texto: string): number {
  const palabras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palabras / 200));
}

function parseFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
    cover: data.cover,
    coverAlt: data.coverAlt ?? '',
    servicioRelacionado: data.servicioRelacionado ?? '',
    readingMinutes: readingMinutes(content),
    content,
  };
}

/** Todos los artículos, ordenados del más nuevo al más viejo. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    return parseFile(`${slug}.md`);
  } catch {
    return null;
  }
}

/**
 * Notas relacionadas a un artículo: prioriza la misma categoría y, si no llegan
 * al límite, completa con las más recientes de otras categorías.
 */
export function getRelatedPosts(slug: string, category: string, limit = 3): Post[] {
  const otros = getAllPosts().filter((p) => p.slug !== slug);
  const mismaCategoria = otros.filter((p) => p.category === category);
  const resto = otros.filter((p) => p.category !== category);
  return [...mismaCategoria, ...resto].slice(0, limit);
}
