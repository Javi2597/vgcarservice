'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ArrowLeft, Send } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const MOTIVOS = [
  { value: 'Turno', frase: 'Quería sacar un turno' },
  { value: 'Presupuesto', frase: 'Quería pedir un presupuesto' },
  { value: 'Consulta', frase: 'Quería hacer una consulta' },
] as const;

type Motivo = (typeof MOTIVOS)[number]['value'];

/** Botón flotante de WhatsApp con formulario rápido de 2 pasos. */
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [nombre, setNombre] = useState('');
  const [motivo, setMotivo] = useState<Motivo>('Turno');
  const [numero, setNumero] = useState('');

  const panelRef = useRef<HTMLDivElement>(null);
  const nombreRef = useRef<HTMLInputElement>(null);
  const numeroRef = useRef<HTMLInputElement>(null);

  const nombreOk = nombre.trim().length > 0;
  const numeroOk = numero.replace(/\D/g, '').length >= 6;

  // Foco al input activo al abrir o cambiar de paso.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      (step === 1 ? nombreRef : numeroRef).current?.focus();
    }, 60);
    return () => clearTimeout(t);
  }, [open, step]);

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function reset() {
    setStep(1);
    setNombre('');
    setMotivo('Turno');
    setNumero('');
  }

  function enviar() {
    if (!nombreOk || !numeroOk) return;
    const frase = MOTIVOS.find((m) => m.value === motivo)?.frase ?? 'Quería hacer una consulta';
    const msg = `Hola ${BUSINESS_INFO.name}, soy ${nombre.trim()}. ${frase}. Mi número de contacto es ${numero.trim()}.`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
    reset();
  }

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
          ref={panelRef}
          role="dialog"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-24 right-5 z-50 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/50 motion-safe:animate-[fadeInUp_.18s_ease-out] sm:bottom-24 sm:right-6"
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

          {/* Cuerpo */}
          <div className="p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-brand-cyan">
              Paso {step} de 2
            </p>

            {step === 1 ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="wa-nombre" className="mb-1.5 block text-sm text-gray-300">
                    ¿Cómo te llamás?
                  </label>
                  <input
                    id="wa-nombre"
                    ref={nombreRef}
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && nombreOk) setStep(2);
                    }}
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-white placeholder-gray-500 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                  />
                </div>

                <div>
                  <span className="mb-1.5 block text-sm text-gray-300">¿Sobre qué querés escribir?</span>
                  <div className="flex flex-wrap gap-2">
                    {MOTIVOS.map((m) => {
                      const activo = motivo === m.value;
                      return (
                        <button
                          key={m.value}
                          type="button"
                          onClick={() => setMotivo(m.value)}
                          aria-pressed={activo}
                          className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                            activo
                              ? 'border-brand-cyan bg-brand-cyan/15 text-brand-glow'
                              : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          {m.value}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!nombreOk}
                  className="w-full rounded-lg bg-brand-cyan px-4 py-2.5 font-semibold text-white transition-colors hover:bg-brand-cyan/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Siguiente
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="wa-numero" className="mb-1.5 block text-sm text-gray-300">
                    ¿A qué número te contactamos?
                  </label>
                  <input
                    id="wa-numero"
                    ref={numeroRef}
                    type="tel"
                    inputMode="tel"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && numeroOk) enviar();
                    }}
                    placeholder="Ej: 11 5555-5555"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-white placeholder-gray-500 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                  />
                  <p className="mt-1.5 text-xs text-gray-500">
                    Hola {nombre.trim() || '…'} 👋 · {motivo}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    aria-label="Volver al paso anterior"
                    className="flex shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-3 text-gray-300 transition-colors hover:border-gray-600"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={enviar}
                    disabled={!numeroOk}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#20bd5a] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Send className="h-4 w-4" />
                    Abrir WhatsApp
                  </button>
                </div>
              </div>
            )}
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
