'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const manufacturers = [
  {
    name: 'Carolina Carports',
    logo: '/images/top-manufacturers/carolina-carports-inc.png',
  },
  {
    name: 'American Steel Carports',
    logo: '/images/top-manufacturers/american-steel-carports.png',
  },
  {
    name: 'Eagle Carports',
    logo: '/images/top-manufacturers/eagle-carports.png',
  },
  {
    name: 'Steel Building Structures',
    logo: '/images/top-manufacturers/steelbuildings.png',
  },
  {
    name: 'Tri-State Carports',
    logo: '/images/top-manufacturers/tristate.png',
  },
  {
    name: 'California All-Steel Carports',
    logo: '/images/top-manufacturers/california-all-steel.png',
  },
];

export default function TopManufacturers() {
  return (
    <section id="our-top-manufacturers">
      <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-bold xl:text-6xl">
            Our Top <span className="text-primary">Manufacturers</span>
          </h3>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000, // 3 seconds per slide
              stopOnInteraction: true, // pause when user interacts
            }),
          ]}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent>
            {manufacturers.map((brand, i) => (
              <CarouselItem key={i} className="basis-1/2 px-4 md:basis-1/3 lg:basis-1/4">
                <div className="text-center">
                  <div className="otm-brands-card mb-3 flex items-center justify-center rounded-2xl p-4">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={200}
                      height={100}
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                  <h6 className="text-base font-medium">{brand.name}</h6>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          {/* <CarouselPrevious className="left-0  -translate-x-16" />
          <CarouselNext className="right-0 translate-x-16" /> */}
        </Carousel>
      </div>
    </section>
  );
}
