'use client';

import Image from 'next/image';

export default function StateServiceArea({
  serviceArea,
}: {
  serviceArea?: {
    backgroundImage?: string;
    description?: string;
    cities?: string[];
    note?: string;
  };
}) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {serviceArea?.backgroundImage && (
          <Image
            src={serviceArea?.backgroundImage}
            alt={`background`}
            fill
            className="object-cover object-center"
          />
        )}
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Service Areas</h2>
        <p className="mt-4 text-lg text-gray-700">{serviceArea?.description}</p>

        {/* Cities */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-800">
          {serviceArea?.cities?.map((city, idx) => (
            <span key={idx} className="text-sm md:text-base">
              {city}
              {idx < (serviceArea?.cities?.length || 0) - 1 ? ' |' : ''}
            </span>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-gray-600">{serviceArea?.note}</p>
      </div>
    </section>
  );
}
