import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedMapPin from '@/components/icons/AnimatedMapPin';
import AnimatedClock from '@/components/icons/AnimatedClock';
import InstagramGradientIcon from '@/components/icons/InstagramGradientIcon';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Faq from '@/components/Faq';
import { BUSINESS_INFO } from '@/lib/utils';
import { TRABAJOS } from '@/data/galeria';

const destacados = TRABAJOS.filter((t) => t.antes.length > 0 && t.despues.length > 0).slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Services detailed={false} />

      {/* Teaser de galería */}
      <section className="py-20 lg:py-28 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
              Antes y después
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              El resultado habla por nosotros
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Una muestra de trabajos reales realizados en el taller.
            </p>
          </div>

          <Gallery trabajos={destacados} />

          <div className="mt-12 text-center">
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-cyan px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Ver galería completa
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <Faq />

      {/* Ubicación / horario CTA */}
      <section className="border-t border-gray-800 bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl border border-gray-700/60 bg-gray-800/50 p-6">
              <AnimatedMapPin className="h-6 w-6 shrink-0 text-brand-cyan" />
              <div>
                <h3 className="font-semibold text-white">Dónde estamos</h3>
                <p className="mt-1 text-sm text-gray-400">{BUSINESS_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-700/60 bg-gray-800/50 p-6">
              <AnimatedClock className="h-6 w-6 shrink-0 text-brand-cyan" />
              <div>
                <h3 className="font-semibold text-white">Horario</h3>
                <p className="mt-1 text-sm text-gray-400">{BUSINESS_INFO.scheduleShort}</p>
              </div>
            </div>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-gray-700/60 bg-gray-800/50 p-6 transition-colors hover:border-brand-cyan/50 hover:bg-gray-800"
            >
              <InstagramGradientIcon className="h-6 w-6 shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Seguinos</h3>
                <p className="mt-1 text-sm text-gray-400">{BUSINESS_INFO.instagram}</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
