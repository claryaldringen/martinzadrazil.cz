'use client';

import type { MouseEvent, ReactNode } from 'react';
import { scrollToId } from '@/lib/scroll';

export type NavSection = { id: string; label: string };

export const Header = ({
  name,
  sections,
  rightSlot,
}: {
  name: string;
  sections: NavSection[];
  rightSlot?: ReactNode;
}) => {
  const onNavClick = (e: MouseEvent<HTMLButtonElement>, id: string): void => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-5xl flex items-center justify-between py-4 px-4">
        <div
          className="font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {name}
        </div>
        <nav className="hidden sm:flex gap-5 text-sm">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={(e) => onNavClick(e, s.id)}
              className="text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 cursor-pointer"
            >
              {s.label}
            </button>
          ))}
        </nav>
        {rightSlot ? <div className="flex items-center">{rightSlot}</div> : null}
      </div>
    </header>
  );
};
