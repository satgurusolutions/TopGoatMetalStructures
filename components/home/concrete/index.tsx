'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ComponentItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ConcreteSectionProps {
  title?: string;
  description?: string;
  components?: ComponentItem[];
  padding?: string;
  background?: string;
}

const defaultComponents: ComponentItem[] = [
  {
    id: 1,
    title: 'Walk-In Door',
    image: '/images/components/5eef9e_74495a30311947a78a682b12710b8874~mv2.webp',
    description:
      'A durable 36 × 80-inch walk-in door gives your garage, workshop or storage building secure and convenient everyday access.',
  },
  {
    id: 2,
    title: 'Windows',
    image: '/images/components/5eef9e_cfbe7a04ef8841f9a2b307e952acdb18~mv2.webp',
    description:
      'Natural light and ventilation options sized to suit your metal building configuration.',
  },
  {
    id: 3,
    title: 'Anchors',
    image: '/images/components/5eef9e_fcaff1b4c57341c6ac63f826b98b4f04~mv2.webp',
    description: 'Anchoring options selected for concrete, asphalt, gravel or ground installation.',
  },
  {
    id: 4,
    title: 'Garage Doors',
    image: '/images/components/5eef9e_fe4404814bb64cd6b14b16e01cab5c60~mv2.webp',
    description:
      'Roll-up and sectional garage door options sized for vehicles, equipment and storage.',
  },
  {
    id: 5,
    title: 'Chain Hoist',
    image: '/images/components/5eef9e_457b61e14ad44192bc0a501b33e102e6~mv2.webp',
    description: 'Manual chain-hoist options for larger commercial roll-up door configurations.',
  },
  {
    id: 6,
    title: 'Gauge Metal Sheets',
    image: '/images/components/5eef9e_4cea9a25d4d848a9b23012f3d41f393e~mv2.webp',
    description: 'Durable metal panels available in multiple gauges, profiles and colours.',
  },

  // {
  //   id: 7,
  //   title: 'Flood Vents',
  //   image: '/images/components/5eef9e_4865d582e7024fd7a33984cd0b8c405e~mv2.webp',
  //   description:
  //     'Vent options designed to support airflow and applicable local requirements.',
  // },

  {
    id: 7,
    title: 'Color-Matched Screws',
    image: '/images/components/5eef9e_d33e6de533ef40dfa99a38ece0fdf35f~mv2.webp',
    description: 'Fasteners selected to coordinate with your panel and trim colours.',
  },
  {
    id: 8,
    title: 'Trims',
    image: '/images/components/5eef9e_87700ea117d74bceba80e6b2cba1f9d3~mv2.webp',
    description:
      'Finished trim packages protect exposed edges and complete the building appearance.',
  },

  // {
  //   id: 9,
  //   title: 'Lap Siding',
  //   image: '/images/components/5eef9e_bfbc7436e03d4aa795af78898b8b5714~mv2.webp',
  //   description:
  //     'Alternative siding profiles available for a more residential appearance.',
  // },

  {
    id: 9,
    title: 'Headers',
    image: '/images/components/5eef9e_9b52bf37eded4d3c8fdd3490ecbd393e~mv2.webp',
    description: 'Reinforced framing above larger openings provides additional structural support.',
  },
  {
    id: 10,
    title: 'Dutch Corners',
    image: '/images/components/5eef9e_9734039cf4d748b19f2da60b6d271f11~mv2.webp',
    description: 'Detailed corner treatments available for select barn and agricultural designs.',
  },
];

