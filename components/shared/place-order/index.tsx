'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Design Your Building Online or by Calling Our Experts',
    desc: 'Start by using our online design tool or speaking with one of our knowledgeable team members. You’ll be able to select your building type, size, color, roof style, and any custom features you need.',
    img: '/images/buying-guides/design-building.webp',
  },
  {
    title: 'Finalize Your Design and Receive a FREE Price Quote',
    desc: "Once you've settled on a design, we'll provide you with a transparent and competitive price quote. This confirms you know exactly what to expect, with no hidden fees or surprises. If needed, we can make any last-minute adjustments before finalizing your order.",
    img: '/images/buying-guides/free-quote.webp',
  },
  {
    title: 'Pay Down Payment',
    desc: 'To secure your order, a small down payment is required. This confirms your purchase and allows us to begin processing your custom metal building. The exact amount will depend on the size and specifications of your structure.',
    img: '/images/buying-guides/payment.webp',
  },
  {
    title: 'Schedule Your Delivery and Installation',
    desc: "After the down payment, we'll work with you to schedule a convenient delivery and installation date for your new structure.",
    img: '/images/buying-guides/delivery.webp',
  },
];

const PlacingYourOrder = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black xl:text-[56px]">
            Placing <span className="text-primary">Your Order</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
            It all starts with an order. But what’s the process like? Let’s break it down
            step-by-step:
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                'flex flex-col items-center gap-10 md:gap-16 lg:items-start',
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row',
              )}
            >
              {/* Text Section */}
              <div className="space-y-4 lg:flex-[0.75]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary mt-1 h-5 w-5 shrink-0 rounded-md" />
                  <div>
                    <h3 className="text-2xl font-semibold text-black xl:text-3xl">{step.title}</h3>
                    <p className="mt-3 text-base text-gray-700 xl:text-lg">{step.desc}</p>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative w-full overflow-hidden rounded-[24px] shadow-md shadow-gray-200 lg:flex-[0.25]">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={450}
                  height={280}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacingYourOrder;
