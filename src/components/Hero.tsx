'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Images, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-completo-despues-01-20220531.jpg"
        alt="Vehículo reluciente tras el trabajo de VG Car Service"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={65}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(3,7,18,0.94) 0%, rgba(3,7,18,0.78) 50%, rgba(3,7,18,0.55) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-2xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-1.5"
          >
            <Sparkles className="h-4 w-4 text-brand-glow" />
            <span className="text-sm font-semibold text-brand-glow">Mecánica y estética vehicular</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
          >
            Todos los servicios de tu auto en{' '}
            <span className="text-brand-glow">un solo lugar</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
          >
            Mecánica integral, chapa y pintura, y estética de especialidad para interior y exterior.
            Cuidamos cada detalle de tu vehículo en Barracas, CABA.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="mt-10 flex flex-wrap gap-4"
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
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mt-8 text-sm text-gray-400"
          >
            📍 {BUSINESS_INFO.address} · 🕙 {BUSINESS_INFO.scheduleShort}
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
