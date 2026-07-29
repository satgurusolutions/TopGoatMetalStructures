'use client';

import QuoteFormSmall from '@/components/shared/quote-form/quote-form-small';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import LinkIconInactive from '@/icons/link-inactive';
import { useState } from 'react';
import FinanceCarousel from './finance-carousel';

export default function Finance() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 text-white xl:px-0 [@media(width=1280px)]:px-4">
      <div className="grid grid-cols-1 justify-center xl:grid-cols-2 xl:gap-4">
        {/* Left Column */}
        <div className="h-full">
          <h2 className="text-[32px] font-bold lg:text-5xl">
            Competitive Financing{' '}
            <span className="text-accent leading-[1.2]">Options Available</span>
          </h2>
          <div className="py-6">
            <span className="text-sm leading-snug text-white lg:text-xl">
              Make your dream steel building a reality with fast, hassle-free financing options.
              Whether you&apos;re planning a garage, carport, barn, RV cover, or utility
              building,{' '}
            </span>
          </div>
          <div>
            <span className="text-sm leading-snug text-white lg:text-xl">
              Make your dream steel building a reality with fast, hassle-free financing options.
              Whether you&apos;re planning a garage, carport, barn, RV cover, or utility
              building,{' '}
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="pt-8 xl:pt-0">
          <FinanceCarousel />

          <div className="flex justify-center pt-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant={'metallic'}
                  className="flex h-[64px] w-full items-center justify-between gap-2 rounded-full px-6 py-6 text-xs font-normal lg:text-base"
                >
                  <span className="pl-2">GET STARTED</span>
                  <LinkIconInactive className="h-[40px]! w-[40px]! lg:h-[50px]! lg:w-[50px]!" />
                </Button>
              </DialogTrigger>

              <DialogContent className="max-h-[100vh] max-w-3xl overflow-y-auto rounded-none bg-white text-black lg:rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Contact Us About Financing
                  </DialogTitle>
                </DialogHeader>
                <QuoteFormSmall leadSourceName="Website Finance Form" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
