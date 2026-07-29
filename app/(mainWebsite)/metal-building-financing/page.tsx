import Footer from '@/components/footer';
import { Finance, RentToOwnPayment, WorkTogether } from '@/components/home';
import { HeroSection } from '@/components/product-category';
import { RichText, Ruler } from '@/components/shared';
import { baseUrl, ogImage } from '@/configs/meta-data';

import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Metal Building Financing - Flexible Options and Easy Process | Top Goat Metal Structures',
  description:
    'Top Goat Metal Structures offers a hassle-free and easy metal building financing process across the USA. Get your dream carports, barns, and garages on finance today!',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/metal-building-financing/',
  },
  openGraph: {
    title:
      'Metal Building Financing - Flexible Options and Easy Process | Top Goat Metal Structures',
    description:
      'Top Goat Metal Structures offers a hassle-free and easy metal building financing process across the USA. Get your dream carports, barns, and garages on finance today!',
    url: baseUrl + '/metal-building-financing/',
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
    title:
      'Metal Building Financing - Flexible Options and Easy Process | Top Goat Metal Structures',
    description:
      'Top Goat Metal Structures offers easy and flexible financing options for all metal buildings across the USA. Get approved quickly with no hassle!',
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
      '@id': 'https://www.warriorbuildings.com/metal-building-financing/',
      url: 'https://www.warriorbuildings.com/metal-building-financing/',
      name: 'Metal Building Financing - Flexible Options and Easy Process',
      isPartOf: {
        '@id': 'https://www.warriorbuildings.com/#website',
      },
      datePublished: '2024-01-19T15:27:26+00:00',
      dateModified: '2024-12-26T07:50:30+00:00',
      description:
        'Top Goat Metal Structures offers a hassle-free and easy metal building financing process across the USA. Get your dream carports, barns, and garages on finance today!',
      breadcrumb: {
        '@id': 'https://www.warriorbuildings.com/metal-building-financing/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.warriorbuildings.com/metal-building-financing/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.warriorbuildings.com/metal-building-financing/#breadcrumb',
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
          name: 'Metal Building Financing',
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
      <Script id="finance-guide-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection name={'Metal Building Financing'} bgImg="/images/rent-to-own-bg.webp" />
      <div className="pb-8 xl:pb-16">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <RichText
            html={`<div class="elementor-widget-container"><h1>Metal Building Financing</h1><p>From small steel sheds to massive commercial buildings, there’s a lot that goes into           creating a metal structure — but your weekly paycheck shouldn’t be one of them. That’s why Top Goat Metal Structures offers a range of flexible metal building financing solutions tailored to your budget and your timeline.</p><p>Whether you’re planning a custom garage, a durable barn, a protective carport, or a spacious backyard storage building, our financing program gives you a clear, affordable path to ownership without overwhelming upfront costs.</p></div>`}
          />
        </div>{' '}
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

      <div className="pt-8 xl:pt-16">
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <RichText html='<div class="text_box"> <h2 class="h4">The Benefits of Financing Your Steel Building</h2><p>There are many reasons that financing is a great option for your steel building needs. Let’s explore what our payment plans can do for you:</p><ul><li><strong>Complete Ownership: </strong>Unlike Rent-to-Own plans and other financial arrangements, traditional financing gives you actual ownership of your structure from the onset. You’ll be free to use it as you choose and pay as you please.</li><li><strong>Low Interest Rates: </strong>Based on your credit rating, you could qualify for a loan of up to $50,000 with an interest rate as low as 10.99%.</li><li><strong>Term Flexibility: </strong>We offer payment terms in terms of 3, 24, and up to 72-month increments, giving you plenty of flexibility to pay off your building at your convenience.</li><li><strong>Smaller Upfront Cost: </strong>Financing your steel building can allow you to spread out payments over time while still enjoying the benefits it provides.</li></ul> </div>' />
        </div>
      </div>
      <div className="pb-8 xl:pb-16">
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <RichText html='<div class="extra_content"> <h2 class="wp-block-heading">&nbsp;</h2><h2 class="wp-block-heading"><strong>How to Finance Your Metal Building</strong></h2><p>Top Goat Metal Structures makes the metal building financing process straightforward and hassle-free from start to finish. Here’s how it works:</p><p><strong>Choose Your Structure</strong><br>Begin by selecting the <a href="https://www.warriorbuildings.com/metal-buildings/">metal building</a> that fits your needs, style, and budget. Our options cover residential, commercial, agricultural, and fully custom projects.</p><p><strong>Receive Custom Building Quote</strong><br>After choosing your structure, we’ll provide a detailed, custom quote. From there, you can work with our experts to finalize the details of your purchase.</p><p><strong>Submit Your Application for Financing</strong><br>Complete and submit your financing application to kick off the approval process. Our financing partners will review your information and begin processing your request. You’ll need to provide:-</p><ul class="wp-block-list"><li><strong>Credit Application</strong></li><li><strong>Copy of Driver’s License</strong></li><li><strong>Proof of Address</strong></li><li><strong>Proof of Income</strong></li><li><strong>Invoice for Your Chosen Metal Building</strong></li></ul><p><strong>Loan Approval</strong><br>Once approved, you’ll receive a financing offer tailored to your budget and financial situation. After reviewing and accepting the terms, you can move forward confidently.</p><p><strong>Down Payment</strong><br>When you accept the financing terms, you’ll provide a down payment. This initial payment covers a portion of the total cost, and officially secures your order.</p><p><strong>Delivery and Installation</strong><br>With financing approved and your down payment complete, we’ll schedule delivery and installation. Your building will be professionally installed and ready to serve your needs with the strength and craftsmanship Warrior is known for.</p><h2 class="wp-block-heading"><strong>Top Goat Metal Structures Can Help You Finance Your Metal Building</strong></h2><p><a href="https://www.warriorbuildings.com/">Top Goat Metal Structures</a> is proud to be a leading provider of metal buildings and steel structures of all shapes and sizes. Whether you need a workshop, a garage, or commercial facility, we’ve the skills and experience to deliver results you can count on.</p><p>Our flexible financing program makes owning your building easy, affordable, and stress-free. Call our experts today at <strong><a href="tel:888-576-0565">888-576-0565</a> </strong> to learn more about our extensive lineup of metal structures and the payment plans available to fit your budget.</p> </div>' />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FinancingPage;
