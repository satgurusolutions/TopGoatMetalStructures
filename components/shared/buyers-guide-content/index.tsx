'use client';

import Image from 'next/image';

const BuyersGuideContent = () => {
  return (
    <section className="mx-auto max-w-[1280px] space-y-16 px-4 xl:px-0 [@media(width=1280px)]:px-4">
      {/* === Section 1: Intro === */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:items-start">
        <div>
          <h2 className="text-3xl font-bold text-black xl:text-[56px]">
            Your One-Stop Guide to Buying Metal Buildings
          </h2>
          <div className="mt-4 space-y-4 text-base xl:text-2xl">
            <p>
              Even though Warrior makes the process easy, purchasing a metal building is still a big
              decision—especially for first-time buyers. Whether you’re searching for a small garage
              to protect the family car or a large agricultural structure for farm operations, it
              pays to do your homework.
            </p>
            <p>
              We’re here to make that homework a little easier. Below, you’ll find practical
              information on what to look for in a metal building and how to choose the right
              structure for your needs. Whether your next project is at home, on the farm, or in a
              commercial setting, this guide will walk you through the essentials.
            </p>
          </div>
        </div>
      </div>

      {/* === Section 2: Which Metal Building is Right for You === */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:items-start">
        <div>
          <h2 className="text-3xl font-bold text-black xl:text-[56px]">
            Which Metal Building is Right for You?
          </h2>
          <p className="mt-4 text-base xl:text-2xl">
            Our structures come in more configurations than you can imagine, giving you the
            flexibility to design a building that fits your exact needs. To help you get started,
            here are some of our most popular options:
          </p>
        </div>
      </div>

      {/* === Section 3: Building Types (Alternate Image/Text Blocks) === */}
      <div className="space-y-12">
        {[
          {
            title: 'Metal Garages',
            desc: 'Metal garages are one of the most popular choices for residential and commercial uses. Whether you need a secure space to store vehicles, tools, or recreational equipment, a metal garage is a strong, weather-resistant solution that can take you miles.',
            img: '/images/buying-guides/metal-garages.webp',
          },
          {
            title: 'Metal Barns',
            desc: 'Farmers and ranchers love metal barns for their durability and spacious interiors. These buildings are perfect for storing feed, equipment, and even housing livestock. There are several styles of metal barns, including traditional A-frame barns, lean-to barns, and gambrel-style barns with extra loft space.',
            img: '/images/buying-guides/metal-barns.webp',
          },
          {
            title: 'Metal Sheds',
            desc: 'Metal sheds are perfect for storing gardening tools, outdoor equipment, and seasonal items big and small. Whether for backyard storage or as a small workshop, a metal shed is an excellent choice for maximizing space.',
            img: '/images/buying-guides/metal-sheds.webp',
          },
          {
            title: 'Carports',
            desc: 'Available in a variety of styles, including single, double, and RV carports, these structures offer protection from sun, rain, and snow while maintaining an open design. You can also customize a carport with side panels or enclosures for added coverage from the elements.',
            img: '/images/buying-guides/carports.webp',
          },
          {
            title: 'Combination Buildings',
            desc: 'Can’t decide between a garage and a carport? Need a barn with extra enclosed storage? Combination buildings provide the flexibility of multiple configurations in one structure. These hybrid buildings can include a carport on one side and an enclosed garage or storage space on the other.',
            img: '/images/buying-guides/combination-buildings.webp',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-6 md:flex-row md:items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="space-y-4 md:w-3/4">
              <h3 className="text-2xl font-semibold text-black xl:text-3xl">{item.title}</h3>
              <p className="text-base xl:text-xl">{item.desc}</p>
            </div>
            <div className="md:w-1/4">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="h-auto w-full rounded-2xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuyersGuideContent;
