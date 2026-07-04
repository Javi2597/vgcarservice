import { NOTA_ELECTRICIDAD } from '@/data/servicios';

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const FAQ: FaqItem[] = [
  {
    pregunta: '¿Cómo pido un turno?',
    respuesta:
      'Coordinás por WhatsApp. Escribinos contándonos qué necesita tu vehículo y te damos un turno para acercarlo al taller.',
  },
  {
    pregunta: '¿Qué servicios hacen?',
    respuesta:
      'Mecánica integral (frenos, tren delantero y trasero, distribución, cambio de fluidos), chapa y pintura, estética de interior y exterior (polarizado, pulido, tratamientos) y mantenimiento general. ' +
      NOTA_ELECTRICIDAD,
  },
  {
    pregunta: '¿Qué formas de pago aceptan?',
    respuesta: 'Aceptamos efectivo, transferencia, débito/crédito y MercadoPago.',
  },
  {
    pregunta: '¿Dónde están y qué horarios tienen?',
    respuesta:
      'Estamos en Av. Vieytes 838, Barracas, Ciudad de Buenos Aires. Atendemos de lunes a sábado de 10 a 20 h.',
  },
  {
    pregunta: '¿Atienden todas las marcas?',
    respuesta: 'Sí, trabajamos con todas las marcas de vehículos, con repuestos de calidad.',
  },
  {
    pregunta: '¿Dan presupuesto?',
    respuesta:
      'Sí. Escribinos por WhatsApp con el detalle de lo que necesitás y te pasamos un presupuesto sin compromiso.',
  },
];
