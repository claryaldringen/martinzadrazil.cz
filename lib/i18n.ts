export type Locale = 'cs' | 'en';

export const locales: Locale[] = ['cs', 'en'];
export const defaultLocale: Locale = 'cs';

/**
 * 🔒 Jediný zdroj pravdy pro strukturu překladů
 * hodnoty jsou stringy, ne literály
 */
export type HomeDictionary = {
  nav: {
    uvod: string;
    sluzby: string;
    klienti: string;
    projekty: string;
    spoluprace: string;
    kontakt: string;
  };

  hero: {
    strapline: string;
    title: string;
    subtitle: string;
    ctaContact: string;
    ctaProjects: string;
  };

  services: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };

  clients: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };

  projects: {
    title: string;
    description: string;
    items: Array<{
      name: string;
      subtitle: string;
      period: string;
      logoSrc: string;
      logoAlt: string;
      logoClassName?: string;
      tags?: string[];
      body: string[];
    }>;
  };

  cooperation: {
    title: string;
    cards: Array<{
      title: string;
      description: string;
      steps: string[];
      note: string;
      price: string;
    }>;
  };

  contact: {
    title: string;
    name: string;
    intro: string;
    ctaEmail: string;
    ctaLinkedIn: string;
    hint: string;

    facts: {
      locationLabel: string;
      locationValue: string;
      cooperationLabel: string;
      cooperationValue: string;
      billingLabel: string;
      billingValue: string;
    };

    email: string;
    linkedinUrl: string;
    linkedinLabel: string;
  };
};

