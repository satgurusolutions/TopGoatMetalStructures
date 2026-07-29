export const TELEPHONE_NUMBER = {
  formatted: '(888) 466-2842',
  href: 'tel:+18884662842',
};

export const EMAIL_ADDRESS = {
  formatted: 'info@topgoatmetalstructures.com',
  href: 'mailto:info@topgoatmetalstructures.com',
};

// export const ADDRESS = '317 W Atkins St. Dobson, NC 27017';
export const ADDRESS = '447 N Andy Griffith Pkwy, Mt Airy, NC 27030, USA';
export const ADDRESS_HREF =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS);

// export type NavItemType = {
//   label: string;
//   groups?: {
//     title: string;
//     links: {
//       label: string;
//       href: string;
//       className?: string;
//     }[];
//   }[];
//   href?: string;
// };

// export type NavItemType = {
//   label: string;
//   href?: string;
//   children?: {
//     label: string;
//     href: string;
//   }[];
//   groups?: {
//     title: string;
//     links: {
//       label: string;
//       href: string;
//       className?: string;
//       children?: {
//         label: string;
//         href: string;
//       }[];
//     }[];
//   }[];
// };

export type NavLinkType = {
  label: string;
  href: string;
  description?: string;
  icon?: 'building' | 'garage' | 'carport' | 'barn' | 'rv' | 'commercial';
  className?: string;
  children?: NavLinkType[];
};

export type NavGroupType = {
  title: string;
  links: NavLinkType[];
};

export type NavItemType = {
  label: string;
  href?: string;
  groups?: NavGroupType[];
};

export const NAV_ITEMS: NavItemType[] = [
  {
    label: 'Metal Buildings',
    href: '/metal-buildings',
    groups: [
      {
        title: '',
        links: [
          {
            label: 'Metal Buildings',
            href: '/metal-buildings',
            description: 'Workshops & clear-span steel',
            icon: 'building',
          },
          {
            label: 'Metal Carports',
            href: '/metal-carports',
            description: 'Open, regular & vertical roof',
            icon: 'carport',
          },
          {
            label: 'RV Covers',
            href: '/rv-covers',
            description: 'Tall covers & enclosed RV garages',
            icon: 'rv',
          },
        ],
      },
      {
        title: '',
        links: [
          {
            label: 'Metal Garages',
            href: '/metal-garages',
            description: 'Single & multi-car, fully enclosed',
            icon: 'garage',
          },
          {
            label: 'Metal Barns',
            href: '/metal-barns',
            description: 'Horse, hay & raised-center barns',
            icon: 'barn',
          },
          {
            label: 'Commercial',
            href: '/commercial-buildings',
            description: 'Workshops & clear-span steel',
            icon: 'commercial',
          },
        ],
      },
    ],
  },

  {
    label: 'Financing',
    href: '/financing',
  },

  {
    label: 'About',
    href: '/about-us',
  },

  {
    label: 'Concrete',
    href: '/concrete',
  },

  {
    label: 'Resources',
    groups: [
      {
        title: '',
        links: [
          {
            label: 'Free Quote',
            href: '/get-a-quote',
          },
          {
            label: 'Service Area',
            href: '/service-area',
          },
          {
            label: 'Color Planner',
            href: '/color-planner',
          },
          {
            label: 'Building Components',
            href: '/building-components',
          },
          {
            label: "FAQ'S",
            href: '/faq',
          },
          {
            label: 'Contact Us',
            href: '/contact-us',
          },
        ],
      },
    ],
  },
];

export const DISABLE_ANIMATIONS = false;

export const MAIN_CATEGORY_SLUGS = ['garages', 'barns', 'rvs', 'commercials', 'carports'];

export const METAL_3D_LINK =
  'https://design.topgoatmetalstructures.com/?_gl=1*1bjcq1n*_gcl_au*MjExNjc5MzcyMS4xNzYzNTc2MjQ2';

export const TOP_MENUS: NavItemType[] = [
  {
    label: 'Military Discount',
    href: '/military-discount',
  },
  {
    label: 'Design Your Own!',
    href: METAL_3D_LINK,
  },
];

export const FACEBOOK_LINK = 'https://www.facebook.com/profile.php?id=61572160021161';

// export const INSTAGRAM_LINK = 'https://www.instagram.com/warriorbuildings';

// export const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCVpBQgVFRu-lJME9TVP9x2g';

// export const TIKTOK_LINK = 'https://www.tiktok.com/@warriorbuildings.nc';

// export const LINKEDIN_LINK = 'https://www.linkedin.com/company/warrior-buildings';

// export const TWITTER_LINK = 'https://x.com';

export const states = [
  // 'Arizona',
  // 'Arkansas',
  // 'California',
  // 'Florida',
  // 'Georgia',
  // 'Illinois',
  // 'Indiana',
  // 'Kansas',
  // 'Kentucky',
  // 'Louisiana',
  // 'Maryland',
  // 'Michigan',
  // 'Mississippi',
  // 'New Mexico',
  // 'New York',
  // 'North Carolina',
  // 'Ohio',
  // 'Oregon',
  // 'Pennsylvania',
  // 'South Carolina',
  // 'Tennessee',
  // 'Texas',
  // 'Virginia',
  // 'Washington',
  // 'West Virginia',
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Mississippi',
  'Missouri',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
];

export const statesWithShortNames = [
  { stateName: 'Arizona', stateShortName: 'AZ' },
  { stateName: 'Arkansas', stateShortName: 'AR' },
  { stateName: 'California', stateShortName: 'CA' },
  { stateName: 'Florida', stateShortName: 'FL' },
  { stateName: 'Georgia', stateShortName: 'GA' },
  { stateName: 'Illinois', stateShortName: 'IL' },
  { stateName: 'Indiana', stateShortName: 'IN' },
  { stateName: 'Kansas', stateShortName: 'KS' },
  { stateName: 'Kentucky', stateShortName: 'KY' },
  { stateName: 'Louisiana', stateShortName: 'LA' },
  { stateName: 'Maryland', stateShortName: 'MD' },
  { stateName: 'Michigan', stateShortName: 'MI' },
  { stateName: 'Mississippi', stateShortName: 'MS' },
  { stateName: 'New Mexico', stateShortName: 'NM' },
  { stateName: 'New York', stateShortName: 'NY' },
  { stateName: 'North Carolina', stateShortName: 'NC' },
  { stateName: 'Ohio', stateShortName: 'OH' },
  { stateName: 'Oregon', stateShortName: 'OR' },
  { stateName: 'Pennsylvania', stateShortName: 'PA' },
  { stateName: 'South Carolina', stateShortName: 'SC' },
  { stateName: 'Tennessee', stateShortName: 'TN' },
  { stateName: 'Texas', stateShortName: 'TX' },
  { stateName: 'Virginia', stateShortName: 'VA' },
  { stateName: 'Washington', stateShortName: 'WA' },
  { stateName: 'West Virginia', stateShortName: 'WV' },
];

