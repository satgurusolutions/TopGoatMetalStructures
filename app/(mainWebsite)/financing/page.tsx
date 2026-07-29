import Footer from '@/components/footer';
import { NeedToTalk } from '@/components/home';
import { Ruler } from '@/components/shared';
import { baseUrl, ogImage } from '@/configs/meta-data';
import { HeroSection } from '@/components/product-category';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Metal Building Financing | Top Goat Metal Structures',
  description:
    'Explore flexible financing options for custom metal garages, carports, barns, RV covers, workshops, and commercial steel buildings.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseUrl}/financing/`,
  },
  openGraph: {
    title: 'Metal Building Financing | Top Goat Metal Structures',
    description:
      'Build your metal structure now and pay over time with flexible financing options.',
    url: `${baseUrl}/financing/`,
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Top Goat Metal Structures financing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metal Building Financing | Top Goat Metal Structures',
    description: 'Explore flexible financing options for your custom metal building.',
    images: [ogImage],
  },
  metadataBase: new URL(baseUrl),
};

const financingBenefits = [
  'Fast and simple approval process',
  'Financing terms up to 84 months',
  '$0 down options on qualifying buildings',
  'Military and first-responder discount',
];

const financeFeatures = [
  {
    number: '01',
    title: 'Quick Application',
    description:
      'Complete a straightforward financing application with help from our experienced building specialists.',
  },
  {
    number: '02',
    title: 'Flexible Terms',
    description:
      'Qualified customers may choose financing terms of up to 84 months, depending on programme approval.',
  },
  {
    number: '03',
    title: 'Affordable Payments',
    description:
      'Divide the cost of your building into manageable monthly payments instead of paying the full amount upfront.',
  },
  {
    number: '04',
    title: 'Custom Structures',
    description:
      'Financing may be available for qualifying garages, carports, barns, RV covers, workshops, and commercial buildings.',
  },
];

const financingSteps = [
  {
    number: '01',
    title: 'Choose Your Building',
    description:
      'Select the dimensions, roof style, colours, doors, windows, and custom features for your structure.',
  },
  {
    number: '02',
    title: 'Get Your Quote',
    description:
      'Our team will prepare a detailed quote based on your building design and installation location.',
  },
  {
    number: '03',
    title: 'Apply For Financing',
    description:
      'Complete the financing application and review the payment options available for your project.',
  },
  {
    number: '04',
    title: 'Confirm Your Order',
    description:
      'After approval, confirm your building details so we can begin coordinating delivery and installation.',
  },
];

const buildingTypes = [
  {
    title: 'Metal Garages',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
    description:
      'Finance a secure garage for vehicles, storage, equipment, or a personal workshop.',
  },
  {
    title: 'Metal Carports',
    image:
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85',
    description:
      'Protect cars, trucks, boats, trailers, and outdoor equipment with a custom steel carport.',
  },
  {
    title: 'Metal Barns',
    image:
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=85',
    description:
      'Create dependable agricultural space for livestock, farm equipment, feed, and storage.',
  },
  {
    title: 'Commercial Buildings',
    image:
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85',
    description:
      'Explore financing for qualifying warehouses, workshops, retail spaces, and commercial structures.',
  },
];

const faqs = [
  {
    question: 'What types of metal buildings can be financed?',
    answer:
      'Financing may be available for qualifying metal garages, carports, barns, RV covers, workshops, storage buildings, and commercial steel structures.',
  },
  {
    question: 'How long are the financing terms?',
    answer:
      'Qualified customers may receive terms of up to 84 months. Available terms depend on the selected programme, project price, eligibility, and lender approval.',
  },
  {
    question: 'Is a down payment required?',
    answer:
      'Some qualifying buildings and applicants may be eligible for a $0 down option. Deposit requirements vary according to the lender and financing programme.',
  },
  {
    question: 'How do I begin the application process?',
    answer:
      'Start by requesting a building quote. Once the building specifications and estimated price are confirmed, our team can help you move forward with the financing application.',
  },
  {
    question: 'Can custom building options be financed?',
    answer:
      'Approved custom features may be included in the financed project price, including doors, windows, lean-tos, enclosed sections, and other qualifying options.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}/financing/#webpage`,
      url: `${baseUrl}/financing/`,
      name: 'Metal Building Financing',
      description:
        'Explore flexible financing options for custom metal buildings from Top Goat Metal Structures.',
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      breadcrumb: {
        '@id': `${baseUrl}/financing/#breadcrumb`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/financing/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${baseUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Financing',
          item: `${baseUrl}/financing/`,
        },
      ],
    },
  ],
};

