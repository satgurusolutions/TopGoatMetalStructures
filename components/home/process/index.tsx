import Link from 'next/link';

const guides = [
  {
    tag: 'Sizing',
    title: 'How To Size A Metal Garage',
    description: 'Door heights, bay widths and the clearances people always forget.',
    href: '/blog/how-to-size-a-metal-garage',
  },
  {
    tag: 'Site Prep',
    title: 'Concrete Vs. Gravel Base',
    description: 'Which foundation your building actually needs, and what it costs.',
    href: '/blog/concrete-vs-gravel-base',
  },
  {
    tag: 'Permits',
    title: 'Wind & Snow Load Basics',
    description: 'Why engineer-stamped plans make permitting painless.',
    href: '/blog/wind-and-snow-load-basics',
  },
  {
    tag: 'Budget',
    title: 'Financing',
    description: 'Which path fits your credit, timeline and budget.',
    href: '/blog/metal-building-financing',
  },
];

export default function Process() {
  return (
    <section
      id="guides"
      className="border-y border-black/5 bg-[#f7f6f2] py-20 text-[#151513] sm:py-24 lg:py-[112px]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7">
        {/* Section heading */}
        <header className="mx-auto max-w-[760px] text-center">
          <span className="font-oswald inline-flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a87616] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#c89120]" />
            Buyer Guides
          </span>

          <h2 className="font-anton mt-5 text-[clamp(3rem,5.5vw,4.7rem)] leading-[0.92] font-normal tracking-[-0.02em] uppercase">
            Know Before You{' '}
            <span className="bg-gradient-to-r from-[#d9a62b] via-[#bd8419] to-[#96640d] bg-clip-text text-transparent">
              Buy Steel
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#655f55] sm:text-base">
            Straight-talk guides from our build team — no fluff.
          </p>
        </header>

        {/* Guide cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group flex min-h-[200px] flex-col rounded-[14px] border border-white/5 bg-[#111113] p-6 text-white shadow-[0_24px_45px_-28px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1 hover:border-[#d9a225]/35 hover:shadow-[0_30px_55px_-26px_rgba(0,0,0,0.72)]"
            >
              <span className="font-oswald inline-flex w-fit rounded-full border border-[#d9a225]/25 px-3 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-[#d9a225] uppercase">
                {guide.tag}
              </span>

              <h3 className="font-oswald mt-5 text-[15px] leading-tight font-bold tracking-[-0.01em] text-[#f4f1ea] uppercase">
                {guide.title}
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#aaa397]">{guide.description}</p>

              <span className="font-oswald mt-auto inline-flex items-center gap-2 pt-5 text-[12px] font-semibold tracking-[0.05em] text-[#e7b53c] uppercase transition duration-300 group-hover:gap-3">
                Read Guide
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
