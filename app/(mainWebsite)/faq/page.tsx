import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { baseUrl, ogImage } from '@/configs/meta-data';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "FAQ's | Top Goat Metal Structures",
  description:
    'Find answers to common questions about Top Goat metal buildings, garages, carports, barns, RV covers, financing, installation, customization, and site preparation.',
  alternates: {
    canonical: `${baseUrl}/faq/`,
  },
  openGraph: {
    title: "FAQ's | Top Goat Metal Structures",
    description:
      'Get answers to frequently asked questions about custom steel buildings, delivery, installation, financing, warranties, and customization.',
    url: `${baseUrl}/faq/`,
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Top Goat Metal Structures Frequently Asked Questions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FAQ's | Top Goat Metal Structures",
    description:
      'Frequently asked questions about custom metal buildings, installation, financing, and customization.',
    images: [ogImage],
  },
};

const faqs = [
  {
    question: 'What types of metal buildings does Top Goat offer?',
    answer:
      'Top Goat Metal Structures offers custom metal carports, garages, barns, RV covers, utility buildings, workshops, commercial buildings, clear-span structures, and other steel building solutions.',
  },
  {
    question: 'Can I customize my metal building?',
    answer:
      'Yes. You can customize the width, length, height, roof style, colors, doors, windows, framing, panels, trim, lean-tos, insulation, anchors, and other building components.',
  },
  {
    question: 'What factors affect the price of a metal building?',
    answer:
      'The final price can be affected by the building size, roof style, steel gauge, certification requirements, installation location, doors, windows, insulation, site conditions, and other custom features.',
  },
  {
    question: 'Do you provide delivery and installation?',
    answer:
      'Yes. Delivery and professional installation are available throughout the states Top Goat serves. Installation availability and requirements may vary depending on your location and building configuration.',
  },
  {
    question: 'What should I do before the installation crew arrives?',
    answer:
      'Your installation area should be level, accessible, clear of debris, and prepared according to the requirements provided with your order. Concrete, asphalt, gravel, or ground installations may require different anchors and preparation.',
  },
  {
    question: 'Do I need a permit for my metal building?',
    answer:
      'Permit requirements vary by city, county, and state. Property owners are generally responsible for checking local zoning, setback, wind-load, snow-load, and permitting requirements before installation.',
  },
  {
    question: 'Are Top Goat buildings certified?',
    answer:
      'Certified building options are available for locations that require specific wind-load, snow-load, or engineering standards. Our team can help you choose the appropriate certification for your installation area.',
  },
  {
    question: 'Does Top Goat offer financing?',
    answer:
      'Yes. Financing options may be available for qualified customers to make purchasing a custom metal building more manageable. Terms, approval, and payment amounts depend on the financing provider and project.',
  },
  {
    question: 'What roof styles are available?',
    answer:
      'Available options may include regular roofs, boxed-eave roofs, and vertical roofs. Vertical roofs are often recommended for larger structures and areas with significant rain, snow, leaves, or other debris.',
  },
  {
    question: 'How long does delivery and installation take?',
    answer:
      'Delivery times depend on the building type, customization, location, weather, permitting, site readiness, and current installation schedule. Your project specialist can provide an estimated timeframe when your order is finalized.',
  },
  {
    question: 'Can I install a metal building on concrete?',
    answer:
      'Yes. Metal buildings can be installed on properly prepared concrete pads. Concrete dimensions, thickness, reinforcement, and anchor requirements should be confirmed before the pad is poured.',
  },
  {
    question: 'What warranties are available?',
    answer:
      'Warranty coverage varies depending on the building components, framing, panels, workmanship, and manufacturer. Your Top Goat representative can explain the warranty options available for your selected structure.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="top-goat-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <HeroSection name="Frequently Asked Questions" bgImg="/images/faq.png" />

      <main className="font-jost overflow-hidden bg-white text-[#111111]">
        {/* Hero Section */}
        <section className="relative isolate min-h-[430px] overflow-hidden bg-[#111111] pt-[120px] text-white">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/inner-banner.webp')",
            }}
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />

          <div className="mx-auto flex min-h-[310px] max-w-[1240px] items-center px-4 py-16 xl:px-0">
            <div className="max-w-[760px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-10 bg-[#f4a000]" />
                <span className="text-sm font-bold tracking-[0.22em] text-[#f4a000] uppercase">
                  Frequently Asked Questions
                </span>
              </div>

              <h1 className="max-w-[720px] text-4xl leading-[1.05] font-black tracking-[-0.03em] sm:text-5xl lg:text-[68px]">
                Answers to Your
                <span className="block text-[#f4a000]">Building Questions</span>
              </h1>

              <p className="mt-6 max-w-[670px] text-base leading-7 text-white/75 sm:text-lg">
                Learn more about pricing, customization, financing, site preparation, delivery, and
                installation before starting your Top Goat metal building project.
              </p>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 h-2 w-[40%] bg-[#f4a000]" />
        </section>

        {/* FAQ Introduction */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-4 xl:px-0">
            <div className="grid items-end gap-8 border-b border-black/10 pb-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="mb-4 inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.2em] text-[#d98d00] uppercase">
                  <span className="h-[2px] w-8 bg-[#f4a000]" />
                  Helpful Information
                </span>

                <h2 className="text-3xl leading-tight font-black tracking-[-0.03em] text-[#111111] sm:text-4xl lg:text-[54px]">
                  Everything You Need
                  <span className="block text-[#d98d00]">To Build With Confidence</span>
                </h2>
              </div>

              <p className="max-w-[640px] text-base leading-8 text-[#5f6368] lg:justify-self-end lg:text-lg">
                Explore answers to the questions customers commonly ask when planning a custom
                garage, carport, barn, RV cover, workshop, or commercial metal building.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_330px] xl:px-0">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-[20px] border border-black/10 bg-[#f7f7f5] transition-all duration-300 open:border-[#f4a000]/60 open:bg-white open:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-7 sm:py-6">
                    <span className="flex items-start gap-4 sm:gap-5">
                      <span className="mt-0.5 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#111111] text-xs font-black text-white transition-colors duration-300 group-open:bg-[#f4a000] group-open:text-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="text-base leading-7 font-extrabold text-[#151515] sm:text-lg">
                        {faq.question}
                      </span>
                    </span>

                    <span className="relative flex h-10 min-w-10 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-300 group-open:rotate-45 group-open:border-[#f4a000] group-open:bg-[#f4a000]">
                      <span className="absolute h-[2px] w-4 bg-[#111111]" />
                      <span className="absolute h-4 w-[2px] bg-[#111111]" />
                    </span>
                  </summary>

                  <div className="px-5 pb-6 sm:px-7 sm:pb-7">
                    <div className="border-t border-black/10 pt-5 sm:ml-14 sm:pt-6">
                      <p className="max-w-[800px] text-[15px] leading-7 text-[#60646a] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[26px] bg-[#111111] p-7 text-white sm:p-8">
                <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full bg-[#f4a000]/20 blur-2xl" />

                <span className="relative text-xs font-extrabold tracking-[0.2em] text-[#f4a000] uppercase">
                  Need More Help?
                </span>

                <h3 className="relative mt-4 text-3xl leading-tight font-black">
                  Let&apos;s Build Something Great
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-white/65">
                  Tell our team about your preferred size, building style, location, and custom
                  features. We&apos;ll help you plan the right structure for your property.
                </p>

                <a
                  href="/contact-us/"
                  className="relative mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#f4a000] px-6 text-sm font-black text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Talk to a Building Expert
                </a>

                <a
                  href="/get-a-quote/"
                  className="relative mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 text-sm font-black text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  Request a Free Quote
                </a>
              </div>

              <div className="mt-5 rounded-[24px] border border-black/10 bg-[#f7f7f5] p-7">
                <span className="text-xs font-extrabold tracking-[0.18em] text-[#d98d00] uppercase">
                  Before You Order
                </span>

                <h3 className="mt-3 text-xl font-black text-[#111111]">Check Local Requirements</h3>

                <p className="mt-3 text-sm leading-7 text-[#65686d]">
                  Contact your local building department to confirm permit, zoning, setback, wind,
                  and snow-load requirements for your property.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f4a000]">
          <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 py-12 lg:grid-cols-[1fr_auto] lg:py-16 xl:px-0">
            <div>
              <span className="text-xs font-extrabold tracking-[0.2em] text-black/60 uppercase">
                Ready to Get Started?
              </span>

              <h2 className="mt-3 max-w-[760px] text-3xl leading-tight font-black tracking-[-0.03em] text-[#111111] sm:text-4xl lg:text-[48px]">
                Get a Custom Metal Building Quote
              </h2>

              <p className="mt-4 max-w-[700px] text-base leading-7 text-black/65">
                Share your building size, installation location, and preferred features with the Top
                Goat team.
              </p>
            </div>

            <a
              href="/get-a-quote/"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#111111] px-8 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Get Your Free Quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
