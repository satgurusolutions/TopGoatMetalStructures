'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const projects = [
  {
    image: '/images/garage.webp',
    title: '24×45 Three-Car Garage',
    location: 'Vertical roof · Asheville, NC',
  },
  {
    image: '/images/barn.webp',
    title: '42×40 Raised-Center Barn',
    location: 'Two-tone · Bowling Green, KY',
  },
  {
    image: '/images/carport3.webp',
    title: '20×40×15 RV Garage',
    location: 'Insulated · Ocala, FL',
  },
  {
    image: '/images/garage3.webp',
    title: '58×48×16 Commercial Shop',
    location: 'Clear-span · Tyler, TX',
  },
  {
    image: '/images/carport.webp',
    title: '30×50 Four-Car Carport',
    location: 'Boxed-eave · Macon, GA',
  },
  {
    image: '/images/garage.webp',
    title: '30×30 Two-Car Garage',
    location: 'Side-entry · Knoxville, TN',
  },
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const track = trackRef.current;

    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>('[data-project-card]');
    const cardWidth = firstCard?.offsetWidth ?? 420;
    const gap = 20;

    track.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="showcase"
      className="overflow-hidden bg-[#f4f1eb] py-20 text-[#151513] sm:py-24 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7">
        {/* Heading */}
        <header className="mx-auto max-w-[760px] text-center">
          <span className="font-oswald inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a87616] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#c89120]" />
            Recent builds
          </span>

          <h2 className="font-anton mt-5 text-[clamp(2.8rem,5vw,4.9rem)] leading-[0.9] font-normal tracking-[-0.02em] uppercase">
            Straight off the{' '}
            <span className="bg-gradient-to-r from-[#d7a62f] via-[#bd8419] to-[#96640d] bg-clip-text text-transparent">
              install
            </span>
            <span className="block bg-gradient-to-r from-[#d7a62f] via-[#bd8419] to-[#96640d] bg-clip-text text-transparent">
              crew
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#655f55] sm:text-base">
            A few structures we&apos;ve delivered this season. Yours could be next.
          </p>
        </header>

        {/* Project carousel */}
        <div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={`${project.title}-${project.location}`}
              data-project-card
              className="group relative h-[315px] min-w-[88%] snap-start overflow-hidden rounded-[16px] border border-black/45 bg-[#111] shadow-[0_14px_30px_-22px_rgba(0,0,0,0.5)] sm:min-w-[calc(50%-10px)] lg:h-[315px] lg:min-w-[calc((100%-40px)/3)]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-oswald text-[18px] leading-tight font-bold tracking-[-0.01em] text-white uppercase sm:text-xl">
                  {project.title}
                </h3>

                <p className="font-oswald mt-1.5 text-sm font-medium text-[#d7a126]">
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-[#a87616] shadow-sm transition duration-300 hover:border-[#a87616] hover:bg-[#a87616] hover:text-white"
            aria-label="Previous builds"
          >
            <ChevronLeft size={18} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={() => scroll(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-[#a87616] shadow-sm transition duration-300 hover:border-[#a87616] hover:bg-[#a87616] hover:text-white"
            aria-label="Next builds"
          >
            <ChevronRight size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}
