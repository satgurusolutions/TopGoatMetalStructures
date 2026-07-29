import HomeModule from '@/modules/home';
import { metaData } from '@/configs/meta-data';
import Script from 'next/script';

export const metadata = metaData;

// schema.ts or inside app/page.tsx
const homePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.topgoatmetalstructures.com/',
      url: 'https://www.topgoatmetalstructures.com/',
      name: 'Top Goat Metal Structures - Top Metal Building Supplier in USA',
      isPartOf: {
        '@id': 'https://www.topgoatmetalstructures.com/#website',
      },
      about: {
        '@id': 'https://www.topgoatmetalstructures.com/#organization',
      },
      datePublished: '2024-01-08T11:04:47+00:00',
      dateModified: '2024-12-30T06:05:21+00:00',
      description:
        'Top Goat Metal Structures is a top supplier of pre-engineered steel and metal buildings in the USA, renowned for providing fast, efficient, and cost-effective solutions.',
      breadcrumb: {
        '@id': 'https://www.topgoatmetalstructures.com/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.topgoatmetalstructures.com/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.topgoatmetalstructures.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
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
      sameAs: ['https://www.facebook.com/warriorbuildings/'],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script id="home-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(homePageSchema)}
      </Script>
      <HomeModule />
    </>
  );
}
