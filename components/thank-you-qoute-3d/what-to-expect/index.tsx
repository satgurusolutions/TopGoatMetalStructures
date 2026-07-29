'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    title: 'Contact us for a quote',
    description: 'Either give us a call or contact us through our website',
  },
  {
    title: 'Confirm your building',
    description: 'One of our reps will confirm with you that you are prepared for your building',
  },
  {
    title: 'Make a down payment',
    description: 'We collect a small down payment to start the manufacturing process',
  },
  {
    title: 'Scheduled for delivery',
    description:
      'Your building has been manufactured and tested to meet rigorous standards of the manufacturer',
  },
  {
    title: 'Installer is on route',
    description:
      'Your building is on its way to be installed by our expert team of professional contractors',
  },
  {
    title: 'Install & Final Payment',
    description: 'Relax and enjoy your new custom building',
  },
];

export default function WhatToExpect() {
  return (
    <section>
      {/* Overlay for better contrast */}

      <div className="relative mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
        {/* Title */}
        <motion.h2
          className="mb-12 text-center text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          What to Expect
        </motion.h2>

        {/* Steps grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="space-y-3 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-center">
                <span className="bg-accent flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md lg:h-14 lg:w-14 xl:text-2xl">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold uppercase lg:text-xl">{step.title}</h3>
              <p className="text-muted-foreground text-sm lg:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant={'metallic'} className="h-[56px] px-4" asChild>
            <Link href="/resources/">Start customizing your building today!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
