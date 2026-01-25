import type { ReactNode } from 'react';
import { StepList } from '@/components/home/StepList';

export const CooperationCard = ({
  title,
  description,
  steps,
  note,
  price,
}: {
  title: string;
  description: ReactNode;
  steps: ReactNode[];
  note?: ReactNode;
  price: string;
}) => {
  return (
    <div className="rounded-2xl p-6 bg-gray-50/60 hover:bg-gray-50 transition">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{description}</p>

      <StepList items={steps} />

      {note ? <p className="mt-4 text-sm text-gray-500">{note}</p> : null}

      <p className="mt-4">{price}</p>
    </div>
  );
};
