import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home/HomePage';
import { getDictionary, locales, type Locale } from '@/lib/i18n';
import { buildJsonLd } from '@/lib/jsonLd';

const Page = async ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = getDictionary(locale);
  const jsonLd = buildJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage t={t} />
    </>
  );
};

export default Page;
