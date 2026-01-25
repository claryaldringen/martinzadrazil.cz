import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home/HomePage';
import { getDictionary, locales, type Locale } from '@/lib/i18n';
import { SITE_URL } from '@/lib/const';

const jsonLdByLocale: Record<
  Locale,
  { person: unknown; website: unknown; service: unknown }
> = {
  cs: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Martin Zadražil',
      url: SITE_URL,
      jobTitle: 'Full-stack vývojář',
      worksFor: { '@type': 'Organization', name: 'OSVČ' },
      sameAs: [
        'https://www.linkedin.com/in/martin-zadrazil-47b6141b/',
        'https://github.com/claryaldringen',
      ],
      knowsAbout: ['Node.js', 'React', 'Next.js', 'GraphQL', 'TypeScript', 'PostgreSQL'],
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Martin Zadražil – Full-stack vývojář',
      url: SITE_URL,
      inLanguage: ['cs', 'en'],
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Full-stack web application development',
      provider: {
        '@type': 'Person',
        name: 'Martin Zadražil',
        url: 'https://martinzadrazil.com',
      },
      areaServed: 'EU',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceLocation: {
          '@type': 'Place',
          name: 'Remote',
        },
      },
    },
  },

  en: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Martin Zadražil',
      url: SITE_URL,
      jobTitle: 'Full-stack Developer',
      worksFor: { '@type': 'Organization', name: 'Self-employed' },
      sameAs: ['https://www.linkedin.com/in/martin-zadrazil-47b6141b/'],
      knowsAbout: ['Node.js', 'React', 'Next.js', 'GraphQL', 'TypeScript', 'PostgreSQL'],
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Martin Zadražil – Full-stack Developer',
      url: SITE_URL,
      inLanguage: ['cs', 'en'],
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Full-stack web application development',
      provider: {
        '@type': 'Person',
        name: 'Martin Zadražil',
        url: 'https://martinzadrazil.com',
      },
      areaServed: 'EU',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceLocation: {
          '@type': 'Place',
          name: 'Remote',
        },
      },
    },
  },
};

const Page = async ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = getDictionary(locale);

  const { person, website, service } = jsonLdByLocale[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <HomePage t={t} />
    </>
  );
};

export default Page;
