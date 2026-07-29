import Footer from '@/components/footer';
import { Finance, RentToOwnPayment, WorkTogether } from '@/components/home';
import { HeroSection } from '@/components/product-category';
import { RichText, Ruler } from '@/components/shared';
import { baseUrl, ogImage } from '@/configs/meta-data';

import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Rent to Own Buildings - No Credit Checks & Quick Approvals | Top Goat Metal Structures',
  description:
    'Find the best rent-to-own metal buildings, carports, and garages at affordable prices with no hard credit checks. Enjoy flexible RTO all steel structures with quick approval.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/rent-to-own-metal-buildings/',
  },
  openGraph: {
    title: 'Rent to Own Buildings - No Credit Checks & Quick Approvals | Top Goat Metal Structures',
    description:
      'Find the best rent-to-own metal buildings, carports, and garages at affordable prices with no hard credit checks. Enjoy flexible RTO all steel structures with quick approval.',
    url: baseUrl + '/rent-to-own-metal-buildings/',
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
    title: 'Rent to Own Buildings - No Credit Checks & Quick Approvals | Top Goat Metal Structures',
    description:
      'Find the best rent-to-own metal buildings, carports, and garages at affordable prices with no hard credit checks. Enjoy flexible RTO all steel structures with quick approval.',
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
      '@type': 'WebPage',
      '@id': 'https://www.warriorbuildings.com/rent-to-own-metal-buildings/',
      url: 'https://www.warriorbuildings.com/rent-to-own-metal-buildings/',
      name: 'Rent to Own Buildings - No Credit Checks & Quick Approvals',
      isPartOf: {
        '@id': 'https://www.warriorbuildings.com/#website',
      },
      datePublished: '2024-01-18T08:13:05+00:00',
      dateModified: '2024-12-26T09:34:45+00:00',
      description:
        'Find the best rent-to-own metal buildings, carports, and garages at affordable prices with no hard credit checks. Enjoy flexible RTO all steel structures with quick approval.',
      breadcrumb: {
        '@id': 'https://www.warriorbuildings.com/rent-to-own-metal-buildings/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.warriorbuildings.com/rent-to-own-metal-buildings/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.warriorbuildings.com/rent-to-own-metal-buildings/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.warriorbuildings.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Rent to Own Buildings',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.warriorbuildings.com/#website',
      url: 'https://www.warriorbuildings.com/',
      name: 'Top Goat Metal Structures',
      description: 'The best in the industry',
      publisher: {
        '@id': 'https://www.warriorbuildings.com/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.warriorbuildings.com/?s={search_term_string}',
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
      '@id': 'https://www.warriorbuildings.com/#organization',
      name: 'Top Goat Metal Structures',
      url: 'https://www.warriorbuildings.com/',
      logo: {
        '@type': 'ImageObject',
        inLanguage: 'en-US',
        '@id': 'https://www.warriorbuildings.com/#/schema/logo/image/',
        url: 'https://www.warriorbuildings.com/images/logo.png',
        contentUrl: 'https://www.warriorbuildings.com/images/logo.png',
        width: 198,
        height: 180,
        caption: 'Top Goat Metal Structures',
      },
      image: {
        '@id': 'https://www.warriorbuildings.com/#/schema/logo/image/',
      },
      sameAs: ['https://www.facebook.com/warriorbuildings/'],
    },
  ],
};

