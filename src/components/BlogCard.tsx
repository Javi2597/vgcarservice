import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { categoriaLabel, type PostMeta } from '@/lib/blog';

/** Tarjeta de artículo para el índice del blog. */
export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-800/50 transition-all duration-300 hover:border-brand-cyan/50 hover:bg-gray-800"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={60}
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-brand-glow backdrop-blur-sm">
          {categoriaLabel(post.category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-brand-glow">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{post.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-gray-500">
          <Clock className="h-3.5 w-3.5" />
          {post.readingMinutes} min de lectura
        </span>
      </div>
    </Link>
  );
}
