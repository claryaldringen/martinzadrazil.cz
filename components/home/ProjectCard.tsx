import Image from 'next/image';
import type { ReactNode } from 'react';

export const ProjectCard = ({
  logoSrc,
  logoAlt,
  name,
  subtitle,
  period,
  children,
  tags,
  logoClassName = '',
}: {
  logoSrc: string;
  logoAlt: string;
  name: string;
  subtitle: string;
  period: string;
  children: ReactNode;
  tags?: ReactNode;
  logoClassName?: string;
}) => {
  return (
    <article className="flex flex-col items-start gap-3">
      <div className={`w-64 h-32 flex items-center justify-center ${logoClassName}`}>
        <Image src={logoSrc} alt={logoAlt} width={256} height={256} />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <p className="text-sm text-gray-700">Spolupráce: {period}</p>
        <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
        {tags ? <div className="pt-1">{tags}</div> : null}
      </div>
    </article>
  );
};
