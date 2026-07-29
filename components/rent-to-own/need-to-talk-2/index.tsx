'use client';

import { Button } from '@/components/ui/button';
import { TELEPHONE_NUMBER } from '@/configs/navigation.config';
import { CallIcon } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';

const NeedToTalk2 = () => {
  return (
    <div>
      {/* Foreground Content */}
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mt-5 text-3xl leading-tight font-bold text-white uppercase lg:text-[64px]">
          <span className="items-center justify-center gap-6 lg:flex lg:flex-row">
            <span>Need to Talk To a Pro? </span>
            <span>{/* <ToAProIcon /> */}</span>
          </span>
        </h1>

        <h2 className="relative mt-6 text-2xl leading-[1.4] font-normal text-white uppercase lg:text-[32px]">
          If you&apos;re ready to begin your project
          {/* <br /> contact a met own. */}
          <span className="absolute top-[32px] right-[-60px] hidden lg:block">
            <Image src="/images/arrow.png" alt="Need to Talk" width={227} height={202} priority />
          </span>
        </h2>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href={TELEPHONE_NUMBER.href}>
            <Button
              variant="metallic"
              className="flex h-[64px] items-center gap-2 rounded-full px-6 py-6 text-xs font-bold lg:text-base lg:font-normal"
            >
              Speak with a specialist{' '}
              <CallIcon className="h-[40px]! w-[40px]! lg:h-[50px]! lg:w-[50px]!" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeedToTalk2;
