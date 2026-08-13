import { SeoMeta } from '@/types';
import { Metadata } from 'next';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.topgoatmetalstructures.com';
export const ogImage = `${baseUrl}/meta-data/web-app-manifest-1200x630.png`;

export const metaData: Metadata = {
  title: 'Top Goat Metal Structures - Top Metal Building Supplier in USA',
  description:
    'Top Goat Metal Structures is a top supplier of pre-engineered steel and metal buildings in the USA, renowned for providing fast, efficient, and cost-effective solutions.',
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
    canonical: baseUrl + '/',
  },
  openGraph: {
    title: 'Top Goat Metal Structures - Top Metal Building Supplier in USA',
    description:
      'Top Goat Metal Structures is a top supplier of pre-engineered steel and metal buildings in the USA, renowned for providing fast, efficient, and cost-effective solutions.',
    url: baseUrl + '/',
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
    title: 'Top Goat Metal Structures - Top Metal Building Supplier in USA',
    description:
      'Top Goat Metal Structures is a top supplier of pre-engineered steel and metal buildings in the USA, renowned for providing fast, efficient, and cost-effective solutions.',
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

export function buildMetadata(seo?: Partial<SeoMeta>, pageName?: string): Metadata {
  return {
    ...metaData,
    title: seo?.title || pageName || metaData.title,
    description: seo?.description || metaData.description,
    keywords: seo?.keywords || metaData.keywords,
    openGraph: {
      ...metaData.openGraph,
      title: seo?.og_title || seo?.title || pageName,
      description: seo?.og_description ?? seo?.description ?? metaData.openGraph?.description,
    },
    twitter: {
      ...metaData.twitter,
      title: seo?.twitter_title || seo?.title || pageName,
      description: seo?.twitter_description ?? seo?.description ?? metaData.twitter?.description,
    },
  };
}
