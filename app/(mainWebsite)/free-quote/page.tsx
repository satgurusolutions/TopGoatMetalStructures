import Footer from '@/components/footer';
import { NeedToTalk, Review } from '@/components/home';
import { GetAQuote, HeroSection } from '@/components/product-category';
import { baseUrl, ogImage } from '@/configs/meta-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Metal Building Quote | Top Goat Metal Structures',
  description:
    'Request a free, no-obligation quote from Top Goat Metal Structures. Get competitive pricing on custom metal garages, carports, barns, RV covers, commercial steel buildings, and more.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseUrl}/free-quote/`,
  },
  openGraph: {
    title: 'Free Metal Building Quote | Top Goat Metal Structures',
    description:
      'Start your custom steel building project today. Receive a free quote on metal garages, carports, barns, RV covers, workshops, and commercial buildings from Top Goat Metal Structures.',
    url: `${baseUrl}/free-quote/`,
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
    title: 'Free Metal Building Quote | Top Goat Metal Structures',
    description:
      'Get a fast, free quote for your custom metal building from Top Goat Metal Structures.',
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
  manifest: `${baseUrl}/meta-data/site.webmanifest`,
  metadataBase: new URL(baseUrl),
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Top Goat Metal Structures',
  },
};

export default function FreeQuotePage() {
  return (
    <div className="font-inter">
      <HeroSection
        bgImg="/images/free-quote.png"
        name="Get Your Free Metal Building Quote"
        description="Tell us about your project and receive a fast, no-obligation quote for a custom metal garage, carport, barn, RV cover, or commercial steel building."
      />

      <div className="bg-[#EBF7FC]/40 py-16">
        <GetAQuote isReversed />
      </div>

      <div className="pt-16">
        <Review />
      </div>

      <NeedToTalk />

      <Footer />
    </div>
  );
}
