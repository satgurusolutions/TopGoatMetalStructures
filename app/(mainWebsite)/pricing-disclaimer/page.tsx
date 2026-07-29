import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';

export default async function PricingDisclaimerPage() {
  return (
    <div className="font-jost">
      <HeroSection name={'Privacy Disclaimer'} />
      <div className="bg-[#FCF8F8]">
        <div className="pb-8 lg:pb-14">
          <Ruler />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-14 xl:px-0 [@media(width=1280px)]:px-4">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            <span className="border-b-4 border-red-600 pb-1">Pricing Disclaimer</span>
          </h1>

          <p>All prices on this website are subject to change without notice.</p>
          <br />
          <p>
            Whilst we make every effort to provide you the most accurate, up-to-date information,
            occasionally, one or more items on our website may be mis-priced.
          </p>
          <br />

          <p>
            In the event a product is listed at an incorrect price due to typographical,
            photographic, or technical error or error in pricing information received from our
            suppliers, Millennium Buildings shall have the right to refuse or cancel any orders
            placed for product listed at the incorrect price.
          </p>
          <br />

          <p>
            If an item’s correct price is lower than our stated price, we will charge the lower
            amount.
          </p>
          <br />

          <p>
            If an item’s correct price is higher than our stated price, we will cancel your order
            and notify you of the price error and order cancellation. You will, of course, have an
            opportunity to purchase the item at the correct price, if you so wish.
          </p>
          <br />

          <p>
            Millennium Buildings is a sales location and broker. We do not hold a contractor’s
            license and do not do installations. All installations are done by the manufacturer,
            which may hold their own contractors’ license or use a licensed subcontractor.
          </p>
        </div>
        <div>
          <Ruler variant={2} />
        </div>
      </div>

      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
