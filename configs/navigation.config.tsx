export const TELEPHONE_NUMBER = {
  formatted: '(336) 509-3443',
  href: 'tel:+13365093443',
};

export const EMAIL_ADDRESS = {
  formatted: 'topgoatmetalstructures@gmail.com',
  href: 'mailto:topgoatmetalstructures@gmail.com',
};

export const ADDRESS = 'Mount Airy, North Carolina 27030';
export const ADDRESS_HREF =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS);

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
            label: 'Utility Buildings',
            href: '/utility-buildings',
            description: 'Enclosed garages with Utility attached',
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
            href: '/commercial',
            description: 'Workshops & clear-span steel',
            icon: 'commercial',
          },
        ],
      },
    ],
  },

  // {
  //   label: 'Financing',
  //   href: '/financing',
  // },

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
            href: '/free-quote',
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
            href: '/components',
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
  'South Carolina',
  'North Carolina',
  'Alabama',
  'Georgia',
  'Kentucky',
  'Maryland',
  'Virginia',
  'Tennessee',
  'Western Tennessee',
  'West Virginia',
  'Ohio',
  'Pennsylvania',
];

export const statesWithShortNames = [
  { stateShortName: 'SC', stateName: 'South Carolina' },
  { stateShortName: 'NC', stateName: 'North Carolina' },
  { stateShortName: 'AL', stateName: 'Alabama' },
  { stateShortName: 'GA', stateName: 'Georgia' },
  { stateShortName: 'KY', stateName: 'Kentucky' },
  { stateShortName: 'MD', stateName: 'Maryland' },
  { stateShortName: 'VA', stateName: 'Virginia' },
  { stateShortName: 'TN', stateName: 'Tennessee' },
  { stateShortName: 'Western TN', stateName: 'Western Tennessee' },
  { stateShortName: 'WV', stateName: 'West Virginia' },
  { stateShortName: 'OH', stateName: 'Ohio' },
  { stateShortName: 'PA', stateName: 'Pennsylvania' },
];

