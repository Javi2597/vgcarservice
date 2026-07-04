import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Services from '@/components/Services';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Mecánica integral completa, chapa y pintura, estética de interior y exterior, y mantenimiento general del vehículo en Barracas, CABA.',
};

export default function ServiciosPage() {
  return (
    <main className="pt-28">
      <section className="bg-gray-950 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Servicios
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl text-balance">
            Todo lo que tu vehículo necesita
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Combinamos mecánica y estética para ofrecerte un servicio integral, sin tener que llevar
            el auto de un lado a otro.
          </p>
        </div>
      </section>

      <Services detailed heading={false} />

      <section className="bg-gray-950 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">¿Querés pedir un turno?</h2>
          <p className="mt-3 text-gray-400">
            Escribinos por WhatsApp y coordinamos, o mirá los trabajos reales en nuestra galería.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1fb457]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Consultar por WhatsApp
            </a>
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver galería
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
