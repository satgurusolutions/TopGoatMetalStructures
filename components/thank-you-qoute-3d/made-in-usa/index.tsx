'use client';

import { TELEPHONE_NUMBER } from '@/configs/navigation.config';

const MadeInUsa = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-start gap-8 px-4 lg:flex-row xl:px-0 [@media(width=1280px)]:px-4">
        {/* Left Column: Text */}
        <div className="flex-1">
          <h2 className="mb-4 text-[32px] font-bold sm:text-5xl">
            Made In <span className="text-accent"> USA</span>
          </h2>
          <p className="pb-4 text-base leading-relaxed sm:text-xl">
            With our “Made in the USA” policy for all of our materials, we ensure that your building
            will be constructed with only the best available components. Additionally, all
            structures come with a 1 year workmanship satisfaction based on your location. Ask about
            our Limited 10-25 year Warranty (Location Specific).
          </p>
          <p className="pb-4 text-base leading-relaxed sm:text-xl">
            We also offer different buying choices, including financing options. We are proud to
            provide the fastest delivery options on the market. We can also hold your purchase until
            you are ready to install with no additional charge. Ask our team about the delivery
            times available in your area.
          </p>
          <p className="text-base leading-relaxed sm:text-xl">
            As a combat veteran-owned company, we are constantly grateful for all of our active duty
            and combat veteran service members. To show our thanks, we would like to offer a
            discount to all of our service member clients. Please call us for more details:{' '}
            <a className="text-accent" href={TELEPHONE_NUMBER.href}>
              {TELEPHONE_NUMBER.formatted}.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MadeInUsa;
