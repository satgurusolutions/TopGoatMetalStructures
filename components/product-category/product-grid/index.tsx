'use client';

import { Product } from '@/types';
import ProductCard from './product-card';

interface ProductGridProps {
  products: Product[];
  isTwoColumn?: boolean;
  productCardVariant?: number;
  leadSourceName?: string;
  openModalOnClick?: boolean; // 👈 new prop
  allProducts?: Product[]; // for variant 2 carousel
}

export default function ProductGrid({
  products,
  isTwoColumn = false,
  productCardVariant = 1,
  leadSourceName,
  openModalOnClick,
  allProducts,
}: Readonly<ProductGridProps>) {
  if (!products || products.length === 0) {
    return <p className="text-center text-xl text-gray-500">No products found.</p>;
  }
  return (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${isTwoColumn ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}
    >
      {products.map((product) => (
        // <ProductCard
        //   products={allProducts}
        //   variant={productCardVariant}
        //   key={product.id}
        //   product={product}
        //   leadSourceName={leadSourceName}
        //   openModalOnClick={openModalOnClick}
        // />
        <ProductCard
          products={allProducts ?? products}
          variant={productCardVariant}
          key={product.id}
          product={product}
          leadSourceName={leadSourceName}
          openModalOnClick={openModalOnClick}
        />
      ))}
    </div>
  );
}
