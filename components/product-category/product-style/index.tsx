import AlternatingCards from './alternating-card';

interface ProductStyleProps {
  title?: string;
  highlight?: string;
  description?: string;
  cards?: {
    title: string;
    description: string;
    note?: string;
    image: string;
    highlight?: string;
  }[];
}

const ProductStyle = ({
  title = 'Custom Metal',
  highlight = 'Garage Style',
  description = 'We offer three different roof styles to customize your metal garage.',
  cards = [],
}: ProductStyleProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
      <div className="pb-8">
        <h1 className="pb-4 text-center text-[32px] font-bold lg:text-6xl">
          {title} {highlight && <span className="text-accent">{highlight}</span>}
        </h1>
        <p className="pb-6 text-center text-base leading-[160%] lg:text-2xl">{description}</p>
      </div>

      <AlternatingCards cards={cards} />
    </div>
  );
};

export default ProductStyle;
