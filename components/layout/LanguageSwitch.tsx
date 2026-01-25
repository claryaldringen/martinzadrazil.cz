'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

const SCROLL_KEY = '__locale_scroll_y__';
const TS_KEY = '__locale_scroll_ts__';

const getLocaleFromPath = (pathname: string): Locale => {
  if (pathname.startsWith('/cs')) return 'cs';
  return 'en';
};

const replaceLocaleInPath = (pathname: string, locale: Locale): string => {
  const parts = pathname.split('/');
  parts[1] = locale; // "/cs/..." -> "/en/..."
  return parts.join('/') || `/${locale}`;
};

const setLocaleCookie = (locale: Locale): void => {
  document.cookie = `locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
};

export const LanguageSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const tsRaw = sessionStorage.getItem(TS_KEY);
    const yRaw = sessionStorage.getItem(SCROLL_KEY);

    if (!tsRaw || !yRaw) return;

    const ts = Number(tsRaw);
    const y = Number(yRaw);

    // aplikuj jen krátce po kliknutí (aby se to nespouštělo náhodně při reloadu)
    if (!Number.isFinite(ts) || !Number.isFinite(y) || Date.now() - ts > 3000) {
      sessionStorage.removeItem(TS_KEY);
      sessionStorage.removeItem(SCROLL_KEY);
      return;
    }

    // počkej na další frame, ať už je nový content v DOM
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, left: 0, behavior: 'instant' as ScrollBehavior });
      sessionStorage.removeItem(TS_KEY);
      sessionStorage.removeItem(SCROLL_KEY);
    });
  }, [pathname]);

  const current = getLocaleFromPath(pathname);
  const next: Locale = current === 'cs' ? 'en' : 'cs';

  const onClick = (): void => {
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    sessionStorage.setItem(TS_KEY, String(Date.now()));
    setLocaleCookie(next);

    const href = replaceLocaleInPath(pathname, next);
    router.push(href, { scroll: false });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
      aria-label="Switch language"
    >
      {current === 'cs' ? '🇬🇧' : '🇨🇿'}
    </button>
  );
};
