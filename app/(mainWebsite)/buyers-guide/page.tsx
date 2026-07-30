import { DeliveredAndInstalled } from '@/components/about-us';
import Footer from '@/components/footer';
import { CustomizationOptionsDark, HeroSection } from '@/components/product-category';
import { BuyersGuideContent, PlaceOrder, Ruler, SizeOptions } from '@/components/shared';
import { baseUrl, ogImage } from '@/configs/meta-data';

import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Buyers Guide | Top Goat Metal Structures',
  description:
    'Learn everything you need to know before purchasing your steel structure in our comprehensive Buyers Guide — from customization to financing options.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/buyers-guide/',
  },
  openGraph: {
    title: 'Buyers Guide | Top Goat Metal Structures',
    description:
      'Learn everything you need to know before purchasing your steel structure in our comprehensive Buyers Guide — from customization to financing options.',
    url: baseUrl + '/buyers-guide/',
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
    title: 'Buyers Guide | Top Goat Metal Structures',
    description:
      'Learn everything you need to know before purchasing your steel structure in our comprehensive Buyers Guide — from customization to financing options.',
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
      '@id': 'https://www.topgoatmetalstructures.com/buyers-guide/',
      url: 'https://www.topgoatmetalstructures.com/buyers-guide/',
      name: 'Buyers Guide - Top Goat Metal Structures',
      isPartOf: {
        '@id': 'https://www.topgoatmetalstructures.com/#website',
      },
      datePublished: '2025-03-10T06:37:21+00:00',
      dateModified: '2025-03-10T06:38:56+00:00',
      breadcrumb: {
        '@id': 'https://www.topgoatmetalstructures.com/buyers-guide/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.topgoatmetalstructures.com/buyers-guide/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.topgoatmetalstructures.com/buyers-guide/#breadcrumb',
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
          name: 'Buyers Guide',
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
        url: 'https://www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
        contentUrl: 'https://www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
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
      <Script id="buyers-guide-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection
        isBlur
        bgImg="/images/buying-guides/buyers-guide-bg.webp"
        name={"Buyer's Guide"}
      />
      <div className="bg-[#FCF8F8]">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <BuyersGuideContent />
        <div className="pt-8 xl:pt-16">
          <Ruler variant={2} />
        </div>
      </div>
      <div className="pt-8 xl:pt-16">
        <SizeOptions />
      </div>
      <div>
        <CustomizationOptionsDark />
      </div>
      <div className="py-8 xl:py-16">
        <PlaceOrder />
      </div>
      <div className="py-8 xl:py-16">
        <DeliveredAndInstalled />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BuyingGuidePage;
