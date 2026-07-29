'use client';
import { QuoteForm } from '@/components/shared';
import Image from 'next/image';

const GetAQuote = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
      <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-1 md:items-start">
        <div>
          <h2 className="text-center text-3xl font-bold text-black md:text-start xl:text-5xl">
            Discounts on <span className="text-accent">Metal Buildings</span>
          </h2>
        </div>
      </div>

      <div className="rounded-3xl border-[10px] border-[#E9E9EA99] shadow-[4px,4px,12px,0px,#0000001A]">
        <div className="relative rounded-3xl bg-white p-4 py-6">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/images/designer/texture_optimized.webp"
              fill
              alt="Background Texture"
              priority
              className="absolute inset-0 z-0 rounded-4xl bg-black object-contain"
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
          <div className="relative z-20 text-white">
            <h1 className="pb-4 text-center text-[32px] font-bold text-white uppercase">
              Get a Quote
            </h1>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
