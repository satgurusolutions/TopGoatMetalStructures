'use client';

import { LinkIcon } from '@/icons';
import LinkIconInactive from '@/icons/link-inactive';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import MobileCarousel from './mobile-carousel';
const items = [
  {
    label: 'Garages',
    image: '/images/looking-for/garages/4.png',
    title: 'Garages',
    description: '',
  },
  {
    label: 'Carports',
    image: '/images/looking-for/carports/5.png',
    title: 'Carports',
    description: '',
  },
  {
    label: 'Barns',
    image: '/images/looking-for/barns/1.JPG',
    title: 'Barns',
    description: '',
  },
  {
    label: 'RV Covers',
    image: '/images/looking-for/rv-covers/6.png',
    title: 'RV Covers',
    description: '',
  },
  {
    label: 'Wide Span Buildings',
    image: '/images/looking-for/big-ass-buildings/3.jpg',
    title: 'Wide Span Buildings',
    description: '',
  },
];
const DifferentProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-4 lg:flex-row lg:items-stretch lg:gap-12 xl:px-0 [@media(width=1280px)]:px-4">
      {/* Left Column - Buttons */}
      <div className="w-full">
        <div className="leading-1.6 mt-4 px-6 text-center text-[32px] font-bold text-black lg:text-start xl:px-0 xl:text-5xl">
          Our Different <span className="text-accent">Products</span>
        </div>
        <p className="pt-4 text-center text-base md:text-start xl:text-2xl">
          We offer five different types of metal buildings. These products include:
        </p>
        <div className="custom-scrollbar hidden w-full flex-col gap-4 overflow-auto pt-8 lg:flex">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.button
                key={item.label}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0, 1)',
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`flex h-[80px] w-full cursor-pointer items-center justify-between rounded-full border px-6 py-4 text-lg text-white ${
                  isActive
                    ? 'cursor-pointer rounded-full text-white shadow-md transition-all duration-300 ease-in-out [background:linear-gradient(180deg,_#ED2031_0%,_#87121C_100%)] hover:brightness-105 hover:[background:linear-gradient(180deg,_#F03242_0%,_#9B1E25_100%)]'
                    : 'cursor-pointer transition-all duration-300 ease-in-out [background:linear-gradient(180deg,_#362C2D_0%,_#000000_100%)] hover:brightness-105 hover:[background:linear-gradient(180deg,_#F03242_0%,_#9B1E25_100%)]'
                }`}
              >
                <span>{item.label}</span>

                <motion.span
                  key={isActive ? 'active-icon' : 'inactive-icon'}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex h-[70px] w-[70px] items-center justify-center"
                >
                  <AnimatePresence mode="wait">
                    {!isActive ? <LinkIcon /> : <LinkIconInactive />}
                  </AnimatePresence>
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
      {/* Right Column - Image and Description */}
      <div className="hidden w-full flex-col items-start justify-start gap-6 text-white lg:flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.label + '-image'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative h-full w-full"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.label}
              fill
              className="inset-0 max-h-full max-w-full rounded-4xl border-[16px] border-[#A5A5AB] object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Carousel */}
      <MobileCarousel items={items} />
    </div>
  );
};

export default DifferentProducts;
