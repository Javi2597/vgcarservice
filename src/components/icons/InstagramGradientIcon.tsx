'use client';

import { useId } from 'react';

/**
 * Ícono de Instagram con el gradiente de marca (violeta→rosa→naranja).
 * Glow y leve escala al pasar el mouse (usa group-hover del contenedor padre).
 */
export default function InstagramGradientIcon({ className }: { className?: string }) {
  const gid = `ig-grad-${useId().replace(/:/g, '')}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gid})`}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 group-hover:scale-110 drop-shadow-[0_0_5px_rgba(214,41,118,0.35)] group-hover:drop-shadow-[0_0_9px_rgba(214,41,118,0.7)] ${className ?? ''}`}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="30%" stopColor="#fa7e1e" />
          <stop offset="60%" stopColor="#d62976" />
          <stop offset="85%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
