'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const financeCardData = [
  { src: '/images/finances/acorn.png', alt: 'Acorn', h: 93, w: 261 },
  { src: '/images/finances/rto-national.png', alt: 'RTO National', h: 150, w: 299 },
  { src: '/images/finances/greensky.png', alt: 'Green Sky', h: 84, w: 260 },
  { src: '/images/finances/hfs.png', alt: 'HFS', h: 125, w: 248 },
  // { src: '/images/finances/ez-pay.png', alt: 'EZ Pay', h: 146, w: 290 },
];

const itemsPerPage = 3;

export default function FinanceCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const pageCount = Math.ceil(financeCardData.length / itemsPerPage);

  useEffect(() => {
    if (!api) return;

    const updatePage = () => {
      const snapIndex = api.selectedScrollSnap();
      setCurrentIndex(snapIndex);
      setCurrentPage(Math.floor(snapIndex + 1 / itemsPerPage));
    };

    updatePage();
    api.on('select', updatePage);
  }, [api]);

  return (
    <div className="rounded-4xl bg-[#d2d2d5] p-3">
      <div className="shadow-card-custom relative w-full max-w-7xl rounded-4xl bg-black px-8 py-8">
        {/* Background Layer */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/designer/texture_optimized.webp"
            fill
            alt="Background Texture"
            priority
            className="rounded-4xl object-cover"
          />
          <Image
            src="/images/finances/ellipse.png"
            width={765}
            height={766}
            alt="Background ellipse"
            priority
            className="absolute -top-26 left-1/2 -translate-x-1/2 scale-150 sm:-top-56 sm:scale-100"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {financeCardData.map((item) => (
                <CarouselItem key={item.src} className="pl-4 md:basis-1/3 lg:basis-1/3">
                  <Card className="flex h-32 items-center justify-center bg-[#e7e6e6]">
                    <CardContent className="flex items-center justify-center">
                      <Image src={item.src} height={item.h} width={item.w} alt={item.alt} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots based on pages */}
          {pageCount > 1 ? (
            <>
              <div className="mt-6 hidden justify-center gap-3 sm:flex">
                {Array.from({ length: pageCount }).map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => api?.scrollTo(pageIndex * itemsPerPage)}
                    className={`transition-all duration-300 ${
                      currentPage === pageIndex
                        ? 'h-3 w-6 rounded-full bg-white'
                        : 'h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ease-in-out [background:linear-gradient(180deg,_#ED2031_0%,_#87121C_100%)] hover:brightness-105 hover:[background:linear-gradient(180deg,_#F03242_0%,_#9B1E25_100%)]'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-6 flex justify-center gap-3 sm:hidden">
                {financeCardData.map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => api?.scrollTo(pageIndex)}
                    className={`transition-all duration-300 ${
                      currentIndex === pageIndex
                        ? 'h-3 w-6 rounded-full bg-white'
                        : 'h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ease-in-out [background:linear-gradient(180deg,_#ED2031_0%,_#87121C_100%)] hover:brightness-105 hover:[background:linear-gradient(180deg,_#F03242_0%,_#9B1E25_100%)]'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
