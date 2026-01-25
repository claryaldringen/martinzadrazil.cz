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

const metadataByLocale: Record<Locale, Metadata> = {
  cs: {
    title: 'Martin Zadražil – Full-stack vývojář | Node.js, React, GraphQL',
    description:
      'Vývoj webových aplikací a interních systémů na míru. Backend v Node.js s GraphQL, frontend v React/Next.js. Pomoc pro firmy mimo IT i krátkodobé kontrakty pro vývojové týmy.',
    openGraph: {
      title: 'Martin Zadražil – Full-stack vývojář',
      description:
        'Webové aplikace, interní systémy a CMS na míru. Node.js, React, GraphQL.',
      url: `${SITE_URL}/cs`, // ✅ per-locale
      siteName: 'Martin Zadražil',
      locale: 'cs_CZ',
      type: 'website',
    },
    alternates: makeAlternates('cs'),
  },

  en: {
    title: 'Martin Zadražil – Full-stack Developer | Node.js, React, GraphQL',
    description:
      'Custom web applications and internal systems. Backend with Node.js & GraphQL, frontend in React/Next.js. Contract help for teams and end-to-end delivery.',
    openGraph: {
      title: 'Martin Zadražil – Full-stack Developer',
      description:
        'Custom web applications, internal systems and CMS. Node.js, React, GraphQL.',
      url: `${SITE_URL}/en`, // ✅ per-locale
      siteName: 'Martin Zadražil',
      locale: 'en_US',
      type: 'website',
    },
    alternates: makeAlternates('en'),
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return metadataByLocale[locale];
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
