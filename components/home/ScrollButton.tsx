'use client';

import type { ReactNode } from 'react';
import { scrollToId } from '@/lib/scroll';

export const ScrollButton = ({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <button onClick={() => scrollToId(targetId)} className={className}>
      {children}
    </button>
  );
};
