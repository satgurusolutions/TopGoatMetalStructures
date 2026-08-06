'use client';

import Image from 'next/image';
import { useState } from 'react';

const buildingComponents = [
  {
    title: 'Walk-In Door',
    image: '/images/components/5eef9e_74495a30311947a78a682b12710b8874~mv2.webp',
    description:
      'A durable 36 × 80-inch walk-in door gives your garage, workshop or storage building secure and convenient everyday access.',
  },
  {
    title: 'Windows',
    image: '/images/components/5eef9e_cfbe7a04ef8841f9a2b307e952acdb18~mv2.webp',
    description:
      'Natural light and ventilation options sized to suit your metal building configuration.',
  },
  {
    title: 'Anchors',
    image: '/images/components/5eef9e_fcaff1b4c57341c6ac63f826b98b4f04~mv2.webp',
    description: 'Anchoring options selected for concrete, asphalt, gravel or ground installation.',
  },
  {
    title: 'Garage Doors',
    image: '/images/components/5eef9e_fe4404814bb64cd6b14b16e01cab5c60~mv2.webp',
    description:
      'Roll-up and sectional garage door options sized for vehicles, equipment and storage.',
  },
  {
    title: 'Chain Hoist',
    image: '/images/components/5eef9e_457b61e14ad44192bc0a501b33e102e6~mv2.webp',
    description: 'Manual chain-hoist options for larger commercial roll-up door configurations.',
  },
  {
    title: 'Gauge Metal Sheets',
    image: '/images/components/5eef9e_4cea9a25d4d848a9b23012f3d41f393e~mv2.webp',
    description: 'Durable metal panels available in multiple gauges, profiles and colours.',
  },
  {
    title: 'Flood Vents',
    image: '/images/components/5eef9e_4865d582e7024fd7a33984cd0b8c405e~mv2.webp',
    description: 'Vent options designed to support airflow and applicable local requirements.',
  },
  {
    title: 'Color-Matched Screws',
    image: '/images/components/5eef9e_d33e6de533ef40dfa99a38ece0fdf35f~mv2.webp',
    description: 'Fasteners selected to coordinate with your panel and trim colours.',
  },
  {
    title: 'Trims',
    image: '/images/components/5eef9e_87700ea117d74bceba80e6b2cba1f9d3~mv2.webp',
    description:
      'Finished trim packages protect exposed edges and complete the building appearance.',
  },
  {
    title: 'Lap Siding',
    image: '/images/components/5eef9e_bfbc7436e03d4aa795af78898b8b5714~mv2.webp',
    description: 'Alternative siding profiles available for a more residential appearance.',
  },
  {
    title: 'Headers',
    image: '/images/components/5eef9e_9b52bf37eded4d3c8fdd3490ecbd393e~mv2.webp',
    description: 'Reinforced framing above larger openings provides additional structural support.',
  },
  {
    title: 'Dutch Corners',
    image: '/images/components/5eef9e_9734039cf4d748b19f2da60b6d271f11~mv2.webp',
    description: 'Detailed corner treatments available for select barn and agricultural designs.',
  },
];

