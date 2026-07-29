import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import ConcreteForm from './concreteform';

import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import { baseUrl, ogImage } from '@/configs/meta-data';

export const metadata: Metadata = {
  title: 'Concrete Foundation Guide for Metal Buildings | Top Goat Metal Structures',
  description:
    'Review Top Goat Metal Structures foundation guidance for slab dimensions, concrete thickness, reinforcement, drainage, curing, and installation readiness.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/concrete/',
  },
  openGraph: {
    title: 'Concrete Foundation Guide for Metal Buildings | Top Goat Metal Structures',
    description:
      'Plan a durable concrete foundation for your Warrior garage, barn, workshop, carport, or commercial steel structure.',
    url: baseUrl + '/concrete/',
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/concrete/2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Prepared concrete foundation for a Warrior metal building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concrete Foundation Guide for Metal Buildings | Top Goat Metal Structures',
    description:
      'Discover the key steps for preparing a dependable concrete foundation for your Warrior metal building.',
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
      '@id': `${baseUrl}/concrete/`,
      url: `${baseUrl}/concrete/`,
      name: 'Concrete Foundation Planning for Warrior Metal Buildings',
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      description:
        'Review Top Goat Metal Structures foundation guidance for slab dimensions, concrete thickness, reinforcement, drainage, curing, and installation readiness.',
      breadcrumb: {
        '@id': `${baseUrl}/concrete/#breadcrumb`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/concrete/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Top Goat Metal Structures Home',
          item: `${baseUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Foundation Planning',
        },
      ],
    },
  ],
};

const slabOptions = [
  {
    thickness: 'Standard 4-Inch Foundation',
    size: '4"',
    description:
      'A 4-inch slab is often suitable for residential Top Goat Metal Structures designed for everyday vehicles, storage, and lighter workloads.',
    uses: [
      'Cars and light vehicles',
      'Mowers and lawn equipment',
      'Household and property storage',
      'Light-duty workshops',
    ],
  },
  {
    thickness: 'Heavy-Duty 6-Inch Foundation',
    size: '6"',
    description:
      'A 6-inch slab may be the better choice when a Warrior building will carry heavier vehicles, machinery, or demanding commercial loads.',
    uses: [
      'Work trucks and heavy vehicles',
      'Tractors and farm machinery',
      'RVs and motorhomes',
      'Commercial-use equipment',
      'Vehicle lifts and shop equipment',
      'Industrial and fabrication machinery',
    ],
  },
];

const preparationItems = [
  {
    number: '01',
    title: 'Verify Your Final Building Footprint',
    description:
      'Use the approved Top Goat Metal Structures width and length when laying out the foundation. Verify every measurement before setting forms or ordering concrete.',
  },
  {
    number: '02',
    title: 'Create a Stable, Level Building Site',
    description:
      'Remove debris and unsuitable material, compact the base correctly, and establish a level surface before foundation work starts.',
  },
  {
    number: '03',
    title: 'Direct Water Away from the Foundation',
    description:
      'Shape the slab area and surrounding grade so rainwater moves away from the Warrior building instead of collecting near the foundation.',
  },
  {
    number: '04',
    title: 'Let the Concrete Gain Strength',
    description:
      'Give the slab adequate curing time before installation begins or vehicles, equipment, and other heavy loads are placed on it.',
  },
];

const concreteDetails = [
  {
    title: 'Strengthen the Slab',
    description:
      'Properly designed rebar, welded wire mesh, or fiber reinforcement can help control cracking and improve long-term slab performance.',
  },
  {
    title: 'Protect the Foundation from Water',
    description:
      'Maintain positive drainage around the slab so water flows away from the Warrior building rather than pooling beside the base rails.',
  },
  {
    title: 'Plan for the Full Curing Period',
    description:
      'Depending on the mix, weather, and site conditions, concrete may need about 28 days to develop its intended strength before carrying significant loads.',
  },
];

const bestPractices = [
  'Compare the form layout with the approved Top Goat Metal Structures dimensions before the pour.',
  'Provide continuous concrete support beneath every section of the building base rail.',
  'Review slab, notch, and anchoring details with your Top Goat Metal Structures representative.',
  'Build from approved measurements rather than estimates, assumptions, or nominal building sizes.',
];

export default function ConcretePage() {
  return (
    <>
      <div className="font-jost">
        <Script id="concrete-page-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(schema)}
        </Script>

        <HeroSection isBlur name="Warrior Concrete Foundations" bgImg="/images/concrete/2.jpeg" />

        <main className="overflow-hidden bg-white text-[#2C2B29]">
          <section className="bg-[#FCF8F8]">
            <div className="pb-8 xl:pb-16">
              <Ruler />
            </div>

            <div className="mx-auto grid items-center gap-10 px-4 pb-10 lg:grid-cols-2 lg:gap-16 xl:container xl:px-0 xl:pb-20 [@media(width=1280px)]:px-4">
              <div>
                <p className="text-accent mb-3 text-sm font-bold tracking-[0.18em] uppercase">
                  Warrior Strength Starts at the Foundation
                </p>
                <h1 className="text-accent text-3xl leading-tight font-bold sm:text-4xl xl:text-6xl">
                  Warrior Build the Right Foundation for Your Warrior Building
                </h1>
                <p className="mt-6 text-base leading-8 xl:text-xl">
                  A carefully planned concrete slab gives your Warrior building the solid, level,
                  and dependable support it needs for years of service.
                </p>
                <p className="mt-4 text-base leading-8 xl:text-xl">
                  Before concrete is placed, verify the approved footprint, required thickness,
                  reinforcement, drainage plan, and all applicable local requirements.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {/* <Link
                    href="/contact-us"
                    className="bg-accent inline-flex min-h-12 items-center justify-center rounded-4xl px-7 py-3 font-bold text-white transition hover:opacity-90"
                  >
                    Get Your Warrior Building Quote
                  </Link> */}
                  <ConcreteForm />
                  <a
                    href="tel:8885760565"
                    className="inline-flex min-h-12 items-center justify-center rounded-4xl border-2 border-[#2C2B29] px-7 py-3 font-bold text-[#2C2B29] transition hover:bg-[#2C2B29] hover:text-white"
                  >
                    Speak With Top Goat Metal Structures
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[440px]">
                <Image
                  src="/images/concrete/2.jpeg"
                  alt="Fresh concrete slab prepared for a Warrior metal building"
                  fill
                  priority
                  className="rounded-4xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <Ruler variant={2} />
          </section>

          <section className="py-10 xl:py-20">
            <div className="mx-auto grid items-start gap-10 px-4 lg:grid-cols-2 lg:gap-16 xl:container xl:px-0 [@media(width=1280px)]:px-4">
              <div className="grid gap-5">
                <div className="relative min-h-[320px] overflow-hidden sm:min-h-[430px]">
                  <Image
                    src="/images/concrete/1.jpeg"
                    alt="Warrior building base rail positioned on a concrete foundation"
                    fill
                    className="rounded-4xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="relative min-h-[320px] overflow-hidden sm:min-h-[430px]">
                  <Image
                    src="/images/concrete/4.jpeg"
                    alt="Concrete foundation detail prepared for a Warrior building"
                    fill
                    className="rounded-4xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div>
                <p className="text-accent mb-3 text-sm font-bold tracking-[0.18em] uppercase">
                  Warrior Foundation Planning
                </p>
                <h2 className="text-accent text-3xl leading-tight font-bold sm:text-4xl xl:text-5xl">
                  Prepare the Foundation Before Your Warrior Building Arrives
                </h2>
                <p className="mt-6 text-base leading-8 xl:text-xl">
                  The foundation is a critical part of every Warrior building project. It supports
                  the frame, provides a durable finished floor, and gives the anchors and base rails
                  a secure surface for installation.
                </p>
                <p className="mt-5 text-base leading-8 xl:text-xl">
                  Foundation specifications can change with building size, intended use, soil
                  conditions, engineered requirements, and local codes. Confirm the final Warrior
                  Buildings plans before any concrete is ordered or poured.
                </p>

                <div className="mt-8 rounded-4xl border-l-4 border-[#9A1B1F] bg-[#FCF8F8] p-6 xl:p-8">
                  <h3 className="text-accent text-2xl font-bold">Perimeter Notch Guidance</h3>
                  <p className="mt-3 leading-7">
                    Some enclosed Top Goat Metal Structures may use a perimeter notch along the slab
                    edge. This recessed detail allows the lower wall panels to sit neatly against
                    the concrete and creates a cleaner transition at the foundation.
                  </p>
                  <p className="mt-3 leading-7">
                    Review the required notch width, depth, and placement with your Warrior
                    Buildings representative before the concrete contractor begins the pour.
                  </p>
                </div>

                <div className="mt-6 rounded-4xl border border-[#D9D1CB] p-6 xl:p-8">
                  <h3 className="text-accent text-2xl font-bold">
                    Z Clip Option for Previously Poured Concrete
                  </h3>
                  <p className="mt-4 leading-7">
                    When a concrete pad has already been completed without the recommended perimeter
                    notch, Top Goat Metal Structures may recommend Z clips as an alternative
                    lower-wall connection. This detail can help secure the panel base and improve
                    alignment where the siding meets the slab.
                  </p>
                  <p className="mt-3 leading-7">
                    Z clips cannot repair a slab that is too small, out of level, or otherwise
                    unsuitable. The concrete must still match the approved Warrior building
                    footprint and fully support all base rails.
                  </p>
                  <div className="mt-5 bg-[#FCF8F8] p-5">
                    <p className="font-bold">Approval Is Required Before Using Z Clips</p>
                    <p className="mt-2 leading-7">
                      Top Goat Metal Structures must verify the clip size, spacing, fasteners, and
                      installation location for the specific structure. Engineered documentation or
                      local code approval may also be necessary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#2C2B29] py-10 text-white xl:py-20">
            <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#E5B45B] uppercase">
                  Foundation Thickness Guidelines
                </p>
                <h2 className="text-3xl leading-tight font-bold sm:text-4xl xl:text-5xl">
                  Match the Slab to the Way You Will Use Your Warrior Building
                </h2>
                <p className="mt-5 text-base leading-8 text-white/80 xl:text-xl">
                  Slab thickness should reflect the building&apos;s purpose, expected vehicle and
                  equipment loads, soil conditions, reinforcement design, and local requirements.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:mt-14">
                {slabOptions.map((option) => (
                  <article
                    key={option.thickness}
                    className="rounded-4xl border border-white/20 p-6 xl:p-9"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#9A1B1F] text-2xl font-bold">
                        {option.size}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{option.thickness}</h3>
                        <p className="mt-2 leading-7 text-white/75">{option.description}</p>
                      </div>
                    </div>

                    <div className="mt-7 border-t border-white/20 pt-6">
                      <p className="font-bold tracking-wide text-[#E5B45B] uppercase">
                        Common applications
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {option.uses.map((use) => (
                          <li key={use} className="flex items-center gap-3 text-white/85">
                            <span className="h-2 w-2 shrink-0 bg-[#E5B45B]" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mx-auto mt-7 max-w-4xl text-center leading-7 text-white/65">
                These guidelines are provided for general planning only. Confirm the final slab
                design, thickness, reinforcement, and footing requirements using the approved
                Warrior building plans, site conditions, engineering, and local codes.
              </p>
            </div>
          </section>

          <section className="bg-[#FCF8F8] py-10 xl:py-20">
            <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-accent mb-3 text-sm font-bold tracking-[0.18em] uppercase">
                  Plan the Foundation First
                </p>
                <h2 className="text-accent text-3xl leading-tight font-bold sm:text-4xl xl:text-5xl">
                  Important Warrior Foundation Planning Steps
                </h2>
                <p className="mt-5 text-base leading-8 xl:text-xl">
                  Completing these checks before the pour can reduce installation delays, prevent
                  unsupported areas, and help avoid expensive foundation modifications.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:mt-14">
                {preparationItems.map((item) => (
                  <article
                    key={item.number}
                    className="rounded-4xl border border-[#D9D1CB] bg-white p-6 xl:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#9A1B1F] font-bold text-white">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-accent text-xl font-bold xl:text-2xl">{item.title}</h3>
                        <p className="mt-3 leading-7">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {concreteDetails.map((detail) => (
                  <article
                    key={detail.title}
                    className="rounded-4xl border-t-4 border-[#9A1B1F] bg-white p-6 xl:p-8"
                  >
                    <h3 className="text-accent text-xl font-bold xl:text-2xl">{detail.title}</h3>
                    <p className="mt-4 leading-7">{detail.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-10 xl:py-20">
            <div className="mx-auto grid items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 xl:container xl:px-0 [@media(width=1280px)]:px-4">
              <div className="relative min-h-[340px] overflow-hidden sm:min-h-[480px]">
                <Image
                  src="/images/concrete/3.jpeg"
                  alt="Example of Warrior building base rails extending beyond an undersized slab"
                  fill
                  className="rounded-4xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-0 left-0 bg-[#9A1B1F] px-5 py-3 text-sm font-bold tracking-wide text-white uppercase">
                  Avoid This Installation Problem
                </div>
              </div>

              <div>
                <p className="text-accent mb-3 text-sm font-bold tracking-[0.18em] uppercase">
                  An Undersized Slab Creates Major Problems
                </p>
                <h2 className="text-accent text-3xl leading-tight font-bold sm:text-4xl xl:text-5xl">
                  The Entire Warrior Building Must Fit on the Foundation
                </h2>
                <p className="mt-6 text-base leading-8 xl:text-xl">
                  This example shows a concrete pad that does not match the building footprint.
                  Parts of the frame and base rails extend beyond the slab edge, leaving critical
                  areas without proper support.
                </p>
                <p className="mt-5 text-base leading-8 xl:text-xl">
                  The completed slab should match the approved Top Goat Metal Structures dimensions
                  so the whole structure rests securely on concrete. A pad that is too small can
                  stop installation, require costly corrections, and reduce long-term performance.
                </p>

                <div className="mt-8 rounded-4xl bg-[#FCF8F8] p-6 xl:p-8">
                  <h3 className="text-accent text-2xl font-bold">Warrior Foundation Checklist</h3>
                  <ul className="mt-5 space-y-4">
                    {bestPractices.map((practice) => (
                      <li key={practice} className="flex gap-3 leading-7">
                        <span className="mt-2.5 h-2 w-2 shrink-0 bg-[#9A1B1F]" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#9A1B1F] py-10 text-white xl:py-16">
            <div className="mx-auto flex flex-col items-start justify-between gap-8 px-4 lg:flex-row lg:items-center xl:container xl:px-0 [@media(width=1280px)]:px-4">
              <div>
                <p className="text-sm font-bold tracking-[0.18em] text-white/70 uppercase">
                  Plan Plan the Foundation First
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl xl:text-5xl">
                  Review Your Foundation Details With Top Goat Metal Structures
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/85 xl:text-xl">
                  Talk with the Top Goat Metal Structures team before the pour to verify your
                  building footprint, slab dimensions, notch details, and installation-specific
                  foundation requirements.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-12 items-center justify-center rounded-4xl bg-white px-7 py-3 font-bold text-[#2C2B29] transition hover:bg-[#2C2B29] hover:text-white"
                >
                  Get Your Warrior Building Quote
                </Link>
                <a
                  href="tel:8885760565"
                  className="inline-flex min-h-12 items-center justify-center rounded-4xl border-2 border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#2C2B29]"
                >
                  Speak With Top Goat Metal Structures
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
