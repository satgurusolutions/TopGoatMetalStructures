'use client';

import { Button } from '@/components/ui/button'; // shadcn button
import { Product } from '@/types';
import { FC, useMemo, useRef, useState } from 'react';
import ProductGrid from '../product-grid';

interface ProductListingProps {
  products: Product[];
  productsPerPage?: number; // configurable
  name: string;
  disablePagination?: boolean;
  viewMore?: boolean; // NEW
  isTwoColumn?: boolean;
  titleSizeClass?: string;
  searchTextSizeClass?: string;
  productCardVariant?: number;
  leadSourceName?: string;
  openModalOnClick?: boolean; // 👈 new prop
}

// component for view more functionality
const ProductListingViewMore: FC<ProductListingProps> = ({
  products,
  productsPerPage = 9,
  name,
  disablePagination,
  viewMore, // NEW
  isTwoColumn,
  titleSizeClass,
  searchTextSizeClass,
  productCardVariant = 1,
  leadSourceName,
  openModalOnClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = useMemo(() => {
    if (viewMore) {
      // Show all items up to currentPage
      return products.slice(0, currentPage * productsPerPage);
    }
    // Show only current page items
    const start = (currentPage - 1) * productsPerPage;
    return products.slice(start, start + productsPerPage);
  }, [products, currentPage, productsPerPage, viewMore]);

  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const startIdx = (currentPage - 1) * productsPerPage + 1;
  const endIdx = Math.min(currentPage * productsPerPage, products.length);

  return (
    <div className="mx-auto flex w-full flex-col items-start justify-center gap-12 lg:flex-row">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2
              ref={titleRef}
              className={`text-accent font-bold ${titleSizeClass || 'text-[32px] lg:text-6xl'}`}
            >
              {name}
            </h2>
            {!disablePagination && !viewMore && (
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
          <ProductGrid
            productCardVariant={productCardVariant}
            isTwoColumn={isTwoColumn}
            products={currentProducts}
            leadSourceName={leadSourceName}
            openModalOnClick={openModalOnClick}
            allProducts={products} // pass all products for variant 2 carousel
          />
        </div>

        {/* Pagination OR View More */}
        {!disablePagination && (
          <>
            {viewMore && currentProducts.length < products.length && (
              <div className="mx-auto flex w-full items-center justify-center pt-8 lg:pt-16">
                <Button
                  className="p-5"
                  variant="metallic"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  View More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductListingViewMore;
