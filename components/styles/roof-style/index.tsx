'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TELEPHONE_NUMBER } from '@/configs/navigation.config';

const roofStyles = [
  {
    title: 'Regular Roofing',
    desc: 'Known for its rounded edges, the regular roof style is our most economical option. Its simple, curved design effectively handles light weather conditions and offers a traditional aesthetic.',
    img: '/images/buying-guides/roof-style-regular.webp',
  },
  {
    title: 'A-Frame Roofing',
    desc: 'Also called boxed-eave roof style, A-frame roofing features a more residential appearance with horizontal panels. It’s an excellent choice for regions with moderate weather, as it combines aesthetic appeal with strength and functionality.',
    img: '/images/buying-guides/roof-style-a-frame.webp',
  },
  {
    title: 'Vertical Roofing',
    desc: 'Vertical roofing panels run from the ridge down to the eaves, enabling rain, snow, and debris to slide off efficiently. This option is recommended for areas with heavy precipitation, as the vertical orientation prevents buildup and extends the structure’s lifespan.',
    img: '/images/buying-guides/roof-style-vertical.webp',
  },
];

const benefits = [
  {
    title: 'Reduces Impact from Weather Events',
    desc: 'Vertical roofing directs rain, snow, and debris off the roof, minimizing the impact of heavy weather on your building.',
  },
  {
    title: 'Makes Clean-Up Easy',
    desc: 'Thanks to its steep pitch and vertical panel orientation, this roofing style allows dirt, leaves, snow, and other debris to slide off naturally — keeping your structure cleaner with less maintenance.',
  },
  {
    title: 'Extends the Lifespan of Your Structure',
    desc: 'Vertical roofing’s durable design protects your building from wear and tear caused by accumulated debris and water, helping it last longer without replacement.',
  },
  {
    title: 'Reduces Maintenance Costs',
    desc: 'Less buildup means fewer repairs over time, making vertical roofing a great option for reducing maintenance expenses.',
  },
];

const RoofStyleContent = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
        {/* === Intro Section === */}
        <div className="mx-auto mb-16 max-w-5xl space-y-4 text-center">
          <p className="text-lg text-gray-700">
            Your metal building’s roof style plays a big role in how it looks and performs over its
            lifespan, so choosing the right one matters. Whether you live in an arid region with
            minimal rainfall or in an area that regularly sees inclement weather, your roof style
            can make a big difference.
          </p>
          <p className="text-lg text-gray-700">
            Top Goat Metal Structures offers several roofing options to match your style and
            environment — from economical regular roofing to our weather-resistant vertical options.
          </p>
        </div>

        {/* === Compare Section === */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-black xl:text-[56px]">
              Comparing <span className="text-primary">Roof Styles</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              What type of roofing style is best for your needs and location? Let’s explore the
              differences between the options available to you:
            </p>
          </div>

          <div className="space-y-20">
            {roofStyles.map((style, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center gap-10 lg:gap-20 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <div className="w-full overflow-hidden rounded-[24px] shadow-md shadow-gray-200 lg:w-[40%]">
                  <Image
                    src={style.img}
                    alt={style.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="w-full space-y-4 lg:w-[60%]">
                  <h3 className="text-2xl font-semibold text-black xl:text-3xl">{style.title}</h3>
                  <p className="text-base text-gray-700 xl:text-lg">{style.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === Benefits Section === */}
        <div className="mb-20 rounded-[32px] bg-gray-50 p-10 shadow-sm lg:p-16">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-black xl:text-[56px]">
              The Benefits of <span className="text-primary">Vertical Roofing</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              Our vertical roof style is the most durable option — and while it comes at a slightly
              higher price point, it remains our most popular choice. Here’s why:
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-6 shadow-md shadow-gray-200 transition hover:shadow-lg"
              >
                <strong className="mb-2 block text-lg font-semibold text-black">
                  {item.title}
                </strong>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === Factors Section === */}
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-4xl font-bold text-black xl:text-[56px]">
            Factors to Keep in Mind When Choosing Your Roof Style
          </h2>
          <p className="text-lg text-gray-700">
            How do you choose the right roofing option? Let’s break down some of the biggest factors
            to consider:
          </p>
          <p className="text-lg text-gray-700">
            Call our building experts today at{' '}
            <Link
              href={TELEPHONE_NUMBER.href}
              className="text-primary font-semibold hover:underline"
            >
              {TELEPHONE_NUMBER.formatted}
            </Link>{' '}
            to learn more about our lineup of{' '}
            <Link
              href="https://www.warriorbuildings.com/metal-buildings/"
              className="text-primary font-semibold hover:underline"
            >
              metal buildings
            </Link>{' '}
            and roofing options. We’ll guide you through the entire process from start to finish and
            deliver a building that’s <strong>Warrior strong.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoofStyleContent;
