import { BlogListing } from '@/components/blog';
import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import { BlogPost } from '@/types';
import { Metadata } from 'next';
import { baseUrl, ogImage } from '@/configs/meta-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blog | Top Goat Metal Structures',
  description:
    'Read expert insights, tips, and guides from Top Goat Metal Structures. Learn everything about metal buildings, garages, carports, and more.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/blog/',
  },
  openGraph: {
    title: 'Blog | Top Goat Metal Structures',
    description:
      'Explore the Top Goat Metal Structures blog for expert advice, inspiration, and updates on metal buildings, garages, carports, and more.',
    url: baseUrl + '/blog/',
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
    title: 'Blog | Top Goat Metal Structures',
    description:
      'Read expert insights, tips, and guides from Top Goat Metal Structures. Learn everything about metal buildings, garages, carports, and more.',
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
      '@type': ['WebPage', 'CollectionPage'],
      '@id': 'https://www.topgoatmetalstructures.com/blog/',
      url: 'https://www.topgoatmetalstructures.com/blog/',
      name: 'Blog - Top Goat Metal Structures',
      isPartOf: {
        '@id': 'https://www.topgoatmetalstructures.com/#website',
      },
      datePublished: '2024-08-09T11:20:37+00:00',
      breadcrumb: {
        '@id': 'https://www.topgoatmetalstructures.com/blog/#breadcrumb',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.topgoatmetalstructures.com/blog/#breadcrumb',
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
          name: 'Blog',
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

export default async function BlogsPage() {
  let posts: Array<BlogPost> = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/posts.json`, // Adjust the URL to your API endpoint or data source
      { cache: 'force-cache' },
    );
    posts = ((await res.json()) as Array<BlogPost>) || [];
    if (!posts?.length) {
      return <div>Posts not found</div>;
    }
  } catch (error) {
    console.error(error);
    posts = [];
  }

  return (
    <div className="font-jost">
      <Script id={`blog-listing-schema`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection isBlur name="Blog" bgImg={posts?.[0]?.localImage ?? ''} />
      <div className="pb-8 lg:pb-14">
        <Ruler />
      </div>
      <div className="pb-8 lg:pb-14">
        <BlogListing posts={posts} />
      </div>

      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
