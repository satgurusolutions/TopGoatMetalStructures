'use client';

import Image from 'next/image';

const SizeOptions = () => {
  const sizeData = [
    {
      title: "12'x20' to 20'x30'",
      desc: 'Perfect for single-car garages, small storage sheds, or workshops — compact yet efficient for basic storage needs.',
      img: '/images/buying-guides/12x20.webp',
    },
    {
      title: "24'x30' to 30'x50'",
      desc: 'Ideal for two-car garages, larger workshops, or small business storage — a balanced mid-size option.',
      img: '/images/buying-guides/24x30.webp',
    },
    {
      title: "40'x60' to 50'x100'",
      desc: 'Best for commercial warehouses, large farms, or spacious residential barndominiums.',
      img: '/images/buying-guides/40x60.webp',
    },
    {
      title: 'Custom Sizes',
      desc: 'Get exactly what you need — from extra-large garages to commercial facilities with office space.',
      img: '/images/buying-guides/custom-sizes.webp',
    },
  ];

  return (
    <section className="mx-auto space-y-12 px-4 xl:container xl:px-0 [@media(width=1280px)]:px-4">
      {/* === Intro === */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-black xl:text-[56px]">Different Size Options</h2>
        <p className="mt-4 text-base text-gray-700 xl:text-xl">
          Size matters, and when it comes to metal buildings, more space is usually better. The
          right size for your building depends on how you plan to use it. Here’s a breakdown of
          common sizes and their ideal applications:
        </p>
      </div>

      {/* === Compact Grid Cards === */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {sizeData.map((item, index) => (
          <div
            key={index}
            className="group hover:border-primary/40 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            {/* Content */}
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-semibold text-black xl:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SizeOptions;
