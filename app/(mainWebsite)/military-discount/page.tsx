import Footer from '@/components/footer';
import MilitaryBenefitsSectionTwo from '@/components/military-benefits-section-two';
import { HeroSection } from '@/components/product-category';
import { QuoteForm, RichText, Ruler } from '@/components/shared';
import { Metadata } from 'next';
import { baseUrl, ogImage } from '@/configs/meta-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Military Discount on All Metal Structures | Top Goat Metal Structures',
  description:
    'Top Goat Metal Structures proudly supports our military & first responders by offering additional discounts on every metal structure. Check out more details here!',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/military-discount/',
  },
  openGraph: {
    title: 'Military Discount on All Metal Structures | Top Goat Metal Structures',
    description:
      'Top Goat Metal Structures proudly supports our military & first responders by offering additional discounts on every metal structure. Check out more details here!',
    url: baseUrl + '/military-discount/',
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
    title: 'Military Discount on All Metal Structures | Top Goat Metal Structures',
    description:
      'Top Goat Metal Structures proudly supports our military & first responders by offering additional discounts on every metal structure. Check out more details here!',
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
      '@id': 'https://www.topgoatmetalstructures.com/military-discount/',
      url: 'https://www.topgoatmetalstructures.com/military-discount/',
      name: 'Military Discount on All Metal Structures',
      isPartOf: {
        '@id': 'https://www.topgoatmetalstructures.com/#website',
      },
      datePublished: '2024-10-04T08:05:28+00:00',
      dateModified: '2024-12-26T07:57:25+00:00',
      description:
        'Top Goat Metal Structures proudly supports our military & first responders by offering additional discounts on every metal structure. Check out more details here!',
      breadcrumb: {
        '@id': 'https://www.topgoatmetalstructures.com/military-discount/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.topgoatmetalstructures.com/military-discount/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.topgoatmetalstructures.com/military-discount/#breadcrumb',
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
          name: 'Military Discount',
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

const MilitaryPage = () => {
  return (
    <div className="font-jost">
      <Script
        id="military-discount-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(schema)}
      </Script>
      <HeroSection isBlur name={'Military Discount'} bgImg="/images/military-bg.jpg" />

      <div className="pb-8 xl:pb-16">
        <Ruler />
      </div>
      <div className="pb-8 xl:pb-16">
        <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
          <div className="rounded-3xl border-[10px] border-[#E9E9EA99] shadow-[4px,4px,12px,0px,#0000001A]">
            <div className="rounded-3xl bg-white py-6">
              {' '}
              <h1 className="pb-8 text-center text-[32px] font-bold text-black uppercase">
                Military & First Responders Discount
              </h1>
              <QuoteForm isMilitary />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 pb-8 xl:pb-16 [@media(width=1280px)]:px-0">
        <RichText html='<div class="main_content"> <h2>Top Goat Metal Structures is proud to support</h2><p>Our military &amp; first responders and encourage everyone to learn more about the benefits of joining and serving our great nation. Benefits include:</p><h2>Steady Jobs with good pay</h2><p>Businesses in high-growth fields such as aerospace, manufacturing, logistics, research and development, and technology are seeking to hire combat veterans and provide them with the training they need to build a long and fruitful career.</p><p>Through the Department of Defense’s Spouse Education Career Opportunities (SECO) program, spouses can use government-sponsored career and education resources, take advantage of networking opportunities, and work with employment counselors. SECO also partners with the Military Spouse Employment Partnership (MSEP) and My Career Advancement Account (MyCAA) scholarship program.</p><p>If entrepreneurship interests you, learn about everything from start-up costs to business, accounting, and financial assistance with three programs: SCORE, the Small Business Administration(SBA), and Entrepreneurship Boot Camp</p><h2>Medical coverage</h2><p>The Veterans Health Administration is America’s largest integrated health care system, providing care at 1,240 health care facilities, including 170 medical centers and 1,061 outpatient sites of care of varying complexity (VHA outpatient clinics), serving 9 million enrolled Combat Veterans each year.</p><p>Many Combat Veterans qualify for cost-free health care services based on a compensable service-connected condition or other qualifying factors. Visit the US Department of Veterans Affairs for more information.</p> </div>' />
      </div>
      <div className="pb-8 xl:pb-16">
        <Ruler />
      </div>
      <div className="pb-8 xl:pb-16">
        <MilitaryBenefitsSectionTwo />
      </div>

      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
};

export default MilitaryPage;
