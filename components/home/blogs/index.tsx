import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    image: '/images/1.jpg',
    date: 'May 2026',
    title: '5 Signs Your Property Needs A Steel Workshop',
    description:
      "If you're storing equipment under a tarp, it's already costing you. Here's the math.",
    href: '/blog/5-signs-your-property-needs-a-steel-workshop',
  },
  {
    image: '/images/5.webp',
    date: 'Apr 2026',
    title: 'Two-Tone Color Combos That Actually Look Good',
    description: 'Our most-requested roof and trim pairings, with real install photos.',
    href: '/blog/two-tone-color-combos',
  },
  {
    image: '/images/6.jpg',
    date: 'Mar 2026',
    title: 'Carport Or Garage: Which Do You Really Need?',
    description: "A simple decision tree based on what you're actually protecting.",
    href: '/blog/carport-or-garage',
  },
];

export default function Blogs() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden border-y border-white/5 bg-[#0b0b0d] py-20 text-[#f4f1ea] sm:py-24 lg:py-[120px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a225]/[0.02] blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-7">
        {/* Heading */}
        <header className="mx-auto max-w-[760px] text-center">
          <span className="font-oswald inline-flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#d9a225] uppercase sm:text-[11px]">
            <span className="h-px w-6 bg-[#d9a225]" />
            From The Blog
          </span>

          <h2 className="font-anton mt-5 text-[clamp(3rem,5.5vw,4.8rem)] leading-[0.92] font-normal tracking-[-0.02em] uppercase">
            Latest From{' '}
            <span className="bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
              The Yard
            </span>
          </h2>
        </header>

        {/* Blog cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex min-h-full flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#151517] shadow-[0_26px_60px_-32px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[#d9a225]/30"
            >
              <Link
                href={post.href}
                className="relative block h-[205px] overflow-hidden sm:h-[230px]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <span className="font-oswald text-[11px] font-semibold tracking-[0.08em] text-[#e7b53c] uppercase">
                  {post.date}
                </span>

                <h3 className="font-oswald mt-4 text-[20px] leading-[1.05] font-bold tracking-[-0.01em] text-[#f4f1ea] uppercase sm:text-[21px]">
                  <Link href={post.href} className="transition hover:text-[#e7b53c]">
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-[15px] leading-6 text-[#aaa397]">{post.description}</p>

                <Link
                  href={post.href}
                  className="font-oswald mt-auto inline-flex items-center gap-2 pt-6 text-[12px] font-semibold tracking-[0.05em] text-[#e7b53c] uppercase transition duration-300 group-hover:gap-3"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
