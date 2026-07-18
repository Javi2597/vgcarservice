import Link from 'next/link';
import Image from 'next/image';
import AnimatedMapPin from '@/components/icons/AnimatedMapPin';
import AnimatedClock from '@/components/icons/AnimatedClock';
import InstagramGradientIcon from '@/components/icons/InstagramGradientIcon';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import FooterMap from '@/components/FooterMap';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Columna 1: Marca + contacto */}
          <div>
            <div className="mb-6 flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="VG Car Service"
                width={600}
                height={418}
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold">
                <span className="text-brand-glow">VG</span> Car Service
              </span>
            </div>
            <p className="mb-6 text-sm text-gray-400 leading-relaxed">
              Mecánica y estética vehicular en Barracas. Todos los servicios del auto bajo un mismo
              techo.
            </p>

            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS_INFO.addressDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-300 transition-colors hover:text-brand-glow"
                >
                  <AnimatedMapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-cyan" />
                  {BUSINESS_INFO.address}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-brand-glow"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand-cyan" />
                  WhatsApp {BUSINESS_INFO.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-brand-glow"
                >
                  <InstagramGradientIcon className="h-4 w-4 shrink-0" />
                  {BUSINESS_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Horarios + links */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-base font-semibold text-white">
              <AnimatedClock className="h-4 w-4 text-brand-cyan" />
              Horarios de atención
            </h3>
            <ul className="space-y-3">
              {BUSINESS_INFO.schedule.map((s) => (
                <li
                  key={s.days}
                  className="flex items-center justify-between gap-4 rounded-lg bg-gray-800/50 px-4 py-3"
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
            <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link href="/servicios" className="text-gray-400 hover:text-brand-glow transition-colors">
                Servicios
              </Link>
              <Link href="/galeria" className="text-gray-400 hover:text-brand-glow transition-colors">
                Galería
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-brand-glow transition-colors">
                Blog
              </Link>
              <Link href="/contacto" className="text-gray-400 hover:text-brand-glow transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Columna 3: Mapa (oculto en /contacto para no duplicarlo) */}
          <FooterMap />
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {year} VG Car Service. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">Barracas, Ciudad de Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
}
