# VG Car Service

Sitio web de **VG Car Service** — taller de mecánica y estética vehicular en Barracas, CABA.

## Stack
- [Next.js 14](https://nextjs.org/) (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion (animaciones)
- Optimización de imágenes con `next/image` + `sharp`

## Desarrollo local
```bash
pnpm install
pnpm dev
```
Abrir http://localhost:3000

## Build de producción
```bash
pnpm build
pnpm start
```

## Estructura
- `src/app/` — páginas (Inicio, Servicios, Galería, Contacto)
- `src/components/` — componentes (Navbar, Hero, Services, Gallery, Footer, WhatsAppButton)
- `src/data/` — datos de servicios y galería
- `src/lib/utils.ts` — información del negocio (dirección, horarios, WhatsApp, Instagram)
- `public/galeria/` — fotos de trabajos (antes/después)