export default function ConcreteSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeComponent = buildingComponents[activeIndex];

  const renderComponentButtons = (start: number, end: number) =>
    buildingComponents.slice(start, end).map((component, localIndex) => {
      const index = start + localIndex;
      const isActive = activeIndex === index;

      return (
        <button
          key={component.title}
          type="button"
          onClick={() => setActiveIndex(index)}
          aria-pressed={isActive}
          className={`group flex min-h-[70px] w-full items-center justify-between rounded-full border px-5 text-left transition duration-300 ${
            isActive
              ? 'border-[#d69b20] bg-gradient-to-r from-[#f6ca54] via-[#e5ad31] to-[#c68a17] text-[#16130d] shadow-[0_14px_30px_-18px_rgba(205,147,28,0.7)]'
              : 'border-white/10 bg-[#0d0d0f] text-white hover:border-[#d69b20]/60 hover:text-[#e7b53c]'
          }`}
        >
          <span className="font-oswald pr-4 text-[14px] font-bold uppercase sm:text-[15px]">
            {component.title}
          </span>

          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[15px] transition duration-300 ${
              isActive
                ? 'border-black/15 bg-[#17130b] text-[#e7b53c]'
                : 'border-white/10 bg-[#09090a] text-[#d9a225] group-hover:border-[#d9a225]/50'
            }`}
          >
            {isActive ? '↗' : '→'}
          </span>
        </button>
      );
    });

  return (
    <section
      id="components"
      className="overflow-hidden bg-[#f7f6f2] py-20 text-[#151513] sm:py-24 lg:py-[115px]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7">
        {/* Section heading */}
        <header className="mx-auto max-w-[790px] text-center">
          <span className="font-oswald inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a87616] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#c89120]" />
            Built down to the details
          </span>

          <h2 className="font-anton mt-5 text-[clamp(2.8rem,5.5vw,4.7rem)] leading-[0.91] font-normal tracking-[-0.02em] uppercase">
            Components worthy of the
            <span className="mt-1 block bg-gradient-to-r from-[#d9a62b] via-[#bd8419] to-[#96640d] bg-clip-text text-transparent">
              Top Goat name
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-[#655f55] sm:text-base">
            Explore the hardworking details that make your Top Goat structure secure, durable and
            ready for everyday use.
          </p>
        </header>

        {/* Desktop layout */}
        <div className="mt-14 hidden grid-cols-[1fr_1.2fr_1fr] items-center gap-5 lg:grid">
          {/* Left buttons */}
          <div className="space-y-3">{renderComponentButtons(0, 6)}</div>

          {/* Active component card */}
          <article className="overflow-hidden rounded-[20px] border border-black/20 bg-[#101012] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.65)]">
            <div className="relative h-[300px] overflow-hidden xl:h-[320px]">
              <Image
                key={activeComponent.image}
                src={activeComponent.image}
                alt={activeComponent.title}
                fill
                sizes="440px"
                className="object-contain transition duration-500"
              />

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            <div className="min-h-[200px] bg-[#121214] px-7 py-6 text-white">
              <span className="font-oswald text-[11px] font-bold tracking-[0.13em] text-[#d9a225] uppercase">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(buildingComponents.length).padStart(2, '0')}
              </span>

              <h3 className="font-oswald mt-3 text-[28px] leading-none font-bold uppercase">
                {activeComponent.title}
              </h3>

              <p className="mt-4 text-[15px] leading-6 text-[#aaa397]">
                {activeComponent.description}
              </p>
            </div>
          </article>

          {/* Right buttons */}
          <div className="space-y-3">{renderComponentButtons(6, 12)}</div>
        </div>

        {/* Tablet and mobile layout */}
        <div className="mt-12 lg:hidden">
          <div className="grid gap-3 sm:grid-cols-2">
            {renderComponentButtons(0, buildingComponents.length)}
          </div>

          <article className="mt-5 overflow-hidden rounded-[18px] border border-black/20 bg-[#101012] shadow-[0_28px_55px_-28px_rgba(0,0,0,0.65)]">
            <div className="relative h-[280px] overflow-hidden sm:h-[380px]">
              <Image
                key={activeComponent.image}
                src={activeComponent.image}
                alt={activeComponent.title}
                fill
                sizes="(max-width: 640px) 100vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="bg-[#121214] p-6 text-white sm:p-7">
              <span className="font-oswald text-[11px] font-bold tracking-[0.13em] text-[#d9a225] uppercase">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(buildingComponents.length).padStart(2, '0')}
              </span>

              <h3 className="font-oswald mt-3 text-2xl font-bold uppercase sm:text-[30px]">
                {activeComponent.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#aaa397] sm:text-[15px]">
                {activeComponent.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
