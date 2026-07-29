import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Metal Garages',
    description:
      'Fully enclosed single- and multi-car garages with insulation, walk doors, windows, and custom storage options.',
    price: '$3,995',
    image: '/images/garage.webp',
    href: '/metal-garages',
  },
  {
    title: 'Metal Carports',
    description:
      'Regular, boxed-eave, and vertical-roof covers engineered to handle sun, snow, wind, and storms.',
    price: '$1,295',
    image: '/images/carport3.webp',
    href: '/metal-carports',
  },
  {
    title: 'Metal Barns',
    description:
      'Horse, hay, and raised-center barns with practical lean-tos designed for working properties.',
    price: '$7,450',
    image: '/images/barn.webp',
    href: '/metal-barns',
  },
  {
    title: 'RV Covers',
    description:
      'Tall RV covers and fully enclosed garages built to clear Class A motorhomes with room to spare.',
    price: '$2,650',
    image: '/images/rvcover3.webp',
    href: '/rv-covers',
  },
  {
    title: 'Commercial Buildings',
    description:
      'Clear-span workshops, warehouses, retail spaces, and commercial steel structures with engineer-stamped plans for permitting in all 40+ states we serve.',
    price: '$12,900',
    image: '/images/garage3.webp',
    href: '/commercial-buildings',
  },
];

export default function CategoryOptions() {
  const regularProducts = products.slice(0, 4);
  const commercialProduct = products[4];

  return (
    <section id="products" className="bg-[#f7f6f2] py-20 text-[#181818] sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7">
        {/* Section heading */}
        <header className="mx-auto mb-12 max-w-[760px] text-center sm:mb-14 lg:mb-16">
          <span className="font-oswald inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.24em] text-[#b47b13] uppercase sm:text-[11px]">
            <span className="h-px w-5 bg-[#b47b13]" />
            What we build
            <span className="h-px w-5 bg-[#b47b13]" />
          </span>

          <h2 className="font-anton mt-4 text-[clamp(2.5rem,6vw,4.7rem)] leading-[0.92] font-normal tracking-[-0.01em] uppercase">
            Every Structure,
            <span className="mt-1 block text-[#c88b18]">Engineered For The Long Haul</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-sm leading-6 text-[#6e685e] sm:text-base sm:leading-7">
            Pick a starting point, then customize size, roof style, colour, gauge, doors, windows,
            and openings with a real building specialist.
          </p>
        </header>

        {/* First four product cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {regularProducts.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-[10px] bg-[#101011] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-24px_rgba(0,0,0,0.6)]"
            >
              <div className="relative h-[230px] overflow-hidden sm:h-[270px] lg:h-[300px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex min-h-[235px] flex-col bg-[#101011] p-5 sm:p-6">
                <h3 className="font-oswald text-xl font-semibold tracking-[0.01em] text-white uppercase sm:text-2xl">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#a29d93]">{product.description}</p>

                <div className="mt-auto pt-5">
                  <span className="text-[10px] font-medium tracking-[0.14em] text-[#777269] uppercase">
                    From
                  </span>

                  <strong className="font-oswald mt-1 block text-xl font-semibold text-[#d59a24] sm:text-2xl">
                    {product.price}
                  </strong>

                  <Link
                    href={product.href}
                    className="font-oswald mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#d59a24] uppercase transition duration-300 hover:gap-3 hover:text-[#f2bd43]"
                  >
                    Configure and price
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full-width commercial card */}
        <article className="group mt-5 overflow-hidden rounded-[10px] bg-[#101011] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-24px_rgba(0,0,0,0.6)] lg:mt-6">
          <div className="relative h-[280px] overflow-hidden sm:h-[350px] lg:h-[420px]">
            <Image
              src={commercialProduct.image}
              alt={commercialProduct.title}
              fill
              sizes="100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
            />
          </div>

          <div className="bg-[#101011] p-5 sm:p-6 lg:p-7">
            <h3 className="font-oswald text-xl font-semibold tracking-[0.01em] text-white uppercase sm:text-2xl">
              {commercialProduct.title}
            </h3>

            <p className="mt-3 max-w-[940px] text-sm leading-6 text-[#a29d93]">
              {commercialProduct.description}
            </p>

            <div className="mt-5">
              <span className="text-[10px] font-medium tracking-[0.14em] text-[#777269] uppercase">
                From
              </span>

              <strong className="font-oswald mt-1 block text-xl font-semibold text-[#d59a24] sm:text-2xl">
                {commercialProduct.price}
              </strong>

              <Link
                href={commercialProduct.href}
                className="font-oswald mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#d59a24] uppercase transition duration-300 hover:gap-3 hover:text-[#f2bd43]"
              >
                Request commercial quote
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
