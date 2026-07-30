import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import { RoofStyleContent } from '@/components/styles';
import Script from 'next/script';
import { Metadata } from 'next';
import { baseUrl, ogImage } from '@/configs/meta-data';

export const metadata: Metadata = {
  title: 'Metal Building Roof Styles | Top Goat Metal Structures',
  description:
    'Your metal building’s roof style plays a major role in its performance and appearance. Learn about vertical, boxed-eave, and regular roof styles to choose the best fit for your climate and design.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/metal-building-roof-styles/',
  },
  openGraph: {
    title: 'Metal Building Roof Styles | Top Goat Metal Structures',
    description:
      'Your metal building’s roof style plays a major role in its performance and appearance. Learn about vertical, boxed-eave, and regular roof styles to choose the best fit for your climate and design.',
    url: baseUrl + '/metal-building-roof-styles/',
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
    title: 'Metal Building Roof Styles | Top Goat Metal Structures',
    description:
      'Discover the right roof style for your metal building — vertical, boxed-eave, or regular. Learn how each performs and enhances your structure.',
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
      '@id': 'https://www.topgoatmetalstructures.com/metal-building-roof-styles/',
      url: 'https://www.topgoatmetalstructures.com/metal-building-roof-styles/',
      name: 'Metal Building Roof Styles - Top Goat Metal Structures',
      isPartOf: {
        '@id': 'https://www.topgoatmetalstructures.com/#website',
      },
      datePublished: '2024-11-29T11:58:50+00:00',
      dateModified: '2024-12-26T07:52:18+00:00',
      description:
        'Your metal building’s roof style will play a large role in how it looks and performs over its lifespan. Explore roof options suited for all weather conditions.',
      breadcrumb: {
        '@id': 'https://www.topgoatmetalstructures.com/metal-building-roof-styles/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.topgoatmetalstructures.com/metal-building-roof-styles/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.topgoatmetalstructures.com/metal-building-roof-styles/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.topgoatmetalstructures.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Metal Building Roof Styles',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.topgoatmetalstructures.com/#website',
      url: 'https://www.topgoatmetalstructures.com/',
      name: 'Top Goat Metal Structures',
      description: 'The best in the industry',
      publisher: {
        '@id': 'https://www.topgoatmetalstructures.com/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
      '@id': 'https://www.topgoatmetalstructures.com/#organization',
      name: 'Top Goat Metal Structures',
      url: 'https://www.topgoatmetalstructures.com/',
      logo: {
        '@type': 'ImageObject',
        inLanguage: 'en-US',
        '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
        url: 'https://www.topgoatmetalstructures.com/images/logo.png',
        contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
        width: 198,
        height: 180,
        caption: 'Top Goat Metal Structures',
      },
      image: {
        '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
      },
      sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
    },
  ],
};

const BuyingGuidePage = () => {
  return (
    <div className="font-jost">
      <Script id="roof-style-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection
        isBlur
        bgImg="/images/buying-guides/buyers-guide-bg.webp"
        name={'Metal Building Roof Styles'}
      />
      <div className="">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <RoofStyleContent />
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

export default BuyingGuidePage;
