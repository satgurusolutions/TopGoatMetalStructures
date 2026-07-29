'use client';

import Image from 'next/image';

export default function FounderSection({
  name,
  description,
  designation,
  imageUrl,
}: {
  name: string;
  designation: string;
  description: string;
  imageUrl?: string;
}) {
  return (
    <section className="w-full rounded-[40px] bg-white p-4 xl:p-8">
      <div className="mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_3fr]">
        {/* Left Image Card */}
        <div className="relative mx-auto w-full">
          {/* <div className="relative h-[400px] overflow-hidden rounded-t-[40px] rounded-br-[40px] xl:h-[564px]">
            <Image
              src="/images/about-us/team-members/founder.png"
              alt="Founder Wen"
              fill
              className="h-full w-full"
            />

            <div
              className={`absolute -bottom-1 left-[-1px] z-50 h-[79px] w-1/2 bg-[#FFFFFF] pb-2`}
              style={{
                WebkitMaskImage: `url(/images/mask-right.png)`,
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskImage: `url(/images/mask-right.png)`,
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
                transform: 'rotate(180deg)', // <-- rotate 90 degrees
                transformOrigin: 'center', // <-- rotate around the center
              }}
            >
              <Button
                variant={'metallic'}
                style={{
                  transform: 'rotate(180deg)', // <-- rotate 90 degrees
                  transformOrigin: 'center', // <-- rotate around the center
                }}
                className="mt-2 ml-5 flex w-[85%] items-center justify-between px-4 py-5 font-semibold text-white xl:ml-6"
              >
                <span>{name}</span>
              </Button>
            </div>
          </div> */}
          <div className="relative h-[400px] overflow-hidden rounded-t-[40px] rounded-br-[40px] xl:h-[564px]">
            <Image
              alt="Founder Image"
              src={imageUrl || '/images/about-us/team-members/founder.png'}
              // fill
              width={1000}
              height={1046}
              className="absolute top-0 object-contain"
            />
          </div>
        </div>

        {/* Right Text Column */}
        <div>
          <h2 className="text-lg font-semibold text-black xl:text-[56px]">{name}</h2>
          <h3 className="text-accent text-base xl:text-[40px]">{designation}</h3>
          <p className="pt-2 text-base leading-relaxed text-black xl:text-4xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
