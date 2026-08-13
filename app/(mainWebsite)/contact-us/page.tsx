import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import { ADDRESS, ADDRESS_HREF, EMAIL_ADDRESS } from '@/configs/navigation.config';
import { baseUrl, ogImage } from '@/configs/meta-data';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

const PHONE_DISPLAY = '(336) 509-3443';
const PHONE_HREF = 'tel:tel:+13365093443';
const FACEBOOK_URL = 'https://www.facebook.com/topgoatmetalstructures';

export const metadata: Metadata = {
  title: 'Contact Top Goat Metal Structures | Get a Free Building Quote',
  description:
    'Contact Top Goat Metal Structures for a free quote on custom metal buildings, garages, carports, barns, RV covers, workshops, and commercial steel structures.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseUrl}/contact-us/`,
  },
  openGraph: {
    title: 'Contact Top Goat Metal Structures | Get a Free Building Quote',
    description:
      'Speak with the Top Goat team about your custom metal building and request a free, no-obligation quote.',
    url: `${baseUrl}/contact-us/`,
    siteName: 'Top Goat Metal Structures',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Top Goat Metal Structures custom steel buildings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Top Goat Metal Structures | Get a Free Building Quote',
    description:
      'Request a free quote for a custom metal garage, carport, barn, RV cover, workshop, or commercial building.',
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
  manifest: `${baseUrl}/meta-data/site.webmanifest`,
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
      '@type': 'ContactPage',
      '@id': `${baseUrl}/contact-us/#webpage`,
      url: `${baseUrl}/contact-us/`,
      name: 'Contact Top Goat Metal Structures',
      description:
        'Contact Top Goat Metal Structures for custom metal building pricing, design guidance, delivery information, and installation assistance.',
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      breadcrumb: {
        '@id': `${baseUrl}/contact-us/#breadcrumb`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/contact-us/#breadcrumb`,
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
          name: 'Contact Us',
          item: `${baseUrl}/contact-us/`,
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Top Goat Metal Structures',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
        contentUrl: `${baseUrl}/images/logo.png`,
        caption: 'Top Goat Metal Structures',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-888-576-0565',
        contactType: 'sales and customer service',
        availableLanguage: 'English',
      },
      sameAs: [FACEBOOK_URL],
    },
  ],
};

const buildingTypes = [
  'Metal Garages',
  'Metal Carports',
  'Metal Barns',
  'RV Covers',
  'Workshops',
  'Commercial Buildings',
];

