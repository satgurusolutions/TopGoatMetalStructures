import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import SearchListingViewMore from '@/components/shared/search-lists-view-more';
import { searchProducts } from '@/lib/products';
import { fullTextSearch } from '@/lib/search';
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
  const results = await fullTextSearch(query?.toString());
  return (
    <div className="font-jost search-page">
      <HeroSection
        hideBreadcrumb
        name={`Search Results: ${query}`}
        hideSocialIcon
        bgImg="/images/landing-pages/top-selling-bg.webp"
        heightClass="h-[260px]"
        // description="We will be in touch with you shortly."
      />

      <div className="py-8 lg:py-14">
        <div className="pb-8 lg:pb-14">
          <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
            <SearchListingViewMore
              results={results ?? []}
              viewMore
              name={`Search Results: ${query}`}
              resultsPerPage={20}
              titleSizeClass="text-base xl:text-3xl"
              searchTextSizeClass="text-sm xl:text-lg px-0! pb-0!"
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
