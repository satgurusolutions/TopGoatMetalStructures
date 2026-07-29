import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import { MadeInUsa, WhatToExpect } from '@/components/thank-you-qoute';

export default function ThankYouQuotePage() {
  return (
    <div className="font-jost thank-you-page">
      <HeroSection
        hideBreadcrumb
        name={'Thank you for Contacting Top Goat Metal Structures.'}
        hideSocialIcon
        description="We will be in touch with you shortly."
      />
      <div className="bg-[#FCF8F8]">
        <div className="pb-8 lg:pb-16">
          <Ruler />
        </div>
        <div className="pb-8 lg:pb-16">
          <WhatToExpect />
        </div>
        <Ruler variant={2} />
      </div>
      <div className="py-8 lg:py-16">
        <MadeInUsa />
      </div>
      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
