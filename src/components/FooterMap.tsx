'use client';

import { usePathname } from 'next/navigation';
import { BUSINESS_INFO } from '@/lib/utils';
import AnimatedMapPin from '@/components/icons/AnimatedMapPin';

export default function FooterMap() {
  const pathname = usePathname();
  // La página de contacto ya muestra su propio mapa; evitamos duplicarlo.
  if (pathname === '/contacto') return null;

  return (
    <div>
      <h3 className="mb-6 flex items-center gap-2 text-base font-semibold text-white">
        <AnimatedMapPin className="h-4 w-4 text-brand-cyan" />
        Cómo llegar
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <iframe
          src={BUSINESS_INFO.addressMapUrl}
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de VG Car Service en Google Maps"
        />
      </div>
    </div>
  );
}
