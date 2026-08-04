import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { baseUrl, ogImage } from '@/configs/meta-data';
import { Metadata } from 'next';
import Script from 'next/script';
import ComponentsClient from './ComponentsClient';

export const metadata: Metadata = {
  title: 'Building Components | Top Goat Metal Structures',
  description:
    'Explore premium building components from Top Goat Metal Structures including garage doors, walk-in doors, windows, anchors, trims, headers, metal panels, Dutch corners, flood vents, lap siding, and more.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseUrl}/building-components/`,
  },
  openGraph: {
    title: 'Building Components | Top Goat Metal Structures',
    description:
      'Discover the premium components used to build durable Top Goat Metal Structures. Learn about doors, windows, trims, anchors, metal panels, and more.',
    url: `${baseUrl}/building-components/`,
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Top Goat Metal Structures Building Components',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building Components | Top Goat Metal Structures',
    description:
      'Premium steel building components engineered for strength, durability, and long-lasting performance.',
    images: [ogImage],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Building Components',
  description:
    'Explore the premium components available for Top Goat Metal Structures including garage doors, windows, trims, anchors, metal panels, headers, and more.',
  url: `${baseUrl}/building-components/`,
  publisher: {
    '@type': 'Organization',
    name: 'Top Goat Metal Structures',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logo.png`,
    },
  },
};

export default function ComponentsPage() {
  return (
    <main className="font-jost bg-[#0a0a0b] text-white">
      <Script
        id="building-components-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <HeroSection name="Building Components" bgImg="/images/components/banner.png" />

      <ComponentsClient />

      <Footer />
    </main>
  );
}
