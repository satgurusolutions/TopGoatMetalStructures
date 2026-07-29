import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

const MobileCarousel = ({
  items,
}: {
  items: {
    label: string;
    image: string;
    title: string;
    description: ReactNode;
  }[];
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const updatePage = () => {
      const snapIndex = api.selectedScrollSnap();

      setCurrentPage(snapIndex);
    };

    updatePage();
    api.on('select', updatePage);
  }, [api]);
  return (
    <div className="flex w-full flex-col items-center justify-center lg:hidden">
      <motion.div
        className="mb-4 flex w-[100%] justify-center overflow-x-hidden overflow-y-auto px-4 text-center"
        key={items[currentPage].label + '-desc'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
      ></motion.div>
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full sm:w-1/2"
        setApi={setApi}
        // onSlideChange={(index) => setActiveIndex(index)}
      >
        <CarouselContent className="-ml-4 w-full pl-4">
          {items.map((item) => (
            <CarouselItem key={item.label} className="shrink-0 grow-0 basis-[99%] pr-4">
              <div>
                <h2 className="pb-2 text-center text-[32px] font-semibold text-ellipsis whitespace-nowrap text-black">
                  {item.title}
                </h2>
              </div>
              <motion.div
                key={item.label + '-image'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative h-[216px] w-full rounded-2xl bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="rounded-2xl object-cover"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 ${
              activeIndex === i
                ? 'h-3 w-6 rounded-full bg-white'
                : 'h-3 w-3 rounded-full [background:linear-gradient(180deg,_#ED2031_0%,_#87121C_100%)]'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default MobileCarousel;
