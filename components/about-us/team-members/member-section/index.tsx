import Image from 'next/image';
import { FC } from 'react';

const MemberSection: FC<{ name: string; description: string; imageUrl?: string }> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className="rounded-[40px] bg-white p-4 text-black xl:p-8">
      <div className="relative mx-auto w-full">
        {/* <div className="relative h-[400px] overflow-hidden rounded-t-[40px] rounded-br-[40px] xl:h-[450px]">
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
        <div className="relative h-[400px] overflow-hidden rounded-t-[40px] rounded-br-[40px] xl:h-[400px]">
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
      <div className="text-accent text-xl xl:text-3xl">{name}</div>
      <div title={description} className="line-clamp-4 pt-4 text-base xl:text-xl">
        {description}
      </div>
    </div>
  );
};

export default MemberSection;
