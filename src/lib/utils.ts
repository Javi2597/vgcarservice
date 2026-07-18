// Información del negocio. Datos provisorios — fáciles de actualizar acá.
export const BUSINESS_INFO = {
  name: 'VG Car Service',
  shortName: 'VG',
  tagline: 'Mecánica y estética vehicular',
  // Contacto por WhatsApp.
  whatsapp: '11 5581-2216',
  // Formato internacional para el link wa.me: 54 (Argentina) + 9 (celular) + 11 (área) + número.
  whatsappNumber: '5491155812216',
  whatsappUrl:
    'https://wa.me/5491155812216?text=Hola%20VG%20Car%20Service%2C%20quer%C3%ADa%20consultar%20por%20un%20turno.',
  instagram: '@vgesteticavehicular',
  instagramUrl: 'https://instagram.com/vgesteticavehicular',
  address: 'Av. Vieytes 838, Barracas, CABA',
  addressMapUrl:
    'https://www.google.com/maps?q=Av.+Vieytes+838,+Barracas,+CABA&output=embed',
  addressDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Vieytes+838,+Barracas,+CABA',
  schedule: [
    { days: 'Lunes a Sábado', hours: '10:00 – 20:00' },
    { days: 'Domingo', hours: 'Cerrado', closed: true },
  ],
  scheduleShort: 'Lun a Sáb · 10 a 20 h',
} as const;

// URL base del sitio (producción).
export const BASE_URL = 'https://vgcarservice.com.ar';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
