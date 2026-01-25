import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { defaultLocale, type Locale } from '@/lib/i18n';

const pickLocaleFromAcceptLanguage = (value: string | null): Locale => {
  if (!value) {
    return defaultLocale;
  }

  // ie "cs-CZ,cs;q=0.9,en;q=0.8"
  const lower = value.toLowerCase();

  return lower.includes('cs-cz') ? 'cs' : 'en';
};

const Page = async () => {
  const headersData = await headers();
  const locale = pickLocaleFromAcceptLanguage(headersData.get('accept-language'));
  redirect(`/${locale}`);
};

export default Page;