export const stateDetails = [
  {
    id: 'state[0]',
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
      'TG160',
      'TG153',
      'TG81',
      'TG87',
      'TG80',
      'TG78',
      'TG74',
      'TG106',
      'TG102',
      'TG69',
      'TG67',
      'TG57',
      'TG44',
      'TG36',
      'TG23',
      'TG20',
      'TG17',
      'TG15',
      'TG3',
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
          sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
        },
      ],
    },
  },
  {
    id: 'state[1]',
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
          sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
        },
      ],
    },
  },
  {
    id: 'state[2]',
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
      'TG169',
      'TG168',
      'TG161',
      'TG88',
      'TG79',
      'TG94',
      'TG53',
      'TG52',
      'TG43',
      'TG28',
      'TG27',
      'TG13',
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
          sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
        },
      ],
    },
  },
  {
    id: 'state[4]',
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
    id: 'state[5]',
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
    id: 'state[6]',
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
            url: 'https://www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
            contentUrl:
              'https://www.topgoatmetalstructures.com/wp-content/uploads/2024/11/logo.webp',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
        },
      ],
    },
  },
  {
    id: 'state[7]',
    name: 'Tennessee',
    slug: 'tennessee',
    description: `
      <div>
        <h2>Tennessee Steel Structure Kits</h2>
        <p>
          Living in Tennessee comes with a wide range of advantages– close proximity to nature, wonderful views, and historical sites. But it’s also home to some pretty volatile weather. That’s why it pays to have the right infrastructure. For that, Top Goat Metal Structures has you covered.
        </p>
        <p>
          Our metal buildings in Tennessee are built from heavy-duty steel components, customized to suit your needs, and delivered to your doorstep at no added cost to you. So, whether you’re housing the family car, protecting ATVs and recreational equipment, or creating an organized workspace, you’re in good hands with a Top Goat Building.
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
            url: 'https://www.topgoatmetalstructures.com/images/logo.png',
            contentUrl: 'https://www.topgoatmetalstructures.com/images/logo.png',
            width: 198,
            height: 180,
            caption: 'Top Goat Metal Structures',
          },
          image: {
            '@id': 'https://www.topgoatmetalstructures.com/#/schema/logo/image/',
          },
          sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
        },
      ],
    },
  },
  {
    id: 'state[8]',
    name: 'Western Tennessee',
    slug: 'western-tennessee',
    description: `
      <div>
        <h2>Western Tennessee Steel Structure Kits</h2>
        <p>
          Western Tennessee sees humid summers, heavy spring rains, and the occasional severe storm rolling in off the Mississippi Delta. Having the right infrastructure keeps your vehicles, equipment, and valuables protected all year long.
        </p>
        <p>
          Our metal buildings in Western Tennessee are built from heavy-duty steel components, customized to suit your needs, and delivered to your doorstep at no added cost to you. Whether you’re housing the family car, protecting farm equipment, or creating an organized workspace, you’re in good hands with a Top Goat Building.
        </p>
      </div>
    `,
    descriptionImgUrl: '/images/service-area/states/backgrounds/Tennessee.webp',
    imgUrl: '/images/service-area/states/backgrounds/Tennessee.webp',
    extraDetails: {
      title: 'Frequently Asked Questions About Western Tennessee Metal Buildings',
      highlight: ' ',
      description:
        'If you’re a first-time buyer, you probably have a couple of questions about metal buildings and how the entire process works. To help make your purchase easier, we’ve put together an FAQ:',
      accordionData: [
        {
          id: '1',
          header: 'What financing options are available for first-time metal building buyers?',
          content:
            'Top Goat Metal Structures makes it easy to get the metal building you need on a budget. We work with trusted lenders to bring you flexible financing plans that put you in the driver’s seat of your own structure. We also offer rent-to-own packages on select structures with no hard credit checks and fast approvals.',
        },
        {
          id: '2',
          header: 'Can metal buildings be constructed with clear span interiors?',
          content:
            'Absolutely! Clear span interiors are one of the biggest perks of metal buildings. They give you wide-open spaces without the need for interior columns, which is perfect for warehouses, arenas, or even barns.',
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
          header: 'What are the typical lead times for metal building delivery?',
          content:
            'Lead times can vary depending on the size, design, and your location, but a good estimate is about 4–8 weeks. Custom options may extend delivery slightly.',
        },
      ],
    },
    skus: [
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
    ],
    metaData: {
      title: 'Metal Buildings Western Tennessee - Built for Volatile Weather',
      description:
        'Top Goat Metal Structures offers metal buildings in Western Tennessee built for the region’s volatile weather. Get free delivery and installation at your doorstep.',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://www.topgoatmetalstructures.com/service-area/western-tennessee/',
          url: 'https://www.topgoatmetalstructures.com/service-area/western-tennessee/',
          name: 'Metal Buildings Western Tennessee - Built for Volatile Weather',
          isPartOf: { '@id': 'https://www.topgoatmetalstructures.com/#website' },
          datePublished: '2024-11-18T08:08:55+00:00',
          dateModified: '2024-12-26T10:21:42+00:00',
          description:
            'Top Goat Metal Structures offers metal buildings in Western Tennessee built for the region’s volatile weather. Get free delivery and installation at your doorstep.',
          breadcrumb: {
            '@id':
              'https://www.topgoatmetalstructures.com/service-area/western-tennessee/#breadcrumb',
          },
          inLanguage: 'en-US',
          potentialAction: [
            {
              '@type': 'ReadAction',
              target: ['https://www.topgoatmetalstructures.com/service-area/western-tennessee/'],
            },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id':
            'https://www.topgoatmetalstructures.com/service-area/western-tennessee/#breadcrumb',
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
            { '@type': 'ListItem', position: 3, name: 'Western Tennessee' },
          ],
        },
      ],
    },
  },
  {
    id: 'state[9]',
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
    id: 'state[10]',
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
          sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
        },
      ],
    },
  },
  {
    id: 'state[11]',
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    description: `
      <div>
        <h2>Budget Friendly Pennsylvania Steel Buildings</h2>
        <p>
          With frigid temperatures and heavy snow accumulation in the winters, it pays for Pennsylvania residents to invest in heavy duty infrastructure to protect their things. Whether you’re storing the family car or housing supplies and equipment, metal buildings from Warrior in Pennsylvania are a great solution to this need.
        </p>
        <p>
          These structures are crafted with high-grade steel components, and engineered to handle any project you have in mind. Use them for residential projects, agriculture, or even commercial purposes. The only limits with a Top Goat Building are your budget and your imagination.
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
      'TG165',
      'TG163',
      'TG97',
      'TG91',
      'TG90',
      'TG41',
      'TG70',
      'TG65',
      'TG58',
      'TG50',
      'TG45',
      'TG37',
      'TG34',
      'TG30',
      'TG11',
      'TG4',
      'TG1',
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
          sameAs: ['https://www.facebook.com/people/Top-Goat-Metal-Structures/61572160021161//'],
        },
      ],
    },
  },
];

