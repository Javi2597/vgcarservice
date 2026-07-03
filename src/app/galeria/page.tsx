import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { TRABAJOS } from '@/data/galeria';

export const metadata: Metadata = {
  title: 'Galería de trabajos',
  description:
    'Trabajos reales de mecánica y estética vehicular: antes y después de detailing de interior, pulido de exterior y restauración.',
};

const totalFotos = TRABAJOS.reduce((acc, t) => acc + t.totalFotos, 0);

export default function GaleriaPage() {
  return (
    <main className="pt-28">
      <section className="bg-gray-950 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Galería
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl text-balance">
            Nuestros trabajos
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {totalFotos} fotos de trabajos reales. Tocá <strong className="text-gray-200">Antes</strong>{' '}
            / <strong className="text-gray-200">Después</strong> en cada tarjeta y navegá las
            miniaturas.
          </p>
        </div>
      </section>

      <section className="bg-gray-950 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery showFilter />
        </div>
      </section>
    </main>
  );
}
