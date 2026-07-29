'use client';

import { Ruler } from '@/components/shared';
import { DISABLE_ANIMATIONS } from '@/configs/navigation.config';
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';

const customizationOptions = [
  {
    title: 'Choose a Building Size',
    desc: 'These larger metal buildings are excellent for commercial warehouses, large farm buildings, multi-vehicle storage, or even spacious residential barndominiums.',
    img: '/images/buying-guides/building-size.webp',
  },
  {
    title: 'Choose a Roofing Type',
    desc: 'You’ll have the choice between several roofing types that vary in capability and cost. These roofing options are:',
    inner: [
      {
        title: 'Regular',
        desc: 'Classic rounded design, shallow peak — great for moderate climates and cost-effective builds.',
        img: '/images/buying-guides/regular.webp',
      },
      {
        title: 'A-Frame',
        desc: 'Resembles a residential roof with horizontal panels; perfect for wind and rain resistance.',
        img: '/images/buying-guides/a-frame.webp',
      },
      {
        title: 'Vertical',
        desc: 'Premium style with vertical paneling — sheds debris easily, offering top-tier durability.',
        img: '/images/buying-guides/vertical.webp',
      },
    ],
    img: '/images/buying-guides/roofing-type.webp',
  },
  {
    title: 'Choose a Color Scheme',
    desc: 'Select from a wide palette or mix colors for trim, roofing, and wainscoting to match your personal style.',
    img: '/images/buying-guides/color-scheme.webp',
  },
  {
    title: 'Pick Your Doors and Windows',
    desc: 'Add roll-up doors, walk-in doors, or windows to make your structure functional and accessible.',
    img: '/images/buying-guides/doors-windows.webp',
  },
  {
    title: 'Add Accessories',
    desc: 'Include insulation, trim, and wainscoting to give your metal building a complete, finished look.',
    img: '/images/buying-guides/accessories.webp',
  },
];

const CustomizationOptionsDark = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const isInView = useInView(ref, { once: false });

  useLayoutEffect(() => {
    if (ref.current) {
      const updateHeight = () => setSectionHeight(ref.current?.offsetHeight || 0);
      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const baseEllipse1Y = useTransform(scrollYProgress, [0, 1], [-200, sectionHeight]);
  const baseEllipse2Y = useTransform(scrollYProgress, [0, 1], [0, -sectionHeight]);
  const ellipse1Y = useSpring(baseEllipse1Y, { stiffness: 80, damping: 20 });
  const ellipse2Y = useSpring(baseEllipse2Y, { stiffness: 80, damping: 20 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="pb-16 lg:pb-24">
        <Ruler />
      </div>
      <Image
        src="/images/designer/texture_optimized.webp"
        fill
        alt="Background Texture"
        className="absolute inset-0 object-cover"
        priority
      />

      {/* Animated Ellipses */}
      <motion.div
        initial={false}
        style={{ y: ellipse1Y }}
        className="absolute -top-80 left-[-250px] h-[665px] w-[665px] will-change-transform"
      >
        <Image
          src="/images/designer/ellipse_optimized.webp"
          alt="Ellipse 1"
          width={1024}
          height={1024}
          className="hidden h-full w-full lg:block"
          priority
        />
      </motion.div>
      <motion.div
        initial={false}
        style={isInView && !DISABLE_ANIMATIONS ? { y: ellipse2Y } : {}}
        className="absolute right-[-250px] bottom-[-200px] h-[665px] w-[665px] will-change-transform"
      >
        <Image
          src="/images/designer/ellipse_optimized.webp"
          alt="Ellipse 2"
          width={1024}
          height={1024}
          className="hidden h-full w-full lg:block"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 pb-[96px] xl:container xl:px-0 [@media(width=1280px)]:px-4">
        <h2 className="pb-6 text-center leading-[120%] text-white xl:text-[56px]">
          Building <span className="text-primary">Customization</span> Options
        </h2>
        <p className="mx-auto max-w-4xl pb-12 text-center text-lg font-normal text-[#E9E9EA] lg:pb-20">
          Want to make your metal building uniquely yours? Explore all the ways to tailor it — from
          roof type and size to color, doors, and finishing touches.
        </p>

        {/* === Vertical Stacked Cards === */}
        <div className="flex flex-col gap-10">
          {customizationOptions.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/30 backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:shadow-white/20"
            >
              {/* Card Header */}
              <div className="flex items-start gap-6">
                <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-2xl bg-white/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-base text-[#CFCFCF]">{item.desc}</p>
                </div>
              </div>

              {/* Inner Roofing Options */}
              {item.inner && (
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {item.inner.map((sub, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center rounded-2xl bg-white/10 p-5 text-center transition hover:bg-white/20"
                    >
                      <div className="relative mb-3 h-12 w-12 overflow-hidden rounded-xl">
                        <Image src={sub.img} alt={sub.title} fill className="object-contain" />
                      </div>
                      <h4 className="text-sm font-medium text-white">{sub.title}</h4>
                      <p className="mt-1 text-xs text-[#D0D0D0]">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizationOptionsDark;
