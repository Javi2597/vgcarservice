import type { PostMeta } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

/** Grilla de notas relacionadas al pie del artículo, para seguir leyendo. */
export default function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gray-800 pt-12">
      <h2 className="text-2xl font-bold text-white">Seguí leyendo</h2>
      <p className="mt-2 text-gray-400">Otras notas que te pueden servir.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
