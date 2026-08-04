'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import LinkIconInactive from '@/icons/link-inactive';

const WhyChoose: FC<{
  description1?: string;
  description2?: string;
  description3?: string;
}> = ({ description1, description2, description3 }) => {
  return (
    <section className="relative mx-auto w-full overflow-hidden py-12 xl:py-[120px]">
      {/* --- Background Image using Next/Image --- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/why-choose-bg.png" // replace with your actual image path
          alt="Top Goat Metal Structures background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent"></div>
      </div>

      {/* --- Content --- */}
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 px-4 text-white lg:flex-row xl:px-0 [@media(width=1280px)]:px-4">
        {/* LEFT COLUMN - Title */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-center text-[32px] leading-tight font-bold text-white lg:text-[56px] xl:text-start">
            Why <span className="text-primary">Top Goat</span>
            <br />
            Buildings?
          </h2>
        </div>

        {/* RIGHT COLUMN - Description + Button */}
        <div className="w-full text-white lg:w-1/2">
          <div className="space-y-5 text-center text-base leading-relaxed text-white/90 lg:text-lg xl:text-start">
            <p>
              {description1 ||
                `Top Goat Metal Structures is a supplier of high-quality metal buildings in the United States,
              delivering top-notch service to every customer. Founded by a combat veteran who
              understands the importance of attention to detail, our company ensures that each
              customer receives a product tailored precisely to their specifications and built to
              last.`}
            </p>
            <p>
              {description2 ||
                `Our commitment to crafting exceptional metal buildings with care and precision sets
              Top Goat Metal Structures apart as a leader in the industry.`}
            </p>
            <p>
              {description3 ||
                ` Whether you need a simple carport or a complex custom structure, we are equipped to
              meet your needs with the highest standards of excellence.`}
            </p>
          </div>

          <div className="mt-6 xl:mt-8">
            <Link href="/about-us">
              <Button
                variant="metallic"
                className="flex h-[64px] w-full items-center justify-between gap-2 rounded-full px-6 py-6 text-sm font-normal uppercase xl:w-fit"
              >
                <span className="px-2 text-xs font-bold lg:text-sm">More About Top Goat</span>
                <LinkIconInactive className="h-[50px]! w-[50px]!" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
