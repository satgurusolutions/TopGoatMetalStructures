'use client';

import { Pagination } from '@/components/shared';
import ProductGrid from '../product-grid';
import { FC, useState, useMemo, useRef } from 'react';
import { Product } from '@/types';

interface ProductListingProps {
  products: Product[];
  productsPerPage?: number; // configurable
  name: string;
  disablePagination?: boolean;
  isTwoColumn?: boolean;
  titleSizeClass?: string;
  searchTextSizeClass?: string;
}

const ProductListing: FC<ProductListingProps> = ({
  products,
  productsPerPage = 9,
  name,
  disablePagination,
  isTwoColumn,
  titleSizeClass,
  searchTextSizeClass,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return products.slice(start, start + productsPerPage);
  }, [products, currentPage, productsPerPage]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const startIdx = (currentPage - 1) * productsPerPage + 1;
  const endIdx = Math.min(currentPage * productsPerPage, products.length);

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-center gap-12 px-4 lg:flex-row xl:px-0 [@media(width=1280px)]:px-4">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2
              ref={titleRef}
              className={`text-accent font-bold ${titleSizeClass || 'text-[32px] lg:text-[56px]'}`}
            >
              {name}
            </h2>
            {!disablePagination && (
              <p
                className={`px-1 py-2 text-[#636569] ${searchTextSizeClass || 'text-base lg:text-2xl'}`}
              >
                Showing {startIdx}–{endIdx} of {products.length} results
              </p>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="pt-6">
          <ProductGrid isTwoColumn={isTwoColumn} products={currentProducts} />
        </div>

        {/* Pagination */}
        {!disablePagination && totalPages > 1 && (
          <div className="mx-auto flex w-full items-center justify-center pt-6">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={(page) => {
                titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

                setCurrentPage(page);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
