import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
// import { ChooseArea } from '@/components/service-area';
import { Ruler } from '@/components/shared';
import { baseUrl, ogImage } from '@/configs/meta-data';
import { NeedToTalk } from '@/components/home';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Best Metal Buildings Supplier in the United States | Top Goat Metal Structures',
  description:
    'Top Goat Metal Structures is a reliable metal building supplier serving customers across the United States with custom garages, carports, barns, RV covers, and commercial structures.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseUrl}/about-us/`,
  },
  openGraph: {
    title: 'Best Metal Buildings Supplier in the United States | Top Goat Metal Structures',
    description:
      'Learn about Top Goat Metal Structures, our veteran-led foundation, our experienced team, and our commitment to dependable American steel buildings.',
    url: `${baseUrl}/about-us/`,
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
    title: 'Best Metal Buildings Supplier in the United States | Top Goat Metal Structures',
    description: 'Learn about the people and values behind Top Goat Metal Structures.',
    images: [ogImage],
  },
  icons: {
    icon: [
      {
        url: '/meta-data/favicon.png',
        sizes: '32x32',
      },
      {
        url: '/meta-data/web-app-manifest-192x192.png',
        sizes: '192x192',
      },
    ],
    apple: '/meta-data/apple-touch-icon.png',
    shortcut: '/meta-data/favicon.ico',
  },
  manifest: `${baseUrl}/meta-data/site.webmanifest`,
  metadataBase: new URL(baseUrl),
};

/*const teamMembers = [
  {
    name: 'Cliff Owen',
    role: 'Founder & Owner',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
    description:
      'Cliff leads Top Goat Metal Structures with the discipline, accountability, and commitment to service developed during his military career.',
  },
  {
    name: 'Daniel Brooks',
    role: 'Building Specialist',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
    description:
      'Daniel helps customers compare building sizes, roof styles, colours, access points, and practical options for their properties.',
  },
  {
    name: 'Michael Carter',
    role: 'Project Coordinator',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
    description:
      'Michael coordinates project details from order confirmation through delivery and installation.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Customer Support',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85',
    description:
      'Sarah keeps customers informed, answers project questions, and helps make every stage of the process straightforward.',
  },
];*/

