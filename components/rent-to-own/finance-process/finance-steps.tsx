'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TELEPHONE_NUMBER } from '@/configs/navigation.config';
import { BulletCheckIcon, CallIcon } from '@/icons';
import { Step1Icon, Step2Icon, Step3Icon } from './finance-steps-icons';

const steps = [
  {
    step: 'Step-1',
    title: (
      <>
        Getting <span className="text-red-600">A Quote</span>
      </>
    ),
    description:
      'Customize your building, confirm financing options, and get ready for quick approval.',
    bullets: [
      'Proof of Income',
      'Proof of Homeownership',
      'Invoice of Building Wanting to Get Financed',
    ],
    icon: <Step1Icon />, // replace with your icon
  },
  {
    step: 'Step-2',
    title: (
      <>
        Payment <span className="text-red-600">Options</span>
      </>
    ),
    description: 'The Convenience Of Quick And Easy Payments.',
    extra:
      'Depending On Your Credit Score, You Can Get A Loan Of Up To $50K, Based On Different Banks’ Interest Rates. Interest Rates Will Also Depend On Your Credit Score.',
    bullets: [],
    icon: <Step2Icon />,
  },
  {
    step: 'Step-3',
    title: (
      <>
        Receive <span className="text-red-600">The Funds</span>
      </>
    ),
    description: 'You Will Be Contacted By Experts For Delivery.',
    extra:
      'Once The Bank Approves Your Finance, We Will Ask You To Process The Order And Confirm Your Order By Paying A Small Down Payment.',
    bullets: [],
    icon: <Step3Icon />,
  },
];

export default function FinanceSteps() {
  return (
    <div className="relative py-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
        {steps.map((step, i) => (
          <Card key={i} className="relative rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="absolute -top-8 left-20 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-black p-1">
              {step.icon}
            </div>
            <CardContent className="px-6 pt-12 pb-6">
              <p className="text-accent mb-2 text-base font-medium xl:text-2xl">{step.step}</p>
              <h3 className="mb-3 text-start text-2xl font-semibold text-black xl:text-4xl">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-black xl:text-2xl">{step.description}</p>
              {step.extra && (
                <p className="mt-3 text-base leading-relaxed text-black xl:text-2xl">
                  {step.extra}
                </p>
              )}
              {step.bullets.length > 0 && (
                <ul className="mt-4 space-y-3 lg:space-y-3">
                  {step.bullets.map((text) => (
                    <li key={text} className="flex items-center gap-4 xl:gap-4">
                      <div>
                        <BulletCheckIcon />
                      </div>
                      <span className="text-base leading-snug text-black lg:text-2xl xl:text-2xl">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="pt-4 text-center text-white">
        <p className="py-4">Need any Help? Call Us</p>
        <Button variant={'metallic'} className="h-[64px] rounded-full px-5 py-2 text-white">
          <a href={TELEPHONE_NUMBER.href} className="flex flex-row items-center gap-2">
            <span className="text-xs xl:text-base">Speak with a specialist</span>
            <CallIcon className="h-[40px] w-[40px] xl:h-[50px]! xl:w-[50px]!" />
          </a>
        </Button>
      </div>
    </div>
  );
}
