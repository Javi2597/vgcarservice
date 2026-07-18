import type { Metadata } from 'next';
import BlogList from '@/components/BlogList';
import { getAllPosts } from '@/lib/blog.server';
import type { PostMeta } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog: consejos para tu auto',
  description:
    'Preguntas y respuestas sobre mecánica, frenos, mantenimiento y estética del automóvil. Consejos del taller para cuidar tu vehículo.',
};

export default function BlogPage() {
  // Solo los metadatos (serializables) van al componente cliente; el cuerpo no hace falta acá.
  const posts: PostMeta[] = getAllPosts().map(({ content, ...meta }) => meta);

  return (
    <main className="pt-28">
      <section className="bg-gray-950 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Blog
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl text-balance">
            Consejos para cuidar tu auto
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Preguntas y respuestas sobre mecánica, frenos, mantenimiento y estética. Lo que solemos
            explicar en el taller, para que llegues con el auto a tiempo.
          </p>
        </div>
      </section>

      <section className="bg-gray-950 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  );
}
