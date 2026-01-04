// app/page.tsx
'use client';

import { MouseEvent } from 'react';
import Image from 'next/image';

const SECTIONS = [
  { id: 'uvod', label: 'Úvod' },
  { id: 'sluzby', label: 'Co dělám' },
  { id: 'projekty', label: 'Projekty' },
  { id: 'spoluprace', label: 'Spolupráce' },
  { id: 'kontakt', label: 'Kontakt' },
];

export default function Page() {
  const handleScroll = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* top bar */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-5xl flex items-center justify-between py-4 px-4">
          <div className="font-semibold">Martin Zadražil</div>
          <nav className="hidden sm:flex gap-5 text-sm">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={(e) => handleScroll(e, s.id)}
                className="text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16">
        {/* HERO */}
        <section id="uvod" className="pt-12 pb-16 flex flex-col gap-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Full-stack vývojář (Node.js, React, GraphQL)
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Vyvíjím webové aplikace a interní systémy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Pokud potřebujete webovou aplikaci, interní firemní systém, API, skripty na
            transformaci dat nebo posílít Váš vývojářský tým, jsem tu pro Vás.
          </p>
          <div className="flex gap-3">
            <button
              onClick={(e) => handleScroll(e, 'kontakt')}
              className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-black"
            >
              Kontaktovat
            </button>
            <button
              onClick={(e) => handleScroll(e, 'projekty')}
              className="px-5 py-2 rounded-md text-sm font-medium border border-gray-200 hover:border-gray-400"
            >
              Podívat se na projekty
            </button>
          </div>
        </section>
        {/* CO DĚLÁM */}
        <section id="sluzby" className="py-12 space-y-6">
          <h2 className="text-2xl font-semibold">Co dělám</h2>
          <p className="text-gray-600 max-w-3xl">
            Nejčastěji stavím aplikace, které řeší konkrétní firemní proces, pracují s
            daty a mají webové rozhraní. Umím se připojit i ke stávajícímu týmu jako
            kontraktor.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-5 bg-white/0 hover:bg-gray-50 transition">
              <h3 className="font-semibold">Webové aplikace a interní systémy</h3>
              <p className="text-sm text-gray-600">
                Systémy na míru pro správu firemních procesů (objednávky, správa obsahu,
                automatizace výrobních procesů, reporting nebo sdílení dat mezi týmy).
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-white/0 hover:bg-gray-50 transition">
              <h3 className="font-semibold">Datová API, hromadné zpracování dat</h3>
              <p className="text-sm text-gray-600">
                Datová API (GraphQL či REST), skripty pro jednorázové i systémy pro
                dávkové zpracování velkých objemů dat. Datové modely, přístupy a napojení
                na další služby.
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-white/0 hover:bg-gray-50 transition">
              <h3 className="font-semibold">Výpomoc pro IT týmy</h3>
              <p className="text-sm text-gray-600">
                Přidám se k vašemu vývojářskomu týmu na tak dlouho jak to Váš projekt
                vyžaduje.
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-white/0 hover:bg-gray-50 transition">
              <h3 className="font-semibold">Dev stack</h3>
              <p className="text-sm text-gray-600">
                Obvykle využívám kombinci relační DB (PostgreSQL, MySQL, MariaDB atd.) +
                Node.js + Next/React za použití TypeScriptu a přidružených technologií
              </p>
            </div>
          </div>
        </section>

        {/* REFERENCE / PROJEKTY */}
        <section id="projekty" className="py-12 space-y-6">
          <h2 className="text-2xl font-semibold">S kým jsem spolupracoval</h2>
          <p className="text-gray-600 max-w-3xl">
            Pracoval jsem pro firmy z různých odvětví – od velkých online služeb přes
            poradenské společnosti až po výzkumné týmy. Níže je přehled spoluprací a toho,
            co jsem na projektech dělal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ulož.to */}
            <article className="flex flex-col items-start gap-3">
              <div className="w-64 h-32 flex items-center justify-center">
                <Image
                  src="/logos/Ulozto-logo.svg"
                  alt="Ulož.to"
                  width={256}
                  height={256}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Ulož.to</h3>
                <p className="text-sm text-gray-500">
                  Jedna z nejznámějších českých služeb pro sdílení a správu obsahu.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Aplikace pro třídění obsahu – logika pro kategorizaci a práci s daty,
                  aby se daly materiály lépe spravovat.
                </p>
              </div>
            </article>

            {/* Livesport */}
            <article className="flex flex-col items-start gap-3">
              <div className="w-64 h-32 flex items-center justify-center">
                <Image
                  src="/logos/LIVESPORT_LOGO_RED_RGB_hd.jpg"
                  alt="Livesport"
                  width={256}
                  height={256}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Livesport</h3>
                <p className="text-sm text-gray-500">
                  Světová jednička v poskytování sportovních dat v reálném čase.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Aplikace pro plnění a dopočítávání sportovních dat v reálném čase,
                  nástroje pro výpočet statistik a API pro poskytování sportovních dat
                  napříč platformami.
                </p>
              </div>
            </article>

            {/* PwC Germany */}
            <article className="flex flex-col items-start gap-3">
              <div className="w-64 h-32 flex items-center justify-center">
                <Image
                  src="/logos/PwC_2025_Logo.svg"
                  alt="PwC"
                  width={256}
                  height={256}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">PwC</h3>
                <p className="text-sm text-gray-500">
                  Společnost z tzv. „Velké čtyřky“ globálních poradenských a auditorských
                  společností.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Rapid prototyping různých aplikací: zobrazování KPI z výročních zpráv,
                  3D návrh koupelny v prohlížeči, aplikace pro kontrolu, zda se zavazadla
                  vejdou do konkrétního modelu Audi. Rychlý vývoj, prezentace klientovi,
                  úpravy.
                </p>
              </div>
            </article>

            {/* NCR */}
            <article className="flex flex-col items-start gap-3">
              <div className="w-64 h-32 flex items-center justify-center">
                <Image
                  src="/logos/NCR_logo_color.svg"
                  alt="NCR (Voyix)"
                  width={256}
                  height={256}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">NCR</h3>
                <p className="text-sm text-gray-500">Řešení pro retail a gastro.</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Vývoj mobilní aplikace pro objednání a zaplacení jídla v restauraci – v
                  podstatě náhrada obsluhy. Backend + logika objednávek, napojení na
                  platby.
                </p>
              </div>
            </article>

            {/* LiveScore */}
            <article className="flex flex-col items-start gap-3">
              <div className="w-64 h-32 flex items-center justify-center">
                <Image
                  src="/logos/livescore-limited-logo-png_seeklogo-357233.png"
                  alt="LiveScore"
                  width={256}
                  height={256}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">LiveScore</h3>
                <p className="text-sm text-gray-500">
                  Zobrazování sportovních výsledků pro specifické trhy.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Mobilní aplikace primárně pro africký trh – jednoduchost, rychlost,
                  omezené možnosti zařízení.
                </p>
              </div>
            </article>

            {/* IBM Research */}
            <article className="flex flex-col items-start gap-3">
              <div className="w-64 h-32 flex items-center justify-center">
                <Image
                  src="/logos/IBM_logo.svg"
                  alt="IBM Research"
                  width={256}
                  height={256}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">IBM Research</h3>
                <p className="text-sm text-gray-500">
                  Výzkumná a vývojová divize společnosti IBM, největší organizace pro
                  průmyslový výzkum na světě.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Aplikace pro správu výzkumných týmů a jejich výstupů: GraphQL API nad
                  relační DB, React/Next.js rozhraní <br />
                  Web IBM Research: GraphQL API nad relační DB, React/Next.js rozhraní,
                  napojení na CMS. <br />
                  AI Agenty/Asistenty pro LLM.
                </p>
              </div>
            </article>
          </div>
        </section>
        {/* SPOLUPRÁCE */}
        {/* SPOLUPRÁCE */}
        <section id="spoluprace" className="py-12 space-y-6">
          <h2 className="text-2xl font-semibold">Jak probíhá spolupráce</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 1) Kontrakt / v týmu klienta */}
            <div className="rounded-2xl border border-gray-100 p-6 hover:border-gray-200 transition">
              <h3 className="text-lg font-semibold">Posílení vašeho týmu (kontrakt)</h3>
              <p className="mt-2 text-sm text-gray-600">
                Přidám se do vašeho existujícího vývojového procesu a dodávám konkrétní
                výstupy jako součást týmu. Hodí se, když potřebujete rychle navýšit
                kapacitu nebo posunout kritickou část projektu.
              </p>

              <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
                <li>Onboarding – přístupy, repo, stack, doména, způsob práce.</li>
                <li>
                  Dodávka feature/úkolů – pravidelné PR, code review, spolupráce se
                  zbytkem týmu.
                </li>
                <li>
                  Stabilizace a předání – dokumentace, knowledge transfer, další kroky.
                </li>
              </ol>

              <p className="mt-4 text-sm text-gray-500">
                Spolupráce typicky na týdny až měsíce, remote v EU timezóně.
              </p>
            </div>

            {/* 2) Samostatný vývoj aplikace */}
            <div className="rounded-2xl border border-gray-100 p-6 hover:border-gray-200 transition">
              <h3 className="text-lg font-semibold">Samostatný vývoj aplikace na míru</h3>
              <p className="mt-2 text-sm text-gray-600">
                Navrhnu a dodám aplikaci end-to-end: od analýzy přes návrh řešení až po
                nasazení a následnou podporu. Ideální, když chcete rychle funkční výsledek
                bez interního vývoje.
              </p>

              <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  Napište mi, nejlépe na email, co má aplikace dělat a kdo ji bude
                  používat.
                </li>
                <li>Dohodnutí detialů, hrubý odhad termínů a ceny.</li>
                <li>
                  Iterační vývoj - aplikace poroste po malých, ale kompletně hotových
                  částech a bude použitelná v každém okamžiku vývoje. Funkcionality budou
                  seřazené od těch nejkritičtějších až po &bdquo;nice to have&ldquo;.
                </li>
              </ol>

              <p className="mt-4 text-sm text-gray-500">
                Po dokončení nabízím údržbu, rozvoj a drobné úpravy dle potřeby.
              </p>
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="py-12 space-y-4">
          <h2 className="text-2xl font-semibold">Kontakt</h2>
          <div className="space-y-1">
            <p>
              📧{' '}
              <a
                href="mailto:zadram1@gmail.com"
                className="text-blue-600 hover:underline"
              >
                zadram1@gmail.com
              </a>
            </p>
            <p>
              💼{' '}
              <a
                href="https://www.linkedin.com/in/martin-zadrazil-47b6141b/"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
