import type { ReactNode } from 'react';

export const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span className="m-1 inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
      {children}
    </span>
  );
};
