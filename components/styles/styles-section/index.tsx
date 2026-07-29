'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionType } from '@/types';

type StyleSectionProps = {
  sections: SectionType[];
};
export default function StyleSection({ sections }: Readonly<StyleSectionProps>) {
  return (
    <section className="text-center md:text-start">
      <div className="mx-auto max-w-7xl space-y-16 px-4 xl:px-0 [@media(width=1280px)]:px-4">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col items-center gap-8 md:flex-row ${
              section.reverse ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            {/* Image */}
            <div className="flex-shrink-0 md:w-2/5">
              <Link
                className="block overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105"
                href={section.link}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={540}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </Link>
            </div>

            {/* Text */}
            <div className="space-y-4 md:w-3/5">
              <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">{section.title}</h2>
              <p className="text-base text-gray-700 md:text-lg">{section.description}</p>
              {section.extra && (
                <p className="text-base text-gray-700 md:text-lg">{section.extra}</p>
              )}
              <Link
                className="mt-4 inline-block rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-600"
                href={section.link}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
