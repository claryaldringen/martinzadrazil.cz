import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home/HomePage';
import { getDictionary, locales, type Locale } from '@/lib/i18n';

const Page = async ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = getDictionary(locale);

  return <HomePage t={t} />;
};

export default Page;
