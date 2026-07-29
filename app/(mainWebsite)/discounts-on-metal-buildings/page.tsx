import {
  ColorOptions,
  DifferentProducts,
  GetAQuote,
  HeroSection,
} from '@/components/discounts-on-metal-buildings';
import CustomizeYourNeeds from '@/components/discounts-on-metal-buildings/customize-your-needs';
import { ProductListingDark } from '@/components/product';
import { Ruler } from '@/components/shared';
import { Product } from '@/types';

const DiscountsOnMetalBuilding = async () => {
  let products: Array<Product> = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, // Adjust the URL to your API endpoint or data source
      { cache: 'force-cache' },
    );
    products = ((await res.json()) as Array<Product>) || [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="font-jost">
      <HeroSection />
      <div className="pb-8 lg:pb-16">
        <Ruler />
      </div>
      <div className="pb-8 lg:pb-16">
        <GetAQuote />
      </div>
      <ProductListingDark products={products} name={'Products'} isDark />
      <div className="pb-8 lg:pb-16">
        <Ruler />
      </div>

      <CustomizeYourNeeds />
      <div className="pb-8 lg:pb-16">
        <Ruler />
      </div>
      <div className="pb-8 lg:pb-16">
        <DifferentProducts />
      </div>

      <Ruler />
      <div className="pt-8 lg:pt-16">
        <ColorOptions />
      </div>
    </div>
  );
};

export default DiscountsOnMetalBuilding;
