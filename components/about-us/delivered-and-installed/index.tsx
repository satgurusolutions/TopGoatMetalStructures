'use client';

import Image from 'next/image';

const DeliveredAndInstalled = () => {
  return (
    <section>
      <div className="mx-auto flex flex-col-reverse items-start gap-8 px-4 lg:flex-row xl:container xl:px-0 [@media(width=1280px)]:px-4">
        {/* Left Column: Text */}
        <div className="flex-1">
          <h2 className="mb-4 text-xl font-bold sm:text-3xl">Delivery and Installation</h2>
          <p className="pb-2 text-base leading-relaxed sm:text-lg">
            One of the first steps you&apos;ll need to take after receiving your building specs is
            to contact your local building authority to begin the permitting process. Most
            localities require you to secure permits before construction can begin.
          </p>
          <p className="pb-2 text-base leading-relaxed sm:text-lg">
            Contact your building inspector to determine which applications you&apos;ll need to
            submit and what paperwork will be required. After submitting your documents, you&apos;ll
            need to pay any required fees and may be subject to inspections before, during, and
            after construction.
          </p>
          <h2 className="mb-4 text-xl font-bold sm:text-3xl">Lead Times</h2>
          <p className="text-base leading-relaxed sm:text-lg">
            In most cases, delivery times range between 4–8 weeks, depending on the structure type,
            local weather conditions, and your building site location. All you&apos;ll need to do is
            schedule a convenient time, sit back, and let us handle the rest.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="flex w-full flex-1 justify-center lg:justify-end">
          <div className="relative w-fit overflow-hidden rounded-2xl border-[17px] border-[#E9E9EA]/60">
            <Image
              src={'/images/about-us/delivery-installation.webp'}
              alt={'Delivered and installed in the usa'}
              width={600}
              height={450}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveredAndInstalled;