export const dict = {
  cs: {
    nav: {
      uvod: 'Úvod',
      sluzby: 'Co dělám',
      klienti: 'Pro koho',
      projekty: 'Projekty',
      spoluprace: 'Spolupráce',
      kontakt: 'Kontakt',
    },

    hero: {
      strapline: 'Full-stack vývojář (Node.js, React, GraphQL)',
      title: 'Vyvíjím webové aplikace a interní systémy',
      subtitle:
        'Pokud potřebujete webovou aplikaci, interní firemní systém, API, skripty na transformaci dat nebo posílit váš vývojářský tým, jsem tu pro vás.',
      ctaContact: 'Kontaktovat',
      ctaProjects: 'Podívat se na projekty',
    },

    services: {
      title: 'Co dělám',
      description:
        'Nejčastěji stavím aplikace, které řeší konkrétní firemní proces, pracují s daty a mají webové rozhraní. Umím se připojit i ke stávajícímu týmu jako kontraktor.',
      items: [
        {
          title: 'Webové aplikace a interní systémy',
          text: 'Systémy na míru pro správu firemních procesů (objednávky, správa obsahu, automatizace výrobních procesů, reporting nebo sdílení dat mezi týmy).',
        },
        {
          title: 'Datová API, hromadné zpracování dat',
          text: 'Datová API (GraphQL či REST), skripty pro jednorázové i systémy pro dávkové zpracování velkých objemů dat. Datové modely, přístupy a napojení na další služby.',
        },
        {
          title: 'Výpomoc pro IT týmy',
          text: 'Přidám se k vašemu vývojářskému týmu na tak dlouho, jak to váš projekt vyžaduje.',
        },
        {
          title: 'Dev stack',
          text: 'Obvykle využívám kombinaci relační DB (PostgreSQL, MySQL, MariaDB atd.) + Node.js + Next/React za použití TypeScriptu a přidružených technologií',
        },
      ],
    },

    clients: {
      title: 'Pro koho je spolupráce vhodná',
      description:
        'Spolupráce se mnou dává největší smysl tam, kde je potřeba samostatnost, technická hloubka a schopnost rychle se zorientovat v existujícím systému.',
      items: [
        {
          title: 'Produktové a startupové týmy',
          text: 'Když potřebujete rychle dodat konkrétní funkcionalitu, stabilizovat backend nebo rozšířit frontend bez budování interního týmu.',
        },
        {
          title: 'Firmy bez interního IT oddělení',
          text: 'Návrh a vývoj aplikace end-to-end, včetně doporučení technologií, architektury a následné údržby.',
        },
        {
          title: 'Výzkumné a datové týmy',
          text: 'Aplikace a interní nástroje pracující s daty, API, experimentální prototypy nebo napojení na existující výzkumnou infrastrukturu.',
        },
        {
          title: 'Krátkodobé i dlouhodobé kontrakty',
          text: 'Spolupráce v řádu týdnů až měsíců – onboarding do stávajícího týmu, práce v jejich stacku a předání výsledků.',
        },
      ],
    },

    projects: {
      title: 'S kým jsem spolupracoval',
      description:
        'Pracoval jsem pro firmy z různých odvětví – od velkých online služeb přes poradenské společnosti až po výzkumné týmy. Níže je přehled spoluprací a toho, co jsem na projektech dělal.',
      items: [
        {
          name: 'IBM Research',
          subtitle:
            'Výzkumná a vývojová divize společnosti IBM, největší organizace pro průmyslový výzkum na světě.',
          period: '2021 - 2025',
          logoSrc: '/logos/IBM_logo.svg',
          logoAlt: 'IBM Research',
          logoClassName: '',
          tags: [
            'TypeScript',
            'Next.js',
            'Node.js',
            'Fastify',
            'PostgreSQL',
            'GraphQL',
            'Apollo',
            'Nexus',
            'Jest',
            'WebGL',
            'HTML',
            'Sass',
            'Git',
            'Docker',
          ],
          body: [
            'Aplikace pro správu výzkumných týmů a jejich výstupů: GraphQL API nad relační DB, React/Next.js rozhraní',
            'Web IBM Research: GraphQL API nad relační DB, React/Next.js rozhraní, napojení na CMS.',
            'AI Agenty/Asistenty pro LLM.',
          ],
        },

        {
          name: 'LiveScore',
          subtitle: 'Zobrazování sportovních výsledků pro specifické trhy.',
          period: '2020 - 2021',
          logoSrc: '/logos/livescore-limited-logo-png_seeklogo-357233.png',
          logoAlt: 'LiveScore',
          logoClassName: 'overflow-hidden',
          tags: ['TypeScript', 'React', 'Jest', 'REST', 'HTML', 'CSS', 'Git'],
          body: [
            'Mobilní aplikace primárně pro africký trh – jednoduchost, rychlost, omezené možnosti zařízení.',
          ],
        },

        {
          name: 'NCR',
          subtitle: 'Řešení pro retail a gastro.',
          period: '2019 - 2020',
          logoSrc: '/logos/NCR_logo_color.svg',
          logoAlt: 'NCR (Voyix)',
          logoClassName: '',
          tags: ['TypeScript', 'React Native', 'REST', 'HTML', 'Sass', 'Git'],
          body: [
            'Vývoj mobilní aplikace pro objednání a zaplacení jídla v restauraci – v podstatě náhrada obsluhy. Backend + logika objednávek, napojení na platby.',
          ],
        },

        {
          name: 'PwC',
          subtitle:
            'Společnost z tzv. „Velké čtyřky“ globálních poradenských a auditorských společností.',
          period: '2017 - 2019',
          logoSrc: '/logos/PwC_2025_Logo.svg',
          logoAlt: 'PwC',
          logoClassName: '',
          tags: [
            'TypeScript',
            'React',
            'Node.js',
            'Express',
            'MySQL',
            'GraphQL',
            'Apollo',
            'Recompose',
            'Three.js',
            'WebGL',
            'HTML',
            'Sass',
            'Git',
            'Docker',
          ],
          body: [
            'Rapid prototyping různých aplikací: zobrazování KPI z výročních zpráv, 3D návrh koupelny v prohlížeči, aplikace pro kontrolu, zda se zavazadla vejdou do konkrétního modelu Audi. Rychlý vývoj, prezentace klientovi, úpravy.',
          ],
        },

        {
          name: 'Livesport',
          subtitle: 'Světová jednička v poskytování sportovních dat v reálném čase.',
          period: '2011 - 2017',
          logoSrc: '/logos/LIVESPORT_LOGO_RED_RGB_hd.jpg',
          logoAlt: 'Livesport',
          logoClassName: '',
          tags: [
            'PHP',
            'Zend Framework',
            'MySQL',
            'JavaScript',
            'CoffeeScript',
            'React',
            'Node.js',
            'RabbitMQ',
            'Jest',
            'HTML',
            'CSS',
            'SVN',
            'Git',
            'Docker',
          ],
          body: [
            'Aplikace pro plnění a dopočítávání sportovních dat v reálném čase, nástroje pro výpočet statistik a API pro poskytování sportovních dat napříč platformami.',
          ],
        },

        {
          name: 'Ulož.to',
          subtitle: 'Jedna z nejznámějších českých služeb pro sdílení a správu obsahu.',
          period: '2009 - 2011',
          logoSrc: '/logos/Ulozto-logo.svg',
          logoAlt: 'Ulož.to',
          logoClassName: '',
          tags: [
            'PHP',
            'Nette',
            'MySQL',
            'Sphinx',
            'PHPUnit',
            'JavaScript',
            'jQuery',
            'HTML',
            'CSS',
            'Git',
          ],
          body: [
            'Aplikace pro třídění obsahu – logika pro kategorizaci a práci s daty, aby se daly materiály lépe spravovat.',
          ],
        },
      ],
    },

    cooperation: {
      title: 'Jak probíhá spolupráce',
      cards: [
        {
          title: 'Posílení vašeho týmu (kontrakt)',
          description:
            'Přidám se do vašeho existujícího vývojového procesu a dodávám konkrétní výstupy jako součást týmu. Hodí se, když potřebujete rychle navýšit kapacitu nebo posunout kritickou část projektu.',
          steps: [
            'Onboarding – přístupy, repo, stack, doména, způsob práce.',
            'Dodávka feature/úkolů – pravidelné PR, code review, spolupráce se zbytkem týmu.',
            'Stabilizace a předání – dokumentace, knowledge transfer, další kroky.',
          ],
          note: 'Spolupráce typicky na týdny až měsíce, remote v EU timezóně.',
          price: 'Cena: 45 EUR/hod',
        },
        {
          title: 'Samostatný vývoj aplikace na míru',
          description:
            'Navrhnu a dodám aplikaci end-to-end: od analýzy přes návrh řešení až po nasazení a následnou podporu. Ideální, když chcete rychle funkční výsledek bez interního vývoje.',
          steps: [
            'Napište mi, nejlépe na email, co má aplikace dělat a kdo ji bude používat.',
            'Dohodnutí detailů, hrubý odhad termínu a ceny.',
            'Iterační vývoj – aplikace poroste po malých, ale kompletně hotových částech a bude použitelná v každém okamžiku vývoje. Funkcionality budou seřazené od těch nejkritičtějších až po „nice to have“.',
          ],
          note: 'Po dokončení nabízím údržbu, rozvoj a drobné úpravy dle potřeby.',
          price: 'Cena: 60 EUR/hod',
        },
      ],
    },

    contact: {
      title: 'Kontakt',
      name: 'Martin Zadražil',

      intro:
        'Napište mi pár vět o tom, co potřebujete postavit / zlepšit. Ozvu se s návrhem dalšího postupu.',

      ctaEmail: 'Napsat e-mail',
      ctaLinkedIn: 'LinkedIn',

      hint: 'Preferuji e-mail • Odpověď obvykle do 1–2 dnů',

      facts: {
        locationLabel: 'Lokalita',
        locationValue: 'Česko / EU (remote)',
        cooperationLabel: 'Spolupráce',
        cooperationValue: 'Kontrakt i end-to-end vývoj',
        billingLabel: 'Fakturace',
        billingValue: 'CZK/EUR (OSVČ)',
      },

      email: 'zadram1@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/martin-zadrazil-47b6141b/',
      linkedinLabel: 'LinkedIn',
    },
  },

  en: {
    nav: {
      uvod: 'Intro',
      sluzby: 'What I do',
      klienti: `Who it's for`,
      projekty: 'Projects',
      spoluprace: 'Cooperation',
      kontakt: 'Contact',
    },

    hero: {
      strapline: 'Full-stack developer (Node.js, React, GraphQL)',
      title: 'I build web applications and internal systems',
      subtitle:
        'If you need a web application, an internal system, an API, data processing scripts or additional capacity for your dev team, I can help.',
      ctaContact: 'Contact me',
      ctaProjects: 'View projects',
    },

    services: {
      title: 'What I do',
      description:
        'I typically build apps that solve specific business processes, work with data, and provide a clean web UI. I can also join an existing team as a contractor.',
      items: [
        {
          title: 'Web apps & internal systems',
          text: 'Custom systems for managing company processes (orders, content management, automation, reporting, or data sharing between teams).',
        },
        {
          title: 'Data APIs & bulk data processing',
          text: 'Data APIs (GraphQL or REST), one-off scripts or batch pipelines for large datasets. Data modeling, integrations and service connections.',
        },
        {
          title: 'Extra capacity for dev teams',
          text: 'I can join your engineering team for as long as your project needs.',
        },
        {
          title: 'Dev stack',
          text: 'Most often: a relational DB (PostgreSQL, MySQL, MariaDB, etc.) + Node.js + Next/React with TypeScript and related technologies.',
        },
      ],
    },

    clients: {
      title: 'Who this collaboration is for',
      description:
        'Working with me makes the most sense where autonomy, technical depth and the ability to quickly understand existing systems are required.',
      items: [
        {
          title: 'Product & startup teams',
          text: 'When you need to deliver features quickly, stabilize a backend or extend a frontend without building an internal team.',
        },
        {
          title: 'Companies without internal IT',
          text: 'End-to-end application development, including technology choices, architecture and ongoing maintenance.',
        },
        {
          title: 'Research & data teams',
          text: 'Applications and internal tools working with data, APIs, experimental prototypes or integration with research infrastructure.',
        },
        {
          title: 'Short- and long-term contracts',
          text: 'Support ranging from weeks to months — onboarding into an existing team, working in their stack and handing over results.',
        },
      ],
    },

    projects: {
      title: 'Who I’ve worked with',
      description:
        'I’ve worked with companies across different industries — from large online services to consulting firms and research teams. Below is an overview of collaborations and what I did on each project.',
      items: [
        {
          name: 'IBM Research',
          subtitle:
            'IBM’s research and development division — one of the world’s largest industrial research organizations.',
          period: '2021 - 2025',
          logoSrc: '/logos/IBM_logo.svg',
          logoAlt: 'IBM Research',
          tags: [
            'TypeScript',
            'Next.js',
            'Node.js',
            'Fastify',
            'PostgreSQL',
            'GraphQL',
            'Apollo',
            'Nexus',
            'Jest',
            'WebGL',
            'HTML',
            'Sass',
            'Git',
            'Docker',
          ],
          body: [
            'Apps for managing research teams and outputs: GraphQL API on a relational DB, React/Next.js UI.',
            'IBM Research website: GraphQL API on a relational DB, React/Next.js UI, CMS integration.',
            'AI agents/assistants for LLMs.',
          ],
        },

        {
          name: 'LiveScore',
          subtitle: 'Sports scores and live data for specific markets.',
          period: '2020 - 2021',
          logoSrc: '/logos/livescore-limited-logo-png_seeklogo-357233.png',
          logoAlt: 'LiveScore',
          logoClassName: 'overflow-hidden',
          tags: ['TypeScript', 'React', 'Jest', 'REST', 'HTML', 'CSS', 'Git'],
          body: [
            'Mobile app primarily for African markets — simplicity, speed, device constraints.',
          ],
        },

        {
          name: 'NCR',
          subtitle: 'Retail and hospitality solutions.',
          period: '2019 - 2020',
          logoSrc: '/logos/NCR_logo_color.svg',
          logoAlt: 'NCR (Voyix)',
          tags: ['TypeScript', 'React Native', 'REST', 'HTML', 'Sass', 'Git'],
          body: [
            'Mobile app for ordering and paying in restaurants — essentially replacing the waiter. Backend + ordering logic + payment integrations.',
          ],
        },

        {
          name: 'PwC',
          subtitle: 'One of the “Big Four” global audit and consulting firms.',
          period: '2017 - 2019',
          logoSrc: '/logos/PwC_2025_Logo.svg',
          logoAlt: 'PwC',
          tags: [
            'TypeScript',
            'React',
            'Node.js',
            'Express',
            'MySQL',
            'GraphQL',
            'Apollo',
            'Recompose',
            'Three.js',
            'WebGL',
            'HTML',
            'Sass',
            'Git',
            'Docker',
          ],
          body: [
            'Rapid prototyping of various apps: KPI dashboards from annual reports, a browser-based 3D bathroom planner, an app to check whether luggage fits into a specific Audi model. Fast delivery, client demos, iterations.',
          ],
        },

        {
          name: 'Livesport',
          subtitle: 'A global leader in real-time sports data services.',
          period: '2011 - 2017',
          logoSrc: '/logos/LIVESPORT_LOGO_RED_RGB_hd.jpg',
          logoAlt: 'Livesport',
          tags: [
            'PHP',
            'Zend Framework',
            'MySQL',
            'JavaScript',
            'CoffeeScript',
            'React',
            'Node.js',
            'RabbitMQ',
            'Jest',
            'HTML',
            'CSS',
            'SVN',
            'Git',
            'Docker',
          ],
          body: [
            'Apps for ingesting and recomputing live sports data, tools for statistics, and APIs for delivering sports data across platforms.',
          ],
        },

        {
          name: 'Ulož.to',
          subtitle: 'A well-known Czech service for content management and sharing.',
          period: '2009 - 2011',
          logoSrc: '/logos/Ulozto-logo.svg',
          logoAlt: 'Ulož.to',
          tags: [
            'PHP',
            'Nette',
            'MySQL',
            'Sphinx',
            'PHPUnit',
            'JavaScript',
            'jQuery',
            'HTML',
            'CSS',
            'Git',
          ],
          body: [
            'Content classification app — categorization logic and data workflows to manage materials more effectively.',
          ],
        },
      ],
    },

    cooperation: {
      title: 'How we can work together',
      cards: [
        {
          title: 'Join your team (contract)',
          description:
            'I integrate into your existing development process and deliver tangible outputs as part of your team. Ideal when you need to scale capacity quickly or push a critical part of a project forward.',
          steps: [
            'Onboarding — access, repository, stack, domain, ways of working.',
            'Feature delivery — regular PRs, code reviews, collaboration with the team.',
            'Stabilization & handover — documentation, knowledge transfer, next steps.',
          ],
          note: 'Typically weeks to months, remote within EU time zones.',
          price: 'Price: EUR 45 / hour',
        },
        {
          title: 'End-to-end custom development',
          description:
            'I design and deliver a solution end-to-end: from analysis and architecture to implementation, deployment, and ongoing support. Great if you want a working product quickly without building an internal team.',
          steps: [
            'Send me (preferably by email) what the application should do and who will use it.',
            'We agree on details and I provide a rough estimate of timeline and cost.',
            'Iterative delivery — the product grows in small but complete increments and stays usable throughout. Features are prioritized from most critical to “nice to have”.',
          ],
          note: 'After delivery I offer maintenance, improvements, and small changes as needed.',
          price: 'Price: EUR 60 / hour',
        },
      ],
    },

    contact: {
      title: 'Contact',
      name: 'Martin Zadražil',

      intro:
        'Send me a short description of what you want to build or improve. I’ll reply with proposed next steps.',

      ctaEmail: 'Send an email',
      ctaLinkedIn: 'LinkedIn',

      hint: 'Email preferred • Usually reply within 1–2 days',

      facts: {
        locationLabel: 'Location',
        locationValue: 'Czechia / EU (remote)',
        cooperationLabel: 'Engagement',
        cooperationValue: 'Contract work or end-to-end delivery',
        billingLabel: 'Billing',
        billingValue: 'CZK/EUR (self-employed)',
      },

      email: 'zadram1@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/martin-zadrazil-47b6141b/',
      linkedinLabel: 'LinkedIn',
    },
  },
} satisfies Record<Locale, HomeDictionary>;

export const getDictionary = (locale: Locale): HomeDictionary => dict[locale];
