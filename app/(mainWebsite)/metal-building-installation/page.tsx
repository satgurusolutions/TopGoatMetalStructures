import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Faqs, RichText, Ruler } from '@/components/shared';
import Script from 'next/script';
import { Metadata } from 'next';
import { baseUrl, ogImage } from '@/configs/meta-data';

export const metadata: Metadata = {
  title: 'Metal Building Installation with Free Delivery | Top Goat Metal Structures',
  description:
    'Top Goat Metal Structures offers free delivery and installation on every metal building purchase. To know more about the process, visit us!',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/metal-building-installation/',
  },
  openGraph: {
    title: 'Metal Building Installation with Free Delivery | Top Goat Metal Structures',
    description:
      'Top Goat Metal Structures offers free delivery and installation on every metal building purchase. To know more about the process, visit us!',
    url: baseUrl + '/metal-building-installation/',
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
    title: 'Metal Building Installation with Free Delivery | Top Goat Metal Structures',
    description:
      'Get free delivery and professional installation with every Top Goat Metal Structures purchase. Learn about our fast and reliable setup process.',
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
    'facebook-domain-verification': 'vqfik2cnd3dj4k5smixl29wi5xbkj9',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.warriorbuildings.com/metal-building-installation/',
      url: 'https://www.warriorbuildings.com/metal-building-installation/',
      name: 'Metal Building Installation with Free Delivery',
      isPartOf: {
        '@id': 'https://www.warriorbuildings.com/#website',
      },
      datePublished: '2024-12-23T11:21:48+00:00',
      dateModified: '2024-12-26T07:50:57+00:00',
      description:
        'Top Goat Metal Structures offers free delivery and installation on every metal building purchase. To know more about the process, visit us!',
      breadcrumb: {
        '@id': 'https://www.warriorbuildings.com/metal-building-installation/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.warriorbuildings.com/metal-building-installation/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.warriorbuildings.com/metal-building-installation/#breadcrumb',
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
          name: 'Metal Building Installation',
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

const InstallationPage = () => {
  return (
    <div className="font-jost">
      <Script id="installatiob-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection name={'Metal Building Installation'} bgImg="/images/installation-bg.webp" />
      <div className="pb-8 xl:pb-16">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <div className="mx-auto px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <RichText
            html={`<section class="content_pages"> <div class="site_container"> <div class="editor_content"><p>At Top Goat Metal Structures, we include delivery and installation with every purchase. We take out much of the guesswork so you can be free to enjoy your new metal building. But before that happens, there are a few things you’ll want to know for a smooth experience.</p><p>Below, we’ll provide you with the inside info to help you get your <a href="https://www.warriorbuildings.com/metal-buildings/">metal building</a> project off on the right foot. From how to prep for the big day to handling permitting, we’ll show you what you need to know.</p><h2><strong>How to Prepare for Installation Day</strong></h2><p>You’ve chosen the perfect design and made your down payment — so what’s next? Preparing your site is one of the most important steps in ensuring a smooth and successful installation. Here’s what to take care of before the crew arrives:</p><ul><li><strong>Clear the Building Site</strong></li></ul><p>Remove any debris, vegetation, or obstacles from the installation area. A clean, open space ensures a stable foundation and allows the crew to work efficiently and safely.</p><ul><li><strong>Create a Level Foundation</strong></li></ul><p>Your building needs a solid, level foundation for long-term stability. Whether you opt for a concrete slab, gravel pad, or another foundation type, make sure it’s fully prepared and ready before installation day.</p><ul><li><strong>Check for Utility Lines</strong></li></ul><p>If you plan to run electricity, water, or other utilities to your metal building, mark all underground lines and ensure easy access for future hookups. Handling this early can prevent delays — and save you money.</p><ul><li><strong>Verify Your Building Plans</strong></li></ul><p>Double-check all building dimensions, custom options, and your site’s measurements. Catching any discrepancies now helps avoid unexpected issues during installation.</p><ul><li><strong>Prepare for Delivery</strong></li></ul><p>Ensure there is adequate space for the delivery truck and installation crew to access your property. Clear pathways make the entire process smoother and faster.</p><h2><strong>Building Permits</strong></h2><p>Before installation begins, it’s essential to check with your local authorities about building permit requirements and any zoning restrictions. Every county has its own rules for construction, and making sure you’re compliant from the start can save you from costly fines, penalties, or even the forced removal of your building.</p><p>Here’s what to do:</p><ul><li>Contact your local zoning or permitting office office to confirm what permits are required for your project.</li><li>Gather all necessary documents, including your building plans, site layout, and any other paperwork your county may request..</li><li>Submit your application early and allow plenty of time for review and approval before installation day.</li></ul><h2><strong>Warrior Building Includes Delivery and Installation with Every Structure</strong></h2><p>With years of industry experience and a genuine love of the craft, <a href="https://www.warriorbuildings.com/">Top Goat Metal Structures</a> is proud to be your premier choice for metal buildings, metal barns, metal garages, and storage sheds of all shapes and sizes. We put care, effort, and dedication into every structure we make and work to make the entire process easy and hassle-free for you.</p><p>We include delivery and installation with our structures, and back them with industry-leading warranties and craftsmanship guarantees, so you can rest easy knowing you made a wise investment.</p><p>Call Top Goat Metal Structures today at <a href="tel:888-576-0565">888-576-0565</a> to get started. We’ll help you customize a structure, provide a FREE quote and detailed plans, and take your dream building from a concept to a reality.</p></div> </div></section>`}
          />
        </div>{' '}
      </div>
      <div className="pb-8: xl:pb-16">
        <Faqs
          title="Frequently Asked Questions about Metal Building Installation"
          highlight=" "
          description="To help clear up any confusion, we’ve put together some of the most frequently asked questions about the steel building installation process:"
          faqData={[
            {
              id: '1',
              question: 'How long does it take to install a metal building?',
              answer:
                'Installation times will vary based on the size and complexity of the structure, but most metal buildings can be installed in just a few days.',
            },
            {
              id: '2',
              question: 'Do I need to be present during the installation?',
              answer:
                'While it’s not mandatory, being available on installation day can help address any last-minute questions or adjustments.',
            },
            {
              id: '3',
              question: 'Can I install my metal building on uneven ground?',
              answer:
                'A level foundation is critical for stability. If your site is uneven, it’s best to grade the area or prepare a proper foundation before installation.',
            },
            {
              id: '4',
              question: 'What if the weather is bad on installation day?',
              answer:
                'Rain, snow, or strong winds can delay installation. Our team will reschedule as needed for safe and efficient construction.',
            },
            {
              id: '5',
              question: 'Will my building require maintenance after installation?',
              answer:
                'Metal buildings may be low-maintenance, but occasional upkeep will be necessary to keep them in tip-top shape. Check for debris on the roof, tighten loose screws, and inspect for any signs of wear or damage periodically, and your structure should last for decades!',
            },
          ]}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default InstallationPage;
