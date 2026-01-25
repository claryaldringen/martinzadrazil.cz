'use client';

import type { MouseEvent } from 'react';
import Image from 'next/image';

import { Header, type NavSection } from '@/components/layout/Header';
import { Section } from '@/components/layout/Section';
import { ServiceCard } from '@/components/home/ServiceCard';
import { ProjectCard } from '@/components/home/ProjectCard';
import { Tag } from '@/components/home/Tag';
import { CooperationCard } from '@/components/home/CooperationCard';
import { scrollToId } from '@/lib/scroll';
import type { HomeDictionary } from '@/lib/i18n';
import { LanguageSwitch } from '@/components/layout/LanguageSwitch';

export const HomePage = ({ t }: { t: HomeDictionary }) => {
  const sections: NavSection[] = [
    { id: 'uvod', label: t.nav.uvod },
    { id: 'sluzby', label: t.nav.sluzby },
    { id: 'pro-koho', label: t.nav.klienti },
    { id: 'projekty', label: t.nav.projekty },
    { id: 'spoluprace', label: t.nav.spoluprace },
    { id: 'kontakt', label: t.nav.kontakt },
  ];

  const handleScroll = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: string,
  ): void => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <div className="min-h-screen">
      <Header name="Martin Zadražil" sections={sections} rightSlot={<LanguageSwitch />} />

      <main className="mx-auto max-w-5xl px-4 pb-16">
        {/* HERO */}
        <section
          id="uvod"
          className="min-h-[70vh] pt-20 pb-24 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center"
        >
          <div className="relative w-60 md:w-[300px] aspect-2/3">
            <Image
              src="/me.jpg"
              alt="Martin Zadražil"
              fill
              priority
              sizes="(min-width: 768px) 300px, 240px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              {t.hero.strapline}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl">{t.hero.subtitle}</p>

            <div className="flex gap-3">
              <button
                onClick={(e) => handleScroll(e, 'kontakt')}
                className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-black cursor-pointer"
              >
                {t.hero.ctaContact}
              </button>

              <button
                onClick={(e) => handleScroll(e, 'projekty')}
                className="px-5 py-2 rounded-md text-sm font-medium border border-gray-200 hover:border-gray-400 cursor-pointer"
              >
                {t.hero.ctaProjects}
              </button>
            </div>
          </div>
        </section>

        <Section
          id="sluzby"
          title={t.services.title}
          description={t.services.description}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {t.services.items.map((item) => (
              <ServiceCard key={item.title} title={item.title}>
                {item.text}
              </ServiceCard>
            ))}
          </div>
        </Section>

        <Section
          id="pro-koho"
          title={t.clients.title}
          description={t.clients.description}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {t.clients.items.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* REFERENCE / PROJEKTY */}
        <Section
          id="projekty"
          title={t.projects.title}
          description={t.projects.description}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((p) => (
              <ProjectCard
                key={`${p.name}-${p.period}`}
                logoSrc={p.logoSrc}
                logoAlt={p.logoAlt}
                name={p.name}
                subtitle={p.subtitle}
                period={p.period}
                logoClassName={p.logoClassName ?? ''}
                tags={
                  p.tags?.length ? (
                    <>
                      {p.tags.map((tag) => (
                        <Tag key={`${p.name}-${tag}`}>{tag}</Tag>
                      ))}
                    </>
                  ) : undefined
                }
              >
                <>
                  {p.body.map((line, i: number) => (
                    <span key={`${p.name}-line-${i}`}>
                      {line}
                      {i < p.body.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </>
              </ProjectCard>
            ))}
          </div>
        </Section>

        {/* SPOLUPRÁCE */}
        <Section id="spoluprace" title={t.cooperation.title}>
          <div className="grid gap-8 md:grid-cols-2">
            {t.cooperation.cards.map((c) => (
              <CooperationCard
                key={c.title}
                title={c.title}
                description={<>{c.description}</>}
                steps={c.steps.map((s) => (
                  <>{s}</>
                ))}
                note={c.note}
                price={c.price}
              />
            ))}
          </div>
        </Section>

        {/* KONTAKT */}
        <Section id="kontakt" title={t.contact.title} className="space-y-8">
          {/* TOP ROW */}
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Left */}
            <div className="space-y-3">
              <p className="text-lg font-semibold">{t.contact.name}</p>

              <p className="text-sm text-gray-600 max-w-md">{t.contact.intro}</p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center justify-center px-5 py-2 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-black"
              >
                {t.contact.ctaEmail}
              </a>

              <a
                href={t.contact.linkedinUrl}
                className="inline-flex items-center justify-center px-5 py-2 rounded-md text-sm font-medium border border-gray-200 hover:border-gray-400"
              >
                {t.contact.ctaLinkedIn}
              </a>

              <div className="text-xs text-gray-500 md:text-right">{t.contact.hint}</div>
            </div>
          </div>

          {/* BOTTOM ROW: FACTS */}
          <div className="grid gap-6 sm:grid-cols-3 text-sm">
            <div>
              <div className="text-gray-500">{t.contact.facts.locationLabel}</div>
              <div className="text-gray-900">{t.contact.facts.locationValue}</div>
            </div>

            <div>
              <div className="text-gray-500">{t.contact.facts.cooperationLabel}</div>
              <div className="text-gray-900">{t.contact.facts.cooperationValue}</div>
            </div>

            <div>
              <div className="text-gray-500">{t.contact.facts.billingLabel}</div>
              <div className="text-gray-900">{t.contact.facts.billingValue}</div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};
