import type { Locale } from '@/lib/i18n';
import { SITE_URL } from '@/lib/const';

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;
const serviceId = `${SITE_URL}/#service`;

export const buildJsonLd = (locale: Locale) => {
  const isCs = locale === 'cs';
  const pageUrl = `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Martin Zadražil',
        url: SITE_URL,
        jobTitle: isCs ? 'Full-stack vývojář' : 'Full-stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: isCs ? 'OSVČ' : 'Self-employed',
        },
        sameAs: [
          'https://www.linkedin.com/in/martin-zadrazil-47b6141b/',
          'https://github.com/claryaldringen',
        ],
        knowsAbout: [
          'Node.js',
          'React',
          'Next.js',
          'GraphQL',
          'TypeScript',
          'PostgreSQL',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: isCs
          ? 'Martin Zadražil – Full-stack vývojář'
          : 'Martin Zadražil – Full-stack Developer',
        url: SITE_URL,
        inLanguage: ['cs', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        inLanguage: locale,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: 'Full-stack web application development',
        provider: { '@id': personId },
        areaServed: 'EU',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceLocation: {
            '@type': 'Place',
            name: 'Remote',
          },
        },
        url: pageUrl,
      },
    ],
  };
};