const contactCards = [
  {
    title: 'Call Our Team',
    text: 'Speak directly with a building specialist about pricing, dimensions, options, delivery, and installation.',
    label: PHONE_DISPLAY,
    href: PHONE_HREF,
    icon: 'phone',
  },
  {
    title: 'Email Top Goat',
    text: 'Send your building details, preferred size, installation location, and any questions to our team.',
    label: EMAIL_ADDRESS.formatted,
    href: EMAIL_ADDRESS.href,
    icon: 'mail',
  },
  {
    title: 'Visit Our Office',
    text: 'Connect with our team at our North Carolina office during regular business hours.',
    label: ADDRESS,
    href: ADDRESS_HREF,
    icon: 'location',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Share Your Building Needs',
    text: 'Tell us the building type, width, length, height, installation ZIP code, and the features you need.',
  },
  {
    number: '02',
    title: 'Review Your Options',
    text: 'Our team will help you compare roof styles, colours, doors, windows, lean-tos, and other custom options.',
  },
  {
    number: '03',
    title: 'Receive Your Quote',
    text: 'We will prepare clear project pricing and explain the next steps for ordering, delivery, and installation.',
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === 'phone') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (type === 'mail') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ContactUsPage() {
  return (
    <div className="font-jost bg-white text-[#1A1A1A]">
      <Script id="contact-us-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroSection name="Contact Top Goat" bgImg="/images/contact-us.png" />

      <main className="overflow-hidden">
        <section className="bg-[#F7F7F7]">
          <div className="pb-8 lg:pb-12">
            <Ruler />
          </div>

          <div className="mx-auto max-w-[1240px] px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#c89411] uppercase">
                  Let&apos;s Build Something Strong
                </p>
                <h1 className="max-w-4xl text-4xl leading-[1.08] font-bold text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                  Tell Us About Your Metal Building Project
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#5F6368] sm:text-lg">
                  Top Goat Metal Structures helps customers plan dependable steel buildings for
                  vehicles, equipment, storage, agriculture, workshops, and commercial use. Share
                  your project details and our team will help you move from an idea to a building
                  designed around your property and goals.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c89411] px-7 py-3 font-bold text-white transition hover:bg-[#AA1820]"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={EMAIL_ADDRESS.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#1A1A1A] px-7 py-3 font-bold text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
                  >
                    Email Our Team
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-[#1A1A1A] p-6 text-white shadow-xl sm:p-8 lg:p-10">
                <p className="text-sm font-bold tracking-[0.18em] text-[#C9A227] uppercase">
                  What We Can Help With
                </p>
                <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">
                  Custom Structures Built Around Your Needs
                </h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {buildingTypes.map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c89411] text-xs font-bold">
                        ✓
                      </span>
                      <span className="font-medium text-white/90">{type}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 border-t border-white/15 pt-6">
                  <p className="text-sm text-white/60">Business hours</p>
                  <p className="mt-1 text-lg font-bold">Monday–Friday: 8:00 AM–5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Ruler variant={2} />
        </section>

        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#c89411] uppercase">
                Contact Top Goat
              </p>
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                Choose the Easiest Way to Reach Us
              </h2>
              <p className="mt-5 text-base leading-8 text-[#5F6368] sm:text-lg">
                Whether you are ready for pricing or still comparing your options, our team is here
                to answer questions and help you plan the right structure.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group flex h-full flex-col rounded-3xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c89411] hover:shadow-xl sm:p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89411] text-white">
                    <ContactIcon type={card.icon} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-[#5F6368]">{card.text}</p>
                  <span className="mt-6 font-bold break-words text-[#c89411] group-hover:underline">
                    {card.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A1A1A] py-12 text-white lg:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="text-sm font-bold tracking-[0.18em] text-[#C9A227] uppercase">
                  A Simple Quote Process
                </p>
                <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                  From Your First Call to a Clear Building Plan
                </h2>
                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  You do not need every detail figured out before contacting us. Start with the
                  basics, and the Top Goat team will help you understand the available options.
                </p>
              </div>

              <div className="grid gap-5">
                {processSteps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 sm:grid-cols-[70px_1fr] sm:p-7"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89411] text-lg font-bold">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 leading-7 text-white/70">{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F7] py-12 lg:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-[#c89411] to-[#AA1820] text-white shadow-xl lg:grid-cols-[1fr_auto]">
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="text-sm font-bold tracking-[0.18em] text-white/65 uppercase">
                  Start Your Project Today
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                  Get Straightforward Help With Your Next Metal Building
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                  Contact Top Goat Metal Structures to discuss your building size, site, use, custom
                  features, and installation location. We will help you understand your options and
                  prepare the right next step.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 border-t border-white/15 p-7 sm:p-10 lg:min-w-[320px] lg:border-t-0 lg:border-l lg:p-12">
                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-center font-bold text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/building-gallery/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#1A1A1A]"
                >
                  View Building Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Top Goat Metal Structures location">
          <iframe
            title="Top Goat Metal Structures office location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.694107153751!2d-80.725935!3d36.394226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885228cc0a1b4153%3A0x3db4e4fcc1286e64!2s317%20W%20Atkins%20St%2C%20Dobson%2C%20NC%2027017%2C%20USA!5e1!3m2!1sen!2sin!4v1763723773899!5m2!1sen!2sin"
            width="100%"
            height="480"
            className="block w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