export default function FinancingPage() {
  return (
    <main className="font-jost overflow-hidden bg-[#f5f2eb] text-[#151517]">
      <Script id="financing-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      {/* Hero */}
      <HeroSection name="Financing Top Goat Metal Structures" bgImg="/images/contact-us-bg.webp" />

      <div className="pb-8 lg:pb-16">
        <Ruler />
      </div>

      {/* Introduction */}
      <section className="bg-[#f5f2eb] pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative">
            <div className="relative min-h-[500px] overflow-hidden rounded-[24px] bg-[#111113] sm:min-h-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85"
                alt="Metal building construction project"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute right-0 bottom-0 left-0 p-7 sm:p-9">
                <span className="font-oswald text-xs font-semibold tracking-[0.16em] text-[#e7b53c] uppercase">
                  Flexible Financing
                </span>

                <h2 className="font-anton mt-2 max-w-[470px] text-4xl leading-[0.95] text-white uppercase sm:text-5xl">
                  Your Building Is Within Reach
                </h2>
              </div>
            </div>

            <div className="absolute -right-4 -bottom-5 hidden rounded-[16px] border border-[#e7b53c]/30 bg-[#111113] px-6 py-5 text-white shadow-2xl sm:block lg:-right-8">
              <span className="font-anton block text-4xl text-[#e7b53c]">84 Months</span>

              <span className="font-oswald mt-1 block text-xs tracking-[0.13em] text-white/65 uppercase">
                Terms available
              </span>
            </div>
          </div>

          <div>
            <span className="font-oswald inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#a87a1c] uppercase">
              <span className="h-px w-7 bg-[#d9a225]" />
              Finance Your Building
            </span>

            <h2 className="font-anton mt-5 text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] uppercase">
              Build Today
              <span className="block bg-gradient-to-r from-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
                Pay Over Time
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-[#625d54]">
              <p>
                A dependable metal building is an important investment, but paying the entire
                project cost upfront may not fit your current budget.
              </p>

              <p>
                Top Goat Metal Structures helps qualified customers explore financing options
                designed to divide the approved building cost into manageable monthly payments.
              </p>

              <p>
                Our building specialists will help you finalise your structure, prepare an accurate
                quote, and understand the available financing process before you submit an
                application.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact-us?subject=Financing"
                className="font-oswald inline-flex min-h-[56px] items-center justify-center rounded-[9px] bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-7 text-sm font-bold tracking-[0.04em] text-[#171109] uppercase transition hover:-translate-y-1"
              >
                Explore Financing
              </Link>

              <Link
                href="/building-gallery"
                className="font-oswald inline-flex min-h-[56px] items-center justify-center rounded-[9px] border border-black/20 px-7 text-sm font-bold tracking-[0.04em] uppercase transition hover:border-[#a87a1c] hover:text-[#a87a1c]"
              >
                Browse Buildings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#0b0b0d] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="font-oswald text-[11px] font-semibold tracking-[0.22em] text-[#e7b53c] uppercase">
                Financing Benefits
              </span>

              <h2 className="font-anton mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.92] uppercase">
                Flexible Options
                <span className="block text-[#e7b53c]">Built Around You</span>
              </h2>
            </div>

            <p className="max-w-[650px] text-[17px] leading-8 text-[#aaa397]">
              Move forward with the building your property needs while keeping more of your
              available cash for equipment, improvements, operations, or other priorities.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {financeFeatures.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-[16px] border border-white/10 bg-[#151517] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e7b53c]/45"
              >
                <div className="flex items-center justify-between">
                  <span className="font-anton text-4xl text-[#e7b53c]">{feature.number}</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7b53c]/25 text-[#e7b53c] transition group-hover:bg-[#e7b53c] group-hover:text-black">
                    →
                  </span>
                </div>

                <h3 className="font-oswald mt-7 text-xl font-bold uppercase">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#aaa397]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Building types */}
      <section className="bg-[#f5f2eb] py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
          <header className="mx-auto max-w-[800px] text-center">
            <span className="font-oswald inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#a87a1c] uppercase">
              <span className="h-px w-7 bg-[#d9a225]" />
              Buildings You Can Finance
            </span>

            <h2 className="font-anton mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.92] uppercase">
              Finance The Structure
              <span className="block bg-gradient-to-r from-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
                Your Property Needs
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-7 text-[#6d675c]">
              Financing may be available for a wide range of qualifying custom metal structures and
              approved building options.
            </p>
          </header>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {buildingTypes.map((building) => (
              <article
                key={building.title}
                className="group relative min-h-[430px] overflow-hidden rounded-[20px] bg-[#151517]"
              >
                <Image
                  src={building.image}
                  alt={building.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute right-0 bottom-0 left-0 p-7 sm:p-9">
                  <span className="font-oswald text-[11px] font-semibold tracking-[0.16em] text-[#e7b53c] uppercase">
                    Financing Available
                  </span>

                  <h3 className="font-anton mt-2 text-4xl text-white uppercase">
                    {building.title}
                  </h3>

                  <p className="mt-3 max-w-[480px] text-sm leading-6 text-white/70">
                    {building.description}
                  </p>

                  <Link
                    href="/contact-us?subject=Building%20Financing"
                    className="font-oswald mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-[0.06em] text-[#e7b53c] uppercase"
                  >
                    Check Financing
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="font-oswald inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#a87a1c] uppercase">
              <span className="h-px w-7 bg-[#d9a225]" />
              How Financing Works
            </span>

            <h2 className="font-anton mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.92] uppercase">
              Four Simple
              <span className="block bg-gradient-to-r from-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
                Steps Forward
              </span>
            </h2>

            <div className="mt-10 border-t border-black/10">
              {financingSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[55px_190px_1fr]"
                >
                  <span className="font-anton text-3xl text-[#b27a0c]">{step.number}</span>

                  <h3 className="font-oswald text-lg font-bold uppercase">{step.title}</h3>

                  <p className="text-sm leading-6 text-[#6d675c]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[24px] bg-[#151517] lg:min-h-[700px]">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85"
              alt="Steel building installation"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute right-0 bottom-0 left-0 p-8 sm:p-10">
              <span className="font-oswald text-xs font-semibold tracking-[0.17em] text-[#e7b53c] uppercase">
                Start Your Project
              </span>

              <h3 className="font-anton mt-3 max-w-[500px] text-4xl leading-[0.95] text-white uppercase sm:text-5xl">
                From Your First Quote To Final Installation
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Military discount */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#b27a0c] py-16">
        <div className="absolute top-1/2 -right-20 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-black/10" />
        <div className="absolute top-1/2 right-10 h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-black/10" />

        <div className="relative mx-auto flex max-w-[1240px] flex-col justify-between gap-8 px-5 sm:px-7 lg:flex-row lg:items-center">
          <div className="max-w-[810px]">
            <span className="font-oswald text-[11px] font-bold tracking-[0.2em] text-black/65 uppercase">
              Thank You For Your Service
            </span>

            <h2 className="font-anton mt-3 text-4xl leading-none text-[#15110a] uppercase sm:text-5xl">
              Military & First-Responder Discount
            </h2>

            <p className="mt-4 max-w-[730px] text-[15px] leading-7 text-black/70">
              Eligible active military members, veterans, police officers, firefighters, EMTs, and
              first responders may qualify for an additional discount on their metal building order.
            </p>
          </div>

          <Link
            href="/contact-us?subject=Military%20and%20First%20Responder%20Discount"
            className="font-oswald inline-flex min-h-[56px] shrink-0 items-center justify-center rounded-[9px] bg-[#101012] px-8 text-sm font-bold tracking-[0.05em] text-white uppercase transition hover:-translate-y-1"
          >
            Request Your Discount
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#0b0b0d] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-oswald text-[11px] font-semibold tracking-[0.22em] text-[#e7b53c] uppercase">
              Financing FAQ
            </span>

            <h2 className="font-anton mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.92] uppercase">
              Common
              <span className="block text-[#e7b53c]">Questions</span>
            </h2>

            <p className="mt-6 max-w-[440px] text-[16px] leading-7 text-[#aaa397]">
              Contact our building specialists for financing information specific to your structure,
              location, project price, and application.
            </p>

            <Link
              href="/contact-us?subject=Financing%20Question"
              className="font-oswald mt-8 inline-flex min-h-[54px] items-center justify-center rounded-[9px] bg-[#e7b53c] px-7 text-sm font-bold tracking-[0.05em] text-black uppercase transition hover:-translate-y-1"
            >
              Ask A Specialist
            </Link>
          </div>

          <div className="border-t border-white/10">
            {faqs.map((faq, index) => (
              <article key={faq.question} className="border-b border-white/10 py-7">
                <div className="flex gap-5">
                  <span className="font-anton text-2xl text-[#e7b53c]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="font-oswald text-lg font-bold uppercase sm:text-xl">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#aaa397]">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NeedToTalk />

      <Footer />
    </main>
  );
}
