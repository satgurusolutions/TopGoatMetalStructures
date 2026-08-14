'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    quote:
      'The crew showed up when they said, leveled the pad, and had my 30×40 shop standing in a day. Steel feels twice as heavy as the quote I got down the road.',
    name: 'Daryl M.',
    details: 'Tyler, TX · Commercial Shop',
  },
  {
    quote:
      'Covering our RV was easier than we expected. The process was simple, the team was helpful, and the finished structure looks like it belongs on our property.',
    name: 'Anita & Joe R.',
    details: 'Ocala, FL · RV Garage',
  },
  {
    quote:
      'I priced three companies. Top Goat was the only one that sent stamped engineering for our snow load without me asking. Permit sailed through.',
    name: 'Karen P.',
    details: 'Asheville, NC · 3-Car Garage',
  },
  {
    quote:
      "Barn's been through two seasons of weather and looks the same as install day. The two-tone color match was spot on. Would buy again.",
    name: 'Wes T.',
    details: 'Bowling Green, KY · Metal Barn',
  },
];

export default function Review() {
  const [activeIndex, setActiveIndex] = useState(2);

  const activeReview = reviews[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-y border-white/5 bg-[#0b0b0d] py-20 text-[#f4f1ea] sm:py-24 lg:min-h-[690px] lg:py-[120px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[440px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a225]/[0.025] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 text-center sm:px-7">
        <header>
          <span className="font-oswald inline-flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#d9a225] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#d9a225]" />
            4.9 ★ · 2,300+ Reviews
          </span>

          <h2 className="font-anton mt-5 text-[clamp(3rem,5.6vw,4.7rem)] leading-[0.92] font-normal tracking-[-0.02em] uppercase">
            Customer {' '}
            <span className="bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
        </header>

        <figure className="mx-auto mt-16 max-w-[900px]">
          <div
            className="font-oswald text-[19px] tracking-[0.2em] text-[#e7b53c]"
            aria-label="5 out of 5 stars"
          >
            ★★★★★
          </div>

          <blockquote className="font-oswald relative mx-auto mt-7 max-w-[860px] text-[24px] leading-[1.35] font-semibold text-[#f4f1ea] sm:text-[29px] lg:text-[33px]">
            <span className="text-[#d9a225]">“</span>
            {activeReview.quote}
            <span className="text-[#d9a225]">”</span>
          </blockquote>

          <figcaption className="mt-7">
            <strong className="font-oswald block text-[15px] font-bold tracking-[0.04em] text-[#f4f1ea] uppercase">
              {activeReview.name}
            </strong>

            <span className="mt-1 block text-[13px] font-medium text-[#d9a225]">
              {activeReview.details}
            </span>
          </figcaption>
        </figure>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={showPrevious}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9a225]/30 bg-transparent text-[#d9a225] transition duration-300 hover:border-[#d9a225] hover:bg-[#d9a225] hover:text-[#171109]"
            aria-label="Previous review"
          >
            <ChevronLeft size={16} strokeWidth={1.8} />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((review, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    isActive ? 'h-2 w-6 bg-[#e7b53c]' : 'h-2 w-2 bg-white/10 hover:bg-white/25'
                  }`}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={isActive ? 'true' : undefined}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={showNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9a225]/30 bg-transparent text-[#d9a225] transition duration-300 hover:border-[#d9a225] hover:bg-[#d9a225] hover:text-[#171109]"
            aria-label="Next review"
          >
            <ChevronRight size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}
