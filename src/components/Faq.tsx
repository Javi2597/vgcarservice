'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';
import { FAQ } from '@/data/faq';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);

  // Datos estructurados FAQPage para Google (rich snippet).
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  };

  return (
    <section id="faq" className="bg-gray-900 py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Lo que más nos consultan
          </h2>
        </div>

        <ul className="space-y-3">
          {FAQ.map((item, i) => {
            const open = abierta === i;
            return (
              <li
                key={item.pregunta}
                className="overflow-hidden rounded-xl border border-gray-700/60 bg-gray-800/50"
              >
                <button
                  onClick={() => setAbierta(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-800"
                >
                  <span className="font-semibold text-white">{item.pregunta}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-cyan transition-transform duration-300 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-300">
                        {item.respuesta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <p className="text-gray-400">¿Tenés otra consulta?</p>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1fb457]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
