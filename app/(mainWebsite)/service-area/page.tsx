import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { ChooseArea, ServiceAreaDetails } from '@/components/service-area';
import { Ruler } from '@/components/shared';
import Script from 'next/script';

import { Metadata } from 'next';

const baseUrl = 'https://www.topgoatmetalstructures.com/';
const ogImage = `${baseUrl}/meta-data/og-image.jpg`; // replace if you have a specific OG image

export const metadata: Metadata = {
  title: 'Service Area Archive - Top Goat Metal Structures',
  description:
    'Explore the service areas covered by Top Goat Metal Structures across the United States. Find reliable, high-quality steel and metal building solutions in your region.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: baseUrl + '/service-area/',
  },
  openGraph: {
    title: 'Service Area Archive - Top Goat Metal Structures',
    description:
      'Explore the service areas covered by Top Goat Metal Structures across the United States. Find reliable, high-quality steel and metal building solutions in your region.',
    url: baseUrl + '/service-area/',
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'website',
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
    title: 'Service Area Archive - Top Goat Metal Structures',
    description:
      'Explore the service areas covered by Top Goat Metal Structures across the United States. Find reliable, high-quality steel and metal building solutions in your region.',
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: '/meta-data/favicon.png', sizes: '32x32' },
      { url: '/meta-data/web-app-manifest-192x192.png', sizes: '192x192' },
    ],
    apple: '/meta-data/apple-touch-icon.png',
    shortcut: '/meta-data/favicon.ico',
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

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.topgoatmetalstructures.com/service-area/',
      url: 'https://www.topgoatmetalstructures.com/service-area/',
      name: 'Service Area Archive - Top Goat Metal Structures',
      isPartOf: {
        '@id': 'https://www.topgoatmetalstructures.com/#website',
      },
      breadcrumb: {
        '@id': 'https://www.topgoatmetalstructures.com/service-area/#breadcrumb',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.topgoatmetalstructures.com/service-area/#breadcrumb',
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
          name: 'Service Area',
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

const ServiceAreaMapPage = () => {
  return (
    <div className="font-jost">
      <Script id="service-area-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceAreaSchema)}
      </Script>
      <HeroSection
        bgImg="/images/service-area/service-area-bg.webp"
        isBlur
        name={'Our Service Area'}
      />
      <div className="pb-8 lg:pb-16">
        <Ruler />
      </div>
      <div className="pb-8 lg:pb-16">
        <ServiceAreaDetails />
      </div>
      <div>
        <ChooseArea />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ServiceAreaMapPage;
