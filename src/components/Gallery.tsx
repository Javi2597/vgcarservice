'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TRABAJOS, SERVICIOS, type TrabajoGaleria, type Estado } from '@/data/galeria';

// Máximo de miniaturas montadas por tarjeta (menos imágenes = carga más liviana).
const MAX_THUMBS = 8;

function TrabajoCard({ trabajo }: { trabajo: TrabajoGaleria }) {
  const tieneAntes = trabajo.antes.length > 0;
  const tieneDespues = trabajo.despues.length > 0;
  const [view, setView] = useState<Estado>(tieneDespues ? 'despues' : 'antes');
  const [idx, setIdx] = useState(0);

  const fotos = view === 'antes' ? trabajo.antes : trabajo.despues;
  const total = fotos.length;
  const idxSafe = Math.min(idx, total - 1);
  const actual = fotos[idxSafe] ?? fotos[0];

  const cambiarVista = (v: Estado) => {
    setView(v);
    setIdx(0);
  };

  const goPrev = () => setIdx((p) => (p - 1 + total) % total);
  const goNext = () => setIdx((p) => (p + 1) % total);

  // Ventana de miniaturas alrededor de la foto actual: solo montamos MAX_THUMBS.
  let thumbStart = Math.max(0, idxSafe - Math.floor(MAX_THUMBS / 2));
  thumbStart = Math.min(thumbStart, Math.max(0, total - MAX_THUMBS));
  const thumbs = fotos.slice(thumbStart, thumbStart + MAX_THUMBS);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-800/50">
      <div className="relative aspect-video bg-gray-900 sm:aspect-[4/3]">
        {actual && (
          <Image
            src={actual.src}
            alt={actual.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={60}
          />
        )}

        {/* Toggle antes/despues */}
        {tieneAntes && tieneDespues && (
          <div className="absolute left-3 top-3 flex rounded-full bg-black/60 p-1 backdrop-blur-sm">
            {(['antes', 'despues'] as Estado[]).map((v) => (
              <button
                key={v}
                onClick={() => cambiarVista(v)}
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-semibold capitalize transition-colors',
                  view === v ? 'bg-brand-cyan text-white' : 'text-gray-300 hover:text-white'
                )}
              >
                {v === 'despues' ? 'Después' : 'Antes'}
              </button>
            ))}
          </div>
        )}
        {(!tieneAntes || !tieneDespues) && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold capitalize text-brand-glow backdrop-blur-sm">
            {tieneDespues ? 'Resultado' : 'Trabajo'}
          </span>
        )}

        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-gray-200 backdrop-blur-sm">
          {idxSafe + 1} / {total}
        </span>

        {/* Flechas de navegación (recorren todas las fotos) */}
        {total > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              aria-label="Foto siguiente"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Miniaturas (ventana acotada, calidad baja por ser 64px) */}
      {total > 1 && (
        <div className="scrollbar-thin flex gap-2 overflow-x-auto p-3">
          {thumbs.map((f, k) => {
            const i = thumbStart + k;
            return (
              <button
                key={f.src}
                onClick={() => setIdx(i)}
                className={cn(
                  'relative h-12 w-16 shrink-0 overflow-hidden rounded-md border-2 transition',
                  i === idxSafe ? 'border-brand-cyan' : 'border-transparent opacity-70 hover:opacity-100'
                )}
                aria-label={f.alt}
              >
                <Image src={f.src} alt="" fill className="object-cover" sizes="64px" quality={40} />
              </button>
            );
          })}
        </div>
      )}

      <div className="px-5 pb-5 pt-2">
        <h3 className="text-base font-bold text-white">{trabajo.vehiculo}</h3>
        <p className="text-sm text-brand-glow">{trabajo.servicio}</p>
      </div>
    </div>
  );
}

interface GalleryProps {
  showFilter?: boolean;
  trabajos?: TrabajoGaleria[];
}

export default function Gallery({ showFilter = false, trabajos = TRABAJOS }: GalleryProps) {
  const [filtro, setFiltro] = useState<string>('todos');

  const visibles = useMemo(
    () => (filtro === 'todos' ? trabajos : trabajos.filter((t) => t.servicioSlug === filtro)),
    [filtro, trabajos]
  );

  return (
    <div>
      {showFilter && (
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {[{ slug: 'todos', label: 'Todos' }, ...SERVICIOS].map((s) => (
            <button
              key={s.slug}
              onClick={() => setFiltro(s.slug)}
              className={cn(
                'rounded-full border px-5 py-2 text-sm font-medium transition-colors',
                filtro === s.slug
                  ? 'border-brand-cyan bg-brand-cyan text-white'
                  : 'border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white'
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((t, i) => (
          <motion.div
            key={t.id}
            className="min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
          >
            <TrabajoCard trabajo={t} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