export const stateDetails = [
  {
    id: 'state[0]',
    name: 'Arkansas',
    slug: 'arkansas',
    description: `
      <div>
        <h2>Arkansas Steel Structure Kits</h2>
        <p>
          From agricultural barns in rural areas to commercial garages in cities, Arkansas residents
          know how important having the right infrastructure can be. High winds, storms, hail, and
          even occasional snowfall can cause trouble for vehicles, valuables, and equipment if not
          properly secured.
        </p>
        <p>
          Luckily, Top Goat Metal Structures offers a wide range of metal buildings in Arkansas, including
          carports, garages, barns, commercial buildings, and RV carports, which keep your things
          safe from Mother Nature’s grasp. These structures are incredibly strong, built to last for
          generations, and customizable from top to bottom.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Arkansas.webp',
    imgUrl: '/images/service-area/states/backgrounds/Arkansas.webp',
    extraDetails: {
      title: 'FAQs for Certified Arkansas Metal Buildings',
      highlight: ' ',
      description:
        'It makes sense that you’d have questions if it’s your first time buying a metal building in Arkansas. Let’s explore some of the questions most first-time buyers ask:',
      accordionData: [
        {
          id: '1',
          header: 'Do You Install Metal Buildings Near Me?',
          content:
            "<div class='et_pb_toggle_content clearfix'><p>Yes, we install metal buildings throughout Arkansas, including cities like Little Rock, Fayetteville, Fort Smith, Jonesboro, Conway, Hot Springs, Bentonville, Rogers, Pine Bluff, and more. No matter where you are, we’re committed to providing top-quality service.</p></div>",
        },
        {
          id: '2',
          header: 'How Much Does a Metal Building Cost in Arkansas?',
          content:
            "<div class='et_pb_toggle_content clearfix'><p>Metal building costs in Arkansas vary depending on the size, design, and customizations. On average, prices start at $12–$18 per square foot. Add-ons like insulation, upgraded roofing, or additional doors can influence the final price.</p></div>",
        },
        {
          id: '3',
          header: 'Do You Charge Extra for Delivery and Installation?',
          content:
            "<div class='et_pb_toggle_content clearfix'><p>No, the cost of delivery and installation is included in the price of our <a href='https://www.topgoatmetalstructures.com/metal-buildings/'>certified metal buildings</a>. We ensure hassle-free setup without hidden fees.</p></div>",
        },
        {
          id: '4',
          header: 'How Much Time Does It Take to Get My Metal Building in Arkansas?',
          content:
            "<div class='et_pb_toggle_content clearfix'><p>The timeline for delivery and installation typically ranges from 4 to 10 weeks. Complex designs or high-demand periods may slightly extend the wait.</p></div>",
        },
        {
          id: '5',
          header: 'Do You Provide Concrete Foundations with Metal Buildings?',
          content:
            "<div class='et_pb_toggle_content clearfix'><p>While we don’t provide concrete foundation services directly, we’ll provide you with precise foundation specifications and put you in contact with third-party experts.</p></div>",
        },
      ],
    },
    skus: [
      'WB166',
      'WB164',
      'WB158',
      'WB154',
      'WB96',
      'WB73',
      'WB103',
      'WB62',
      'WB42',
      'WB22',
      'WB16',
      'WB14',
      'WB5',
    ],
    metaData: {
      title: 'Metal Buildings Arkansas - Certified Garages, Barns and Carports',
      description:
        'Get right metal building installation in Arkansas for your needs. Our range of carports, garages, barns, rv carports and commercial steel structure can helpful for all weather condition of AR.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/arkansas/',
          url: 'https://www.topgoatmetalstructures.com/service-area/arkansas/',
          name: 'Metal Buildings Arkansas - Certified Garages, Barns and Carports',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:53+00:00',
          dateModified: '2024-12-26T09:46:33+00:00',
          description:
            'Get right metal building installation in Arkansas for your needs. Our range of carports, garages, barns, rv carports and commercial steel structure can helpful for all weather condition of AR.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/arkansas/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/arkansas/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/arkansas/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Arkansas',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[1]',
    name: 'California',
    slug: 'california',
    description: `
      <div>
        <h2>California Steel Structure Kits</h2>
        <p>
         From sun-soaked beaches to rugged mountains, California’s environment is tough on your vehicles, equipment, and valuable items. But with a metal building from Warrior, you’ll never have to worry about keeping your things safe, secure, and in good working condition.
        </p>
        <p>
        These structures are built with high-quality steel components, and made to hold up against rain, high winds, snow accumulation, and even seismic activity. Whether you’re upgrading your backyard storage capacity, augmenting your farm, or starting a new business, Top Goat Metal Structures has the structure for you.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/California.webp',
    imgUrl: '/images/service-area/states/backgrounds/California.webp',
    extraDetails: {
      title: 'FAQs About Certified Steel Buildings in California',
      highlight: ' ',
      description:
        'From building permits to roof styles, first-time buyers often have a few questions about our structures. To help you make a more informed decision, we’ve answered some of the most frequent ones we encounter:',
      accordionData: [
        {
          id: '1',
          header: 'Whose responsibility is it to get a building permit in California?',
          content:
            'The customer’s responsible for obtaining the necessary permits for their metal building, barn, or garage. However, we’re happy to provide engineered drawings and any documentation you need to streamline the permitting process.',
        },
        {
          id: '2',
          header: 'Which Roof Style is the Most Suggested for California?',
          content:
            'Vertical roofing is the go-to choice for California due to its superior ability to handle rain, wind, and snow. Its efficient drainage system and reinforced design make it ideal for long-term durability in regions with volatile climates.',
        },
        {
          id: '3',
          header: 'What is the delivery time in California?',
          content:
            'Delivery typically takes between 4 and 10 weeks, depending on the building’s size, complexity, and local demand.',
        },
        {
          id: '4',
          header: 'Do I need to pay extra for Installation?',
          content:
            'No way! Installation is included in the price of your <a href="https://www.topgoatmetalstructures.com/metal-buildings/">certified metal building</a>. We believe in offering a seamless, all-in-one experience for our customers from start to finish.',
        },
        {
          id: '5',
          header: 'What Warranties Do You Provide for Metal Buildings?',
          content:
            'We stand behind the quality of our products and back them with industry-leading <a href="https://www.topgoatmetalstructures.com/warranties/">warranties and craftsmanship guarantees</a>. These warranties cover the framing, paneling, and installation, so you can rest easy knowing you made a wise investment.',
        },
      ],
    },
    skus: [
      'WB166',
      'WB164',
      'WB158',
      'WB154',
      'WB96',
      'WB73',
      'WB103',
      'WB62',
      'WB42',
      'WB22',
      'WB16',
      'WB14',
      'WB5',
    ],
    metaData: {
      title: "Metal Buildings California - Built for CA's Tough Weather",
      description:
        'Top Goat Metal Structures offers high-quality metal buildings in California, CA. Our steel structure kits hold up against rain, winds, snow, and other seismic activity.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/california/',
          url: 'https://www.topgoatmetalstructures.com/service-area/california/',
          name: "Metal Buildings California - Built for CA's Tough Weather",
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:53+00:00',
          dateModified: '2025-03-20T09:29:14+00:00',
          description:
            'Top Goat Metal Structures offers high-quality metal buildings in California, CA. Our steel structure kits hold up against rain, winds, snow, and other seismic activity.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/california/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/california/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/california/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'California',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[2]',
    name: 'Florida',
    slug: 'florida',
    description: `
      <div>
        <h2>Florida Certified Steel Buildings</h2>
        <p>
          In Florida, intense sunlight and late summer storms can wreak havoc on vehicles, equipment, and businesses. But with the right infrastructure by your side, you’ll never have to worry about Mother Nature’s wrath damaging your things.
        </p>
        <p>
          Top Goat Metal Structures offers an extensive range of metal buildings, metal garages, metal barns, and carports in Florida for any application. Our structures are made with premium steel components and certified to hold up to the severe weather in the Sunshine State.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Florida.webp',
    imgUrl: '/images/service-area/states/backgrounds/Florida.webp',
    extraDetails: {
      title: 'Frequently Asked Questions about Metal Buildings in Florida',
      highlight: ' ',
      description:
        'Warrior works to make buying a metal building simple and straightforward. But that doesn’t mean you won’t have a few questions here and there. To help, we’ve answered some commonly asked questions about our structures:',
      accordionData: [
        {
          id: '1',
          header: 'Do You Install Metal Buildings in FL Near Me?',
          content:
            'Absolutely! We serve all areas across Florida, including Miami, Orlando, Tampa, Jacksonville, and smaller cities in between. No matter where you are, our team is ready to deliver and install your metal building.',
        },
        {
          id: '2',
          header: 'What Are Florida Certified Buildings?',
          content:
            'Florida certified buildings are structures that meet the state’s stringent building codes, including wind load requirements of up to 180 mph in coastal areas. These certifications guarantee your building is built to handle the environment where you call home.',
        },
        {
          id: '3',
          header: 'What is the Wind Rating for Metal Buildings in Florida?',
          content:
            'Our metal buildings can be customized to meet wind ratings of up to 180 mph, providing you with peace of mind during hurricane season.',
        },
        {
          id: '4',
          header: 'Do You Provide RTO and Financing Services in Florida?',
          content:
            'We offer <a href="https://www.topgoatmetalstructures.com/rent-to-own-metal-buildings/">rent-to-own</a> (RTO) for select structures and <a href="https://www.topgoatmetalstructures.com/metal-building-financing/">financing</a> options for metal buildings in Florida. These flexible payment plans make it easier to own the metal building you need without impacting your wallet.',
        },
        {
          id: '5',
          header: 'How Long Will It Take to Get My Building Delivered After I Place My Order?',
          content:
            'Lead times typically range from 4 to 10 weeks, depending on your building’s specs and local demand.',
        },
      ],
    },
    skus: [
      'WB166',
      'WB164',
      'WB158',
      'WB154',
      'WB96',
      'WB73',
      'WB103',
      'WB62',
      'WB42',
      'WB22',
      'WB16',
      'WB14',
      'WB5',
    ],
    metaData: {
      title: 'Metal Buildings Florida - Certified Steel Structure Kits in FL',
      description:
        'Made with premium steel components, our metal buildings offer the highest strength to hold up against the harsh weather of Florida, FL. Check out our kits!',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/florida/',
          url: 'https://www.topgoatmetalstructures.com/service-area/florida/',
          name: 'Metal Buildings Florida - Certified Steel Structure Kits in FL',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:53+00:00',
          dateModified: '2024-12-26T09:49:59+00:00',
          description:
            'Made with premium steel components, our metal buildings offer the highest strength to hold up against the harsh weather of Florida, FL. Check out our kits!',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/florida/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/florida/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/florida/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Florida',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[3]',
    name: 'Georgia',
    slug: 'georgia',
    description: `
      <div>
        <h2>Georgia Steel Buildings, Garages, and Barns</h2>
        <p>
          Whether you’re in the rolling hills or reside in the bustling city streets, Georgia’s diverse environment demands the most out of its buildings. Luckily, Top Goat Metal Structures offers metal buildings in Georgia that can keep your vehicles safe, house supplies and equipment, store agricultural machinery, and provide your business with the infrastructure it needs to thrive.
        </p>
        <p>
          These structures are certified to hold up to high winds and volatile weather and are built to last for generations when properly maintained. If you’re looking for a long-lasting solution to your biggest storage woes, Top Goat Metal Structures has you covered.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Georgia.webp',
    imgUrl: '/images/service-area/states/backgrounds/Georgia.webp',
    extraDetails: {
      title: 'Frequently Asked Questions about Georgia Metal Buildings',
      highlight: ' ',
      description:
        'You’ve got questions. We’ve got answers. Below, let’s explore some of the most discussed topics about metal buildings in Georgia:',
      accordionData: [
        {
          id: '1',
          header: 'I’m Pouring the Cement Slab for My Building. What Size Do I Need to Make It?',
          content:
            'Your slab should be slightly larger than the building’s footprint. For example, if your building is 20×30 feet, consider a 21×31-foot slab. You’ll want to consult with a licensed foundation expert for more information on the process.',
        },
        {
          id: '2',
          header: 'How Much Does a Metal Building Cost in Georgia?',
          content:
            '<a href="https://www.topgoatmetalstructures.com/metal-buildings/">Metal building prices</a> in Georgia vary based on size, customizations, and certifications, but typically start around $15-$30 per square foot.',
        },
        {
          id: '3',
          header: 'What Are the Most Popular Sizes of Steel Buildings in Georgia?',
          content:
            'Common sizes include 24×30 for <a href="https://www.topgoatmetalstructures.com/metal-garages/two-car-garage/">two-car garages</a>, 30×50 for <a href="https://www.topgoatmetalstructures.com/metal-buildings/workshop/">workshops</a>, and larger options like 40×60 <a href="https://www.topgoatmetalstructures.com/metal-barns/">metal barns</a> for agricultural or commercial use. We can customize any size to fit your needs.',
        },
        {
          id: '4',
          header: 'Can I Customize My Metal Garage?',
          content:
            'Absolutely! From roof styles to colors, window placements, door options, and additional features, we’ll help you design a garage that matches your needs and style.',
        },
        {
          id: '5',
          header: 'How Long Does It Take to Install a Steel Building in Georgia?',
          content:
            'Installation is quick and usually takes 1 to 3 days, depending on the size and complexity of the building.',
        },
      ],
    },
    skus: [
      'WB169',
      'WB168',
      'WB161',
      'WB88',
      'WB79',
      'WB94',
      'WB53',
      'WB52',
      'WB43',
      'WB28',
      'WB27',
      'WB13',
    ],
    metaData: {
      title:
        'Metal Buildings Georgia - Carports, Garages & Barns for GA | Top Goat Metal Structures',
      description:
        "Safeguard your vehicles, households, equipment with our metal buildings in Georgia. Our carports, garages, sheds and barns are built for GA's volatile climate.",
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/georgia/',
          url: 'https://www.topgoatmetalstructures.com/service-area/georgia/',
          name: 'Metal Buildings Georgia - Carports, Garages & Barns for GA',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:53+00:00',
          dateModified: '2025-03-20T09:33:47+00:00',
          description:
            "Safeguard your vehicles, households, equipment with our metal buildings in Georgia. Our carports, garages, sheds and barns are built for GA's volatile climate.",
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/georgia/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/georgia/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/georgia/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Georgia',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[4]',
    name: 'South Carolina',
    slug: 'south-carolina',
    description: `
      <div>
        <h2>Durable and Engineered SC Metal Buildings</h2>
        <p>
          South Carolina may be home to beachfront retreats and historical sites in abundance, but its also home to some nasty weather that can make keeping your cars, equipment, and valuables safe a tough job. But with metal buildings from Top Goat Metal Structures in South Carolina, you’ll always have the coverage you need.
        </p>
        <p>
          Our metal buildings in SC are built with durable steel components and engineered to hold up to South Carolina’s average wind, snow, and seismic activity. That way, you can rest easy knowing you’ve invested in a structure built for the job.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/SouthCarolina.webp',
    imgUrl: '/images/service-area/states/backgrounds/SouthCarolina.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About South Carolina Steel Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, it only makes sense that you’d have a few good questions on the back of your tongue. That’s why we’ve answered some of the most frequently asked questions about our metal buildings in SC:',
      accordionData: [
        {
          id: '1',
          header: 'Can you customize the dimensions of metal buildings for specific sites?',
          content:
            'Yes! Our metal buildings can be fully customized to match your needs. You’ll have complete control over your building’s dimensions, layout, roof style, number of doors and windows, and much more.',
        },
        {
          id: '2',
          header: 'How do metal buildings enhance property value?',
          content:
            'Certified metal buildings are typically included in property appraisals, effectively increasing your potential asking price should you ever decide to sell.',
        },
        {
          id: '3',
          header: 'What are the best types of metal buildings for extreme climates?',
          content:
            '<a href="https://www.topgoatmetalstructures.com/metal-buildings/">Steel buildings</a> with proper insulation, reinforced frameworks, and weather-resistant finishes are the ideal choice for extreme climates.',
        },
        {
          id: '4',
          header: 'What are the code compliance considerations for metal buildings in urban areas?',
          content:
            'Most counties and cities will have their own regulations surrounding building permits and zoning codes. You’ll want to work closely with your building officials to determine the specific guidelines you’ll need to adhere to.',
        },
        {
          id: '5',
          header: 'How are metal buildings designed for heavy snow loads?',
          content:
            'Metal buildings that are designed for heavy snow loads feature steeper roof pitches, reinforced trusses and framing to provide you with the strength to weather the storm.',
        },
      ],
    },
    skus: [
      'WB160',
      'WB153',
      'WB81',
      'WB87',
      'WB80',
      'WB78',
      'WB74',
      'WB106',
      'WB102',
      'WB69',
      'WB67',
      'WB57',
      'WB44',
      'WB36',
      'WB23',
      'WB20',
      'WB17',
      'WB15',
      'WB3',
    ],
    metaData: {
      title: 'Metal Buildings South Carolina, SC - Toughest Steel Structures',
      description:
        "Rest easy with our metal buildings in South Carolina. Our steel structure kits are built for SC's nasty weather that can safeguard your cars and valuables.",
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/south-carolina/',
          url: 'https://www.topgoatmetalstructures.com/service-area/south-carolina/',
          name: 'Metal Buildings South Carolina, SC - Toughest Steel Structures',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:54+00:00',
          dateModified: '2025-03-20T10:17:43+00:00',
          description:
            "Rest easy with our metal buildings in South Carolina. Our steel structure kits are built for SC's nasty weather that can safeguard your cars and valuables.",
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/south-carolina/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/south-carolina/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/south-carolina/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'South Carolina',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[5]',
    name: 'Louisiana',
    slug: 'louisiana',
    description: `
      <div>
        <h2>Premium Louisiana Steel Building Kits</h2>
        <p>
          Thanks to high winds, heavy rain, and the very real threat of hurricanes and tropical storms, Louisiana residents know a thing or two about protecting their things from the elements. They trust metal buildings from Top Goat Metal Structures to keep their vehicles, equipment, valuables, and belongings safe from the elements. And you can, too.
        </p>
        <p>
          Whether you’re upgrading the backyard, augmenting your farming operation, or starting a new business, Top Goat Metal Structures has the right structure for the job. Our metal buildings in Louisiana are made with premium steel components and certified to handle anything in the Bayou State.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Louisiana.webp',
    imgUrl: '/images/service-area/states/backgrounds/Louisiana.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Louisiana Metal Buildings',
      highlight: ' ',
      description:
        'Whether you’re a first-time buyer or just interested in how metal buildings work, you probably have a few questions about the buying process. Top Goat Metal Structures wants to make buying your structure easy and straightforward, so we’ve answered some frequently asked questions on the subject:',
      accordionData: [
        {
          id: '1',
          header: 'How Much Does a Metal Building Cost in Louisiana?',
          content:
            'On average, prices can range from $3,000 for smaller structures to over $50,000 for large, fully customized buildings. This price can be influenced by raw steel prices, regional pricing, and the number of customizations you choose.',
        },
        {
          id: '2',
          header: 'How Long Is the Wait Between Ordering a Steel Building and Install?',
          content:
            'The wait time between ordering and installation typically ranges from 4 to 8 weeks. The size of the building, customization details, and your location in Louisiana can affect this timeframe.',
        },
        {
          id: '3',
          header: 'What’s the Difference Between Certified and Non-Certified Metal Buildings?',
          content:
            '<a href="https://www.topgoatmetalstructures.com/metal-buildings/">Certified metal buildings</a> are designed to meet your local building codes and can withstand specific wind and snow loads. Non-certified buildings, on the other hand, are not engineered to meet code requirements and are typically used for temporary or less critical purposes.',
        },
        {
          id: '4',
          header: 'What Is the Difference Between 12-gauge and 14-gauge Steel Framing?',
          content:
            'The primary difference lies in the thickness of the steel. <strong>12-gauge steel</strong> is thicker and stronger than <strong>14-gauge steel</strong>, making it better suited for areas with higher wind loads or heavy snow. While 14-gauge is more cost-effective and works well for standard applications, 12-gauge framing offers enhanced durability and longevity.',
        },
        {
          id: '5',
          header: 'Do Your Buildings Meet My Local Building Code Requirements?',
          content:
            'Yes! Certified metal buildings are designed to comply with local building codes throughout Louisiana, so you can rest easy knowing your structure is up to code and up for the job.',
        },
      ],
    },
    skus: [
      'WB160',
      'WB153',
      'WB81',
      'WB87',
      'WB80',
      'WB78',
      'WB74',
      'WB106',
      'WB102',
      'WB69',
      'WB67',
      'WB57',
      'WB44',
      'WB36',
      'WB23',
      'WB20',
      'WB17',
      'WB15',
      'WB3',
    ],
    metaData: {
      title: 'Metal Buildings Louisiana - Certified Structures for Bayou State',
      description:
        'Buy certified metal buildings in Louisiana to keep your valuables and vehicles safe during adverse weather condition. Explore our garages, carports and barns.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/louisiana/',
          url: 'https://www.topgoatmetalstructures.com/service-area/louisiana/',
          name: 'Metal Buildings Louisiana - Certified Structures for Bayou State',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:53+00:00',
          dateModified: '2024-12-26T10:03:50+00:00',
          description:
            'Buy certified metal buildings in Louisiana to keep your valuables and vehicles safe during adverse weather condition. Explore our garages, carports and barns.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/louisiana/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/louisiana/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/louisiana/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Louisiana',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[6]',
    name: 'North Carolina',
    slug: 'north-carolina',
    description: `
      <div>
        <h2>NC Metal Buildings, Garages, Carports and Barns</h2>
        <p>
          Being the home state of metal buildings, North Carolina residents know a thing or two about quality structures. That’s why so many trust Top Goat Metal Structures to deliver long-lasting solutions to their residential, agricultural, and commercial needs. These buildings are forged from galvanized steel components, and customized to tackle your biggest needs.
        </p>
        <p>
          Whether you live in the mountains in the west, or bask on the beaches on the coast, Top Goat Metal Structures has the ideal structure for you.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/NorthCarolina.webp',
    imgUrl: '/images/service-area/states/backgrounds/NorthCarolina.webp',
    extraDetails: {
      title: 'Frequently Asked Questions about North Carolina Metal Buildings',
      highlight: ' ',
      description:
        'It makes perfect sense that you’ll have a question or two– or three about your metal building. To help, we’ve answered some of the most frequently asked questions on the subject:',
      accordionData: [
        {
          id: '1',
          header: 'How Much Does a Metal Building Cost in NC?',
          content:
            'The cost of a metal building in North Carolina depends on its size, customization options, and additional features you choose. On average, you can expect prices to range between $25 and $40 per square foot.',
        },
        {
          id: '2',
          header: 'Do You Install Metal Buildings Near Me in NC?',
          content:
            'Absolutely! Top Goat Metal Structures installs <a href="https://www.topgoatmetalstructures.com/metal-buildings/">steel buildings</a> all across North Carolina. No matter where in the Tarheel State you call home, we’ve got you covered.',
        },
        {
          id: '3',
          header: 'What Are Certified Buildings?',
          content:
            'Certified buildings are structures that are engineered to meet or exceed the average wind, snow accumulation, and seismic activity in your region. This certification guarantees that your building can handle the environment in your area. It’s also often required to secure building permits and include the structure in your property assessments.',
        },
        {
          id: '4',
          header: 'Do You Provide RTO and Financing Services in North Carolina?',
          content:
            'Yes, we offer flexible <a href="https://www.topgoatmetalstructures.com/metal-building-financing/">financing options</a> and <a href="https://www.topgoatmetalstructures.com/rent-to-own-metal-buildings/">Rent-to-Own</a> (RTO) plans to make your metal building investment more affordable. Our team can walk you through the available programs and help you find the best solution for your budget.',
        },
        {
          id: '5',
          header: 'What Size of Foundation Should I Get for My Metal Building?',
          content:
            'The size of your foundation will need to be, at a minimum, the same footprint as your metal building’s dimensions. You may also want to add a few inches on each side for additional structural support.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings North Carolina, NC - Quality Steel Structure Kits',
      description:
        'Buy top notch quality steel built metal buildings in North Carolina, NC from Top Goat Metal Structures. Explore the carports, garages, barns and sheds range!',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/north-carolina/',
          url: 'https://www.topgoatmetalstructures.com/service-area/north-carolina/',
          name: 'Metal Buildings North Carolina, NC - Quality Steel Structure Kits',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:54+00:00',
          dateModified: '2025-03-20T09:59:24+00:00',
          description:
            'Buy top notch quality steel built metal buildings in North Carolina, NC from Top Goat Metal Structures. Explore the carports, garages, barns and sheds range!',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/north-carolina/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/north-carolina/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/north-carolina/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'North Carolina',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[7]',
    name: 'Ohio',
    slug: 'ohio',
    description: `
      <div>
        <h2>Engineered Carports, Barns, Garages and Steel Structures in Ohio</h2>
        <p>
          Residents of Ohio know just how important it is to have a strong, stable way to protect your vehicles and belongings. Metal buildings in Ohio are a great solution to this need. They’re strong, engineered to hold up to the environment, and built to last for generations with the right maintenance.
        </p>
        <p>
          Top Goat Metal Structures offers an extensive range of metal buildings, steel garages, metal barns, carports and steel sheds for any application in Ohio. Whether you’re tackling a small residential job, or starting a large business venture, we’ve got just the building for you.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Ohio.webp',
    imgUrl: '/images/service-area/states/backgrounds/Ohio.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Ohio Metal Buildings',
      highlight: ' ',
      description:
        'It doesn’t matter if you’re considering a backyard storage shed or designing a metal building home, you’ll probably have a few questions about the design and ordering process. To help guide the way, we’ve answered some of the most commonly asked queries about our structures:',
      accordionData: [
        {
          id: '1',
          header: 'How Much Does a Metal Building Cost in Ohio?',
          content:
            'Typically, prices start at a few thousand dollars and can range to $20,000 or more. This price can fluctuate based on your structure’s size, configuration, the customizations you choose, and extra amenities. Raw steel prices and regional costs can also play a part in your building’s final price tag.',
        },
        {
          id: '2',
          header: 'What Are the Most Popular Building Sizes in Ohio?',
          content:
            'In Ohio, popular metal building sizes include 30×40 for personal <a href="https://www.topgoatmetalstructures.com/metal-garages/">garages</a>, 40×60 for <a href="https://www.topgoatmetalstructures.com/metal-buildings/farm/">agricultural</a> use, and larger options like 50×100 for <a href="https://www.topgoatmetalstructures.com/metal-buildings/commercial/">commercial</a> applications. Your choice will depend on your storage or operational needs.',
        },
        {
          id: '3',
          header: 'How Do I Choose the Right Roof Style?',
          content:
            'Ohio’s climate can bring heavy snow and rain, so roof styles like vertical roofs are recommended for their superior drainage capabilities. These roofs feature vertically arranged panels that allow rain, storm debris, leaves, and snow to slide away from your structure, saving you tons in maintenance and repair costs over your building’s lifespan.',
        },
        {
          id: '4',
          header: 'Do You Provide Metal Building Kits?',
          content:
            'Yes! We offer <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal building kits</a> that come with all the components needed for assembly. However, we also provide free delivery and installation with every purchase, so you don’t have to worry about hiring third-party contractors.',
        },
        {
          id: '5',
          header: 'Do You Charge Extra for Delivery and Installation?',
          content:
            'No extra fees here! We include delivery and installation in our pricing for most areas in Ohio. It’s all part of making your experience with us seamless and stress-free.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Ohio, OH - Engineered for Adverse Weather',
      description:
        'Buy strong and pre engineered metal buildings in Ohio for all purpose. Get exclusive deals on carports, garages, barns and sheds in OH.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/ohio/',
          url: 'https://www.topgoatmetalstructures.com/service-area/ohio/',
          name: 'Metal Buildings Ohio, OH - Engineered for Adverse Weather',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:54+00:00',
          dateModified: '2024-12-26T10:14:37+00:00',
          description:
            'Buy strong and pre engineered metal buildings in Ohio for all purpose. Get exclusive deals on carports, garages, barns and sheds in OH.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/ohio/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/ohio/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/ohio/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Ohio',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[8]',
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    description: `
      <div>
        <h2>Budget Friendly Pennsylvania Steel Buildings</h2>
        <p>
          With frigid temperatures and heavy snow accumulation in the winters, it pays for Pennsylvania residents to invest in heavy duty infrastructure to protect their things. Whether you’re storing the family car or housing supplies and equipment, metal buildings from Warrior in Pennsylvania are a great solution to this need.
        </p>
        <p>
          These structures are crafted with high-grade steel components, and engineered to handle any project you have in mind. Use them for residential projects, agriculture, or even commercial purposes. The only limits with a Warrior building are your budget and your imagination.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Pennsylvania.webp',
    imgUrl: '/images/service-area/states/backgrounds/Pennsylvania.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Metal Buildings in Pennsylvania',
      highlight: ' ',
      description:
        'Whether you’re designing a small-scale residential structure, or starting a full-fledged business, it pays to ask questions about the metal building buying process. To help, we’ve put together a collection of the most frequently asked queries on the subject:',
      accordionData: [
        {
          id: '1',
          header: 'What Are the Legal Requirements for Constructing Metal Building in Urban Areas?',
          content:
            'Urban construction typically requires compliance with local zoning laws, building codes, and permitting processes. It’s important for you to check with local building authorities on height restrictions, setbacks, and approved uses for your property before starting construction.',
        },
        {
          id: '2',
          header: 'What Are the Financing Options Available for Constructing a Metal Building?',
          content:
            'Financing options often include loans, rent-to-own programs, and direct payment plans. Many providers work with third-party lenders to help you secure a plan that fits your budget.',
        },
        {
          id: '3',
          header: 'Do You Provide Metal Building Insulation?',
          content:
            'Yes! Insulation is available to enhance energy efficiency and regulate temperature. Contact our building experts for more information on the types of insulation we offer.',
        },
        {
          id: '4',
          header: 'What Factors Influence the Cost of Metal Building Kits?',
          content:
            'Several factors will affect the cost of your metal building, including building size, materials, customization options, location, and current steel prices.',
        },
        {
          id: '5',
          header: 'How Long Does a Metal Building Last Compared to a Wood Structure?',
          content:
            '<a href="https://www.topgoatmetalstructures.com/metal-buildings/">Metal buildings</a> are durable, and with proper maintenance, they can last 50 years or more. Wooden structures, however, will need repeated maintenance and will offer a shorter lifespan.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Pennsylvania - Budget Friendly Steel Structure Kits',
      description:
        'Choose Top Goat Metal Structures to secure your valuables in Pennsylvania. Our metal buildings are budget friendly and built with top quality steel. Get a quote today!',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/pennsylvania/',
          url: 'https://www.topgoatmetalstructures.com/service-area/pennsylvania/',
          name: 'Metal Buildings Pennsylvania - Budget Friendly Steel Structure Kits',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:54+00:00',
          dateModified: '2024-12-26T10:19:33+00:00',
          description:
            'Choose Top Goat Metal Structures to secure your valuables in Pennsylvania. Our metal buildings are budget friendly and built with top quality steel. Get a quote today!',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/pennsylvania/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/pennsylvania/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/pennsylvania/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Pennsylvania',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[9]',
    name: 'Tennessee',
    slug: 'tennessee',
    description: `
      <div>
        <h2>Tennessee Steel Structure Kits</h2>
        <p>
          Living in Tennessee comes with a wide range of advantages– close proximity to nature, wonderful views, and historical sites. But it’s also home to some pretty volatile weather. That’s why it pays to have the right infrastructure. For that, Top Goat Metal Structures has you covered.
        </p>
        <p>
          Our metal buildings in Tennessee are built from heavy-duty steel components, customized to suit your needs, and delivered to your doorstep at no added cost to you. So, whether you’re housing the family car, protecting ATVs and recreational equipment, or creating an organized workspace, you’re in good hands with a Warrior building.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Tennessee.webp',
    imgUrl: '/images/service-area/states/backgrounds/Tennessee.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Tennessee Metal Buildings',
      highlight: ' ',
      description: ' ',
      accordionData: [
        {
          id: '1',
          header: 'What financing options are available for first-time metal building buyers?',
          content:
            'Top Goat Metal Structures makes it easy to get the metal building you need on a budget. We work with trusted lenders to bring you flexible financing plans that put you in the driver’s seat of your own structure. We also offer rent-to-own packages on select structures with no hard credit checks and fast approvals.',
        },
        {
          id: '2',
          header: 'How do metal buildings fare in coastal, corrosive environments?',
          content:
            'Coastal environments can be tough on structures, but metal buildings are built to handle it. With protective coatings and galvanized steel, they’re designed to resist corrosion from salt and moisture. With regular maintenance, your building should be able to go for decades.',
        },
        {
          id: '3',
          header: 'What are the challenges of metal building foundation preparation?',
          content:
            'Preparing the foundation might feel like a big job, but it’s worth getting it right. You’ll need to ensure the ground is level, check soil stability, and choose the best type of foundation for your site—whether it’s a concrete slab or something else. A professional can make this process much smoother and help you avoid surprises down the road.',
        },
        {
          id: '4',
          header: 'Do I need to get a permit for metal building installation?',
          content:
            'Yes, most places require a permit for <a href="https://www.topgoatmetalstructures.com/metal-building-installation/">installing a metal building</a>. But don’t stress—your local building office can guide you on what’s needed, and our experts are there with you from beginning to end, so you don’t have to tackle it alone.',
        },
        {
          id: '5',
          header: 'How much does it cost to build a metal building?',
          content:
            'A simple building might start at $10–$25 per square foot, but if you want extras like insulation or custom doors, that’ll add to the price. It’s a good idea to include foundation and permit costs in your budget too, so there are no surprises.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Tennessee - Built for Volatile Weather | Top Goat Metal Structures',
      description:
        'Top Goat Metal Structures offers metal buildings in Tennessee to combat against their Volatile weather. Get a free delivery and installation today at your doorstep.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/tennessee/',
          url: 'https://www.topgoatmetalstructures.com/service-area/tennessee/',
          name: 'Metal Buildings Tennessee - Built for Volatile Weather',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:21:42+00:00',
          description:
            'Top Goat Metal Structures offers metal buildings in Tennessee to combat against their Volatile weather. Get a free delivery and installation today at your doorstep.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/tennessee/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/tennessee/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/tennessee/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Tennessee',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[10]',
    name: 'Texas',
    slug: 'texas',
    description: `
      <div>
        <h2>Barns, Carports, Garages, Sheds and Steel Buildings Range in Texas</h2>
        <p>
          With scorching temperatures, big skies, and harsh UV rays, Texas residents know the value of a good metal building. These structures are made with high quality steel, built to your style, and engineered to go for decades in some of the most inhospitable places in the US.
        </p>
        <p>
          Top Goat Metal Structures is proud to be a leading provider of metal buildings, metal barns, carports, metal garages, and steel sheds in Texas, TX. Whether you’re upgrading the backyard, augmenting the farm, or tackling a new business venture, we’ve got just the building for you.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Texas.webp',
    imgUrl: '/images/service-area/states/backgrounds/Texas.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Texas Metal Buildings',
      highlight: ' ',
      description:
        'Make no mistake, buying a metal building is no small task. As such, you’re likely to have a few questions about the process. As a leading provider of steel structures, it’s our job to have the answers. Take a look at some of the most frequently asked questions about metal buildings in Texas:',
      accordionData: [
        {
          id: '1',
          header: 'What are certified buildings?',
          content:
            '<a href="https://www.topgoatmetalstructures.com/metal-buildings/">Certified buildings</a> are all about giving you peace of mind. They’re engineered to meet your local building codes for wind, snow, and seismic activity. So, no matter how you use them in the Lonestar State, they’re up for the job.',
        },
        {
          id: '2',
          header: 'How much does a metal building cost in Texas?',
          content:
            'Texas-sized dreams don’t always mean Texas-sized budgets! On average, metal buildings in Texas can cost anywhere from $20 to $40 per square foot, depending on size, features, and customizations you choose.',
        },
        {
          id: '3',
          header: 'Which roof style is best for Texas weather conditions?',
          content:
            'A vertical roof style is a top choice for Texans because it’s designed to shed rain and debris quickly—perfect for those unpredictable Texas storms.',
        },
        {
          id: '4',
          header: 'How does the gauge of steel affect the durability of metal buildings?',
          content:
            'The gauge of steel is like the backbone of your building. Thicker steel (lower gauge numbers) means stronger, tougher structures that can handle more weight and rough weather. So, if durability is a priority, going with a lower gauge is the way to go.',
        },
        {
          id: '5',
          header: 'How do different metal building designs affect overall costs?',
          content:
            'Your design choices can make a big impact on the final price. A straightforward design will keep costs down, while adding custom features—like unique doors, windows, or special trims—can increase the price a bit.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Texas, TX - Engineered to Stand for Decades',
      description:
        'Our metal buildings in Texas are built and engineered to stand for years against bad weather of TX. Explore carports, garages, barns and sheds options.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/texas/',
          url: 'https://www.topgoatmetalstructures.com/service-area/texas/',
          name: 'Metal Buildings Texas, TX - Engineered to Stand for Decades',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:22:42+00:00',
          description:
            'Our metal buildings in Texas are built and engineered to stand for years against bad weather of TX. Explore carports, garages, barns and sheds options.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/texas/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/texas/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/texas/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Texas',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[11]',
    name: 'Virginia',
    slug: 'virginia',
    description: `
      <div>
        <h2>Built Tough Virginia Steel Buildings</h2>
        <p>
          With tough mountain winters and volatile spring storms, Virginians know just how important it is to keep your vehicles, equipment, and valuables sheltered. Metal buildings in Virginia are a great way to achieve the protection you need without breaking the bank in the process.
        </p>
        <p>
          These steel structures in VA are built tough, customizable from top to bottom, and ready to serve your needs at home, at work, or on the farm. No matter what you take on, Top Goat Metal Structures is there for you.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Virginia.webp',
    imgUrl: '/images/service-area/states/backgrounds/Virginia.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Virginia Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and tornado conditions?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are tested and certified to hold up to the average wind, snow, and seismic forces in a given region. So, while no building is safe for tornado-scale winds, our structures are your best choice for the job.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. If you’re adding custom features, it might take a little longer.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Virginia - Customizable and Built Tough for VA',
      description:
        "Top Goat Metal Structures is here for you to provide top class metal buildings in Virginia. Our steel structure kits are customizable and built tough for VA's residents.",
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/virginia/',
          url: 'https://www.topgoatmetalstructures.com/service-area/virginia/',
          name: 'Metal Buildings Virginia - Customizable and Built Tough for VA',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            "Top Goat Metal Structures is here for you to provide top class metal buildings in Virginia. Our steel structure kits are customizable and built tough for VA's residents.",
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/virginia/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/virginia/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/virginia/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Virginia',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
            contentUrl:
              'https://www.www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },

  {
    id: 'state[12]',
    name: 'Arizona',
    slug: 'arizona',
    description: `
      <div>
        <h2>Built Tough Virginia Steel Buildings</h2>
        <p>
          With tough mountain winters and volatile spring storms, Virginians know just how important it is to keep your vehicles, equipment, and valuables sheltered. Metal buildings in Virginia are a great way to achieve the protection you need without breaking the bank in the process.
        </p>
        <p>
          These steel structures in VA are built tough, customizable from top to bottom, and ready to serve your needs at home, at work, or on the farm. No matter what you take on, Top Goat Metal Structures is there for you.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Arizona.webp',
    imgUrl: '/images/service-area/states/backgrounds/Arizona.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Arizona Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and tornado conditions?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are tested and certified to hold up to the average wind, snow, and seismic forces in a given region. So, while no building is safe for tornado-scale winds, our structures are your best choice for the job.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. If you’re adding custom features, it might take a little longer.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Virginia - Customizable and Built Tough for VA',
      description:
        "Top Goat Metal Structures is here for you to provide top class metal buildings in Virginia. Our steel structure kits are customizable and built tough for VA's residents.",
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/virginia/',
          url: 'https://www.topgoatmetalstructures.com/service-area/virginia/',
          name: 'Metal Buildings Virginia - Customizable and Built Tough for VA',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            "Top Goat Metal Structures is here for you to provide top class metal buildings in Virginia. Our steel structure kits are customizable and built tough for VA's residents.",
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/arizona/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/arizona/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/arizona/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Virginia',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.topgoatmetalstructures.com/#website',
          url: 'https://www.topgoatmetalstructures.com/',
          name: 'Top Goat Metal Structures',
          description: 'The best in the industry',
          publisher: {
            '@id': 'https://www.topgoatmetalstructures.com/#organization',
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.topgoatmetalstructures.com/?s={search_term_string}',
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
          '@id': 'https://www.topgoatmetalstructures.com/#organization',
          name: 'Top Goat Metal Structures',
          url: 'https://www.topgoatmetalstructures.com/',
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'en-US',
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
            url: 'https://www.www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
            contentUrl:
              'https://www.www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/warriorbuildings/'],
        },
      ],
    },
  },
  {
    id: 'state[13]',
    name: 'Illinois',
    slug: 'illinois',
    description: `
    <div>
      <h2>Built Tough Illinois Steel Buildings</h2>
      <p>
        From snowy winters to powerful Midwest storms, Illinois residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Illinois offer reliable protection while staying affordable and flexible.
      </p>
      <p>
        These steel structures in IL are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
      </p>
    </div>
  `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Illinois.webp',
    imgUrl: '/images/service-area/states/backgrounds/Illinois.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Illinois Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Illinois codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Illinois - Customizable and Built Tough for IL',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Illinois. Our steel structure kits are customizable and engineered tough for IL residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/illinois/',
          url: 'https://www.topgoatmetalstructures.com/service-area/illinois/',
          name: 'Metal Buildings Illinois - Customizable and Built Tough for IL',
          isPartOf: {
            '@id': 'https://www.topgoatmetalstructures.com/#website',
          },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Illinois. Our steel structure kits are customizable and engineered tough for IL residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/illinois/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/illinois/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/illinois/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Illinois',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'state[14]',
    name: 'Indiana',
    slug: 'indiana',
    description: `
      <div>
        <h2>Built Tough Indiana Steel Buildings</h2>
        <p>
          Indiana weather can swing from heavy snow and ice to strong spring storms. A metal building gives you dependable, year-round protection for vehicles, equipment, and valuables—without the high cost of traditional construction.
        </p>
        <p>
          Our steel structures in IN are engineered for strength, fully customizable, and built to fit your needs at home, on the job site, or on the farm. No matter what you’re building, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Indiana.webp',
    imgUrl: '/images/service-area/states/backgrounds/Indiana.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Indiana Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Indiana codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Indiana - Customizable and Built Tough for IN',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Indiana. Our steel structure kits are customizable and engineered tough for IN residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/indiana/',
          url: 'https://www.topgoatmetalstructures.com/service-area/indiana/',
          name: 'Metal Buildings Indiana - Customizable and Built Tough for IN',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Indiana. Our steel structure kits are customizable and engineered tough for IN residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/indiana/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/indiana/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/indiana/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Indiana' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[15]',
    name: 'Kansas',
    slug: 'kansas',
    description: `
      <div>
        <h2>Built Tough Kansas Steel Buildings</h2>
        <p>
          Kansas winds and severe storms can be tough on property. Metal buildings offer reliable, affordable protection for equipment, vehicles, and storage—built for the realities of the Midwest.
        </p>
        <p>
          Our steel structures in KS are engineered for strength, fully customizable, and ready for farms, workshops, businesses, and more. Top Goat Metal Structures makes it easy to build with confidence.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Kansas.webp',
    imgUrl: '/images/service-area/states/backgrounds/Kansas.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Kansas Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Kansas codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Kansas - Customizable and Built Tough for KS',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Kansas. Our steel structure kits are customizable and engineered tough for KS residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/kansas/',
          url: 'https://www.topgoatmetalstructures.com/service-area/kansas/',
          name: 'Metal Buildings Kansas - Customizable and Built Tough for KS',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Kansas. Our steel structure kits are customizable and engineered tough for KS residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/kansas/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/kansas/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/kansas/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Kansas' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[16]',
    name: 'Kentucky',
    slug: 'kentucky',
    description: `
      <div>
        <h2>Built Tough Kentucky Steel Buildings</h2>
        <p>
          Kentucky’s changing seasons bring heavy rain, strong winds, and winter weather. Metal buildings give you sturdy, low-maintenance protection for tools, vehicles, and equipment—built to last year after year.
        </p>
        <p>
          Our steel structures in KY are engineered for strength, fully customizable, and designed for shops, barns, storage, and business spaces. Top Goat Metal Structures is ready to help you build it right.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Kentucky.webp',
    imgUrl: '/images/service-area/states/backgrounds/Kentucky.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Kentucky Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Kentucky codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Kentucky - Customizable and Built Tough for KY',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Kentucky. Our steel structure kits are customizable and engineered tough for KY residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/kentucky/',
          url: 'https://www.topgoatmetalstructures.com/service-area/kentucky/',
          name: 'Metal Buildings Kentucky - Customizable and Built Tough for KY',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Kentucky. Our steel structure kits are customizable and engineered tough for KY residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/kentucky/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/kentucky/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/kentucky/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Kentucky' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[17]',
    name: 'Maryland',
    slug: 'maryland',
    description: `
      <div>
        <h2>Built Tough Maryland Steel Buildings</h2>
        <p>
          Maryland sees everything from humid summers and heavy rain to winter storms. Metal buildings are a smart way to protect equipment, vehicles, and storage needs with a strong, low-maintenance solution.
        </p>
        <p>
          Our steel structures in MD are engineered for strength, fully customizable, and ideal for residential, commercial, and agricultural projects. Top Goat Metal Structures is here to help you build with confidence.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Maryland.webp',
    imgUrl: '/images/service-area/states/backgrounds/Maryland.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Maryland Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Maryland codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Maryland - Customizable and Built Tough for MD',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Maryland. Our steel structure kits are customizable and engineered tough for MD residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/maryland/',
          url: 'https://www.topgoatmetalstructures.com/service-area/maryland/',
          name: 'Metal Buildings Maryland - Customizable and Built Tough for MD',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Maryland. Our steel structure kits are customizable and engineered tough for MD residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/maryland/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/maryland/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/maryland/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Maryland' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[18]',
    name: 'Michigan',
    slug: 'michigan',
    description: `
      <div>
        <h2>Built Tough Michigan Steel Buildings</h2>
        <p>
          Michigan winters can be intense, with heavy snow and freezing temperatures. Metal buildings provide strong, dependable protection for vehicles, equipment, and storage—built to handle demanding seasonal conditions.
        </p>
        <p>
          Our steel structures in MI are engineered for strength, fully customizable, and perfect for garages, workshops, warehouses, and farm buildings. Top Goat Metal Structures is ready to help you build tough.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Michigan.webp',
    imgUrl: '/images/service-area/states/backgrounds/Michigan.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Michigan Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Michigan codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Michigan - Customizable and Built Tough for MI',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Michigan. Our steel structure kits are customizable and engineered tough for MI residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/michigan/',
          url: 'https://www.topgoatmetalstructures.com/service-area/michigan/',
          name: 'Metal Buildings Michigan - Customizable and Built Tough for MI',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Michigan. Our steel structure kits are customizable and engineered tough for MI residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/michigan/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/michigan/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/michigan/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Michigan' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[19]',
    name: 'Mississippi',
    slug: 'mississippi',
    description: `
      <div>
        <h2>Built Tough Mississippi Steel Buildings</h2>
        <p>
          Mississippi heat, humidity, and severe storms demand dependable protection. Metal buildings are a strong, low-maintenance option for storing equipment, vehicles, and supplies—built for long-term durability.
        </p>
        <p>
          Our steel structures in MS are engineered for strength, fully customizable, and ready for farms, workshops, and growing businesses. Top Goat Metal Structures makes it simple to build the space you need.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Mississippi.webp',
    imgUrl: '/images/service-area/states/backgrounds/Mississippi.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Mississippi Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Mississippi codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Mississippi - Customizable and Built Tough for MS',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Mississippi. Our steel structure kits are customizable and engineered tough for MS residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/mississippi/',
          url: 'https://www.topgoatmetalstructures.com/service-area/mississippi/',
          name: 'Metal Buildings Mississippi - Customizable and Built Tough for MS',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Mississippi. Our steel structure kits are customizable and engineered tough for MS residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/mississippi/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/mississippi/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/mississippi/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Mississippi' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[20]',
    name: 'New Mexico',
    slug: 'new-mexico',
    description: `
      <div>
        <h2>Built Tough New Mexico Steel Buildings</h2>
        <p>
          New Mexico brings intense sun, high winds, and big temperature swings. Metal buildings are a durable, cost-effective way to protect equipment, vehicles, and storage while keeping your layout flexible.
        </p>
        <p>
          Our steel structures in NM are engineered for strength, fully customizable, and built for residential, commercial, and agricultural use. Top Goat Metal Structures is ready when you are.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/New_Mexico.webp',
    imgUrl: '/images/service-area/states/backgrounds/New_Mexico.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About New Mexico Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed New Mexico codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings New Mexico - Customizable and Built Tough for NM',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in New Mexico. Our steel structure kits are customizable and engineered tough for NM residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-mexico/',
          url: 'https://www.topgoatmetalstructures.com/service-area/new-mexico/',
          name: 'Metal Buildings New Mexico - Customizable and Built Tough for NM',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in New Mexico. Our steel structure kits are customizable and engineered tough for NM residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/new-mexico/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/new-mexico/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-mexico/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'New Mexico' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[21]',
    name: 'New York',
    slug: 'new-york',
    description: `
      <div>
        <h2>Built Tough New York Steel Buildings</h2>
        <p>
          New York weather can mean heavy snow, strong winds, and year-round temperature changes. Metal buildings offer dependable protection and flexible space for storage, workshops, and business use.
        </p>
        <p>
          Our steel structures in NY are engineered for strength, fully customizable, and built to meet demanding regional conditions. Top Goat Metal Structures is here to help you create the space you need.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/New_York.webp',
    imgUrl: '/images/service-area/states/backgrounds/New_York.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About New York Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed New York codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings New York - Customizable and Built Tough for NY',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in New York. Our steel structure kits are customizable and engineered tough for NY residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-york/',
          url: 'https://www.topgoatmetalstructures.com/service-area/new-york/',
          name: 'Metal Buildings New York - Customizable and Built Tough for NY',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in New York. Our steel structure kits are customizable and engineered tough for NY residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/new-york/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/new-york/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-york/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'New York' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[22]',
    name: 'Oregon',
    slug: 'oregon',
    description: `
      <div>
        <h2>Built Tough Oregon Steel Buildings</h2>
        <p>
          Oregon’s wet seasons and coastal weather can be hard on storage and equipment. Metal buildings provide long-lasting protection with flexible, customizable layouts for residential and commercial needs.
        </p>
        <p>
          Our steel structures in OR are engineered for strength, fully customizable, and perfect for shops, storage, and agricultural projects. Top Goat Metal Structures is here to help you build the right space.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Oregon.webp',
    imgUrl: '/images/service-area/states/backgrounds/Oregon.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Oregon Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Oregon codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Oregon - Customizable and Built Tough for OR',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Oregon. Our steel structure kits are customizable and engineered tough for OR residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/oregon/',
          url: 'https://www.topgoatmetalstructures.com/service-area/oregon/',
          name: 'Metal Buildings Oregon - Customizable and Built Tough for OR',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Oregon. Our steel structure kits are customizable and engineered tough for OR residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/oregon/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/oregon/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/oregon/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Oregon' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[23]',
    name: 'Washington',
    slug: 'washington',
    description: `
      <div>
        <h2>Built Tough Washington Steel Buildings</h2>
        <p>
          Washington’s rain, wind, and varied climates make durable storage a must. Metal buildings provide a reliable, low-maintenance solution for protecting equipment, vehicles, and business inventory.
        </p>
        <p>
          Our steel structures in WA are engineered for strength, fully customizable, and designed for garages, workshops, agriculture, and commercial use. Top Goat Metal Structures is here to help you build it right.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Washington.webp',
    imgUrl: '/images/service-area/states/backgrounds/Washington.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Washington Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Washington codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Washington - Customizable and Built Tough for WA',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Washington. Our steel structure kits are customizable and engineered tough for WA residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/washington/',
          url: 'https://www.topgoatmetalstructures.com/service-area/washington/',
          name: 'Metal Buildings Washington - Customizable and Built Tough for WA',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Washington. Our steel structure kits are customizable and engineered tough for WA residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/washington/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/washington/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/washington/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Washington' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[24]',
    name: 'West Virginia',
    slug: 'west-virginia',
    description: `
      <div>
        <h2>Built Tough West Virginia Steel Buildings</h2>
        <p>
          West Virginia’s hills, heavy rains, and winter conditions make secure storage a priority. Metal buildings provide strong, flexible protection for equipment, vehicles, and materials—built for the long haul.
        </p>
        <p>
          Our steel structures in WV are engineered for strength, fully customizable, and ideal for residential, commercial, and agricultural use. Top Goat Metal Structures is ready to help you build with confidence.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/West_Virginia.webp',
    imgUrl: '/images/service-area/states/backgrounds/West_Virginia.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About West Virginia Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed West Virginia codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings West Virginia - Customizable and Built Tough for WV',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in West Virginia. Our steel structure kits are customizable and engineered tough for WV residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/west-virginia/',
          url: 'https://www.topgoatmetalstructures.com/service-area/west-virginia/',
          name: 'Metal Buildings West Virginia - Customizable and Built Tough for WV',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in West Virginia. Our steel structure kits are customizable and engineered tough for WV residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/west-virginia/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/west-virginia/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/west-virginia/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'West Virginia' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[25]',
    name: 'Alabama',
    slug: 'alabama',
    description: `
      <div>
        <h2>Built Tough Alabama Steel Buildings</h2>
        <p>
          From hot, humid summers to severe storms, Alabama residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Alabama offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in AL are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Alabama.webp',
    imgUrl: '/images/service-area/states/backgrounds/Alabama.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Alabama Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Alabama codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Alabama - Customizable and Built Tough for AL',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Alabama. Our steel structure kits are customizable and engineered tough for AL residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/alabama/',
          url: 'https://www.topgoatmetalstructures.com/service-area/alabama/',
          name: 'Metal Buildings Alabama - Customizable and Built Tough for AL',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Alabama. Our steel structure kits are customizable and engineered tough for AL residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/alabama/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/alabama/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/alabama/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Alabama' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[26]',
    name: 'Alaska',
    slug: 'alaska',
    description: `
      <div>
        <h2>Built Tough Alaska Steel Buildings</h2>
        <p>
          From freezing winters to heavy snow and strong winds, Alaska residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Alaska offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in AK are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/description/alaska.webp',
    imgUrl: '/images/service-area/states/backgrounds/arkansas-bg.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Alaska Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Alaska codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Alaska - Customizable and Built Tough for AK',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Alaska. Our steel structure kits are customizable and engineered tough for AK residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/alaska/',
          url: 'https://www.topgoatmetalstructures.com/service-area/alaska/',
          name: 'Metal Buildings Alaska - Customizable and Built Tough for AK',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Alaska. Our steel structure kits are customizable and engineered tough for AK residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/alaska/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/alaska/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/alaska/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Alaska' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[27]',
    name: 'Colorado',
    slug: 'colorado',
    description: `
      <div>
        <h2>Built Tough Colorado Steel Buildings</h2>
        <p>
          From mountain snow to high winds and sudden weather shifts, Colorado residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Colorado offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in CO are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Colorado.webp',
    imgUrl: '/images/service-area/states/backgrounds/Colorado.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Colorado Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Colorado codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Colorado - Customizable and Built Tough for CO',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Colorado. Our steel structure kits are customizable and engineered tough for CO residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/colorado/',
          url: 'https://www.topgoatmetalstructures.com/service-area/colorado/',
          name: 'Metal Buildings Colorado - Customizable and Built Tough for CO',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Colorado. Our steel structure kits are customizable and engineered tough for CO residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/colorado/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/colorado/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/colorado/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Colorado' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[28]',
    name: 'Connecticut',
    slug: 'connecticut',
    description: `
      <div>
        <h2>Built Tough Connecticut Steel Buildings</h2>
        <p>
          From coastal storms to winter snow and ice, Connecticut residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Connecticut offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in CT are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Connecticut.webp',
    imgUrl: '/images/service-area/states/backgrounds/Connecticut.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Connecticut Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Connecticut codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Connecticut - Customizable and Built Tough for CT',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Connecticut. Our steel structure kits are customizable and engineered tough for CT residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/connecticut/',
          url: 'https://www.topgoatmetalstructures.com/service-area/connecticut/',
          name: 'Metal Buildings Connecticut - Customizable and Built Tough for CT',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Connecticut. Our steel structure kits are customizable and engineered tough for CT residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/connecticut/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/connecticut/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/connecticut/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Connecticut' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[29]',
    name: 'Delaware',
    slug: 'delaware',
    description: `
      <div>
        <h2>Built Tough Delaware Steel Buildings</h2>
        <p>
          From coastal storms to humid summers, Delaware residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Delaware offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in DE are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Delaware.webp',
    imgUrl: '/images/service-area/states/backgrounds/Delaware.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Delaware Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Delaware codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Delaware - Customizable and Built Tough for DE',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Delaware. Our steel structure kits are customizable and engineered tough for DE residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/delaware/',
          url: 'https://www.topgoatmetalstructures.com/service-area/delaware/',
          name: 'Metal Buildings Delaware - Customizable and Built Tough for DE',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Delaware. Our steel structure kits are customizable and engineered tough for DE residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/delaware/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/delaware/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/delaware/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Delaware' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[30]',
    name: 'Hawaii',
    slug: 'hawaii',
    description: `
      <div>
        <h2>Built Tough Hawaii Steel Buildings</h2>
        <p>
          From salty coastal air to strong tropical winds, Hawaii residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Hawaii offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in HI are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/description/hawaii.webp',
    imgUrl: '/images/service-area/states/backgrounds/arkansas-bg.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Hawaii Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Hawaii codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Hawaii - Customizable and Built Tough for HI',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Hawaii. Our steel structure kits are customizable and engineered tough for HI residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/hawaii/',
          url: 'https://www.topgoatmetalstructures.com/service-area/hawaii/',
          name: 'Metal Buildings Hawaii - Customizable and Built Tough for HI',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Hawaii. Our steel structure kits are customizable and engineered tough for HI residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/hawaii/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/hawaii/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/hawaii/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Hawaii' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[31]',
    name: 'Iowa',
    slug: 'iowa',
    description: `
      <div>
        <h2>Built Tough Iowa Steel Buildings</h2>
        <p>
          From freezing winters to powerful Midwest storms, Iowa residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Iowa offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in IA are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Iowa.webp',
    imgUrl: '/images/service-area/states/backgrounds/Iowa.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Iowa Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Iowa codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Iowa - Customizable and Built Tough for IA',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Iowa. Our steel structure kits are customizable and engineered tough for IA residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/iowa/',
          url: 'https://www.topgoatmetalstructures.com/service-area/iowa/',
          name: 'Metal Buildings Iowa - Customizable and Built Tough for IA',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Iowa. Our steel structure kits are customizable and engineered tough for IA residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/iowa/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/iowa/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/iowa/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Iowa' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[32]',
    name: 'Maine',
    slug: 'maine',
    description: `
      <div>
        <h2>Built Tough Maine Steel Buildings</h2>
        <p>
          From long winters to heavy snow and ice, Maine residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Maine offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in ME are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Maine.webp',
    imgUrl: '/images/service-area/states/backgrounds/Maine.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Maine Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Maine codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Maine - Customizable and Built Tough for ME',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Maine. Our steel structure kits are customizable and engineered tough for ME residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/maine/',
          url: 'https://www.topgoatmetalstructures.com/service-area/maine/',
          name: 'Metal Buildings Maine - Customizable and Built Tough for ME',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Maine. Our steel structure kits are customizable and engineered tough for ME residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/maine/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/maine/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/maine/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Maine' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[33]',
    name: 'Massachusetts',
    slug: 'massachusetts',
    description: `
      <div>
        <h2>Built Tough Massachusetts Steel Buildings</h2>
        <p>
          From coastal storms to snowy winters, Massachusetts residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Massachusetts offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in MA are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Massachusetts.webp',
    imgUrl: '/images/service-area/states/backgrounds/Massachusetts.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Massachusetts Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Massachusetts codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Massachusetts - Customizable and Built Tough for MA',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Massachusetts. Our steel structure kits are customizable and engineered tough for MA residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/massachusetts/',
          url: 'https://www.topgoatmetalstructures.com/service-area/massachusetts/',
          name: 'Metal Buildings Massachusetts - Customizable and Built Tough for MA',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Massachusetts. Our steel structure kits are customizable and engineered tough for MA residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/massachusetts/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/massachusetts/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/massachusetts/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Massachusetts' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[34]',
    name: 'Missouri',
    slug: 'missouri',
    description: `
      <div>
        <h2>Built Tough Missouri Steel Buildings</h2>
        <p>
          From severe storms to icy winters, Missouri residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Missouri offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in MO are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Missouri.webp',
    imgUrl: '/images/service-area/states/backgrounds/Missouri.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Missouri Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Missouri codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Missouri - Customizable and Built Tough for MO',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Missouri. Our steel structure kits are customizable and engineered tough for MO residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/missouri/',
          url: 'https://www.topgoatmetalstructures.com/service-area/missouri/',
          name: 'Metal Buildings Missouri - Customizable and Built Tough for MO',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Missouri. Our steel structure kits are customizable and engineered tough for MO residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/missouri/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/missouri/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/missouri/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Missouri' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[35]',
    name: 'New Hampshire',
    slug: 'new-hampshire',
    description: `
      <div>
        <h2>Built Tough New Hampshire Steel Buildings</h2>
        <p>
          From snowy winters to strong storms, New Hampshire residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in New Hampshire offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in NH are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/New Hampshire.webp',
    imgUrl: '/images/service-area/states/backgrounds/New Hampshire.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About New Hampshire Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed New Hampshire codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings New Hampshire - Customizable and Built Tough for NH',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in New Hampshire. Our steel structure kits are customizable and engineered tough for NH residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-hampshire/',
          url: 'https://www.topgoatmetalstructures.com/service-area/new-hampshire/',
          name: 'Metal Buildings New Hampshire - Customizable and Built Tough for NH',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in New Hampshire. Our steel structure kits are customizable and engineered tough for NH residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/new-hampshire/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/new-hampshire/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-hampshire/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'New Hampshire' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[36]',
    name: 'New Jersey',
    slug: 'new-jersey',
    description: `
      <div>
        <h2>Built Tough New Jersey Steel Buildings</h2>
        <p>
          From coastal winds to winter storms and humid summers, New Jersey residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in New Jersey offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in NJ are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/New_Jersey.webp',
    imgUrl: '/images/service-area/states/backgrounds/New_Jersey.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About New Jersey Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed New Jersey codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings New Jersey - Customizable and Built Tough for NJ',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in New Jersey. Our steel structure kits are customizable and engineered tough for NJ residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-jersey/',
          url: 'https://www.topgoatmetalstructures.com/service-area/new-jersey/',
          name: 'Metal Buildings New Jersey - Customizable and Built Tough for NJ',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in New Jersey. Our steel structure kits are customizable and engineered tough for NJ residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/new-jersey/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/new-jersey/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/new-jersey/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'New Jersey',
            },
          ],
        },
      ],
    },
  },

  {
    id: 'state[37]',
    name: 'Oklahoma',
    slug: 'oklahoma',
    description: `
      <div>
        <h2>Built Tough Oklahoma Steel Buildings</h2>
        <p>
          From strong winds to severe storms, Oklahoma residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Oklahoma offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in OK are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Oklahoma.webp',
    imgUrl: '/images/service-area/states/backgrounds/Oklahoma.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Oklahoma Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Oklahoma codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Oklahoma - Customizable and Built Tough for OK',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Oklahoma. Our steel structure kits are customizable and engineered tough for OK residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/oklahoma/',
          url: 'https://www.topgoatmetalstructures.com/service-area/oklahoma/',
          name: 'Metal Buildings Oklahoma - Customizable and Built Tough for OK',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Oklahoma. Our steel structure kits are customizable and engineered tough for OK residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/oklahoma/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/oklahoma/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/oklahoma/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Oklahoma' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[38]',
    name: 'Rhode Island',
    slug: 'rhode-island',
    description: `
      <div>
        <h2>Built Tough Rhode Island Steel Buildings</h2>
        <p>
          From coastal winds to seasonal storms, Rhode Island residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Rhode Island offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in RI are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Rhode_Island.webp',
    imgUrl: '/images/service-area/states/backgrounds/Rhode_Island.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Rhode Island Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Rhode Island codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Rhode Island - Customizable and Built Tough for RI',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Rhode Island. Our steel structure kits are customizable and engineered tough for RI residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/rhode-island/',
          url: 'https://www.topgoatmetalstructures.com/service-area/rhode-island/',
          name: 'Metal Buildings Rhode Island - Customizable and Built Tough for RI',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Rhode Island. Our steel structure kits are customizable and engineered tough for RI residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/rhode-island/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/rhode-island/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/rhode-island/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Rhode Island' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[39]',
    name: 'Utah',
    slug: 'utah',
    description: `
      <div>
        <h2>Built Tough Utah Steel Buildings</h2>
        <p>
          From mountain snow to desert heat and strong winds, Utah residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Utah offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in UT are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Utah.webp',
    imgUrl: '/images/service-area/states/backgrounds/Utah.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Utah Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Utah codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Utah - Customizable and Built Tough for UT',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Utah. Our steel structure kits are customizable and engineered tough for UT residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/utah/',
          url: 'https://www.topgoatmetalstructures.com/service-area/utah/',
          name: 'Metal Buildings Utah - Customizable and Built Tough for UT',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Utah. Our steel structure kits are customizable and engineered tough for UT residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/utah/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/utah/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/utah/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Utah' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[40]',
    name: 'Vermont',
    slug: 'vermont',
    description: `
      <div>
        <h2>Built Tough Vermont Steel Buildings</h2>
        <p>
          From snowy winters to strong seasonal storms, Vermont residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Vermont offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in VT are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Vermont.webp',
    imgUrl: '/images/service-area/states/backgrounds/Vermont.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Vermont Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Vermont codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Vermont - Customizable and Built Tough for VT',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Vermont. Our steel structure kits are customizable and engineered tough for VT residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/vermont/',
          url: 'https://www.topgoatmetalstructures.com/service-area/vermont/',
          name: 'Metal Buildings Vermont - Customizable and Built Tough for VT',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Vermont. Our steel structure kits are customizable and engineered tough for VT residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/vermont/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/vermont/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/vermont/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Vermont' },
          ],
        },
      ],
    },
  },

  {
    id: 'state[41]',
    name: 'Wisconsin',
    slug: 'wisconsin',
    description: `
      <div>
        <h2>Built Tough Wisconsin Steel Buildings</h2>
        <p>
          From harsh winters to heavy snow and strong storms, Wisconsin residents know how important it is to protect vehicles, equipment, and valuables year-round. Metal buildings in Wisconsin offer reliable protection while staying affordable and flexible.
        </p>
        <p>
          These steel structures in WI are engineered for strength, fully customizable, and ready to support your needs at home, on the job site, or on the farm. No matter what you take on, Top Goat Metal Structures is here to help.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Wisconsin.webp',
    imgUrl: '/images/service-area/states/backgrounds/Wisconsin.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Wisconsin Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
        },
        {
          id: '2',
          header: 'What is the process for obtaining permits for a metal building?',
          content:
            'Don’t worry—getting permits for a metal building isn’t as overwhelming as it sounds. Start by checking with your local building authority to find out their requirements. Once you know the details, you’ll submit the engineering plans (usually provided by the manufacturer), pay the necessary fees, and wait for the green light.',
        },
        {
          id: '3',
          header: 'What are the benefits of choosing a metal building for agricultural purposes?',
          content:
            'Metal buildings are a farmer’s best friend. They’re durable, low-maintenance, and perfect for protecting livestock, equipment, or crops. Plus, they’re customizable—you can add ventilation, insulation, or even extra storage space. It’s a smart, long-term investment that works as hard as you do.',
        },
        {
          id: '4',
          header: 'How do metal buildings stand up to wind and snow loads?',
          content:
            'Our <a href="https://www.topgoatmetalstructures.com/metal-buildings/">metal buildings</a> are engineered and certified to handle regional wind, snow, and seismic requirements. While no building is immune to extreme disasters, our structures are built to meet or exceed Wisconsin codes.',
        },
        {
          id: '5',
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'WB165',
      'WB163',
      'WB97',
      'WB91',
      'WB90',
      'WB41',
      'WB70',
      'WB65',
      'WB58',
      'WB50',
      'WB45',
      'WB37',
      'WB34',
      'WB30',
      'WB11',
      'WB4',
      'WB1',
    ],
    metaData: {
      title: 'Metal Buildings Wisconsin - Customizable and Built Tough for WI',
      description:
        'Top Goat Metal Structures delivers top-quality metal buildings in Wisconsin. Our steel structure kits are customizable and engineered tough for WI residents.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/wisconsin/',
          url: 'https://www.topgoatmetalstructures.com/service-area/wisconsin/',
          name: 'Metal Buildings Wisconsin - Customizable and Built Tough for WI',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:23:53+00:00',
          description:
            'Top Goat Metal Structures delivers top-quality metal buildings in Wisconsin. Our steel structure kits are customizable and engineered tough for WI residents.',
          breadcrumb: {
            '@id': 'https://www.topgoatmetalstructures.com/service-area/wisconsin/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/wisconsin/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/wisconsin/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.topgoatmetalstructures.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Service Area',
              item: 'https://www.topgoatmetalstructures.com/service-area/',
            },
            { '@type': 'ListItem', position: 3, name: 'Wisconsin' },
          ],
        },
      ],
    },
  },
];

export const faqs = [
  {
    id: 'ground-type',
    question: 'What ground type can a metal structure be built on?',
    answer:
      'Dirt, gravel, asphalt, concrete. Keep in mind all certified structures must be installed on and anchored to concrete. Also, where you are going to have your structure built must be level.',
  },
  {
    id: 'clearance',
    question: 'How much clearance will I need?',
    answer:
      'There should be a minimum of 3′ of clearance around where the structure will be located, so the installers have room to perform the installation.',
  },
  {
    id: 'payment-options',
    question: 'Are there payment options?',
    answer:
      'If financing is needed, we have multiple options, depending upon your situation and credit. Once you’ve agreed upon a price, and signed the quote from a Warrior building specialist, a deposit is required. After that, you will pay the remaining balance to the installing manufacturer of the structure.',
  },
  {
    id: 'size-structure',
    question: 'How do I know what size structure I need?',
    answer:
      'This is extremely important! Many times, we see someone wanting to cover or enclose a boat or trailer, but forget to take into consideration the full length of the trailer and possible equipment in the back. For example, your boat may be 21′, but actually, there is another 2′ from the outboard engine, then another 3-4′ of tongue at the front of the trailer. So now you’re covering or enclosing a 26-27′ item at a minimum. Taking the time to fully consider your exact dimensions can save headaches in the end, and ensure your complete satisfaction with your next metal structure.',
  },
  {
    id: 'permits',
    question: 'Do I need any permits for my structure?',
    answer:
      'In most areas of the US, having a permit for construction of your structure is necessary from your local county/city or state government. Please consider calling or checking the web for your local municipalities permitting requirements for your next metal structure.',
  },
  {
    id: 'ground-preparations',
    question: 'Ground Preparation',
    answer: 'Your site must be level, for your structure to be installed.',
  },
  {
    id: 'warranties',
    question: 'Warranties',
    answer:
      '1 year workmanship (Location Dependent) up to 20 year on frame (tubing) rust through 20 year on sheet metal (vertical) rust through.',
  },
  {
    id: 'materials',
    question: 'Materials',
    answer:
      'Our buildings come with standard 29 gauge sheet metal (Except FL) and 14 gauge 2.5″ square tubing. You can upgrade to 26 gauge sheet metal and or 12 gauge 2.25″ square tubing.',
  },
  {
    id: 'payments',
    question: 'Payments',
    answer:
      'A down payment is required upon sale of a structure. If your sale exceeds $15,000, 1/2 the balance will be due upon scheduling installation of your structure.',
  },
];
