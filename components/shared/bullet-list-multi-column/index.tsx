'use client';

import { BulletCheckIcon } from '@/icons';

interface BulletListProps {
  points: string[];
}

const BulletListMultiColumn = ({ points }: BulletListProps) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
      {points.map((text) => (
        <li key={text} className="flex items-center gap-4">
          <BulletCheckIcon className="flex-shrink-0" />
          <span className="text-base leading-snug font-medium text-black lg:text-2xl xl:text-2xl">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BulletListMultiColumn;