export default function ConcreteSection({
  // title,
  // description,
  components = defaultComponents,
  padding = 'py-10 lg:py-16',
  background = 'bg-[#f5f4f1]',
}: ConcreteSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // const total = components.length;

  // const nextSlide = () => {
  //   setActiveIndex((prev) => (prev + 1) % total);
  // };

  // const prevSlide = () => {
  //   setActiveIndex((prev) => (prev - 1 + total) % total);
  // };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollTo({
      left: slider.clientWidth * activeIndex,
      behavior: 'smooth',
    });
  }, [activeIndex]);

  const handleMobileScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const width = slider.clientWidth;

    if (!width) return;

    const newIndex = Math.round(slider.scrollLeft / width);

    if (newIndex >= 0 && newIndex < components.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  if (!components.length) return null;

  const activeComponent = components[activeIndex];

  const splitIndex = Math.ceil(components.length / 2);

  const leftComponents = components.slice(0, splitIndex);
  const rightComponents = components.slice(splitIndex);

  return (
    <section className={`${padding} ${background}`}>
      <div className="mx-auto max-w-[1240px] px-4">
        <header className="mx-auto max-w-[790px] text-center">
          <span className="font-oswald inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a87616] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#c89120]" />
            Built down to the details
          </span>

          <h2 className="font-anton mt-5 text-[clamp(2.8rem,5.5vw,4.7rem)] leading-[0.91] font-normal tracking-[-0.02em] text-black uppercase">
            Components worthy of the
            <span className="mt-1 block bg-gradient-to-r from-[#d9a62b] via-[#bd8419] to-[#96640d] bg-clip-text text-transparent">
              Top Goat name
            </span>
          </h2>

          <p className="mx-auto mt-5 mb-10 max-w-[680px] text-[15px] leading-7 text-[#655f55] sm:text-base">
            Explore the hardworking details that make your Top Goat structure secure, durable and
            ready for everyday use.
          </p>
        </header>
        {/* =========================================================
            DESKTOP
        ========================================================= */}
        <div className="hidden items-center gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_430px_minmax(0,1fr)] xl:gap-8">
          {/* LEFT MENU */}
          <div className="flex flex-col gap-3">
            {leftComponents.map((item, index) => {
              const originalIndex = index;
              const isActive = originalIndex === activeIndex;

              return (
                <ComponentButton
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  onClick={() => goToSlide(originalIndex)}
                />
              );
            })}
          </div>

          {/* CENTER CARD */}
          <ComponentCard
            item={activeComponent}
            index={activeIndex}
            total={components.length}
            desktop
          />

          {/* RIGHT MENU */}
          <div className="flex flex-col gap-3">
            {rightComponents.map((item, index) => {
              const originalIndex = index + splitIndex;
              const isActive = originalIndex === activeIndex;

              return (
                <ComponentButton
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  onClick={() => goToSlide(originalIndex)}
                />
              );
            })}
          </div>
        </div>
        {/* =========================================================
            MOBILE / TABLET SLIDER
        ========================================================= */}
        <div className="lg:hidden">
          <div
            ref={sliderRef}
            onScroll={handleMobileScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {components.map((item, index) => (
              <div key={item.id} className="w-full min-w-full shrink-0 snap-center">
                <ComponentCard item={item} index={index} total={components.length} />
              </div>
            ))}
          </div>

          {/* MOBILE CONTROLS */}
          <div className="mt-5 flex items-center justify-between gap-4">
            {/*<button
              type="button"
              onClick={prevSlide}
              aria-label="Previous component"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition duration-300 hover:border-[#e3a300] hover:bg-[#e3a300]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>*/}

            {/* DOTS */}
            <div className="flex flex-1 items-center justify-center gap-2">
              {components.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`View ${item.title}`}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'w-7 bg-[#e3a300]' : 'w-2 bg-black/20 hover:bg-black/40'
                    }`}
                  />
                );
              })}
            </div>

            {/*<button
              type="button"
              onClick={nextSlide}
              aria-label="Next component"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition duration-300 hover:border-[#e3a300] hover:bg-[#e3a300]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>*/}
          </div>

          {/* MOBILE COUNTER */}
          <div className="mt-3 text-center">
            <span className="font-oswald text-[12px] font-bold tracking-[0.12em] text-black/50">
              {String(activeIndex + 1).padStart(2, '0')}
              {' / '}
              {String(components.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP SIDE BUTTON
========================================================= */

function ComponentButton({
  item,
  isActive,
  onClick,
}: {
  item: ComponentItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`group flex min-h-[70px] w-full items-center justify-between rounded-full border px-5 text-left transition-all duration-300 xl:px-6 ${
        isActive
          ? 'border-[#e3a300] bg-gradient-to-r from-[#f9c54d] via-[#efb42d] to-[#d99b10] text-black shadow-[0_15px_30px_-22px_rgba(227,163,0,0.8)]'
          : 'border-[#1d1d20] bg-[#0d0d0f] text-white hover:border-[#e3a300]/60 hover:bg-[#151517]'
      }`}
    >
      <span className="font-oswald pr-3 text-[14px] leading-tight font-bold uppercase xl:text-[15px]">
        {item.title}
      </span>

      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          isActive
            ? 'border-black/10 bg-[#111113] text-[#e3a300]'
            : 'border-white/10 bg-transparent text-[#e3a300] group-hover:border-[#e3a300]/50'
        }`}
      >
        <ChevronRight className="h-4 w-4" />
      </span>
    </button>
  );
}

/* =========================================================
   COMPONENT CARD
========================================================= */

function ComponentCard({
  item,
  index,
  total,
  desktop = false,
}: {
  item: ComponentItem;
  index: number;
  total: number;
  desktop?: boolean;
}) {
  return (
    <article
      className={`overflow-hidden bg-[#111113] text-white shadow-[0_25px_60px_-35px_rgba(0,0,0,0.6)] ${
        desktop ? 'rounded-[20px]' : 'mx-auto w-full max-w-[430px] rounded-[20px]'
      }`}
    >
      {/* IMAGE */}
      <div
        className={`relative overflow-hidden bg-[#0d0d0f] ${
          desktop ? 'h-[320px]' : 'h-[320px] min-[400px]:h-[340px] sm:h-[360px]'
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={desktop ? '430px' : '(max-width: 640px) 100vw, 430px'}
          className="object-contain p-10 sm:p-12 lg:p-10"
        />
      </div>

      {/* CONTENT */}
      <div
        className={`border-t border-white/[0.03] bg-[#111113] ${
          desktop ? 'min-h-[200px] px-7 py-7' : 'min-h-[200px] px-7 py-7 sm:px-8 sm:py-8'
        }`}
      >
        <div className="font-oswald mb-3 text-[12px] font-bold tracking-[0.1em] text-[#e3a300]">
          {String(index + 1).padStart(2, '0')}
          {' / '}
          {String(total).padStart(2, '0')}
        </div>

        <h3 className="font-oswald text-[29px] leading-[1.05] font-bold text-white uppercase sm:text-[31px]">
          {item.title}
        </h3>

        <p className="mt-4 text-[15px] leading-[1.55] text-[#d1c8ae] sm:text-[16px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
