import type { ReactNode } from 'react';

export const Section = ({
  id,
  title,
  description,
  className = '',
  children,
}: {
  id: string;
  title?: string;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <section id={id} className={`py-12 space-y-6 ${className}`}>
      {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
      {description ? <div className="text-gray-600 max-w-3xl">{description}</div> : null}
      {children}
    </section>
  );
};
