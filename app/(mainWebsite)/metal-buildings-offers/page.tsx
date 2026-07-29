import Footer from '@/components/footer';
import ProductListingViewMore from '@/components/product-category/product-listing/product-listing-view-more';
import { searchProducts } from '@/lib/products';
import { redirect } from 'next/navigation';

import { Metadata } from 'next';
import { baseUrl, ogImage } from '@/configs/meta-data';
import Script from 'next/script';
import HeroSection from '@/components/hero-section-offers';

export const metadata: Metadata = {
  title: 'Metal Buildings Offers | Top Goat Metal Structures',
  description:
    'Check out the latest offers and discounts on metal buildings, garages, barns, and carports from Top Goat Metal Structures. Save big on top-quality steel structures today!',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/metal-buildings-offers/',
  },
  openGraph: {
    title: 'Metal Buildings Offers | Top Goat Metal Structures',
    description:
      'Get exclusive deals and promotions on premium metal buildings, garages, and carports from Top Goat Metal Structures. Shop our limited-time offers now!',
    url: baseUrl + '/metal-buildings-offers/',
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Top Goat Metal Structures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metal Buildings Offers | Top Goat Metal Structures',
    description:
      'Find exclusive discounts and offers on durable steel buildings at Top Goat Metal Structures. Limited-time deals available nationwide!',
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: '/meta-data/favicon.png', sizes: '32x32' },
      { url: '/meta-data/web-app-manifest-192x192.png', sizes: '192x192' },
    ],
    apple: '/meta-data/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: baseUrl + '/meta-data/site.webmanifest',
  metadataBase: new URL(baseUrl),
  other: {
    'google-site-verification': 'gKD0Hz80l6-wldHNp5o5T0VRiw7Q-sXpxTUif0SNyb8',
    'p:domain_verify': '141041e4574a50b194d4344cc931561f',
    'msvalidate.01': '60FAD11C2B0E777C170E749ED22A6F30',
    'yandex-verification': '6015cd03946a2708',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Top Goat Metal Structures',
  },
};
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.warriorbuildings.com/metal-buildings-offers/',
      url: 'https://www.warriorbuildings.com/metal-buildings-offers/',
      name: 'Metal Buildings Offers - Top Goat Metal Structures',
      isPartOf: {
        '@id': 'https://www.warriorbuildings.com/#website',
      },
      datePublished: '2024-11-29T10:32:22+00:00',
      dateModified: '2025-01-28T13:26:56+00:00',
      description:
        'Check out the latest offers and discounts on metal buildings, garages, barns, and carports from Top Goat Metal Structures. Save big on top-quality steel structures today!',
      breadcrumb: {
        '@id': 'https://www.warriorbuildings.com/metal-buildings-offers/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.warriorbuildings.com/metal-buildings-offers/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.warriorbuildings.com/metal-buildings-offers/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.warriorbuildings.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Metal Buildings Offers',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.warriorbuildings.com/#website',
      url: 'https://www.warriorbuildings.com/',
      name: 'Top Goat Metal Structures',
      description: 'The best in the industry',
      publisher: {
        '@id': 'https://www.warriorbuildings.com/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.warriorbuildings.com/?s={search_term_string}',
          },
          'query-input': {
            '@type': 'PropertyValueSpecification',
            valueRequired: true,
            valueName: 'search_term_string',
          },
        },
      ],
      inLanguage: 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.warriorbuildings.com/#organization',
      name: 'Top Goat Metal Structures',
      url: 'https://www.warriorbuildings.com/',
      logo: {
        '@type': 'ImageObject',
        inLanguage: 'en-US',
        '@id': 'https://www.warriorbuildings.com/#/schema/logo/image/',
        url: 'https://www.warriorbuildings.com/images/logo.png',
        contentUrl: 'https://www.warriorbuildings.com/images/logo.png',
        width: 198,
        height: 180,
        caption: 'Top Goat Metal Structures',
      },
      image: {
        '@id': 'https://www.warriorbuildings.com/#/schema/logo/image/',
      },
      sameAs: ['https://www.facebook.com/warriorbuildings/'],
    },
  ],
};

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
      <Script id="offers-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection
        hideBreadcrumb
        name={`Bigger Buildings,<br /> Better Deals`}
        // hideSocialIcon
        bgImg="/images/offers-bg.jpg"
        description="Up To 20% Off<br />Build Big, Save More!"
        heightClass="h-[430px] lg:h-[85vh]"
        removeOverlay
      />

      <div className="py-8 lg:py-14">
        <div className="pb-8 lg:pb-14">
          <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
            <ProductListingViewMore
              viewMore
              products={products ?? []}
              name={`Top Selling Metal Buildings`}
              productsPerPage={9}
              titleSizeClass="text-lg xl:text-3xl"
              searchTextSizeClass="text-base xl:text-lg px-0! pb-0!"
              leadSourceName={'Website-Search'}
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
