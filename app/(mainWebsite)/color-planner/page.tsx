import ColorPlanner from './ColorPlanner';
import { HeroSection } from '@/components/product-category';
import Footer from '@/components/footer';
import { baseUrl, ogImage } from '@/configs/meta-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Planner | Top Goat Metal Structures',
  description:
    'Design your perfect metal building with the Top Goat Metal Structures Color Planner. Preview roof, wall, and trim color combinations before ordering.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseUrl}/color-planner/`,
  },
  openGraph: {
    title: 'Color Planner | Top Goat Metal Structures',
    description:
      'Preview roof, wall, and trim color combinations for your custom metal garage, carport, barn, RV cover, or commercial building.',
    url: `${baseUrl}/color-planner/`,
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Top Goat Metal Structures Color Planner',
      },
    ],
  },
};

export default function ColorPlannerPage() {
  return (
    <>
      <HeroSection name="Color Planner" bgImg="/images/color-planner/banner.png" />

      <main className="bg-[#0b0b0b] text-white">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-4">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#c89b3c]/40 bg-[#c89b3c]/10 px-4 py-1 text-sm font-semibold tracking-[0.25em] text-[#c89b3c] uppercase">
                Color Planner
              </span>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
                Build Your Perfect Color Combination
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Explore color combinations for your custom metal building before placing your order.
                Mix and match roof, wall, and trim colors to create a garage, carport, barn, RV
                cover, or commercial building that perfectly complements your property.
              </p>
            </div>

            <div className="p-4 md:p-8">
              <ColorPlanner />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
