import Footer from '@/components/footer';
import { GetAQuote, HeroSection, ProductListing } from '@/components/product-category';
import { RichText, Ruler } from '@/components/shared';
import { buildMetadata, metaData } from '@/configs/meta-data';
import { getProductsByCategory } from '@/lib/products';
import { YoastHeadJson } from '@/types';
import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';

import Header from '@/components/header';
import Faqs from '@/components/shared/faqs'; // adjust path to your actual file
import { QuoteForm } from '@/components/shared';
import ProductListingViewMore from '@/components/product-category/product-listing/product-listing-view-more';

export interface CategoryComponentBlock {
  padding?: string;
  background?: string;
  props?: Record<string, unknown>; // if you want to pass dynamic props
}

export interface CategoryFAQData {
  id: string;
  question: string;
  answer: string;
}

export interface CategoryImage {
  id: number;
  date_created?: string;
  date_created_gmt?: string;
  date_modified?: string;
  date_modified_gmt?: string;
  src: string;
  name: string;
  alt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  second_description?: string;
  display: string;
  image: CategoryImage | null;
  menu_order: number;
  count: number;
  components?: CategoryComponentBlock[];
  faq_data?: CategoryFAQData[];
  details: { title: string; description: string; highlight: string };
  yoast_head_json: YoastHeadJson;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  let categories: Array<Category> = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/categories.json`, // Adjust the URL to your API endpoint or data source
      { cache: 'force-cache' },
    );

    categories = (await res.json()) as Array<Category>;
    const slug = (await params)?.slug;
    const metaData = categories?.find((item) => item.slug === slug)?.yoast_head_json;
    return buildMetadata(metaData);
  } catch (error) {
    console.warn(
      '⚠️ categories.json not found at build time. No static params generated and dynamic pages might be slow to load',
      error,
    );
  }

  return metaData;
}

// Generates all dynamic routes at build time
export async function generateStaticParams() {
  let categories: Array<{ slug: string }> = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/categories.json`, // Adjust the URL to your API endpoint or data source
      { cache: 'force-cache' },
    );

    categories = (await res.json()) as Array<{ slug: string }>;
  } catch (error) {
    console.warn(
      '⚠️ categories.json not found at build time. No static params generated and dynamic pages might be slow to load',
      error,
    );
  }

  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/categories.json`, // Adjust the URL to your API endpoint or data source
    { cache: 'force-cache' },
  );
  const { slug } = await params;
  const categories = ((await res.json()) as Array<Category>) || [];
  const category = categories.find((c) => c.slug === slug);
  if (!category) {
    return <div>Category not found</div>;
  }
  const products = await getProductsByCategory(slug);
  const schema = category?.yoast_head_json?.schema ?? {};

  if (category?.display && category?.display == 'special') {
    return (
      <div className="font-jost search-page">
        <Script
          id={`category-schema-${slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(schema)}
        </Script>
        <Header />

        <section className="relative overflow-hidden bg-[#F2FBFE] pt-[120px] pb-[100px] md:pt-[180px]">
          <div className="mx-auto max-w-[1280px] px-4 xl:px-0 [@media(width=1280px)]:px-4">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              {/* image card */}
              <div className="md:basis-1/2">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:hidden">
                  {category?.name ?? ''}
                </h1>
                <div className="relative mt-4 space-y-4 overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-900/10">
                  <Image
                    alt={category?.name ?? ''}
                    src={category?.image?.src ?? ''}
                    // fill
                    className="h-auto w-full object-cover"
                    width={1000}
                    height={1046}
                  />
                </div>
              </div>

              {/* Left content */}
              <div className="md:basis-1/2">
                <h1 className="hidden text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:block">
                  {category?.name ?? ''}
                </h1>

                <div className="mt-4 space-y-4 text-lg leading-8 text-gray-700">
                  <RichText html={category?.description ?? ''} />
                </div>

                {/* CTA row */}
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <a
                    href="tel:888-576-0565"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#a70802] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 focus:ring-4 focus:ring-red-600/20 focus:outline-none"
                  >
                    <span className="text-lg tracking-wide">888 - 576 - 0565</span>
                    <span>
                      {/* phone icon */}
                      <svg
                        className="h-[32px]! w-[32px]!"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <rect width="32" height="32" rx="16" fill="#131717"></rect>
                        <path
                          d="M21.6252 18.1742L24.2682 19.7502C24.8142 20.0762 25.0961 20.7102 24.9711 21.3342C24.4601 23.8932 21.8902 25.5332 19.3732 24.8422C13.4342 23.2122 8.79509 18.5872 7.15909 12.6352C6.46709 10.1172 8.10519 7.54522 10.6652 7.03322L10.682 7.03023C11.307 6.90523 11.9442 7.18823 12.2692 7.73723L13.8322 10.3762C14.3882 11.3152 14.112 12.5242 13.203 13.1282L11.5421 14.2332C12.7141 17.0402 14.9541 19.2892 17.7531 20.4592L18.8681 18.7942C19.4771 17.8872 20.6872 17.6152 21.6252 18.1742Z"
                          fill="#FFFEFA"
                        ></path>
                      </svg>
                    </span>
                  </a>

                  <a
                    href="#quote"
                    className="inline-flex h-[56px] items-center gap-3 rounded-xl border border-gray-900 bg-white px-7 py-2 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-200"
                  >
                    Request a Quote
                    {/* arrow */}
                    <svg
                      className="h-[32px]! w-[32px]!"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <rect width="34" height="34" rx="17" fill="#131717"></rect>
                      <path
                        d="M26.7061 17.7083L19.707 24.7073C19.512 24.9023 19.256 25.0003 19 25.0003C18.744 25.0003 18.488 24.9023 18.293 24.7073C17.902 24.3163 17.902 23.6842 18.293 23.2933L23.5859 18.0003H8C7.447 18.0003 7 17.5523 7 17.0003C7 16.4483 7.447 16.0003 8 16.0003H23.5859L18.293 10.7073C17.902 10.3163 17.902 9.68425 18.293 9.29325C18.684 8.90225 19.316 8.90225 19.707 9.29325L26.7061 16.2923C26.7991 16.3853 26.8721 16.4952 26.9231 16.6182C27.0241 16.8622 27.0241 17.1384 26.9231 17.3824C26.8721 17.5054 26.7991 17.6153 26.7061 17.7083Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-8 lg:py-14">
          <div className="pb-8 lg:pb-14">
            <div className="mx-auto max-w-[1280px] px-4 xl:px-0 [@media(width=1280px)]:px-4">
              <ProductListingViewMore
                viewMore
                products={products ?? []}
                name={`Top Selling Metal Buildings`}
                productsPerPage={9}
                titleSizeClass="text-lg xl:text-3xl"
                searchTextSizeClass="text-base xl:text-lg px-0! pb-0!"
                leadSourceName={category?.name ?? 'Website-Search'}
              />
            </div>
          </div>
        </div>

        {/* content */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-4 xl:px-0 [@media(width=1280px)]:px-4">
            <RichText html={category?.second_description ?? ''} />
          </div>
        </section>
        {/* content */}

        {/* <!-- FAQs --> */}
        <div className="mt-14">
          <Faqs
            title="Frequently Asked Questions"
            highlight=""
            description="Here are some of the most common questions we hear when customers are budgeting for a metal building."
            faqData={category.faq_data}
            initialOpenIds={['price']}
          />
        </div>

        {/* Quote */}
        <div
          className="mx-auto max-w-7xl px-4 py-20 xl:px-0 [@media(width=1280px)]:px-4"
          id="quote"
        >
          <div className="rounded-3xl border-[10px] border-[#E9E9EA99] shadow-[4px,4px,12px,0px,#0000001A]">
            <div className="rounded-3xl bg-white p-4 py-6">
              <h1 className="pb-4 text-center text-[32px] font-bold text-black uppercase">
                Get a Quote
              </h1>
              <QuoteForm />
            </div>
          </div>
        </div>
        {/* Quote */}
        <div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="font-jost">
      <Script id={`category-schema-${slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection bgImg={category?.image?.src ?? ''} isBlur name={category?.name ?? ''} />
      <div className="bg-[#F2FBFE]">
        <div className="pb-8 lg:pb-14">
          <Ruler />
        </div>
        {products?.length ? (
          <div className="pb-8 lg:pb-14">
            <ProductListing products={products} name={category?.name} />
          </div>
        ) : null}
        <div>
          <Ruler variant={2} />
        </div>
      </div>
      <div className="py-8 lg:py-14">
        <GetAQuote
          title={category?.details?.title ?? ''}
          description={category?.details?.description ?? ''}
          highlight={category?.details?.highlight ?? ''}
        />
      </div>

      <Ruler />
      <div className="mx-auto max-w-[1280px] px-4 pt-8 lg:pt-14 xl:px-0 [@media(width=1280px)]:px-4">
        <RichText html={category?.description ?? ''} />
      </div>
      <div className="= pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
