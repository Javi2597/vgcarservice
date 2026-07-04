'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Menu, X, Instagram } from 'lucide-react';
import { cn, BUSINESS_INFO } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú mobile con Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-cyan transition-colors group-hover:bg-brand-deep">
            <Car className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight leading-none">
            <span className="text-brand-glow">VG</span> Car Service
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-brand-glow',
                    active ? 'text-brand-glow' : 'text-gray-300'
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" />
              {BUSINESS_INFO.instagram}
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  aria-current={pathname === href ? 'page' : undefined}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium transition-colors hover:bg-gray-800 hover:text-white',
                    pathname === href ? 'text-brand-glow' : 'text-gray-300'
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                {BUSINESS_INFO.instagram}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
