'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SERVICIOS, NOTA_ELECTRICIDAD } from '@/data/servicios';
import ServiceIcon from '@/components/ServiceIcon';
import AnimatedZap from '@/components/icons/AnimatedZap';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

interface ServicesProps {
  /** Mostrar la lista de features de cada servicio (página de servicios). */
  detailed?: boolean;
  heading?: boolean;
}

export default function Services({ detailed = false, heading = true }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
              Lo que hacemos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Todos los servicios del vehículo
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Un taller completo bajo un mismo techo: mecánica y estética, de principio a fin.
            </p>
          </div>
        )}

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 ${detailed ? 'lg:grid-cols-2' : 'lg:grid-cols-4'}`}
        >
          {SERVICIOS.map((service, i) => {
            return (
              <motion.div
                key={service.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group flex flex-col rounded-2xl border border-gray-700/60 bg-gray-800/50 p-8 transition-all duration-300 hover:border-brand-cyan/50 hover:bg-gray-800"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-cyan/10 group-hover:bg-brand-cyan/20 transition-colors">
                  <ServiceIcon name={service.icon} className="h-9 w-9" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {detailed ? service.description : service.short}
                </p>

                {detailed && (
                  <ul className="mt-auto grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Aclaración electricidad */}
        <div className="mt-10 flex items-start gap-3 rounded-xl border border-gray-700/60 bg-gray-800/40 p-5 text-sm text-gray-300">
          <AnimatedZap className="h-5 w-5 shrink-0 text-brand-glow" />
          <p>{NOTA_ELECTRICIDAD}</p>
        </div>
      </div>
    </section>
  );
}
