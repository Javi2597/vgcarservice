import Link from 'next/link';
import { Images, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/vid/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/vid/hero.mp4" type="video/mp4" />
      </video>

      {/* Capa base para oscurecer el video de fondo */}
      <div className="absolute inset-0 bg-[#030712]/60" />

      {/* Degradado direccional para reforzar la legibilidad del texto a la izquierda */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(3,7,18,0.92) 0%, rgba(3,7,18,0.72) 50%, rgba(3,7,18,0.45) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-2xl">
          <div className="hero-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-brand-glow" />
            <span className="text-sm font-semibold text-brand-glow">Mecánica y estética vehicular</span>
          </div>

          <h1
            className="hero-fade-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
            style={{ animationDelay: '0.15s' }}
          >
            Todos los servicios de tu auto en{' '}
            <span className="text-brand-glow">un solo lugar</span>
          </h1>

          <p
            className="hero-fade-up mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
            style={{ animationDelay: '0.3s' }}
          >
            Mecánica integral, chapa y pintura, y estética de especialidad para interior y exterior.
            Cuidamos cada detalle de tu vehículo en Barracas, CABA.
          </p>

          <div
            className="hero-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: '0.45s' }}
          >
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-[#1fb457] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir turno por WhatsApp
            </a>
            <Link
              href="/galeria"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              <Images className="h-5 w-5" />
              Ver nuestros trabajos
            </Link>
          </div>

          <p
            className="hero-fade-up mt-8 text-sm text-gray-400"
            style={{ animationDelay: '0.6s' }}
          >
            📍 {BUSINESS_INFO.address} · 🕙 {BUSINESS_INFO.scheduleShort}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400">
        <svg className="hero-bounce h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
