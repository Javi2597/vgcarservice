import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/lib/blog.server';
import { categoriaLabel, formatFecha } from '@/lib/blog';
import ArticleCTA from '@/components/ArticleCTA';
import { BASE_URL } from '@/lib/utils';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${BASE_URL}/blog/${post.slug}`;
  const image = `${BASE_URL}${post.cover}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: new Date(`${post.date}T12:00:00`).toISOString(),
      images: [{ url: image, alt: post.coverAlt }],
    },
  };
}

export default function ArticuloPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${BASE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'VG Car Service' },
    publisher: { '@type': 'Organization', name: 'VG Car Service' },
    mainEntityOfPage: url,
  };

  return (
    <main className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-gray-950 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-glow hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-brand-cyan/15 px-3 py-1 font-semibold text-brand-glow">
              {categoriaLabel(post.category)}
            </span>
            <span className="text-gray-500">{formatFecha(post.date)}</span>
            <span className="inline-flex items-center gap-1.5 text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              {post.readingMinutes} min
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl text-balance">
            {post.title}
          </h1>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-900">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              quality={65}
              priority
            />
          </div>

          <div className="prose prose-invert mt-10 max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-brand-glow prose-strong:text-white prose-li:marker:text-brand-cyan">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          <ArticleCTA servicioSlug={post.servicioRelacionado} postTitle={post.title} />
        </div>
      </article>
    </main>
  );
}
