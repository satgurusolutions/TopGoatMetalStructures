'use client';

import { BulletCheckIcon } from '@/icons';
import { FC } from 'react';

const BulletList: FC<{ textClassName?: string }> = ({ textClassName }) => {
  const points = [
    'A Small Deposit To Order. The Final Payment is Due Upon Installation',
    'Up To 20-year warranty',
    'Military & First Responder Discounts',
    'Metal Structures Crafted with Top-Quality Materials',
    'Free Delivery and Installation',
  ];

  return (
    <ul className="space-y-3 lg:space-y-6">
      {points.map((text) => (
        <li key={text} className="flex items-start gap-4 xl:gap-4">
          <div className="pt-2">
            <BulletCheckIcon />
          </div>
          <span
            className={`text-lg leading-snug font-medium ${textClassName || 'text-white'} lg:text-2xl xl:text-2xl`}
          >
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
