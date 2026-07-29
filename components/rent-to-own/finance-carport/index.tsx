import { Button } from '@/components/ui/button';
import { BulletCheckIcon } from '@/icons';
import LinkIconInactive from '@/icons/link-inactive';
import Image from 'next/image';
const points = [
  'After choosing a metal structure and customizing it to your requirements. contact us to find out if there is a financing option available in your state',
  "We may ask you to provide the following documents: Credit Application, Copy of Driver's License, Proof of Income, Proof of Home Ownership, Invoice of building wanting to get financed",
  'You can be given a loan of up to S50.OOO with an interest rate starting at just 10.99%. depending on your credit score.',
  'Once the bank approves your financing, we will contact you to process the order. A down payment is required to confirm your order.',
];

const FinanceCarport = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 text-white xl:px-0 [@media(width=1280px)]:px-4">
      <div className="flex justify-center">
        <div className="px-4 xl:px-0">
          <h2 className="text-center text-[32px] font-bold lg:text-6xl">
            Finance A <span className="text-accent leading-[1.2]">Carport</span>
          </h2>
          <div className="py-6 text-center">
            <span className="text-sm leading-snug text-white lg:text-xl">
              After choosing the metal building you want and customizing it to your specifications,
              check to find out if there is a financing option for carports available in your state.
              Our fast and flexible financing plans include payment terms ranging from 24-72 months
              with available terms for 3-12 months to help finance your purchase. With these carport
              options, you can pay off your new building at a time that works for you.
            </span>
          </div>
        </div>
      </div>
      <div className="pt-8 xl:pt-16">
        <div className="grid grid-cols-1 justify-center xl:grid-cols-2 xl:gap-4">
          {/* Left Column */}
          <div className="h-full px-4 xl:px-0">
            <h2 className="text-[32px] font-bold lg:text-5xl">
              How to get financing for{' '}
              <span className="text-accent leading-[1.2]">your carport:</span>
            </h2>
            <div className="py-6">
              <ul className="space-y-3 lg:space-y-6">
                {points.map((text) => (
                  <li key={text} className="flex items-center gap-4 lg:items-start xl:gap-4">
                    <div className="pt-2">
                      <BulletCheckIcon />
                    </div>
                    <span className="text-base leading-snug font-medium text-white lg:text-2xl xl:text-2xl">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 xl:pt-0">
            <div className="relative flex h-[250px] items-center justify-center rounded-2xl bg-white xl:h-[454px]">
              <Image
                src="/images/rent-to-own/finance-carport.png"
                fill
                alt="Finance Carport"
                className="object-contain"
              />
            </div>
            <div className="flex justify-center pt-6">
              <Button
                variant={'metallic'}
                className="flex h-[64px] w-full items-center justify-between gap-2 rounded-full px-6 py-6 text-xs font-normal lg:text-base"
              >
                <span className="pl-2">Design Your Building in 3D</span>{' '}
                <LinkIconInactive className="h-[40px]! w-[40px]! lg:h-[50px]! lg:w-[50px]!" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCarport;
