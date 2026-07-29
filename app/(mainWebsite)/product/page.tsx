import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import ProductListingViewMore from '@/components/product-category/product-listing/product-listing-view-more';
import { searchProducts } from '@/lib/products';
import { redirect } from 'next/navigation';

export default async function ShopSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamValues = (await searchParams) || ''; // example: ?q=carport
  const query = searchParamValues.s || '';
  const products = await searchProducts(query?.toString());
  if (products.length === 1) {
    redirect('/product/' + products[0].slug);
  }
  return (
    <div className="font-jost search-page">
      <HeroSection
        hideBreadcrumb
        name={`Shop ${query}`}
        hideSocialIcon
        bgImg="/images/landing-pages/top-selling-bg.webp"
        heightClass="h-[450px]"
        // description="We will be in touch with you shortly."
      />

      <div className="py-8 lg:py-14">
        <div className="pb-8 lg:pb-14">
          <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
            <ProductListingViewMore
              productCardVariant={2}
              viewMore
              products={products ?? []}
              name={`Shop ${query}`}
              productsPerPage={9}
              titleSizeClass="text-lg xl:text-3xl"
              searchTextSizeClass="text-base xl:text-lg px-0! pb-0!"
              leadSourceName={'Website-Search'}
            />
          </div>
        </div>
      </div>
      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
