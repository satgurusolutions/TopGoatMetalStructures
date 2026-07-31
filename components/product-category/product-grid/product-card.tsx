'use client';

import { QuoteFormSmall2 } from '@/components/shared';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TELEPHONE_NUMBER } from '@/configs/navigation.config';
import { CallActiveIcon } from '@/icons';
import LinkIconInactive from '@/icons/link-inactive';
import { Product } from '@/types';
import { Loader2 } from 'lucide-react'; // Shadcn/lucide spinner
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import parse from 'html-react-parser';

const ProductCard: FC<{
  product: Product;
  variant?: number;
  products?: Product[];
  leadSourceName?: string;
  openModalOnClick?: boolean; // 👈 new prop
}> = ({ product, variant = 1, products, leadSourceName, openModalOnClick }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const price = parseFloat(product.price) || 0;
  const image = product.images?.[0]?.src || '/images/products/placeholder.png';
  const imageBlock = (
    <div className="relative h-[400px] w-full cursor-pointer overflow-hidden lg:h-[450px]">
      {' '}
      {/* Blurred background image */}
      <div className="absolute inset-0 scale-105 blur-xl">
        <Image
          src={image}
          alt={product.name || product.sku || 'Product background'}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      {/* Gradient overlay only on background */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
      {/* Foreground image */}
      <div className="relative h-[290px] w-full overflow-hidden">
        {/* Loader overlay */}
        {isImageLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Loader2 className="h-10 w-10 animate-spin text-white" />
          </div>
        )}

        <Image
          src={image}
          alt={product.name || product.sku || 'Product'}
          fill
          className={`object-contain transition-opacity duration-500 ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          priority={false}
          onLoad={() => setIsImageLoading(false)}
        />
      </div>
    </div>
  );
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (api && isCarouselOpen) {
      const targetIndex = products?.findIndex((item) => item.sku === product.sku) ?? 0;
      // Scroll after next tick to ensure layout is ready
      setTimeout(() => {
        api?.scrollTo(targetIndex, true); // smooth scroll
        setActiveIndex(targetIndex);
      }, 0);
    }
  }, [api, isCarouselOpen]);
  useEffect(() => {
    if (!api) return;

    const update = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    // Initial
    update();
    api.on('select', update);

    return () => {
      api.off('select', update);
    };
  }, [api]);
  return (
    <div
      key={product.id}
      className="relative flex flex-col justify-between overflow-hidden shadow-lg"
    >
      {openModalOnClick ? (
        <Dialog open={isCarouselOpen} onOpenChange={setIsCarouselOpen}>
          <DialogTrigger asChild>{imageBlock}</DialogTrigger>
          <DialogContent className="flex h-[50vh] flex-col rounded-2xl bg-white p-6 text-black lg:h-[90vh] lg:max-w-[80vw]">
            <DialogTitle className="mb-4 text-center text-xl font-semibold">
              {products?.[activeIndex]?.sku} - {parse(products?.[activeIndex]?.name ?? '')}
            </DialogTitle>

            {/* Carousel wrapper */}
            <div className="flex w-full flex-col">
              <Carousel
                setApi={setApi} // 👈 connect to API
                className="h-full w-full"
              >
                <CarouselContent className="h-full">
                  {products?.map((img, idx) => (
                    <CarouselItem key={idx} className="flex h-full items-center justify-center">
                      <div className="relative h-[25vh] w-full lg:h-[calc(90vh-200px)]">
                        <Image
                          src={img.images?.[0]?.src || '/images/products/placeholder.png'}
                          alt={product.name || product.sku || 'Product'}
                          fill
                          className={`object-contain transition-opacity duration-500 ${
                            isImageLoading ? 'opacity-0' : 'opacity-100'
                          }`}
                          onLoad={() => setIsImageLoading(false)}
                        />
                        {isImageLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <Loader2 className="h-10 w-10 animate-spin text-black" />
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 hidden xl:flex" />
                <CarouselNext className="right-2 hidden xl:flex" />
              </Carousel>
            </div>

            {/* Request price button */}
            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => setOpen(true)}
                variant="metallic"
                className="flex h-12 items-center gap-2 rounded-[15px] px-6 py-4 text-sm font-normal"
              >
                <span className="px-2 text-xs font-normal lg:text-base">Request Price</span>
                <LinkIconInactive className="h-[30px]! w-[30px]!" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Link href={`/product/${product.slug}`}>{imageBlock}</Link>
      )}

      {/* SKU badge */}
      {product.sku && (
        <div className="absolute top-4 left-4 z-20 rounded-2xl bg-black/40 px-3 py-1">
          <span className="text-[20px] font-medium text-white">SKU: {product.sku}</span>
        </div>
      )}
      {variant === 2 && (
        <Link
          className="absolute top-4 right-4 z-10"
          target="_blank"
          href={
            product.new3DLink ??
            product.meta_data.find((item) => item.key === '3d_link')?.value ??
            '/'
          }
        >
          <Button className="[animation:gradient_6s_ease_infinite] cursor-pointer overflow-hidden rounded-[15px] bg-gradient-to-r from-black via-red-600 to-black bg-[length:200%_200%] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(0,0,0,0.7)] transition-all duration-300 ease-in-out active:scale-95 lg:text-lg">
            <span className="relative z-10 w-full">Design In 3D</span>
          </Button>
        </Link>
      )}

      {/* Bottom section */}
      <div
        className={`absolute bottom-4 z-20 ${variant === 1 ? 'right-4 left-4 flex items-center justify-between' : 'w-full'}`}
      >
        {/* Left Column */}
        {variant === 1 ? (
          <div className="flex flex-col">
            <span className="text-sm text-white lg:text-xl">Starting At:</span>
            <span className="text-2xl font-medium text-white lg:text-2xl">
              {price
                ? price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                : null}
            </span>
          </div>
        ) : null}
        {/* Button Column */}
        {
          variant === 1 ? (
            <Link
              target="_blank"
              href={
                product.new3DLink ??
                product.meta_data.find((item) => item.key === '3d_link')?.value ??
                '/'
              }
            >
              <Button
                variant="metallic"
                className="flex h-[48px] items-center gap-2 rounded-[15px] bg-[var(--accent)] px-6 py-4 text-sm font-normal hover:bg-[var(--accent-dark)] lg:h-[56px]"
              >
                <span className="px-2 text-xs font-normal lg:text-xl">Build</span>
                <LinkIconInactive className="h-[32px]! w-[32px]!" />
              </Button>
            </Link>
          ) : null
          // <div className="w-full">
          //   <Link
          //     target="_blank"
          //     href={product.meta_data.find((item) => item.key === '3d_link')?.value ?? '/'}
          //   >
          //     <Button
          //       variant="metallic"
          //       className="flex h-10 w-full items-center justify-between gap-2 rounded-[15px] px-6 py-6 text-center text-sm font-normal"
          //     >
          //       <span className="px-2 text-xs font-normal lg:text-base">Build</span>
          //       <BuildingIcon className="h-[40px]! w-[40px]!" />
          //     </Button>
          //   </Link>
          // </div>
        }
        {variant === 2 || open ? (
          <div className="flex w-full flex-row items-center justify-evenly">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="metallic"
                  className="flex h-12 items-center gap-2 rounded-[15px] px-6 py-4 text-sm font-normal"
                >
                  <span className="px-2 text-xs font-normal lg:text-base">Request Price</span>
                  <LinkIconInactive className="h-[40px]! w-[40px]!" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl bg-white text-black">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">Get a Quote</DialogTitle>
                </DialogHeader>
                <QuoteFormSmall2
                  selectedProductId={isCarouselOpen ? products?.[activeIndex]?.sku : product.sku}
                  products={products}
                  leadSourceName={leadSourceName ?? ''}
                />
              </DialogContent>
            </Dialog>
            <Link href={TELEPHONE_NUMBER.href}>
              <Button
                variant="metallicBlack"
                className="flex h-12 items-center gap-2 rounded-[15px] px-6 py-4 text-sm font-normal"
              >
                <span className="px-2 text-xs font-normal lg:text-base">
                  +1 {TELEPHONE_NUMBER.formatted}
                </span>
                <CallActiveIcon className="h-[30px]! w-[30px]!" />
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
