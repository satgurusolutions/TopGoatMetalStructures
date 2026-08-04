'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// import Image from 'next/image';
import AccordionIcons from './accordion-animated-icons';
import { FC, useState } from 'react';
import parse from 'html-react-parser';
import RichText from '../rich-text';
import { faqs } from '@/configs/navigation.config';

const Faqs: FC<{
  title?: string;
  description?: string;
  highlight?: string;
  faqData?: { id: string; question?: string; answer?: string }[];
  initialOpenIds?: string[];
}> = ({ title, description, highlight, faqData, initialOpenIds }) => {
  const [openItems, setOpenItems] = useState<string[]>(initialOpenIds ?? ['dimensions', 'colors']);

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-center gap-12 px-4 lg:flex-row xl:px-0 [@media(width=1280px)]:px-4">
      <div className="w-full">
        <div className="flex w-full items-center justify-between text-center">
          <div className="w-full pb-8">
            <h2 className="text-[32px] font-bold text-black lg:text-[56px]">
              {title || 'Your Questions, Answered Everything'}
              <br /> <span className="text-accent">{highlight || 'You Need to Know'}</span>
            </h2>

            <p className="px-1 py-2 text-base text-black lg:text-2xl">
              {description ||
                `Explore our comprehensive FAQ section to find detailed answers to common questions,
              helping you get the information you need quickly and easily.`}
            </p>
          </div>
        </div>
        <div className="relative mt-6 rounded-[15px] bg-black p-4">
          {/* Backgrounds */}
          {/* <div className="pointer-events-none absolute inset-0 z-0">
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
          </div> */}

          {/* Accordion */}
          {/* <Accordion
            type="multiple"
            defaultValue={['dimensions', 'colors']} // all open by default
            className="relative rounded-2xl text-white shadow-xl"
          >
            {faqs.map((faq) => (
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
            className="relative rounded-[15px] text-white shadow-xl"
          >
            {(faqData || faqs).map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <AccordionItem key={faq.id} value={faq.id} className="my-4 border-none">
                  <AccordionTrigger
                    className={`${isOpen ? 'bg-primary cursor-pointer transition-all duration-300 ease-in-out' : 'bg-white/20'} flex items-center rounded-[15px] px-4 py-2 text-base xl:text-2xl [&>svg]:hidden`}
                  >
                    <span>{parse(faq.question || '')}</span>
                    <AccordionIcons isOpen={isOpen} />
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 rounded-[15px] bg-white/20 px-4 py-6 text-sm xl:text-lg">
                    <RichText html={faq.answer || ''} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