const FinancingPage = () => {
  return (
    <div className="font-jost">
      <Script id="rent-to-own-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection name={'Rent-To-Own'} bgImg="/images/rent-to-own-bg.webp" />
      <div className="">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <RichText
            html={`<div class="site_container"> <h1>Rent-to-Own Metal Buildings</h1> <p>Whether you’re looking for a small storage shed, a workshop, or a spacious garage, owning your own building is a big undertaking. Luckily, Top Goat Metal Structures offers Rent-to-Own metal buildings that give you all the benefits of steel engineering without the huge upfront commitment.</p> <p>Our RTO plans are similar to traditional financing options, except they can give you a higher level of control over the purchase of your steel structure without endless miles of paperwork and credit checks.</p> <p>If you’re in the market for a new <a href="https://www.warriorbuildings.com/metal-buildings/">steel building</a>, <a href="https://www.warriorbuildings.com/metal-carports/">carport</a>, or <a href="https://www.warriorbuildings.com/metal-garages/">garage</a>, our RTO plans can minimize the impact on your budget while keeping your most important things safe and protected. Below, we’ll explore how our RTO program works and how you can take advantage of it to create the ideal structure for your needs.</p> </div>`}
          />
        </div>{' '}
        <div className="pt-8 xl:pt-16">
          <Ruler variant={2} />
        </div>
      </div>
      <div>
        <Finance />
      </div>
      <div>
        <RentToOwnPayment />
      </div>
      <div>
        <WorkTogether />
      </div>
      <div className="py-8 xl:py-16">
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <RichText html='<div class="site_container"> <h2 class="heading">Our RTO Process</h2> <p>Top Goat Metal Structures makes buying a metal building easy, affordable, and hassle-free. Here’s how it works:</p> <div class="steps-section"> <div class="step"> <div class="step-inner"> <h3>Step 1</h3> <div class="info"><p>Choose Your Building</p></div> <div class="description"><p>Select the perfect structure for your needs — whether it’s a small shed, a metal barn, or a large custom building, we have the right option for every project.</p></div> </div> <div class="step-inner"> <h3>Step 2</h3> <div class="info"><p>Review Payment Terms</p></div> <div class="description"><p>After you’ve chosen and customized your building, we’ll walk you through the payment terms to ensure they match your budget and goals.</p></div> </div> <div class="step-inner"> <h3>Step 3</h3> <div class="info"><p>Complete the Application</p></div> <div class="description"><p>Fill out a short application to begin the approval process. Most approvals are completed in less than 24 hours.</p></div> </div> <div class="step-inner"> <h3>Step 4</h3> <div class="info"><p>Get Approved</p></div> <div class="description"><p>We take care of the paperwork and work quickly to secure approval for your Rent-to-Own plan.</p></div> </div> <div class="step-inner"> <h3>Step 5</h3> <div class="info"><p>Finalize Purchase and Make Your Down Payment</p></div> <div class="description"><p>Once approved, you can finalize your purchase. Make the agreed-upon down payment, prepare your building site, and leave the rest to us!</p></div> </div> </div> </div> </div>' />
        </div>
      </div>
      <div className="pb-8 xl:pb-16">
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <RichText html='<section> <div class="site_container"> <h2>The Benefits of Our RTO Program</h2> <p>There’s lots to love about our Rent-to-Own Metal Buildings! Let’s explore some of the biggest advantages of using our RTO program to get yours:</p> <ul> <li>No Hard Credit Checks: Credit issues don’t have to stand in your way of building ownership.</li> <li>Quick Approvals: Time is valuable! Get an answer fast and start using your building sooner. Our approval process is designed to be fast, efficient, and help you move forward with minimal delays.</li> <li>Adaptable Payment Structures: Whether you’re looking for a short-term plan or to pay on a structure over time, our adaptable payment options make managing your finances easier.</li> <li>No Early Payoff Penalties: Life can be unpredictable, and sometimes you may want to pay off your building sooner. With Warrior’s RTO program, there are no penalties for early repayment. If you’re ready to own your building outright ahead of schedule, you can do so with no added fees or hidden costs.</li> <li>Included Delivery and Installation: We handle the setup, so you can focus on enjoying your new space. Just prepare your building site, handle any permitting needs, and let us tackle the rest.</li> </ul> <h2>Why Choose a Rent-to-Own Metal Building?</h2> <p>A Rent-to-Own metal building allows you to fit a structure into virtually any budget while avoiding many of the challenges associated with traditional financing. It’s an excellent solution for anyone with limited credit history or past credit issues.</p> <p>With RTO, you can get the building you need right when you need it and enjoy a simple, hassle-free path to ownership—no long applications, no complicated approvals, just straightforward flexibility.</p> <h2>Warrior Makes Rent-to-Own Easy</h2> <p>From backyard storage buildings to enormous commercial structures, <a href="https://www.warriorbuildings.com">Top Goat Metal Structures</a> is proud to be a trusted name in the metal building industry. We place decades of experience, exemplary customer service, and a dedication to craftsmanship into every product we make, so you can rest easy knowing you invested with one of the best.</p> <p>We back these buildings with leading warranties and craftsmanship guarantees and strive to make the path to ownership simple, effective, and highly rewarding for you. Call our experts today at <a href="tel:888-576-0565">888-576-0565</a> and let us create the ideal building for your budget and needs.</p> </div></section>' />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FinancingPage;
