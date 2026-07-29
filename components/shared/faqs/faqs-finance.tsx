'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import AccordionIcons from './accordion-animated-icons';
import { useState } from 'react';
const faqs = [
  {
    id: 'finance-time-consuming',
    question: 'Is financing a time-consuming process?',
    answer:
      'When you are financing your metal building, a bank is going to check your credit score and then the decision of approval or denial will be made. In Rent-to-Own, you get an instant approval after signing the contract and rent-to-own the limit cannot exceed $15,000.',
  },
  {
    id: 'certified-buildings',
    question: 'What is the difference between Rent-to-Own and Financing?',
    answer:
      'Certified buildings are structures that meet or exceed local building codes for wind and snow load ratings. They are engineered to withstand specific weather conditions and come with official documentation. If your area requires permits, certified buildings are usually mandatory.',
  },
  {
    id: 'pay-purchase',
    question: 'May I select a Bank?',
    answer:
      'We accept multiple payment options including credit/debit cards, bank transfers, and financing plans through our partners. You can also reserve your order with a small down payment and pay the balance upon delivery and installation.',
  },
  {
    id: 'upgrade',
    question: 'Eligibility to apply for Metal Building Finance?',
    answer:
      'Yes, modifications can be made as long as your order has not yet entered the manufacturing stage. If you need to adjust the size, add doors/windows, or change colors, simply contact our team as soon as possible and we’ll update your order.',
  },
];

const FaqsFinance = () => {
  const [openItems, setOpenItems] = useState<string[]>(['dimensions', 'colors']);

  return (
    <div className="mx-auto max-w-7xl px-4 text-white xl:px-0 [@media(width=1280px)]:px-4">
      <div className="mx-auto text-center">
        <div className="pb-4">
          <h2 className="text-[32px] font-bold text-white lg:text-6xl">
            Frequently Asked Question About Metal
            <br /> <span className="text-accent">Building Finance</span>
          </h2>

          <p className="mx-auto max-w-4xl px-1 pt-4 text-base text-white lg:text-xl">
            Find answers to frequently asked questions about financing metal buildings, including
            loan options, interest rates, and eligibility criteria.
          </p>
        </div>
      </div>
      <div className="relative mt-6 py-4">
        {/* Backgrounds */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/designer/texture_optimized.webp"
            fill
            alt="Background Texture"
            priority
            className="absolute inset-0 z-0 rounded-4xl object-contain"
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
        {/* <Accordion
            type="multiple"
            defaultValue={['dimensions', 'colors']} // all open by default
            className="relative rounded-2xl text-white shadow-xl"
          >
            {faqs.Financemap((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="my-4 rounded-3xl border-none bg-white/20 py-2"
              >
                <AccordionTrigger className="px-4 py-4 text-base xl:text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4 text-sm xl:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion> */}
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={(val) => setOpenItems(val)}
          className="relative rounded-2xl text-white shadow-xl"
        >
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <AccordionItem key={faq.id} value={faq.id} className="my-4 border-none">
                <AccordionTrigger
                  className={`${isOpen ? 'cursor-pointer transition-all duration-300 ease-in-out [background:linear-gradient(180deg,_#ED2031_0%,_#87121C_100%)]' : 'bg-white/20'} flex items-center rounded-[50px] px-4 py-2 text-base xl:text-2xl [&>svg]:hidden`}
                >
                  <span>{faq.question}</span>
                  <AccordionIcons isOpen={isOpen} />
                </AccordionTrigger>
                <AccordionContent className="mt-2 rounded-4xl bg-white/20 px-4 py-6 text-sm xl:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsFinance;
