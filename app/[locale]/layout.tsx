import type { Metadata } from 'next';
import { type Locale, isLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import '../globals.css';
import { SITE_URL } from '@/lib/const';

const makeAlternates = (locale: Locale): Metadata['alternates'] => ({
  canonical: `${SITE_URL}/${locale}`,
  languages: {
    cs: `${SITE_URL}/cs`,
    en: `${SITE_URL}/en`,
    'x-default': `${SITE_URL}/en`,
  },
});

const ogByLocale: Record<
  Locale,
  { title: string; description: string; image: string; locale: string }
> = {
  en: {
    title: 'Martin Zadražil – Full-stack Developer',
    description:
      'Custom web applications and internal systems. Backend with Node.js & GraphQL, frontend in React/Next.js.',
    image: '/og/en.jpg',
    locale: 'en_US',
  },
  cs: {
    title: 'Martin Zadražil – Full-stack vývojář',
    description:
      'Webové aplikace a interní systémy. Backend v Node.js & GraphQL, frontend v React/Next.js.',
    image: '/og/cs.jpg',
    locale: 'cs_CZ',
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const og = ogByLocale[locale as Locale];

  return {
    metadataBase: new URL(SITE_URL),

    title:
      locale === 'cs'
        ? 'Martin Zadražil – Full-stack vývojář | Node.js, React, GraphQL'
        : 'Martin Zadražil – Full-stack Developer | Node.js, React, GraphQL',

    description:
      locale === 'cs'
        ? 'Vývoj webových aplikací a interních systémů na míru. Backend v Node.js s GraphQL, frontend v React/Next.js. Pomoc pro firmy mimo IT i krátkodobé kontrakty pro vývojové týmy.'
        : 'Custom web applications and internal systems. Backend with Node.js & GraphQL, frontend in React/Next.js. Contract help for teams and end-to-end delivery.',

    alternates: makeAlternates(locale as Locale),

    openGraph: {
      title: og.title,
      description: og.description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Martin Zadražil',
      locale: og.locale,
      type: 'website',
      images: [
        {
          url: og.image,
          width: 1200,
          height: 630,
          alt: og.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: og.title,
      description: og.description,
      images: [og.image],
    },
  };
};

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
};

export default LocaleLayout;
