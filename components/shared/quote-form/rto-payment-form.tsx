'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import LinkIconInactive from '@/icons/link-inactive';
import { useState } from 'react';
import ContactUsForm from './contact-us-form';

export default function RTOPaymentsForm() {
  const [buildingPrice, setBuildingPrice] = useState('');
  const [salesTax, setSalesTax] = useState('');
  const [calculated, setCalculated] = useState(0);
  const [isGetQuoteOpen, setIsGetQuoteOpen] = useState(false);

  const handleCalculate = () => {
    const price = Math.min(Math.max(Number(buildingPrice) || 0, 0), 15000);
    const taxPercent = Math.min(Math.max(Number(salesTax) || 0, 0), 10);
    const total = price + (price * taxPercent) / 100;

    setBuildingPrice(price ? String(price) : '');
    setSalesTax(taxPercent ? String(taxPercent) : '');
    setCalculated(total * 0.15);
  };

  return (
    <>
      <Dialog open={isGetQuoteOpen} onOpenChange={setIsGetQuoteOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[18px] border border-[#e7b53c]/25 bg-[#111113] p-5 text-[#f4f1ea] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] sm:max-w-lg sm:p-6">
          <DialogHeader>
            <DialogTitle className="font-oswald text-2xl font-bold tracking-[0.03em] text-[#f4f1ea] uppercase">
              Apply Now
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2">
            <ContactUsForm leadSourceName="Website Apply Now Finance Form Popup" />
          </div>
        </DialogContent>
      </Dialog>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCalculate();
        }}
        className="mx-auto rounded-[18px] border border-[#e7b53c]/20 bg-[#111113] p-5 text-[#f4f1ea] shadow-[0_26px_70px_-30px_rgba(0,0,0,0.9)] sm:p-7 lg:p-8"
      >
        <div className="mb-6">
          <span className="font-oswald inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#d7a126] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#d7a126]" />
            Payment Estimate
          </span>

          <p className="mt-4 text-sm leading-6 text-[#aaa397] sm:text-base">
            Enter your building price and local sales tax to calculate an estimated 15% down
            payment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col">
            <span className="font-oswald mb-2 text-[11px] font-semibold tracking-[0.08em] text-[#f4f1ea] uppercase">
              Building Price
            </span>

            <div className="relative">
              <span className="absolute top-1/2 left-4 -translate-y-1/2 font-semibold text-[#a87a1c]">
                $
              </span>

              <Input
                type="number"
                min="0"
                max="15000"
                step="100"
                value={buildingPrice}
                onChange={(event) => {
                  const rawValue = event.target.value;

                  if (rawValue === '') {
                    setBuildingPrice('');
                    return;
                  }

                  const value = Math.min(Math.max(Number(rawValue) || 0, 0), 15000);

                  setBuildingPrice(String(value));
                }}
                placeholder="12,000"
                className="h-14 rounded-[10px] border border-white/10 bg-[#f4f1ea] pr-4 pl-9 text-base text-[#fff] shadow-none outline-none placeholder:text-[#777168] focus-visible:border-[#e7b53c] focus-visible:ring-2 focus-visible:ring-[#e7b53c]/20"
              />
            </div>

            <p className="mt-2 text-[11px] text-[#7f796f]">Maximum amount is $15,000</p>
          </label>

          <label className="flex flex-col">
            <span className="font-oswald mb-2 text-[11px] font-semibold tracking-[0.08em] text-[#f4f1ea] uppercase">
              Sales Tax
            </span>

            <div className="relative">
              <Input
                type="number"
                min="0"
                max="10"
                step="0.1"
                value={salesTax}
                onChange={(event) => {
                  const rawValue = event.target.value;

                  if (rawValue === '') {
                    setSalesTax('');
                    return;
                  }

                  const value = Math.min(Math.max(Number(rawValue) || 0, 0), 10);

                  setSalesTax(String(value));
                }}
                placeholder="6"
                className="h-14 rounded-[10px] border border-white/10 bg-[#f4f1ea] pr-10 pl-4 text-base text-[#fff] shadow-none outline-none placeholder:text-[#777168] focus-visible:border-[#e7b53c] focus-visible:ring-2 focus-visible:ring-[#e7b53c]/20"
              />

              <span className="absolute top-1/2 right-4 -translate-y-1/2 font-semibold text-[#a87a1c]">
                %
              </span>
            </div>

            <p className="mt-2 text-[11px] text-[#7f796f]">Maximum tax is 10%</p>
          </label>
        </div>

        <Button
          type="submit"
          className="font-oswald mt-6 flex h-[56px] w-full items-center justify-between rounded-[10px] bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-5 text-sm font-bold tracking-[0.04em] text-[#17130a] uppercase shadow-[0_18px_40px_-18px_rgba(231,181,60,0.6)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
        >
          Calculate Payment
          <LinkIconInactive className="h-10! w-10! lg:h-11! lg:w-11!" />
        </Button>

        <div
          className="mt-6 rounded-[14px] border border-[#e7b53c]/15 bg-[#0b0b0d] p-6 text-center"
          aria-live="polite"
        >
          <p className="font-oswald text-[11px] font-semibold tracking-[0.16em] text-[#8f887d] uppercase">
            Estimated down payment
          </p>

          <p className="font-anton mt-3 text-[52px] leading-none font-normal tracking-[-0.02em] text-[#e7b53c] sm:text-[60px]">
            $
            {calculated.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>

          <p className="mt-3 text-xs leading-5 text-[#777168]">
            15% of the building price plus sales tax
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => setIsGetQuoteOpen(true)}
          className="font-oswald mt-6 flex h-[56px] w-full items-center justify-between rounded-[10px] bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-5 text-sm font-bold tracking-[0.04em] text-[#17130a] uppercase shadow-[0_18px_40px_-18px_rgba(231,181,60,0.6)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
        >
          Apply Now
          <LinkIconInactive className="h-10! w-10! lg:h-11! lg:w-11!" />
        </Button>
      </form>
    </>
  );
}
