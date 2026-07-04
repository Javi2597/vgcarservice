import { BUSINESS_INFO } from '@/lib/utils';

const BASE_URL = 'https://vgcarservice.com.ar';

/** Datos estructurados del negocio (schema.org AutoRepair / LocalBusiness) para SEO local. */
export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: BUSINESS_INFO.name,
    description: 'Taller de mecánica y estética vehicular en Barracas, CABA.',
    url: BASE_URL,
    image: `${BASE_URL}/galeria/pulido-exterior/chevrolet-spin/despues/chevrolet-spin-exterior-completo-despues-01-20220531.jpg`,
    telephone: '+541155812216',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Vieytes 838',
      addressLocality: 'Barracas',
      addressRegion: 'Ciudad Autónoma de Buenos Aires',
      addressCountry: 'AR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Ciudad Autónoma de Buenos Aires',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    sameAs: [BUSINESS_INFO.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
