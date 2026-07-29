'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type GalleryItem = {
  image: string;
  title: string;
  category: 'garage' | 'carport' | 'barn' | 'rv' | 'commercial';
};

const galleryItems: GalleryItem[] = [
  {
    image: '/images/garage.webp',
    title: 'Three-Car Garage',
    category: 'garage',
  },
  {
    image: '/images/barn.webp',
    title: 'Raised-Center Barn',
    category: 'barn',
  },
  {
    image: '/images/rvcover.webp',
    title: 'Enclosed RV Garage',
    category: 'rv',
  },
  {
    image: '/images/5.webp',
    title: 'Commercial Shop',
    category: 'commercial',
  },
  {
    image: '/images/carport.webp',
    title: 'Four-Car Carport',
    category: 'carport',
  },
  {
    image: '/images/garage.webp',
    title: 'Two-Car Garage',
    category: 'garage',
  },
  {
    image: '/images/5.webp',
    title: 'Clear-Span Workshop',
    category: 'commercial',
  },
  {
    image: '/images/carport.webp',
    title: 'Boxed-Eave Carport',
    category: 'carport',
  },
];

const filters = [
  { value: 'all', label: 'All' },
  { value: 'garage', label: 'Garages' },
  { value: 'carport', label: 'Carports' },
  { value: 'barn', label: 'Barns' },
  { value: 'rv', label: 'RV Covers' },
  { value: 'commercial', label: 'Commercial' },
] as const;

type FilterValue = (typeof filters)[number]['value'];

export default function VideoGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const visibleItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems;

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#f5f2eb] py-20 text-[#161513] sm:py-24 lg:py-[112px]"
    >
      <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-7">
        {/* Heading */}
        <header className="mx-auto max-w-[700px] text-center">
          <span className="font-oswald inline-flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a87616] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#c89120]" />
            Gallery
          </span>

          <h2 className="font-anton mt-5 text-[clamp(2.9rem,5vw,4.6rem)] leading-[0.92] font-normal tracking-[-0.02em] uppercase">
            See it in{' '}
            <span className="bg-gradient-to-r from-[#d9a62b] via-[#bd8419] to-[#96640d] bg-clip-text text-transparent">
              steel
            </span>
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#655f55] sm:text-base">
            Filter by building type.
          </p>
        </header>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={`font-oswald min-h-[38px] rounded-full border px-5 text-[12px] font-medium tracking-[0.03em] uppercase transition duration-300 ${
                  isActive
                    ? 'border-[#bf861a] bg-gradient-to-r from-[#f3c34e] via-[#dba22a] to-[#b77c14] text-[#171109] shadow-[0_12px_24px_-15px_rgba(190,133,25,0.8)]'
                    : 'border-black/15 bg-transparent text-[#3e3932] hover:border-[#b77c14] hover:text-[#a87616]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, index) => (
            <figure
              key={`${item.title}-${index}`}
              className="group relative aspect-[1.35/1] overflow-hidden rounded-[13px] border border-black/10 bg-[#d8d3ca] shadow-[0_14px_30px_-24px_rgba(0,0,0,0.45)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

              <figcaption className="sr-only">{item.title}</figcaption>
            </figure>
          ))}
        </div>

        {visibleItems.length === 0 && (
          <div className="mt-8 rounded-[14px] border border-black/10 bg-white/50 px-6 py-10 text-center text-sm text-[#655f55]">
            No gallery items are available for this category.
          </div>
        )}
      </div>
    </section>
  );
}
