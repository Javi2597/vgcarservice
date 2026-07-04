'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/utils';

const MOTIVOS = [
  { value: 'Turno', frase: 'Quería sacar un turno' },
  { value: 'Presupuesto', frase: 'Quería pedir un presupuesto' },
  { value: 'Consulta', frase: 'Quería hacer una consulta' },
] as const;

type Motivo = (typeof MOTIVOS)[number]['value'];

/**
 * Formulario de WhatsApp en 2 pasos (nombre + motivo → número). Reutilizable:
 * lo usa el botón flotante y la tarjeta inline de la página de contacto.
 */
export default function WhatsAppForm({
  autoFocus = false,
  onSent,
}: {
  autoFocus?: boolean;
  onSent?: () => void;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [nombre, setNombre] = useState('');
  const [motivo, setMotivo] = useState<Motivo>('Turno');
  const [numero, setNumero] = useState('');
  const [sent, setSent] = useState(false);

  const nombreRef = useRef<HTMLInputElement>(null);
  const numeroRef = useRef<HTMLInputElement>(null);
  const mounted = useRef(false);

  const nombreOk = nombre.trim().length > 0;
  const numeroOk = numero.replace(/\D/g, '').length >= 6;

  // Foco al input activo al cambiar de paso (y al montar sólo si autoFocus).
  useEffect(() => {
    const shouldFocus = mounted.current || autoFocus;
    mounted.current = true;
    if (sent || !shouldFocus) return;
    const t = setTimeout(() => (step === 1 ? nombreRef : numeroRef).current?.focus(), 60);
    return () => clearTimeout(t);
  }, [step, autoFocus, sent]);

  function reset() {
    setSent(false);
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
    setSent(true);
    onSent?.();
  }

  if (sent) {
    return (
      <div
        key="sent"
        className="flex flex-col items-center gap-3 py-4 text-center motion-safe:animate-[fadeInUp_.2s_ease-out]"
      >
        <CheckCircle2 className="h-11 w-11 text-[#25D366]" />
        <div>
          <p className="font-semibold text-white">¡Listo, {nombre.trim().split(' ')[0]}!</p>
          <p className="mt-1 text-sm text-gray-400">
            Abrimos WhatsApp en otra pestaña con tu mensaje. Si no se abrió, revisá el bloqueo de
            pop-ups.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-1 text-sm font-medium text-brand-glow hover:underline"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progreso */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-cyan">
          Paso {step} de 2
        </span>
        <div className="flex flex-1 gap-1.5">
          <span className="h-1 flex-1 rounded-full bg-brand-cyan transition-colors" />
          <span
            className={`h-1 flex-1 rounded-full transition-colors ${step === 2 ? 'bg-brand-cyan' : 'bg-gray-700'}`}
          />
        </div>
      </div>

      {step === 1 ? (
        <div key="step1" className="space-y-4 motion-safe:animate-[fadeInUp_.18s_ease-out]">
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
        <div key="step2" className="space-y-4 motion-safe:animate-[fadeInUp_.18s_ease-out]">
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
  );
}
