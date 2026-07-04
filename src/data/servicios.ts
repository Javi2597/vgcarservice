export interface Servicio {
  slug: string;
  icon: 'gears' | 'spray' | 'shine' | 'checklist';
  title: string;
  short: string;
  description: string;
  features: string[];
}

export const SERVICIOS: Servicio[] = [
  {
    slug: 'mecanica-integral',
    icon: 'gears',
    title: 'Mecánica integral completa',
    short: 'Diagnóstico y reparación de todo el vehículo.',
    description:
      'Mecánica general de motor, tren delantero, frenos y transmisión. Atendemos todas las marcas con repuestos de calidad.',
    features: [
      'Frenos',
      'Tren delantero y tren trasero',
      'Cambio de fluidos',
      'Distribución',
    ],
  },
  {
    slug: 'chapa-y-pintura',
    icon: 'spray',
    title: 'Chapa y pintura',
    short: 'Restauración de carrocería y color.',
    description:
      'Reparación estética de la carrocería: enderezado, masillado y pintura, igualando el color original del vehículo.',
    features: [
      'Reparación de abolladuras y golpes',
      'Masillado y preparación de superficie',
      'Pintura parcial o completa',
      'Terminación, pulido y plastificado',
    ],
  },
  {
    slug: 'estetica-vehicular',
    icon: 'shine',
    title: 'Estética de interior y exterior',
    short: 'Limpieza y detailing de especialidad.',
    description:
      'Limpieza profunda y detailing de interior y exterior: polarizado, pulido de ópticas y cristales, abrillantado de carrocería y tratamientos de protección.',
    features: [
      'Polarizado',
      'Pulido de ópticas y cristales',
      'Abrillantado de carrocería',
      'Tratamiento acrílico y cerámico',
      'Limpieza de interior',
      'Lavado de motor',
    ],
  },
  {
    slug: 'mantenimiento-general',
    icon: 'checklist',
    title: 'Mantenimiento general',
    short: 'Service y puesta a punto periódica.',
    description:
      'Service preventivo y puesta a punto para que tu vehículo esté siempre en óptimas condiciones y evites problemas mayores.',
    features: [
      'Cambio de aceite, filtros y fluidos',
      'Revisión general de seguridad',
      'Service por kilometraje',
      'Puesta a punto integral',
    ],
  },
];

// Aclaración del negocio: la electricidad del automotor se realiza en el taller.
export const NOTA_ELECTRICIDAD =
  'También realizamos electricidad del automotor en el taller.';
