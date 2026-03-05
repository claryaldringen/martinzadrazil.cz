# CLAUDE.md

Tento soubor poskytuje pokyny pro Claude Code (claude.ai/code) při práci s kódem v tomto repozitáři.

## Jazyk komunikace

Komunikuj s uživatelem **česky**.

## Přehled projektu

Osobní portfolio/freelance web Martina Zadražila (martinzadrazil.com). Jednostránkový web s podporou i18n (čeština a angličtina).

## Příkazy

- `yarn dev` — spuštění dev serveru (Next.js na localhost:3000)
- `yarn build` — produkční build
- `yarn lint` — spuštění ESLintu (flat config s integrací Prettiera)
- Node v22 (viz `.nvmrc`)

## Tech stack

- **Next.js 16** (App Router) s React 19 a TypeScriptem
- **Tailwind CSS v4** přes `@tailwindcss/postcss`
- **ESLint 9** flat config + Prettier (vynucený jako ESLint chyby)
- Správce balíčků: **yarn** (přítomen yarn.lock)
- Path alias: `@/*` mapuje na kořen projektu

## Architektura

### Routing a i18n

Web používá dynamický segment `[locale]` pro i18n. Existují pouze dva locales: `cs` (výchozí) a `en`.

- `app/page.tsx` — root stránka, čte hlavičku `Accept-Language` a přesměruje na `/{locale}`
- `app/[locale]/layout.tsx` — layout pro locale s metadaty, OG tagy a alternates
- `app/[locale]/page.tsx` — renderuje `<HomePage>` se slovníkem a JSON-LD

Všechny překlady jsou v jednom souboru: `lib/i18n.ts`. Exportuje objekt `dict` klíčovaný podle locale, funkci `getDictionary()`, typ `Locale` a helpery pro validaci locale. Nepoužívá se žádná externí i18n knihovna.

### Komponenty

- `components/home/HomePage.tsx` — hlavní komponenta stránky, přijímá celý slovník jako prop `t`
- `components/home/` — komponenty sekcí stránky (CooperationCard, ProjectCard, ServiceCard, StepList, Tag)
- `components/layout/` — Header, LanguageSwitch, Section

### Lib

- `lib/const.ts` — konstanta `SITE_URL`
- `lib/i18n.ts` — překlady, typy, helpery pro locale
- `lib/jsonLd.ts` — strukturovaná data (schema.org JSON-LD)
- `lib/scroll.ts` — utilita pro smooth scroll

### SEO

- `app/robots.ts` a `app/sitemap.ts` generují robots.txt a sitemap.xml pomocí Next.js metadata API
- OG obrázky uloženy v `public/og/`

## Formátování

Prettier config: jednoduché uvozovky, trailing čárky, středníky, šířka 90 znaků, odsazení 2 mezery.
