'use client';

import { Button } from '@/components/ui/button';
import { HomeIcon } from '@/icons';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  note?: string;
  image: string;
  highlight?: string;
}

export default function AlternatingCards({ cards = [] }: Readonly<{ cards?: CardProps[] }>) {
  return (
    <div className="space-y-10">
      {cards.map((card, index) => {
        const isReverse = index % 2 !== 0;
        return (
          <div key={card.title} className="relative">
            <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[40px] bg-[#FCF8F8] p-5 md:grid-cols-2 xl:p-20">
              {/* Image Column */}
              <div
                className={`flex h-full items-center justify-center rounded-3xl bg-[#E9E9EA] p-8 ${
                  isReverse ? 'md:order-2' : ''
                }`}
              >
                <div className="relative h-[300px] w-full max-w-md xl:h-[426px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className={`${isReverse ? 'md:order-1' : ''} space-y-6`}>
                <h2 className="text-2xl font-bold lg:text-5xl">
                  {card.title}{' '}
                  {card?.highlight ? <span className="text-accent"> {card.highlight}</span> : null}
                </h2>
                <p className="text-base leading-relaxed lg:text-2xl">{card.description}</p>
                <p className="text-accent pb-10 text-sm lg:py-0 lg:text-base">{card.note}</p>
              </div>

              {/* Cutout Button */}
              <div
                style={{
                  clipPath: 'path("M0 0 H100% V100% Q75% 90% 50% 100% Q25% 90% 0 100% Z")',
                }}
                className="absolute right-4 bottom-0 flex items-end rounded-t-3xl bg-white px-2 pt-2 lg:px-4 lg:pt-3 xl:right-20"
              >
                <Button
                  variant={'metallic'}
                  className="flex items-center gap-4 rounded-full px-8 py-6 text-xs font-medium text-white lg:text-base"
                >
                  DESIGN YOUR BUILDING IN 3D{''}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                    <HomeIcon />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
