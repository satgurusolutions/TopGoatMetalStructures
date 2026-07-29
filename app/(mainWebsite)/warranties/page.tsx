import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import MetalBuildingWarranties from '@/components/shared/metal-building-warranties';
import Script from 'next/script';
import { Metadata } from 'next';
import { baseUrl, ogImage } from '@/configs/meta-data';

export const metadata: Metadata = {
  title:
    'Metal Buildings Warranties - 20 Years on Framing and Paneling | Top Goat Metal Structures',
  description:
    'Top Goat Metal Structures offers 20 years warranty on 12 Gauge framing and 26 Gauge paneling. We also provide a variable craftsmanship guarantee. Explore now!',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/warranties/',
  },
  openGraph: {
    title:
      'Metal Buildings Warranties - 20 Years on Framing and Paneling | Top Goat Metal Structures',
    description:
      'Top Goat Metal Structures offers 20 years warranty on 12 Gauge framing and 26 Gauge paneling. We also provide a variable craftsmanship guarantee. Explore now!',
    url: baseUrl + '/warranties/',
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
    title:
      'Metal Buildings Warranties - 20 Years on Framing and Paneling | Top Goat Metal Structures',
    description:
      'Top Goat Metal Structures provides 20-year warranties on metal framing and paneling, with added craftsmanship guarantees. Learn more about our warranty coverage.',
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
      '@id': 'https://www.warriorbuildings.com/warranties/',
      url: 'https://www.warriorbuildings.com/warranties/',
      name: 'Metal Buildings Warranties - 20 Years on Framing and Paneling',
      isPartOf: {
        '@id': 'https://www.warriorbuildings.com/#website',
      },
      datePublished: '2024-12-17T04:53:18+00:00',
      dateModified: '2024-12-30T07:03:14+00:00',
      description:
        'Top Goat Metal Structures offers 20 years warranty on 12 Gauge framing and 26 Gauge paneling. We also provide a variable craftsmanship guarantee. Explore now!',
      breadcrumb: {
        '@id': 'https://www.warriorbuildings.com/warranties/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.warriorbuildings.com/warranties/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.warriorbuildings.com/warranties/#breadcrumb',
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
          name: 'Warranties',
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

const FinancingPage = () => {
  return (
    <div className="font-jost">
      <Script id="warranties-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection name={'Warranties'} bgImg="/images/warranties-bg.webp" />
      <div className="">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <MetalBuildingWarranties />
        </div>{' '}
        <div className="pt-8 xl:pt-16">
          <Ruler variant={2} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FinancingPage;
