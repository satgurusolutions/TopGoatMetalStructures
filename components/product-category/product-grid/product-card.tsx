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
import {
  CallSpeakerIcon,
  // HouseHeightIcon,
  // HouseLengthIcon,
  // HouseWidthIcon,
  LinkActiveIcon,
} from '@/icons';
import LinkIconInactive from '@/icons/link-inactive';
import { Product } from '@/types';
import parse from 'html-react-parser';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import { Warehouse, ArrowLeftRight, ArrowUpDown, Ruler } from 'lucide-react';

const ProductCard: FC<{
  product: Product;
  variant?: number; // Test this for marketing pages
  products?: Product[];
  leadSourceName?: string;
  openModalOnClick?: boolean;
}> = ({ product, products, leadSourceName, openModalOnClick }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // const price = parseFloat(product.price) || 0;
  const image = product.images?.[0]?.src || '/images/products/placeholder.png';

  // ---- Carousel syncing logic ----
  useEffect(() => {
    if (api && isCarouselOpen) {
      const targetIndex = products?.findIndex((item) => item.sku === product.sku) ?? 0;
      setTimeout(() => {
        api?.scrollTo(targetIndex, true);
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

  // ---- Image Block ----
  const imageBlock = (
    <div className="relative h-[319px] w-full overflow-hidden rounded-xl">
      {isImageLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <Loader2 className="h-8 w-8 animate-spin text-black" />
        </div>
      )}
      <Image
        src={image}
        alt={product.name || product.sku || 'Product image'}
        fill
        className={`object-cover object-center transition-opacity duration-500 ${
          isImageLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsImageLoading(false)}
      />
    </div>
  );

  return (
    <div className="group flex flex-col gap-4 overflow-hidden border-none bg-transparent p-0 shadow-none">
      {/* IMAGE */}
      <div className="relative">
        {/* <Link href={`/product/${product.slug}`}>{imageBlock}</Link> */}
        {/* <Link
          target="_blank"
          href={
            product.new3DLink ??
            product.meta_data.find((item) => item.key === 'customize_button_link')?.value ??
            '/'
          }
          rel="noopener noreferrer"
          className="absolute top-7 left-3 z-10 block cursor-pointer"
        >
          <Image
            src="/images/design-in-3d-btn.png"
            alt="Design in 3D"
            width={220}
            height={60}
            className="w-[150px] cursor-pointer transition-transform hover:scale-95"
          />
        </Link> */}
      </div>
      {openModalOnClick ? (
        <Dialog open={isCarouselOpen} onOpenChange={setIsCarouselOpen}>
          <DialogTrigger asChild>{imageBlock}</DialogTrigger>
          <DialogContent className="flex h-[50vh] flex-col rounded-2xl bg-white p-6 text-black lg:h-[90vh] lg:max-w-[80vw]">
            <DialogTitle className="mb-4 text-center text-xl font-semibold">
              {products?.[activeIndex]?.sku} - {parse(products?.[activeIndex]?.name ?? '')}
            </DialogTitle>
            <div className="flex w-full flex-col">
              <Carousel setApi={setApi} className="h-full w-full">
                <CarouselContent className="h-full">
                  {products?.map((img, idx) => (
                    <CarouselItem key={idx} className="flex h-full items-center justify-center">
                      <div className="relative h-[25vh] w-full lg:h-[calc(90vh-200px)]">
                        <Image
                          src={img.images?.[0]?.src || '/images/products/placeholder.png'}
                          alt={product.name || product.sku || 'Product'}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 hidden xl:flex" />
                <CarouselNext className="right-2 hidden xl:flex" />
              </Carousel>
            </div>
            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => setOpen(true)}
                className="flex h-12 items-center gap-2 rounded-full px-6 py-4 text-sm font-normal text-white"
              >
                <span className="px-2 text-xs font-normal lg:text-base">Request Price</span>
                <LinkIconInactive className="h-[30px]! w-[30px]!" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <div className="relative">
          <Link href={`/product/${product.slug}`}>
            {imageBlock}
            {product.sku && (
              <div className="absolute top-4 left-4 z-20 rounded-2xl bg-black/40 px-3 py-1">
                <span className="text-[20px] font-medium text-white">SKU: {product.sku}</span>
              </div>
            )}
          </Link>
          {/* <Link
            target="_blank"
            href={
              product.new3DLink ??
              product.meta_data.find((item) => item.key === 'customize_button_link')?.value ??
              '/'
            }
            rel="noopener noreferrer"
            className="absolute top-3 left-3 z-10 block cursor-pointer"
          >
            <Image
              src="/images/design-in-3d-btn.png"
              alt="Design in 3D"
              width={220}
              height={60}
              className="w-[150px] cursor-pointer transition-transform hover:scale-95"
            />
          </Link> */}
        </div>
      )}

      {/* CARD CONTENT */}
      <div className="mb-2 rounded-xl bg-white p-6 shadow-[18px_21px_80px_0px_rgba(0,0,0,0.05)] transition-all duration-300">
        {/* Product Name + Address line-clamp-1*/}
        <div className="mb-3 text-[24px] leading-[120%] font-medium">
          {parse(product.name ?? '')}
        </div>
        <div className="flex items-center justify-between pt-2 pb-3 text-center">
          <div>
            {/* <HouseLengthIcon /> */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
            >
              <g
                stroke="currentColor"
                className="text-[#E3A300]"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Building */}
                <path d="M13 27L31 11L50 27" />
                <path d="M17 24V43H47V24" />
                <path d="M11 27H52" />

                {/* Roof detail */}
                <path d="M22 19L31 12L40 19" />

                {/* Garage */}
                <rect x="27" y="30" width="14" height="13" rx="0.5" />
                <path d="M27 34H41" />
                <path d="M27 38H41" />

                {/* Door */}
                <rect x="19" y="31" width="6" height="12" />

                {/* Window */}
                <rect x="29" y="19" width="6" height="6" />
                <path d="M32 19V25" />
                <path d="M29 22H35" />

                <path d="M15 44H49" />

                {/* Length - diagonal */}
                <path d="M17 55L31 47" />

                {/* Start arrow */}
                <path d="M17 55L19 50" />
                <path d="M17 55L22 55" />

                {/* End arrow */}
                <path d="M31 47L26 47" />
                <path d="M31 47L29 52" />
              </g>
            </svg>
            <p className="pt-2 text-[16px] font-normal">Length</p>
            <p className="text-[18px] font-medium text-[#4A4C56]">
              {' '}
              {/* {product.meta_data?.find((a) => a.key === 'length')?.value ?? '—'}
              &apos; */}
              {product.dimensions?.length ? `${product.dimensions.length}'` : '—'}
            </p>
          </div>
          <div>
            {/* <HouseWidthIcon /> */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
            >
              <g
                stroke="currentColor"
                className="text-[#E3A300]"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Building */}
                <path d="M13 27L31 11L50 27" />
                <path d="M17 24V43H47V24" />
                <path d="M11 27H52" />

                {/* Roof detail */}
                <path d="M22 19L31 12L40 19" />

                {/* Garage */}
                <rect x="27" y="30" width="14" height="13" rx="0.5" />
                <path d="M27 34H41" />
                <path d="M27 38H41" />

                {/* Door */}
                <rect x="19" y="31" width="6" height="12" />

                {/* Window */}
                <rect x="29" y="19" width="6" height="6" />
                <path d="M32 19V25" />
                <path d="M29 22H35" />

                <path d="M15 44H49" />

                {/* Width */}
                <path d="M17 50H47" />

                <path d="M17 50L21 47" />
                <path d="M17 50L21 53" />

                <path d="M47 50L43 47" />
                <path d="M47 50L43 53" />
              </g>
            </svg>
            <p className="pt-2 text-[16px] font-normal">Width</p>
            <p className="text-[18px] font-medium text-[#4A4C56]">
              {' '}
              {/* {product.dimensions?.find((a) => a.key === 'width')?.value ?? '—'}
              &apos; */}
              {product.dimensions?.width ? `${product.dimensions.width}'` : '—'}
            </p>
          </div>
          <div>
            {/* <HouseHeightIcon /> */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
            >
              <g
                stroke="currentColor"
                className="text-[#E3A300]"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Building */}
                <path d="M13 27L31 11L50 27" />
                <path d="M17 24V43H47V24" />
                <path d="M11 27H52" />

                {/* Roof detail */}
                <path d="M22 19L31 12L40 19" />

                {/* Garage */}
                <rect x="27" y="30" width="14" height="13" rx="0.5" />
                <path d="M27 34H41" />
                <path d="M27 38H41" />

                {/* Door */}
                <rect x="19" y="31" width="6" height="12" />

                {/* Window */}
                <rect x="29" y="19" width="6" height="6" />
                <path d="M32 19V25" />
                <path d="M29 22H35" />

                <path d="M15 44H49" />

                {/* Height */}
                <path d="M56 18V44" />

                {/* Top arrow */}
                <path d="M56 18L53 22" />
                <path d="M56 18L59 22" />

                {/* Bottom arrow */}
                <path d="M56 44L53 40" />
                <path d="M56 44L59 40" />
              </g>
            </svg>
            <p className="pt-2 text-[16px] font-normal">Height</p>
            <p className="text-[18px] font-medium text-[#4A4C56]">
              {' '}
              {/* {product.meta_data?.find((a) => a.key === 'height')?.value ?? '—'}
              &apos; */}
              {product.dimensions?.height ? `${product.dimensions.height}'` : '—'}
            </p>
          </div>
        </div>

        {/* Price Row */}
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-1">
          <Link href={TELEPHONE_NUMBER.href}>
            <Button className="bg-primary hover:bg-primary/90 h-12 w-full cursor-pointer rounded-[38px] px-8 text-base text-[16px] text-white">
              <CallSpeakerIcon className="h-5! w-5!" />
              {TELEPHONE_NUMBER.formatted}
            </Button>
          </Link>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant={'metallicBlack'}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-normal text-white sm:w-auto md:w-fit"
              >
                <LinkActiveIcon className="h-6! w-6!" />
                <span className="pr-2 text-[16px] font-normal lg:text-base">Request Price</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl bg-white text-black">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Get a Quote</DialogTitle>
              </DialogHeader>
              <QuoteFormSmall2
                selectedProductId={product.sku}
                products={products}
                leadSourceName={leadSourceName ?? ''}
              />
            </DialogContent>
          </Dialog>
        </div>
        {/* Request Quote / Build Buttons */}
        {/* <div className="mt-4 flex justify-between gap-3 pb-4">
          <p className="text-2xl font-semibold text-black">Starting At:</p>
          <p className="pr-2 text-center text-2xl font-semibold text-black">
            {price
              ? price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
              : '—'}
          </p>
        </div> */}

        {/* {product.short_description && (
          <div className="pt-2 text-[16px] leading-[120%] font-normal text-[#4A4C56]">
            SKU: {product.sku}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;
