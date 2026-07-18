import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { SERVICIOS } from '@/data/servicios';

/** Bloque de cierre de cada artículo: lleva la lectura al WhatsApp y al servicio relacionado. */
export default function ArticleCTA({ servicioSlug }: { servicioSlug?: string }) {
  const servicio = SERVICIOS.find((s) => s.slug === servicioSlug);

  return (
    <aside className="mt-12 rounded-2xl border border-brand-cyan/30 bg-gradient-to-br from-gray-800/80 to-gray-900 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">¿Te está pasando esto en tu auto?</h2>
      <p className="mt-2 text-gray-300">
        {servicio ? (
          <>
            En VG Car Service nos ocupamos de <strong className="text-brand-glow">{servicio.title.toLowerCase()}</strong> y de todos los servicios del vehículo. Escribinos y lo revisamos.
          </>
        ) : (
          <>Escribinos por WhatsApp y coordinamos para revisar tu vehículo en el taller.</>
        )}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
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
          href="/servicios"
          className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
        >
          Ver servicios
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </aside>
  );
}
