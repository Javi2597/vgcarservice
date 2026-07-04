import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vgcarservice.vercel.app'),
  title: {
    default: 'VG Car Service – Mecánica y estética vehicular en Barracas',
    template: '%s | VG Car Service',
  },
  description:
    'Taller integral en Barracas, CABA: mecánica integral completa, chapa y pintura, limpieza y estética de interior y exterior, y mantenimiento general del vehículo. Av. Vieytes 838.',
  keywords: [
    'taller mecánico Barracas',
    'estética vehicular CABA',
    'detailing autos Buenos Aires',
    'chapa y pintura Barracas',
    'limpieza de interiores auto',
    'mantenimiento vehicular',
    'VG Car Service',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'VG Car Service',
    title: 'VG Car Service – Mecánica y estética vehicular en Barracas',
    description:
      'Mecánica integral, chapa y pintura, y estética vehicular de especialidad en Av. Vieytes 838, Barracas (CABA).',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <StructuredData />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
