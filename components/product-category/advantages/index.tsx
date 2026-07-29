'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useState, useLayoutEffect, FC, ReactNode } from 'react';
import parse from 'html-react-parser';
import { DISABLE_ANIMATIONS } from '@/configs/navigation.config';

interface AdvantagesProps {
  content?: string; // will contain HTML string from JSON
  component?: ReactNode;
}

const Advantages: FC<AdvantagesProps> = ({ content, component }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const isInView = useInView(ref, { once: false });

  // update height dynamically
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

  const baseEllipse1Y = useTransform(scrollYProgress, [0, 1], [0, -sectionHeight]);
  const baseEllipse2Y = useTransform(scrollYProgress, [0, 1], [0, sectionHeight]);

  const ellipse1Y = useSpring(baseEllipse1Y, { stiffness: 80, damping: 20 });
  const ellipse2Y = useSpring(baseEllipse2Y, { stiffness: 80, damping: 20 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-black py-16 lg:py-24">
      {/* Background Texture */}
      <Image
        src="/images/designer/texture_optimized.webp"
        fill
        alt="Background Texture"
        className="absolute inset-0 object-cover"
        priority
      />

      {/* Ellipses */}
      <motion.div
        style={isInView && !DISABLE_ANIMATIONS ? { y: ellipse1Y } : {}}
        className="absolute bottom-[-200px] left-[-250px] h-[665px] w-[665px] will-change-transform"
      >
        <Image
          src="/images/designer/ellipse_optimized.webp"
          alt="Ellipse 1"
          width={1024}
          height={1024}
          priority
          className="hidden h-full w-full lg:block"
        />
      </motion.div>

      <motion.div
        style={isInView && !DISABLE_ANIMATIONS ? { y: ellipse2Y } : {}}
        className="absolute top-[-200px] right-[-250px] h-[665px] w-[665px] will-change-transform"
      >
        <Image
          src="/images/designer/ellipse_optimized.webp"
          alt="Ellipse 2"
          width={1024}
          height={1024}
          priority
          className="hidden h-full w-full lg:block"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-white xl:px-0 [@media(width=1280px)]:px-4">
        {content ? parse(content) : null}
        {component || null}
      </div>
    </section>
  );
};

export default Advantages;
