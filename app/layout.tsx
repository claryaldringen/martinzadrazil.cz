import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Martin Zadražil – Full-stack vývojář | Node.js, React, GraphQL',
  description:
    'Vývoj webových aplikací a interních systémů na míru. Backend v Node.js s GraphQL, frontend v React/Next.js. Pomoc pro firmy mimo IT i krátkodobé kontrakty pro vývojové týmy.',
  openGraph: {
    title: 'Martin Zadražil – Full-stack vývojář',
    description:
      'Webové aplikace, interní systémy a CMS na míru. Node.js, React, GraphQL.',
    url: 'https://martinzadrazil.cz',
    siteName: 'Martin Zadražil',
    locale: 'cs_CZ',
    type: 'website',
  },
  // až budeš mít anglickou verzi, dáš sem alternates.languages
  // alternates: {
  //   languages: {
  //     "cs-CZ": "/",
  //     "en-US": "/en",
  //   },
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
