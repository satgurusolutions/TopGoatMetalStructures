'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { easeOut, motion, Variants } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    title: 'Carports',
    slug: '/product-category/carports',
    image: '/images/service-area/state-carport.png',
    description:
      'Create covered pavilions and patio canopies to provide a much-needed break from fierce sun during summer days.',
  },
  {
    title: 'Barns',
    slug: '/product-category/barns',
    image: '/images/service-area/state-barn.png',
    description:
      'Give pets and farm animals shade in the heat of the summer and protect them from the elements with covered, partially-enclosed, or fully-enclosed barns.',
  },
  {
    title: 'Garages',
    slug: '/product-category/garages',
    image: '/images/service-area/state-garage.png',
    description:
      'Avoid damaging UV rays and harsh weather with garages built to fit multiple vehicles, from cars and trucks to small boats and ATVs.',
  },
  {
    title: 'Commercials',
    slug: '/product-category/commercials',
    image: '/images/service-area/state-commercial.png',
    description:
      'Erect solid, durable structures for multi-purpose use, including emergency hurricane and tornado shelters.',
  },
  {
    title: 'Triples',
    slug: '/product-category/triples',
    image: '/images/service-area/state-triple.png',
    description:
      'Store larger vehicles and oversized equipment with these units that come certified to stand through high winds and include a welded truss system to ensure maximum stability.',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

export default function CategoryServed({ state }: Readonly<{ state: string }>) {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
        {/* Heading */}
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-6xl">
          Recommended Products for <span className="text-accent">{state}</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <Link href={item.slug} passHref>
                <Card className="hover:border-accent/40 flex cursor-pointer flex-col gap-2 rounded-2xl border border-gray-200 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
                  {/* Gradient Masked Image */}
                  <div
                    className={cn(
                      'flex flex-col items-center justify-center rounded-lg bg-white p-4',
                    )}
                  >
                    <motion.span
                      className="inline-block h-[60px] w-full bg-gradient-to-b from-[#de2929] to-[#ac0d0d]"
                      style={{
                        WebkitMaskImage: `url(${item.image})`,
                        maskImage: `url(${item.image})`,
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                      }}
                      aria-hidden
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                      whileHover={{
                        backgroundPosition: ['0% 50%', '100% 50%'],
                        transition: { duration: 1.5, repeat: Infinity, repeatType: 'mirror' },
                      }}
                    />
                  </div>

                  {/* Title */}
                  <CardHeader className="pb-1">
                    <CardTitle className="text-accent text-center text-lg font-semibold xl:text-2xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  {/* Description */}
                  <CardContent>
                    <p className="line-clamp-3 text-center text-sm text-gray-600 xl:text-base">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
