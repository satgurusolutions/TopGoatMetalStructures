'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const warranties = [
  {
    title: '20 Year Warranty on 12-Gauge Framing and 26-Gauge Paneling',
    desc: 'Durability is the name of the game, and our 12-gauge framing and 26-gauge paneling are leaders in their class. As such, they’re covered by a 20-year limited warranty — if you experience rust-through during that time, we’ll make it right.',
    img: '/images/warranties/26-gauge.webp',
  },
  {
    title: 'Variable Craftsmanship Guarantee',
    desc: 'We take pride in delivering quality products, and our craftsmanship warranty reflects that. Should you experience any issues with the installation of your structure, we’ll make it right. This warranty varies based on the manufacturer in your area.',
    img: '/images/warranties/craftmanship.webp',
  },
];

const limitations = [
  {
    title: 'Weather Damage',
    desc: 'Our metal buildings are designed for durability, but severe weather events such as hurricanes, tornadoes, or floods can exceed engineered capabilities. Damage from these conditions is typically not covered under warranty.',
  },
  {
    title: 'Unauthorized Changes to Your Structure',
    desc: 'Making unapproved modifications or additions can void your warranty. Contact our team before making upgrades to ensure your coverage remains intact.',
  },
  {
    title: 'Failing to Perform Regular Maintenance',
    desc: 'Even the strongest buildings need care. Neglecting regular maintenance may void your warranty. Routine inspections help you catch minor issues before they become costly problems.',
  },
];

const MetalBuildingWarranties = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
        {/* === INTRODUCTION SECTION === */}
        <div className="border-b border-gray-200">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Text */}
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-bold text-black xl:text-[56px]">
                Metal Building Warranties
              </h2>
              <p className="text-lg text-gray-700">
                When you invest in a metal building, you’re looking for reliability, quality, and
                long-term performance. You want a structure that doesn’t just look good — it needs
                to stand the test of time.
              </p>
              <p className="text-lg text-gray-700">
                <Link
                  href="https://www.warriorbuildings.com/"
                  className="text-primary font-semibold hover:underline"
                >
                  Top Goat Metal Structures
                </Link>{' '}
                proudly brings that promise to life. Every structure we design is backed by
                dependable warranties and installed by professionals who get it right the first
                time.
              </p>
              <p className="text-lg text-gray-700">
                Below, we’ll break down our warranty coverage so you know exactly what to expect.
                When you choose Warrior, you’re choosing confidence, protection, and lasting value.
              </p>
            </div>

            {/* Image */}
            <div className="max-w-xl flex-1 overflow-hidden rounded-[32px] shadow-md shadow-gray-200">
              <Image
                src="/images/warranties/22x25x13-vertical-roof-garage.webp"
                alt="Top Goat Metal Structures"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* === WARRANTY TYPES === */}
        <div className="py-20">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-black xl:text-[56px]">
              The Warranties We Offer
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              We deliver more than structures — we deliver peace of mind. Every Warrior building
              comes backed by the following warranties:
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {warranties.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-[24px] bg-gray-50 p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-6 overflow-hidden rounded-[20px] shadow-sm">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">{item.title}</h3>
                <p className="text-base text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === LIMITATIONS === */}
        <div className="mb-20 rounded-[40px] bg-gray-50 px-6 py-20 shadow-inner lg:px-12">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-black xl:text-[56px]">Warranty Limitations</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our buildings are engineered to perform and we stand behind them — but there are
              certain limitations that can affect warranty coverage:
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {limitations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[24px] bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 0L17.0711 2.92893L20 10L17.0711 17.0711L10 20L2.92893 17.0711L0 10L2.92893 2.92893L10 0Z"
                      fill="#F51919"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 text-lg font-semibold text-black">{item.title}</h6>
                <p className="text-base text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === OUTRO === */}
        <div className="mx-auto max-w-4xl space-y-6 pb-20 text-center">
          <h2 className="text-4xl font-bold text-black xl:text-[56px]">
            Top Goat Metal Structures is Here for You
          </h2>
          <p className="text-lg text-gray-700">
            Whether you’re building a backyard shed or designing a commercial workshop, Warrior
            Buildings is proud to be your go-to source for steel structures built to last.
          </p>
          <p className="text-lg text-gray-700">
            Call our experts at{' '}
            <Link href="tel:888-576-0565" className="text-primary font-semibold hover:underline">
              888-576-0565
            </Link>{' '}
            to start designing your{' '}
            <Link
              href="https://www.warriorbuildings.com/metal-buildings/"
              className="text-primary font-semibold hover:underline"
            >
              custom metal building
            </Link>
            . We’ll be with you every step of the way — from design to installation and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetalBuildingWarranties;
