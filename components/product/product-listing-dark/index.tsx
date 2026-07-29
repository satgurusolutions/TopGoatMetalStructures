'use client';

import { Pagination } from '@/components/shared';
import { Product } from '@/types';
import { FC, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useInView, useScroll, useSpring, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { DISABLE_ANIMATIONS } from '@/configs/navigation.config';
import ProductGrid from '@/components/product-category/product-grid';

interface ProductListingProps {
  products: Product[];
  productsPerPage?: number; // configurable
  name: string;
  disablePagination?: boolean;
  isDark?: boolean;
}

const ProductListingDark: FC<ProductListingProps> = ({
  products,
  productsPerPage = 9,
  name,
  disablePagination,
  isDark = false,
}) => {
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
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return products.slice(start, start + productsPerPage);
  }, [products, currentPage, productsPerPage]);

  const startIdx = (currentPage - 1) * productsPerPage + 1;
  const endIdx = Math.min(currentPage * productsPerPage, products.length);

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
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-12 px-4 text-white lg:flex-row xl:px-0 [@media(width=1280px)]:px-4">
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <div>
              <h2 className="text-[32px] font-bold text-white lg:text-6xl">{name}</h2>
              {!disablePagination && (
                <p className="px-1 py-2 text-base text-[#636569] lg:text-2xl">
                  Showing {startIdx}–{endIdx} of {products.length} results
                </p>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="pt-10">
            <ProductGrid products={currentProducts} />
          </div>

          {/* Pagination */}
          {!disablePagination && (
            <div className="mx-auto flex w-full items-center justify-center pt-6">
              <Pagination
                isDark={isDark}
                totalPages={totalPages}
                currentPage={currentPage}
                onChange={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductListingDark;
