'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import parse from 'html-react-parser';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function FeatureTabsCarousel({
  features,
  title,
  description,
}: {
  features?: Feature[];
  title?: string;
  description?: string;
}) {
  const [active, setActive] = React.useState<Feature | undefined>(features?.[0]);
  const [api, setApi] = React.useState<CarouselApi>();

  // Listen for carousel changes
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap(); // get active index
      setActive(features?.[index]);
    };

    onSelect(); // initial
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, features]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-0">
      {title || description ? (
        <div className="pb-6">
          <h2 className="pb-4 text-center text-2xl font-bold xl:text-5xl">{title}</h2>
          <p className="text-center text-base xl:text-xl">{description}</p>
        </div>
      ) : null}
      {/* Carousel row (desktop) */}
      <Carousel opts={{ align: 'start' }} setApi={setApi} className="w-full">
        <CarouselContent
          className="mx-4 hidden gap-4 sm:grid"
          style={{ gridTemplateColumns: `repeat(${features?.length}, minmax(0,1fr))` }}
        >
          {features?.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item)}
              className={cn(
                'flex cursor-pointer flex-col items-center justify-center rounded-lg border p-6 transition',
                active?.id === item.id
                  ? 'border-gray-400 bg-gray-100'
                  : 'border-gray-200 bg-white hover:bg-gray-50',
              )}
            >
              <span
                className={cn(
                  'inline-block h-[60px] w-[60px] transition-colors duration-300',
                  active?.id === item.id ? 'bg-accent' : 'group-hover:bg-accent bg-gray-700',
                )}
                style={{
                  WebkitMaskImage: `url(${item.icon})`,
                  maskImage: `url(${item.icon})`,
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
                aria-hidden
              />
              <p
                className={cn(
                  'mt-2 text-center font-semibold',
                  active?.id === item.id ? 'text-red-600' : 'text-gray-800',
                )}
              >
                {item.title}
              </p>
            </div>
          ))}
        </CarouselContent>

        {/* Mobile swipe (1 per slide) */}
        <CarouselContent className="sm:hidden">
          {features?.map((item) => (
            <CarouselItem key={item.id} className="basis-[85%]">
              <div
                className={cn(
                  'flex flex-col items-center justify-center rounded-lg border p-6 transition',
                  active?.id === item.id
                    ? 'border-gray-400 bg-gray-100'
                    : 'border-gray-200 bg-white hover:bg-gray-50',
                )}
              >
                <Image src={item.icon} alt={item.title} width={60} height={60} />
                <p
                  className={cn(
                    'mt-2 text-center font-semibold',
                    active?.id === item.id ? 'text-red-600' : 'text-gray-800',
                  )}
                >
                  {item.title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Active content with fade-in-up */}
      <div className="mt-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active?.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <h2 className="text-primary text-2xl font-bold uppercase">{active?.title}</h2>

            {/* Smooth height animation wrapper */}
            <motion.div
              key={active?.id + '-desc'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-2 max-w-2xl text-gray-600">
                {parse(active?.description ?? '')}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
