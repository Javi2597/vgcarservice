import type { Metadata } from 'next';
import { MapPin, Clock, Instagram, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contacto y ubicación',
  description:
    'Encontranos en Av. Vieytes 838, Barracas, CABA. Horario de 10 a 20 h. Seguinos en Instagram @vgesteticavehicular.',
};

export default function ContactoPage() {
  return (
    <main className="pt-28">
      <section className="bg-gray-950 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Contacto
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl text-balance">
            Acercate al taller
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Estamos en Barracas, Ciudad de Buenos Aires. Pasá a consultar por tu vehículo.
          </p>
        </div>
      </section>

      <section className="bg-gray-950 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 transition-colors hover:border-[#25D366]/70 hover:bg-[#25D366]/20"
              >
                <WhatsAppIcon className="h-6 w-6 shrink-0 text-[#25D366]" />
                <div>
                  <h2 className="font-semibold text-white">WhatsApp</h2>
                  <p className="mt-1 text-gray-300">
                    {BUSINESS_INFO.whatsapp} — escribinos para pedir un turno o consultar por tu
                    vehículo.
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-700/60 bg-gray-800/50 p-6">
                <MapPin className="h-6 w-6 shrink-0 text-brand-cyan" />
                <div>
                  <h2 className="font-semibold text-white">Dirección</h2>
                  <p className="mt-1 text-gray-400">{BUSINESS_INFO.address}</p>
                  <a
                    href={BUSINESS_INFO.addressDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-glow hover:underline"
                  >
                    <Navigation className="h-4 w-4" />
                    Cómo llegar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-700/60 bg-gray-800/50 p-6">
                <Clock className="h-6 w-6 shrink-0 text-brand-cyan" />
                <div className="w-full">
                  <h2 className="font-semibold text-white">Horario de atención</h2>
                  <ul className="mt-3 space-y-2">
                    {BUSINESS_INFO.schedule.map((s) => (
                      <li
                        key={s.days}
                        className="flex items-center justify-between gap-4 rounded-lg bg-gray-900/60 px-4 py-2.5"
                      >
                        <span className="text-sm text-gray-400">{s.days}</span>
                        <span
                          className={`text-sm font-medium ${'closed' in s && s.closed ? 'text-red-400' : 'text-white'}`}
                        >
                          {s.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-gray-700/60 bg-gray-800/50 p-6 transition-colors hover:border-brand-cyan/50 hover:bg-gray-800"
              >
                <Instagram className="h-6 w-6 shrink-0 text-brand-cyan" />
                <div>
                  <h2 className="font-semibold text-white">Instagram</h2>
                  <p className="mt-1 text-gray-400">
                    {BUSINESS_INFO.instagram} — mirá los últimos trabajos y escribinos por mensaje.
                  </p>
                </div>
              </a>
            </div>

            {/* Mapa */}
            <div className="overflow-hidden rounded-2xl border border-gray-700">
              <iframe
                src={BUSINESS_INFO.addressMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de VG Car Service en Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