export const faqs = [
  {
    id: 'ground-type',
    question: 'What type of foundation can my metal building be installed on?',
    answer:
      'Top Goat Metal Structures can install buildings on level concrete, asphalt, gravel, or compacted ground. Certified buildings typically require a concrete foundation to meet local code requirements. Your installation site should be properly prepared and level before delivery.',
  },
  {
    id: 'site-clearance',
    question: 'How much space is needed for installation?',
    answer:
      'We recommend leaving at least 3 feet of clear working space around the installation area. This gives our professional installation crew enough room to safely assemble your building and complete the project efficiently.',
  },
  {
    id: 'financing',
    question: 'Do you offer financing?',
    answer:
      'Yes. Top Goat Metal Structures offers flexible financing options through trusted lending partners. Available programs and terms depend on credit approval. Contact our team to learn which financing solution best fits your budget.',
  },
  {
    id: 'building-size',
    question: 'How do I choose the right building size?',
    answer:
      'Measure the full dimensions of the vehicles, equipment, or storage items you plan to protect, including mirrors, trailers, attachments, and future storage needs. Choosing a slightly larger building often provides better long-term value and convenience.',
  },
  {
    id: 'permits',
    question: 'Will I need a building permit?',
    answer:
      'Permit requirements vary by city, county, and state. We recommend checking with your local building department before installation. Our team can provide certified engineering documents when required for qualifying structures.',
  },
  {
    id: 'site-preparation',
    question: 'How should I prepare my site?',
    answer:
      'Your installation site should be level, accessible, and free of debris before our crew arrives. Proper site preparation helps ensure a smooth installation and the best long-term performance of your building.',
  },
  {
    id: 'warranty',
    question: 'What warranty comes with your buildings?',
    answer:
      'Warranty coverage varies by manufacturer and building configuration. Many structures include a limited workmanship warranty along with up to a 20-year limited rust-through warranty on eligible framing and panel systems. Ask your sales representative for warranty details specific to your order.',
  },
  {
    id: 'materials',
    question: 'What materials are used in your buildings?',
    answer:
      'Our standard buildings are constructed with heavy-duty galvanized steel framing and premium steel panels for long-lasting durability. Depending on your location and project requirements, you may also have options to upgrade panel thickness or frame gauge.',
  },
  {
    id: 'payments',
    question: 'How does the payment process work?',
    answer:
      'A deposit is required when your order is placed to begin production. The remaining balance is typically due before or at the time of installation, depending on the manufacturer and project size. Your sales specialist will explain the payment schedule before your order is finalized.',
  },
];
