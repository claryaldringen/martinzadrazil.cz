import type { ReactNode } from 'react';

export const StepList = ({ items }: { items: ReactNode[] }) => {
  return (
    <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
};
