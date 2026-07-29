import Link from 'next/link';

const features = [
  {
    number: '01',
    title: 'Heavy-Gauge American Steel',
    description:
      '12 and 14-gauge framing options that outlast the thin import tubing other dealers quietly ship.',
  },
  {
    number: '02',
    title: 'Engineer-Stamped Plans',
    description:
      'Certified drawings rated for your local wind and snow loads, so permitting goes smooth.',
  },
  {
    number: '03',
    title: 'Free Delivery & Install',
    description:
      'Our own crews set your building on a level site — included on most standard orders.',
  },
  {
    number: '04',
    title: 'Up To 20-Year Warranty',
    description:
      'Rust-through and workmanship coverage backed in writing, not just on a sales sheet.',
  },
];

export default function Designer() {
  return (
    <section
      id="why"
      className="border-b border-white/10 bg-[#0b0b0d] py-20 text-[#f4f1ea] sm:py-24 lg:py-[128px]"
    >
      <div className="mx-auto grid w-full max-w-[1190px] gap-14 px-5 sm:px-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-[76px]">
        {/* Left content */}
        <div className="lg:pt-2">
          <span className="font-oswald inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-[#d7a126] uppercase">
            <span className="h-px w-6 bg-[#d7a126]" />
            Why Top Goat
          </span>

          <h2 className="font-anton mt-6 max-w-[500px] text-[clamp(3.2rem,5vw,4.65rem)] leading-[0.91] font-normal tracking-[-0.02em] uppercase">
            We&apos;re the{' '}
            <span className="bg-gradient-to-r from-[#f3c44f] via-[#dca328] to-[#ad7817] bg-clip-text text-transparent">
              G.O.A.T.
            </span>
            <span className="block">for a reason</span>
          </h2>

          <p className="mt-5 max-w-[500px] text-[16px] leading-[1.65] text-[#aaa397]">
            Anyone can sell you a metal kit. We engineer, build and stand behind yours — with the
            kind of steel and service that earns 4.9 stars across thousands of jobs.
          </p>

          <Link
            href="#quote"
            className="font-oswald mt-8 inline-flex min-h-[54px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#f3c44f] via-[#dca328] to-[#b57d17] px-7 text-sm font-bold tracking-[0.03em] text-[#171109] uppercase shadow-[0_18px_38px_-18px_rgba(220,163,40,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_-16px_rgba(220,163,40,0.75)]"
          >
            Start your build
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="min-h-[220px] rounded-[14px] border border-white/10 bg-[linear-gradient(145deg,#121214_0%,#101012_100%)] p-6 shadow-[0_18px_45px_-32px_rgba(0,0,0,0.9)] sm:p-7 lg:min-h-[220px] lg:p-8"
            >
              <span className="font-anton block text-[34px] leading-none font-normal text-[#c68b16]">
                {feature.number}
              </span>

              <h3 className="font-oswald mt-7 text-[18px] leading-tight font-bold text-[#f4f1ea] uppercase sm:text-[19px]">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-[290px] text-[15px] leading-[1.6] text-[#aaa397]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
