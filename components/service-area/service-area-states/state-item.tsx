import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

const StateItem: FC<{ name: string; description: string | ReactNode; slug: string }> = ({
  name,
  description,
  slug,
}) => {
  return (
    <div className="rounded-[40px] bg-white p-4 text-black xl:p-8">
      <div className="relative mx-auto w-full">
        <div className="relative h-[400px] overflow-hidden rounded-t-[40px] rounded-br-[40px] border-b border-l border-white bg-black xl:h-[450px]">
          <div className="flex h-full items-center justify-center">
            <div className="relative h-[257px] w-full">
              <Image
                src={`/images/service-area/states/map-cuts/${slug}.svg`}
                alt="US State"
                fill
                className="object-contain"
              />
              {/* <div className="absolute top-[30%] left-[40%] max-w-5 text-sm text-white xl:text-lg">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-center">
                    <LocationPin />
                  </span>
                  <span className="text-center">{name}</span>
                </div>
              </div> */}
            </div>
          </div>
          {/* Overlay footer inside image */}

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
            <Link href={`/service-area/${slug}`}>
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
            </Link>
          </div>
        </div>
      </div>
      <div className="line-clamp-3 pt-4 text-base xl:text-xl">{description}</div>
    </div>
  );
};

export default StateItem;
