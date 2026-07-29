'use client';
import { QuoteForm, RichText } from '@/components/shared';
import { FC } from 'react';
import parse from 'html-react-parser';
import { cn } from '@/lib/utils';

const GetAQuote: FC<{
  title?: string;
  description?: string;
  highlight?: string;
  isReversed?: boolean;
}> = ({ title, description, highlight, isReversed = false }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
      <h1 className="pb-4 text-center text-[32px] font-bold lg:text-6xl">
        {parse(title ?? '')} <span className="text-accent">{highlight}</span>
      </h1>
      <div
        className={cn(
          'flex flex-col gap-2', // spacing between blocks
          isReversed && 'flex-col-reverse',
        )}
      >
        <div className="rounded-3xl border-[10px] border-[#E9E9EA99] shadow-[4px,4px,12px,0px,#0000001A]">
          <div className="rounded-3xl bg-white p-4">
            <div className="flex h-[242px] items-center justify-center rounded-[40px] bg-[#FCF8F8] lg:h-[329px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                //   preload="auto"
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              >
                <source src="/videos/products/main-fixed.webm" type="video/webm" />
                <source src="/videos/products/main.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mx-auto max-w-7xl pt-4 text-center text-base leading-[160%] text-black lg:text-xl [@media(width=1280px)]:px-4">
              <RichText html={description || ''} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-[10px] border-[#E9E9EA99] shadow-[4px,4px,12px,0px,#0000001A]">
          <div className="rounded-3xl bg-white p-4 py-6">
            <h1 className="pb-4 text-center text-[32px] font-bold text-black uppercase">
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
