import { Button } from '@/components/ui/button';
import { METAL_3D_LINK } from '@/configs/navigation.config';
import { HomeIcon } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';

const CustomizeSection = () => {
  return (
    <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="pb-8 text-center text-3xl font-bold text-white md:text-start xl:text-5xl">
          Customized to <span className="text-accent">Fit Your Needs</span>
        </h2>
        <div>
          <p className="text-center text-base md:text-start xl:text-2xl">
            Our metal buildings start at 12’ wide and 6’ tall and can span lengthwise as needed with
            fully customizable with roof styles, door and window options, lean-to additions, and
            interior features like electricity and insulation to give comfort to your building.
          </p>
          <p className="pt-6 text-center text-base md:text-start xl:text-2xl">
            Whether you need fully open sides, fully enclosed, or anything in between, you can
            design your metal building to fit any number of shading, shelter, and storage purposes.
          </p>
          <div className="pt-8">
            <Link href={METAL_3D_LINK}>
              <Button
                variant={'metallic'}
                className="flex h-[64px] w-full items-center justify-between gap-2 rounded-full py-6 text-xs font-normal lg:text-base"
              >
                <span className="pl-2">Design Your Building in 3D</span>{' '}
                <span className="h-[40px]! w-[40px]! lg:h-[50px]! lg:w-[50px]!">
                  {' '}
                  <HomeIcon />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={'/images/discounts/macbook-air.png'}
          width={923}
          height={581}
          alt="Macbook air"
        />
      </div>
    </div>
  );
};

export default CustomizeSection;
