'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CATEGORIAS, type PostMeta } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

/** Grid de artículos con filtro por categoría (cliente). */
export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [filtro, setFiltro] = useState<string>('todos');

  // Solo mostramos las categorías que realmente tienen artículos.
  const categoriasDisponibles = useMemo(
    () => CATEGORIAS.filter((c) => posts.some((p) => p.category === c.slug)),
    [posts]
  );

  const visibles = useMemo(
    () => (filtro === 'todos' ? posts : posts.filter((p) => p.category === filtro)),
    [filtro, posts]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {[{ slug: 'todos', label: 'Todos' }, ...categoriasDisponibles].map((c) => (
          <button
            key={c.slug}
            onClick={() => setFiltro(c.slug)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm font-medium transition-colors',
              filtro === c.slug
                ? 'border-brand-cyan bg-brand-cyan text-white'
                : 'border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white'
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((post, i) => (
          <motion.div
            key={post.slug}
            className="min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
