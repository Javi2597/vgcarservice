'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import WhatsAppForm from '@/components/WhatsAppForm';

/** Botón flotante de WhatsApp con formulario rápido de 2 pasos. */
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* Backdrop para cerrar al tocar afuera */}
      {open && (
        <button
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/20 md:bg-transparent"
        />
      )}

      {/* Panel del formulario */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-24 right-5 z-50 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/50 motion-safe:animate-[fadeInUp_.18s_ease-out] sm:right-6"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
              <WhatsAppIcon className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold leading-tight text-white">{BUSINESS_INFO.name}</p>
              <p className="text-xs leading-tight text-white/90">Respondemos en minutos</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="rounded-full p-1 text-white/90 transition-colors hover:bg-white/20 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cuerpo: formulario compartido */}
          <div className="p-4">
            <WhatsAppForm autoFocus />
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar el chat de WhatsApp' : 'Escribinos por WhatsApp'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6 sm:right-6"
      >
        {open ? <X className="h-7 w-7" /> : <WhatsAppIcon className="h-7 w-7" />}
      </button>
    </>
  );
}
