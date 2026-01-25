import type { ReactNode } from 'react';

export const ServiceCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="rounded-2xl p-5 bg-white/0 hover:bg-gray-50 transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
};