const companyValues = [
  {
    number: '01',
    title: 'Integrity First',
    description:
      'We provide straightforward information, realistic expectations, and dependable communication.',
  },
  {
    number: '02',
    title: 'Built With Precision',
    description:
      'Every structure is planned around the customer’s property, intended use, and local requirements.',
  },
  {
    number: '03',
    title: 'Customer Focused',
    description:
      'Our team stays available from the first conversation through delivery and installation.',
  },
  {
    number: '04',
    title: 'Made To Last',
    description:
      'We provide durable steel structures designed to protect what matters for years to come.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}/about-us/#webpage`,
      url: `${baseUrl}/about-us/`,
      name: 'About Top Goat Metal Structures',
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      description:
        'Learn about Top Goat Metal Structures, our veteran-led foundation, our team, and our commitment to dependable metal buildings.',
      breadcrumb: {
        '@id': `${baseUrl}/about-us/#breadcrumb`,
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: [`${baseUrl}/about-us/`],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/about-us/#breadcrumb`,
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
          name: 'About Us',
          item: `${baseUrl}/about-us/`,
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'Top Goat Metal Structures',
      description:
        'Custom metal garages, carports, barns, RV covers, and commercial steel buildings.',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Top Goat Metal Structures',
      url: `${baseUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
        contentUrl: `${baseUrl}/images/logo.png`,
        caption: 'Top Goat Metal Structures',
      },
      image: {
        '@type': 'ImageObject',
        url: ogImage,
      },
    },
  ],
};

export default function AboutUsPage() {
  return (
    <main className="font-jost bg-[#f5f2eb] text-[#151517]">
      <Script id="about-us-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroSection name="About Top Goat Metal Structures" bgImg="/images/about-us/banner.png" />

      <div className="pb-8 lg:pb-16">
        <Ruler />
      </div>

      {/* Founder story */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative">
            <div className="relative min-h-[470px] overflow-hidden rounded-[24px] bg-[#151517] sm:min-h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
                alt="Founder of Top Goat Metal Structures"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

              <div className="absolute right-0 bottom-0 left-0 p-7 sm:p-9">
                <span className="font-oswald text-xs font-semibold tracking-[0.16em] text-[#e7b53c] uppercase">
                  Founder & Owner
                </span>

                <h2 className="font-anton mt-2 text-4xl text-white uppercase sm:text-5xl">
                  Cliff Owen
                </h2>
              </div>
            </div>

            <div className="absolute -right-4 -bottom-5 hidden rounded-[16px] border border-[#e7b53c]/30 bg-[#111113] px-6 py-5 text-white shadow-2xl sm:block lg:-right-8">
              <span className="font-anton block text-4xl text-[#e7b53c]">Veteran</span>

              <span className="font-oswald mt-1 block text-xs tracking-[0.13em] text-white/65 uppercase">
                Founded on discipline
              </span>
            </div>
          </div>

          <div>
            <span className="font-oswald inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#a87a1c] uppercase">
              <span className="h-px w-7 bg-[#d9a225]" />
              Our Story
            </span>

            <h1 className="font-anton mt-5 text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] uppercase">
              Combat-Tested
              <span className="block bg-gradient-to-r from-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
                Precision
              </span>
            </h1>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-[#625d54]">
              <p>
                At Top Goat Metal Structures, we are more than building specialists. We are
                defenders of tradition, quality, integrity, and dependable service.
              </p>

              <p>
                Founded by combat veteran Cliff Owen, the company is built on resilience, honour,
                accountability, and a commitment to excellence. Cliff served in Iraq from 2004 to
                2007 and led demanding missions during his deployment in Ramadi.
              </p>

              <p>
                His military service shaped the way Top Goat operates today: prepare carefully,
                communicate clearly, pay attention to every detail, and follow through on every
                commitment.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="font-oswald inline-flex min-h-[56px] items-center justify-center rounded-[9px] bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-7 text-sm font-bold tracking-[0.04em] text-[#171109] uppercase transition hover:-translate-y-1"
              >
                Start Your Project
              </Link>

              <Link
                href="/service-area"
                className="font-oswald inline-flex min-h-[56px] items-center justify-center rounded-[9px] border border-black/20 px-7 text-sm font-bold tracking-[0.04em] uppercase transition hover:border-[#a87a1c] hover:text-[#a87a1c]"
              >
                View Service Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="bg-[#0b0b0d] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="font-oswald text-[11px] font-semibold tracking-[0.22em] text-[#e7b53c] uppercase">
              What Drives Us
            </span>

            <h2 className="font-anton mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.92] uppercase">
              Steel Buildings
              <span className="block text-[#e7b53c]">Built The Right Way</span>
            </h2>
          </div>

          <p className="max-w-[650px] text-[17px] leading-8 text-[#aaa397]">
            Our mission is to help property owners choose a structure that fits their actual
            needs—not simply sell the largest building possible. Every recommendation is based on
            intended use, available space, access, budget, and long-term value.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1240px] gap-4 px-5 sm:grid-cols-2 sm:px-7 lg:grid-cols-4">
          {companyValues.map((value) => (
            <article
              key={value.number}
              className="rounded-[16px] border border-white/10 bg-[#151517] p-6"
            >
              <span className="font-anton text-4xl text-[#e7b53c]">{value.number}</span>

              <h3 className="font-oswald mt-6 text-xl font-bold uppercase">{value.title}</h3>

              <p className="mt-3 text-sm leading-6 text-[#aaa397]">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team */}
      {/*<section className="bg-[#f5f2eb] py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
          <header className="mx-auto max-w-[760px] text-center">
            <span className="font-oswald inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#a87a1c] uppercase">
              <span className="h-px w-7 bg-[#d9a225]" />
              Meet Our Team
            </span>

            <h2 className="font-anton mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.92] uppercase">
              The People Behind
              <span className="block bg-gradient-to-r from-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
                Every Building
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-7 text-[#6d675c]">
              From your first question to final installation, our team keeps the process clear,
              organised, and focused on your property.
            </p>
          </header>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-[18px] border border-black/10 bg-white"
              >
                <div className="relative h-[350px] overflow-hidden bg-[#d8d3c8]">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="font-oswald text-[11px] font-semibold tracking-[0.12em] text-[#a87a1c] uppercase">
                    {member.role}
                  </span>

                  <h3 className="font-oswald mt-2 text-2xl font-bold uppercase">{member.name}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#6d675c]">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>*/ }

      <div>
        <NeedToTalk />
      </div>

      <Footer />
    </main>
  );
}
