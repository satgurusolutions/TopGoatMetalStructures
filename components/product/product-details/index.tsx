'use client';

import { QuoteFormSmall2, RichText } from '@/components/shared';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { colorOptions } from '@/configs/colours';
import { TELEPHONE_NUMBER } from '@/configs/navigation.config';
import { FreeDeliveryIcon, PriceIcon, ServiceReplacementIcon } from '@/icons';
import WarrantyPolicy from '@/icons/warranty-policy';
import { Product } from '@/types';
import Image from 'next/image';
// import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetail({
  product,
  products,
}: Readonly<{ product: Product; products: Product[] }>) {
  const price = parseFloat(product.price) || 0;
  // if (product.sku == 'WB203' || product.sku == 'WB204') {
  //   product.images[0] = product.images?.[3] || product.images[0];
  // }
  const image = product.images?.[0]?.src || '/images/products/placeholder.png';
  const [selected, setSelected] = useState(image);
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 xl:grid-cols-[60%_40%] xl:px-0 [@media(width=1280px)]:px-4">
      {/* LEFT STICKY GALLERY */}
      <div className="h-[225px] xl:sticky xl:top-32 xl:h-[420px]">
        <div className="flex h-full gap-4">
          {/* Thumbnail List (Left Side) */}
          {product?.images?.length > 1 && (
            <div className="flex flex-col gap-3 overflow-y-auto p-1">
              {(product?.images?.length > 3 ? product.images?.slice(0, 3) : product?.images)?.map(
                (img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setSelected(img.src)}
                    className={`relative aspect-square h-16 w-16 cursor-pointer overflow-hidden rounded-[10px] border transition-all duration-300 xl:h-[130px] xl:w-[160px] xl:rounded-3xl ${
                      selected === img.src
                        ? 'border-accent scale-105 shadow-lg'
                        : 'border-transparent hover:scale-105 hover:opacity-90'
                    }`}
                  >
                    <Image
                      src={img?.src}
                      alt={`Thumb ${i}`}
                      fill
                      className="inset-0 object-cover"
                    />
                  </button>
                ),
              )}
            </div>
          )}

          {/* Main Image (Right Side) */}
          {/* <div className="relative h-[672px] flex-1 rounded-2xl">
            <Image
              src={selected}
              alt="Selected Garage"
              fill
              className="rounded-2xl transition-all duration-500"
            />
          </div> */}
          <div className="relative h-[225px] flex-1 overflow-hidden rounded-4xl border border-white/20 bg-white/5 shadow-lg backdrop-blur-md xl:h-[420px]">
            {/* Blurred Background */}
            <Image
              src={selected}
              alt="Blurred background"
              fill
              className="absolute inset-0 scale-100 object-cover blur-2xl"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />

            {/* Main Image with fade+scale transition */}
            <Image
              key={selected} // ensures animation runs when selected changes
              src={selected}
              alt="Selected Garage"
              fill
              className="relative z-10 animate-[fadeInScale_0.5s_ease-out] [mask-image:radial-gradient(circle,white_90%,transparent_100%)] object-cover drop-shadow-2xl transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="">
        {/* Title + Rating */}
        <div className="border-b border-[#D2D2D5] pb-8">
          <p className="pb-4 text-xl font-medium text-black">
            SKU: <span className="text-accent">{product.sku}</span>
          </p>
          <h1 className="text-[32px] font-bold text-black xl:text-5xl">{product.name}</h1>

          {/* <div className="flex flex-col gap-2 pt-6 lg:flex-row lg:items-center">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <StarIcon key={item} />
              ))}
              <span className="ml-2 text-xl">4.8</span>
              <span className="mx-1 text-xl">|</span>
              <span className="text-xl">194 Ratings</span>
              <span className="mx-1 text-xl lg:hidden">|</span>
            </div>

            <div className="mt-2 flex lg:mt-0">
              <AvatarList sizeClass="h-[40px] w-[40px]" />
            </div>
          </div> */}
        </div>
        {/* Price */}
        <div className="border-b border-[#D2D2D5] py-8 text-2xl text-black xl:text-4xl">
          <span className="font-medium">Starting At:</span>{' '}
          <span className="text-accent font-medium">
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
          <p className="pt-2 text-base xl:text-xl">
            Prices varies by State, Location and customization. Call us at{' '}
            <a href={TELEPHONE_NUMBER.href} className="text-accent">
              {TELEPHONE_NUMBER.formatted}
            </a>{' '}
            for latest low price.
          </p>
        </div>
        {/* <div className="border-b border-[#D2D2D5] py-8 text-black">
          <span className="text-2xl font-medium xl:text-4xl">Building</span>{' '}
          <span className="text-accent text-2xl font-medium xl:text-4xl">Dimension</span>
          <div className="grid w-full grid-cols-3 divide-x divide-[#D2D2D5] pt-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-12 items-center justify-center xl:h-20">
                <HouseWidthIcon className="h-12 xl:h-20" />
              </div>
              <div className="pt-2 text-base xl:text-xl">
                Width: {product?.meta_data?.find((item) => item.key === 'width')?.value}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 items-center justify-center xl:h-20">
                <HouseLengthIcon className="h-12 xl:h-20" />
              </div>
              <div className="pt-2 text-base xl:text-xl">
                Length: {product?.meta_data?.find((item) => item.key === 'length')?.value}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 items-start justify-center xl:h-20">
                <HouseHeightIcon className="h-10 xl:mb-0 xl:h-16" />
              </div>
              <div className="pt-2 text-base xl:text-xl">
                Height: {product?.meta_data?.find((item) => item.key === 'height')?.value}
              </div>
            </div>
          </div>
        </div> */}
        {/* Buttons */}
        <div className="flex w-full flex-wrap gap-4 border-b border-[#D2D2D5] py-8">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="metallic"
                className="flex h-14 w-full flex-1 items-center justify-between gap-2 rounded-[15px] py-6 text-xs font-medium text-white uppercase shadow-md [background:linear-gradient(180deg,var(--accent)_0%,color-mix(in_srgb,var(--accent)_70%,black)_100%)] xl:h-[66px] xl:text-sm"
              >
                Get Your Price{' '}
                <span>
                  <PriceIcon className="h-[40px]! w-[40px]! xl:h-[50px]! xl:w-[50px]! [@media(width=1280px)]:h-[40px]! [@media(width=1280px)]:w-[40px]!" />
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl bg-white text-black">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Get a Quote</DialogTitle>
              </DialogHeader>
              <QuoteFormSmall2
                selectedProductId={product.sku}
                products={products}
                leadSourceName={'Website Product Detail'}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div className="border-b border-[#D2D2D5] py-8">
          <div className="grid w-full grid-cols-3 divide-x divide-[#D2D2D5] text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-12 items-center justify-center xl:h-20">
                <ServiceReplacementIcon className="h-12 w-12 xl:h-20 xl:w-20" />
              </div>
              <div className="pt-2 text-base xl:text-xl">
                Service
                <br /> Replacement
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 items-center justify-center xl:h-20">
                <FreeDeliveryIcon className="h-12 w-12 xl:h-20 xl:w-20" />
              </div>
              <div className="pt-2 text-base xl:text-xl">
                Free <br />
                Delivery
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 items-center justify-center xl:h-20">
                <WarrantyPolicy className="h-12 w-12 xl:h-20 xl:w-20" />
              </div>
              <div className="pt-2 text-base xl:text-xl">
                Warranty
                <br /> Policy
              </div>
            </div>
          </div>
        </div>
        {/* Accordion with Background */}
        <div className="relative mt-8 p-4">
          {/* Backgrounds */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/images/designer/texture_optimized.webp"
              fill
              alt="Background Texture"
              priority
              className="absolute inset-0 z-0 rounded-4xl bg-black object-cover"
            />
            <Image
              src="/images/finances/ellipse.png"
              width={765}
              height={766}
              alt="Background ellipse"
              priority
              className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Accordion */}
          <Accordion
            type="multiple"
            defaultValue={['dimensions', 'colors']} // all open by default
            className="relative rounded-2xl text-white shadow-xl"
          >
            <AccordionItem value="dimensions" className="rounded-3xl border-none bg-white/20">
              <AccordionTrigger className="px-4 py-4 text-base xl:text-2xl">
                Building Details
              </AccordionTrigger>
              <AccordionContent className="px-4 py-4">
                <RichText html={product.short_description} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="colors" className="my-4 rounded-3xl border-none bg-white/20">
              <AccordionTrigger className="px-4 py-4 text-base xl:text-2xl">
                Building Colors
              </AccordionTrigger>
              <AccordionContent className="px-4 py-4">
                <div className="relative w-full">
                  {/* Desktop Grid */}
                  <div className="hidden grid-cols-5 gap-x-2 gap-y-2 text-center sm:grid">
                    {colorOptions.map(({ name, color, imgUrl }) => (
                      <div key={color} className="flex flex-col items-center gap-2">
                        <button
                          name={`color-${name}`}
                          // onClick={() => onChangeColor(imposingImagePath)}
                          className="h-8 w-8 cursor-pointer rounded-[15px] border border-white bg-contain bg-center bg-no-repeat"
                          style={{
                            backgroundColor: imgUrl ? 'transparent' : color,
                            backgroundImage: `url(${imgUrl ?? '/images/colorpalete.png'})`,
                          }}
                        />
                        <span className="text-xs text-white">{name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Scrollable */}
                  <div className="scrollbar-none overflow-x-auto pr-10 sm:hidden">
                    <div className="flex gap-x-4 text-center">
                      {colorOptions.map(({ name, color, imgUrl }) => (
                        <div key={color} className="flex min-w-[60px] flex-col items-center gap-2">
                          <button
                            name={`color-${name}`}
                            // onClick={() => onChangeColor(imposingImagePath)}
                            className="h-8 w-8 cursor-pointer rounded-[15px] border border-white bg-contain bg-center bg-no-repeat"
                            style={{
                              backgroundColor: imgUrl ? 'transparent' : color,
                              backgroundImage: `url(${imgUrl ?? '/images/colorpalete.png'})`,
                            }}
                          />
                          <span className="text-xs text-white">{name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Gradient overlay for right side fade */}
                    <div className="pointer-events-none absolute top-0 right-0 h-full w-14 bg-gradient-to-l from-[white/20] to-transparent" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
