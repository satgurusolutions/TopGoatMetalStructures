import Footer from '@/components/footer';
import { WorkTogether } from '@/components/home';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import { ADDRESS, ADDRESS_HREF, EMAIL_ADDRESS } from '@/configs/navigation.config';
import Script from 'next/script';
import { Metadata } from 'next';
import { baseUrl, ogImage } from '@/configs/meta-data';

export const metadata: Metadata = {
  title: 'Get A Steel Building Quote Today At a Discounted Price | Top Goat Metal Structures',
  description:
    'Get a quote today for Metal Buildings, Carports, Barns, Garage Kits, and Rent-to-Own options. Contact us for expert assistance on your steel building needs.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl + '/contact-us/',
  },
  openGraph: {
    title: 'Get A Steel Building Quote Today At a Discounted Price | Top Goat Metal Structures',
    description:
      'Get a quote today for Metal Buildings, Carports, Barns, Garage Kits, and Rent-to-Own options. Contact us for expert assistance on your steel building needs.',
    url: baseUrl + '/contact-us/',
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
    title: 'Get A Steel Building Quote Today At a Discounted Price | Top Goat Metal Structures',
    description:
      'Get a quote today for Metal Buildings, Carports, Barns, Garage Kits, and Rent-to-Own options. Contact us for expert assistance on your steel building needs.',
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
      '@id': 'https://www.warriorbuildings.com/contact-us/',
      url: 'https://www.warriorbuildings.com/contact-us/',
      name: 'Get A Steel Building Quote Today At a Discounted Price',
      isPartOf: {
        '@id': 'https://www.warriorbuildings.com/#website',
      },
      datePublished: '2024-01-18T16:27:47+00:00',
      dateModified: '2024-11-26T12:27:38+00:00',
      description:
        'Get a quote today for Metal Buildings, Carports, Barns, Garage Kits, and Rent-to-Own options. Contact us for expert assistance on your steel building needs.',
      breadcrumb: {
        '@id': 'https://www.warriorbuildings.com/contact-us/#breadcrumb',
      },
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.warriorbuildings.com/contact-us/'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.warriorbuildings.com/contact-us/#breadcrumb',
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
          name: 'Contact Us',
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

const ContactUsPage = () => {
  return (
    <div className="font-jost">
      <Script id="contact-us-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <HeroSection isBlur name={'Contact Us'} bgImg="/images/contact-us-bg.webp" />

      <div className="bg-[#FCF8F8]">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <div className="mx-auto px-4 pb-8 lg:pb-14 xl:container xl:px-0 [@media(width=1280px)]:px-4">
          <div className="et_pb_text_inner">
            <h2 className="text-accent mb-4 text-2xl font-bold xl:text-6xl">Contact Us</h2>

            <p className="mb-4 text-base xl:text-2xl">
              The Warrior team is dedicated to serving you with the precision, resilience, and
              reliability that define us. Whether you prefer to call, email, or complete our contact
              form, reaching out is the first step toward a metal building solution that’s as strong
              as our name.
            </p>
            <p className="mb-8 text-base xl:text-2xl">
              Let Top Goat Metal Structures be your trusted partner in bringing your steel building
              dreams to life.
            </p>
            <div>
              <div className="contact_timings flex flex-wrap items-center gap-6">
                {' '}
                <a href="tel:888-576-0565" className="flex cursor-pointer items-center gap-4">
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.9334 4.09784H22.1856C17.9654 4.09784 14.5312 7.53201 14.5312 11.7522C14.5312 15.6018 17.3878 18.7968 21.0921 19.3286V22.687C21.0921 23.129 21.358 23.5284 21.767 23.6971C22.1704 23.8654 22.6435 23.7752 22.9588 23.46L27.0123 19.4065H30.9334C35.1536 19.4065 38.6607 15.9723 38.6607 11.7522C38.6607 7.53201 35.1536 4.09784 30.9334 4.09784ZM22.1856 12.8455C21.5816 12.8455 21.0921 12.3559 21.0921 11.752C21.0921 11.1481 21.5816 10.6586 22.1856 10.6586C22.7895 10.6586 23.2791 11.1481 23.2791 11.752C23.2791 12.3559 22.7895 12.8455 22.1856 12.8455ZM26.5595 12.8455C25.9555 12.8455 25.466 12.3559 25.466 11.752C25.466 11.1481 25.9555 10.6586 26.5595 10.6586C27.1634 10.6586 27.653 11.1481 27.653 11.752C27.653 12.3559 27.1634 12.8455 26.5595 12.8455ZM30.9334 12.8455C30.3294 12.8455 29.8399 12.3559 29.8399 11.752C29.8399 11.1481 30.3294 10.6586 30.9334 10.6586C31.5373 10.6586 32.0269 11.1481 32.0269 11.752C32.0269 12.3559 31.5373 12.8455 30.9334 12.8455Z"
                      fill="#2C2B29"
                    ></path>
                    <path
                      d="M25.9027 36.9021C27.7116 36.9021 29.1832 35.4306 29.1832 33.6217V29.2478C29.1832 28.7769 28.882 28.3593 28.4357 28.2109L21.8902 26.0239C21.5698 25.9161 21.2196 25.9652 20.9377 26.151L18.1549 28.0058C15.2076 26.6006 11.7104 23.1033 10.3051 20.156L12.1599 17.3732C12.3467 17.0923 12.3938 16.741 12.287 16.4207L10.1 9.87524C9.95166 9.42895 9.5341 9.12781 9.06318 9.12781H4.61637C2.80747 9.12781 1.33594 10.584 1.33594 12.3929C1.33594 24.9913 13.3043 36.9021 25.9027 36.9021Z"
                      fill="#2C2B29"
                    ></path>
                  </svg>{' '}
                  888-576-0565
                </a>{' '}
                <a href={EMAIL_ADDRESS.href} className="flex cursor-pointer items-center gap-4">
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.868 10.3L26.998 11.88V9.09L28.568 10.09C28.6716 10.1547 28.7718 10.2248 28.868 10.3ZM29.918 12.03L26.998 14.5L17.928 22.18C17.5866 22.4574 17.1917 22.6616 16.768 22.78C16.5999 22.8197 16.4296 22.8497 16.258 22.87H15.738C15.5665 22.8497 15.3962 22.8197 15.228 22.78C14.8081 22.6649 14.4165 22.464 14.078 22.19L4.99805 14.5L2.07805 12.03C2.03114 12.2234 2.00433 12.4211 1.99805 12.62V27.5C1.99805 28.2956 2.31412 29.0587 2.87673 29.6213C3.43934 30.1839 4.2024 30.5 4.99805 30.5H26.998C27.7937 30.5 28.5568 30.1839 29.1194 29.6213C29.682 29.0587 29.998 28.2956 29.998 27.5V12.62C29.9918 12.4211 29.965 12.2234 29.918 12.03ZM15.358 20.65L6.99805 13.57V5.5C6.99805 4.70435 7.31412 3.94129 7.87673 3.37868C8.43934 2.81607 9.2024 2.5 9.99805 2.5H21.998C22.7937 2.5 23.5568 2.81607 24.1194 3.37868C24.682 3.94129 24.998 4.70435 24.998 5.5V13.57L16.638 20.65C16.4584 20.7997 16.2319 20.8816 15.998 20.8816C15.7642 20.8816 15.5377 20.7997 15.358 20.65ZM10.998 8.5C10.998 8.76522 11.1034 9.01957 11.2909 9.20711C11.4785 9.39464 11.7328 9.5 11.998 9.5H19.998C20.2633 9.5 20.5176 9.39464 20.7052 9.20711C20.8927 9.01957 20.998 8.76522 20.998 8.5C20.998 8.23478 20.8927 7.98043 20.7052 7.79289C20.5176 7.60536 20.2633 7.5 19.998 7.5H11.998C11.7328 7.5 11.4785 7.60536 11.2909 7.79289C11.1034 7.98043 10.998 8.23478 10.998 8.5ZM11.998 13.5H19.998C20.2633 13.5 20.5176 13.3946 20.7052 13.2071C20.8927 13.0196 20.998 12.7652 20.998 12.5C20.998 12.2348 20.8927 11.9804 20.7052 11.7929C20.5176 11.6054 20.2633 11.5 19.998 11.5H11.998C11.7328 11.5 11.4785 11.6054 11.2909 11.7929C11.1034 11.9804 10.998 12.2348 10.998 12.5C10.998 12.7652 11.1034 13.0196 11.2909 13.2071C11.4785 13.3946 11.7328 13.5 11.998 13.5ZM4.99805 9.09L3.41805 10.09C3.31697 10.1645 3.22015 10.2446 3.12805 10.33L4.99805 11.88V9.09Z"
                      fill="#2C2B29"
                    ></path>
                  </svg>{' '}
                  {EMAIL_ADDRESS.formatted}
                </a>{' '}
                <a href={ADDRESS_HREF}>
                  <address className="flex cursor-pointer items-center gap-4">
                    <svg
                      width="40"
                      height="41"
                      viewBox="0 0 24 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.2471 11.0875C23.2508 9.10662 22.7305 7.16002 21.739 5.44516C20.7475 3.7303 19.3201 2.30819 17.6015 1.32311C15.8798 0.404449 13.9476 -0.0474101 11.9971 0.0124827C9.9917 -0.0492453 8.00675 0.431174 6.2515 1.40311C4.55303 2.40132 3.14907 3.83135 2.18228 5.5479C1.2155 7.26445 0.72034 9.20633 0.747126 11.1762C0.880251 15.63 3.71837 19.7387 6.24275 23.3156C8.02723 25.8544 9.94818 28.2944 11.9971 30.625C15.5596 26.5919 18.9734 22.1681 21.4346 17.375C22.5374 15.4562 23.1593 13.2989 23.2471 11.0875ZM11.9971 17.5C10.5817 17.5004 9.20061 17.064 8.04247 16.2502C6.88434 15.4364 6.0056 14.2851 5.52625 12.9533C5.0469 11.6215 4.9903 10.1742 5.36418 8.80899C5.73807 7.44382 6.5242 6.22732 7.61525 5.32561C8.70524 4.42361 10.047 3.87987 11.4574 3.76855C12.8678 3.65723 14.2782 3.98376 15.4962 4.7036C16.7142 5.42343 17.6805 6.50151 18.2632 7.79075C18.8459 9.08 19.0166 10.5176 18.7521 11.9075C18.4424 13.475 17.6011 14.8875 16.3704 15.9064C15.1396 16.9254 13.5949 17.4883 11.9971 17.5Z"
                        fill="#2C2B29"
                      ></path>
                    </svg>{' '}
                    {ADDRESS}
                  </address>
                </a>{' '}
                <div className="flex cursor-pointer items-center gap-4">
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1849 27.342C18.0945 27.2833 17.9113 27.2141 17.5469 27.2056V28.5329C17.7534 28.5305 17.9216 28.5101 18.0468 28.472C18.138 28.4442 18.2002 28.3948 18.248 28.3113C18.3055 28.2109 18.3359 28.05 18.3359 27.8464C18.3359 27.6946 18.3163 27.4272 18.1849 27.342Z"
                      fill="#2C2B29"
                    ></path>
                    <path
                      d="M12.8104 28.1378C12.6708 27.8595 12.4841 27.6424 12.2398 27.4743C12.0041 27.3122 11.7495 27.2333 11.4614 27.2333C11.1763 27.2333 10.9234 27.3126 10.6879 27.4758C10.443 27.6454 10.2553 27.8641 10.1141 28.1444C9.97359 28.4237 9.90234 28.7083 9.90234 28.9906C9.90234 29.2713 9.97617 29.5638 10.1216 29.8599C10.2672 30.1563 10.4676 30.4048 10.717 30.5986C10.9525 30.7815 11.196 30.8705 11.4614 30.8705C11.7271 30.8705 11.9708 30.7821 12.2065 30.6001C12.4546 30.4085 12.6541 30.1569 12.7998 29.8525C12.9463 29.5461 13.0205 29.2562 13.0205 28.9907C13.0206 28.7027 12.9498 28.4158 12.8104 28.1378Z"
                      fill="#2C2B29"
                    ></path>
                    <path
                      d="M36.9862 18.6182H31.3471L22.7247 5.42655C22.8411 5.11256 22.9049 4.77334 22.9049 4.41944C22.9049 2.81764 21.6018 1.51459 20 1.51459C18.3982 1.51459 17.0952 2.81764 17.0952 4.41944C17.0952 4.77334 17.159 5.11256 17.2755 5.42655L8.65283 18.6182H3.01368C1.35203 18.6182 0 19.9702 0 21.632V36.4717C0 38.1335 1.35203 39.4854 3.01368 39.4854H36.9862C38.648 39.4854 39.9999 38.1333 39.9999 36.4717V21.632C40.0001 19.9702 38.648 18.6182 36.9862 18.6182ZM18.3635 6.8178C18.8299 7.1371 19.3934 7.32413 20 7.32413C20.6067 7.32413 21.1702 7.13694 21.6366 6.8178L29.3497 18.6182H10.6503L18.3635 6.8178ZM14.8176 29.7517C14.7789 29.9745 14.7146 30.2025 14.6264 30.4293C14.4658 30.8644 14.2296 31.2557 13.926 31.5875C13.6214 31.9207 13.2535 32.1865 12.8324 32.3779C12.4092 32.5703 11.9478 32.6678 11.4612 32.6678C10.9721 32.6678 10.5117 32.5718 10.0927 32.3822C9.67478 32.1933 9.3076 31.9254 9.00135 31.5861C8.6972 31.2494 8.45963 30.8556 8.29494 30.4153C8.1308 29.9772 8.04759 29.5155 8.04759 29.0435C8.04759 28.5712 8.13025 28.1134 8.29338 27.6829C8.45666 27.2515 8.69478 26.8602 9.00111 26.5199C9.31017 26.1764 9.67666 25.9071 10.0904 25.7195C10.5054 25.5312 10.9667 25.4358 11.4614 25.4358C11.9593 25.4358 12.4224 25.5328 12.8379 25.7243C13.2504 25.9144 13.616 26.1823 13.9245 26.5206C14.0741 26.682 14.2085 26.8594 14.3218 27.046C14.4337 27.23 14.5362 27.4417 14.6265 27.6747C14.7917 28.1117 14.8751 28.5716 14.8751 29.0435C14.875 29.2932 14.8557 29.5314 14.8176 29.7517ZM19.9049 29.0976C19.7195 29.4478 19.4449 29.7138 19.0886 29.8879C18.7488 30.0541 18.3365 30.1385 17.8632 30.1385H17.5463V32.2083C17.5463 32.3696 17.4156 32.5003 17.2543 32.5003H16.0244C15.8632 32.5003 15.7325 32.3696 15.7325 32.2083V25.8953C15.7325 25.734 15.8632 25.6033 16.0244 25.6033H17.6956C19.7437 25.6033 20.1736 26.8275 20.1736 27.8546C20.1739 28.3425 20.0834 28.7608 19.9049 29.0976ZM24.8394 26.9659C24.8394 27.1271 24.7087 27.2578 24.5475 27.2578H22.8045V28.0674H24.4698C24.6311 28.0674 24.7618 28.1981 24.7618 28.3593V29.4299C24.7618 29.5911 24.6311 29.7218 24.4698 29.7218H22.8045V30.846H24.5475C24.7087 30.846 24.8394 30.9766 24.8394 31.1379V32.2085C24.8394 32.3697 24.7087 32.5004 24.5475 32.5004H21.2827C21.1214 32.5004 20.9907 32.3698 20.9907 32.2085V25.8954C20.9907 25.7342 21.1214 25.6035 21.2827 25.6035H24.5475C24.7087 25.6035 24.8394 25.7342 24.8394 25.8954V26.9659ZM31.9525 32.335C31.9525 32.4963 31.8218 32.627 31.6605 32.627H30.7738C30.6821 32.627 30.5958 32.5839 30.5407 32.5107L27.7274 28.7735V32.2084C27.7274 32.3696 27.5967 32.5003 27.4354 32.5003H26.2055C26.0443 32.5003 25.9136 32.3697 25.9136 32.2084V25.7278C25.9136 25.5665 26.0443 25.4358 26.2055 25.4358H27.0922C27.184 25.4358 27.2703 25.4788 27.3254 25.5521L30.1387 29.2893V25.8993C30.1387 25.7381 30.2694 25.6074 30.4306 25.6074H31.6605C31.8218 25.6074 31.9525 25.7381 31.9525 25.8993V32.335Z"
                      fill="#2C2B29"
                    ></path>
                  </svg>{' '}
                  Mon-Fri: 8 AM to 5 PM
                </div>{' '}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Ruler variant={2} />
        </div>
      </div>
      <div>
        <WorkTogether />
      </div>

      <div>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.694107153751!2d-80.725935!3d36.394226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885228cc0a1b4153%3A0x3db4e4fcc1286e64!2s317%20W%20Atkins%20St%2C%20Dobson%2C%20NC%2027017%2C%20USA!5e1!3m2!1sen!2sin!4v1763723773899!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
