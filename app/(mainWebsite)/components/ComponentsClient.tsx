'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Detail = {
  heading?: string;
  text: string;
};

type ComponentItem = {
  title: string;
  desc: string;
  img: string;
  details: Detail[];
};

const components: ComponentItem[] = [
  {
    title: 'Dutch Corners',
    desc: 'Precision-cut 45-degree corner details that create clean, professional edges for your metal building.',
    img: '/images/components/5eef9e_9734039cf4d748b19f2da60b6d271f11~mv2.webp',
    details: [
      {
        text: 'Precision-cut 45-degree corner details create sharp, clean edges throughout your metal building. These refined angles improve the overall appearance of the structure and deliver a modern, streamlined, and professional finish.',
      },
    ],
  },
  {
    title: 'Trims',
    desc: 'Protective metal trims that create clean, finished edges around panels, doors, windows, and corners.',
    img: '/images/components/5eef9e_87700ea117d74bceba80e6b2cba1f9d3~mv2.webp',
    details: [
      {
        heading: 'J-Trim',
        text: 'J-shaped trim creates clean, finished edges around metal panels. It is commonly installed around doors, windows, wall bases, and panel ends to improve protection and appearance.',
      },
      {
        heading: 'L-Trim',
        text: 'L-shaped trim is designed for areas where two surfaces meet at a 90-degree angle. It protects exposed panel edges from moisture, dirt, and corrosion while providing a polished finish.',
      },
    ],
  },
  {
    title: 'Gauge Metal Sheets',
    desc: 'Durable steel panels available in different gauges to balance strength, flexibility, and affordability.',
    img: '/images/components/5eef9e_4cea9a25d4d848a9b23012f3d41f393e~mv2.webp',
    details: [
      {
        heading: '26-Gauge Metal Panels',
        text: 'A strong, medium-thickness steel panel that provides an excellent balance of strength and flexibility. It is well suited for roofing, siding, and demanding building applications. Its painted finish also provides dependable corrosion resistance.',
      },
      {
        heading: '29-Gauge Metal Panels',
        text: 'A lightweight and durable steel panel commonly used for roofing and siding. Its flexible design and affordable price make it a dependable option for many residential, agricultural, and commercial structures.',
      },
    ],
  },
  {
    title: 'Anchors',
    desc: 'Dependable anchoring systems designed to secure metal buildings on soil, asphalt, or concrete surfaces.',
    img: '/images/components/5eef9e_fcaff1b4c57341c6ac63f826b98b4f04~mv2.webp',
    details: [
      {
        heading: 'Rebar Anchors',
        text: 'A cost-effective anchoring option designed for compacted soil. Rebar anchors are commonly used to secure carports and other metal structures in suitable ground conditions.',
      },
      {
        heading: 'Mobile Home Anchors',
        text: 'Heavy-duty anchors designed for softer soil conditions. They provide increased stability against strong winds, movement, and shifting ground.',
      },
      {
        heading: 'Asphalt Anchors',
        text: 'Specially designed for asphalt surfaces, these anchors provide a secure hold while helping minimize damage to driveways and parking areas.',
      },
      {
        heading: 'Concrete Anchors',
        text: 'High-strength anchors designed for concrete slabs and foundations. They provide dependable stability for permanent metal buildings and other steel structures.',
      },
    ],
  },
  {
    title: 'Headers',
    desc: 'Strong structural supports that help distribute weight above doors, windows, and large building openings.',
    img: '/images/components/5eef9e_9b52bf37eded4d3c8fdd3490ecbd393e~mv2.webp',
    details: [
      {
        text: 'Headers are structural components designed to support the weight above garage doors, walk-in doors, windows, and other large openings. They distribute roof loads across the building frame to improve long-term strength and stability.',
      },
    ],
  },
  {
    title: 'Color-Matched Screws',
    desc: 'Corrosion-resistant fasteners with painted heads that coordinate with your selected building colors.',
    img: '/images/components/5eef9e_d33e6de533ef40dfa99a38ece0fdf35f~mv2.webp',
    details: [
      {
        text: 'High-quality zinc-coated screws provide strong corrosion resistance and a secure connection between metal panels and the building frame. Painted screw heads are available to coordinate with your roof, siding, and trim colors for a clean, finished appearance.',
      },
    ],
  },
  {
    title: 'Chain Hoist',
    desc: 'A durable manual lifting system that helps operate large or heavy garage doors smoothly and safely.',
    img: '/images/components/5eef9e_457b61e14ad44192bc0a501b33e102e6~mv2.webp',
    details: [
      {
        text: 'A chain hoist provides a dependable manual lifting solution for large and heavy garage doors. Its durable chain mechanism offers smooth, controlled operation without requiring electricity, making it a practical and low-maintenance addition to many metal buildings.',
      },
    ],
  },
  {
    title: 'Windows',
    desc: 'Durable window options that bring natural light, ventilation, visibility, and style into your building.',
    img: '/images/components/5eef9e_cfbe7a04ef8841f9a2b307e952acdb18~mv2.webp',
    details: [
      {
        heading: '30 × 30 Window',
        text: 'This compact window brings natural light and ventilation into garages, workshops, storage buildings, and other steel structures. Its durable frame and weather-resistant construction provide dependable everyday performance.',
      },
      {
        heading: '30 × 36 Window',
        text: 'The taller 30 × 36 window provides increased natural light and improved visibility. It is a practical choice for workshops, barns, garages, and custom metal buildings.',
      },
      {
        heading: 'Black-Framed Windows',
        text: 'Black-framed windows add a bold, contemporary appearance to your metal building while allowing natural light into the interior. Their clean design complements a wide range of siding and trim color combinations.',
      },
    ],
  },
  {
    title: 'Lap Siding',
    desc: 'Overlapping horizontal metal panels that provide attractive styling and dependable weather protection.',
    img: '/images/components/5eef9e_bfbc7436e03d4aa795af78898b8b5714~mv2.webp',
    details: [
      {
        text: 'Lap siding uses horizontal metal panels with overlapping edges to create a clean, modern appearance. The overlapping design improves water resistance while durable protective coatings help provide long-lasting performance with minimal maintenance.',
      },
    ],
  },
  {
    title: 'Flood Vents',
    desc: 'Protective vents designed to allow floodwater through the building and reduce damaging pressure buildup.',
    img: '/images/components/5eef9e_4865d582e7024fd7a33984cd0b8c405e~mv2.webp',
    details: [
      {
        text: 'Flood vents are designed for buildings located in flood-prone areas. They allow water to move through the structure, reducing pressure buildup and helping minimize structural damage. Installed near the base of walls, they can also support drainage and help reduce moisture-related problems.',
      },
    ],
  },
  {
    title: 'Garage Doors',
    desc: 'Durable galvanized steel garage doors designed for dependable operation, security, and weather resistance.',
    img: '/images/components/5eef9e_fe4404814bb64cd6b14b16e01cab5c60~mv2.webp',
    details: [
      {
        heading: 'Standard Garage Door',
        text: 'Constructed from galvanized steel with a durable protective coating, this garage door provides dependable strength, corrosion resistance, and an attractive finished appearance for a wide range of metal buildings.',
      },
      {
        heading: 'Certified Garage Door',
        text: 'Certified garage doors are designed for increased durability and performance in demanding conditions. Depending on the selected configuration, available features may include wind-rated hardware, larger rollers, reinforced components, and an interior locking system.',
      },
    ],
  },
  {
    title: 'Walk-In Door',
    desc: 'A convenient personnel door designed to provide secure everyday access to your metal building.',
    img: '/images/components/5eef9e_74495a30311947a78a682b12710b8874~mv2.webp',
    details: [
      {
        text: 'The 36 × 80 walk-in door provides convenient access to garages, workshops, barns, storage buildings, and commercial structures. Its durable construction is designed to withstand daily use and changing weather conditions while blending naturally with the building exterior.',
      },
    ],
  },
];

export default function ComponentsClient() {
  const [active, setActive] = useState<ComponentItem | null>(null);

  useEffect(() => {
    if (!active) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a0b] py-16 text-white lg:py-24">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-[#c89b3c]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-[820px] text-center lg:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/30 bg-[#c89b3c]/10 px-4 py-2 text-xs font-extrabold tracking-[0.2em] text-[#d7ad52] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#d7ad52]" />
              Premium Building Components
            </span>

            <h1 className="mt-6 text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-5xl lg:text-6xl">
              Built With{' '}
              <span className="text-[#d7ad52]">
                Top-Quality
                <br className="hidden sm:block" /> Components
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[730px] text-base leading-7 text-zinc-400 lg:text-lg lg:leading-8">
              Every Top Goat Metal Structure is built with dependable components selected for
              strength, durability, performance, and long-term value. Explore the options available
              for customizing your garage, carport, barn, RV cover, or commercial building.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {components.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#151515] transition-all duration-300 hover:-translate-y-2 hover:border-[#c89b3c]/70 hover:shadow-[0_24px_60px_rgba(200,155,60,0.16)]"
              >
                <div className="relative h-[235px] overflow-hidden border-b border-white/5 bg-[radial-gradient(circle_at_center,#3a3a3a_0%,#242424_48%,#171717_100%)]">
                  <div className="pointer-events-none absolute inset-x-8 bottom-5 h-12 rounded-full bg-black/45 blur-xl" />

                  <Image
                    src={item.img}
                    alt={`${item.title} for Top Goat metal buildings`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="z-10 object-contain p-5 brightness-[1.3] contrast-[1.12] drop-shadow-[0_14px_18px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-[1.07]"
                  />

                  <div className="absolute top-4 left-4 z-20 rounded-full border border-white/15 bg-[#0c0c0d]/85 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-white uppercase shadow-lg backdrop-blur-md">
                    Top Goat Quality
                  </div>

                  <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-t from-black/10 via-transparent to-white/[0.03]" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-black text-white">{item.title}</h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{item.desc}</p>

                  <button
                    type="button"
                    onClick={() => setActive(item)}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold tracking-[0.08em] text-[#d7ad52] uppercase transition-colors duration-300 hover:text-white"
                    aria-label={`View details about ${item.title}`}
                  >
                    View Details
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            className="relative my-auto grid max-h-[92vh] w-full max-w-[1120px] overflow-y-auto rounded-[28px] border border-white/10 bg-[#121212] shadow-[0_30px_100px_rgba(0,0,0,0.65)] lg:grid-cols-[0.9fr_1.1fr]"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="component-dialog-title"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-3xl leading-none text-white backdrop-blur-md transition hover:border-[#c89b3c] hover:bg-[#c89b3c] hover:text-black"
              aria-label="Close component details"
            >
              ×
            </button>

            <div className="relative min-h-[320px] overflow-hidden bg-[radial-gradient(circle_at_center,#414141_0%,#262626_48%,#151515_100%)] sm:min-h-[420px] lg:min-h-[650px]">
              <div className="pointer-events-none absolute inset-x-[14%] bottom-[12%] h-20 rounded-full bg-black/50 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,173,82,0.16),transparent_68%)]" />

              <Image
                src={active.img}
                alt={`${active.title} component`}
                fill
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="z-10 object-contain p-7 brightness-[1.3] contrast-[1.12] drop-shadow-[0_22px_28px_rgba(0,0,0,0.6)] sm:p-11"
              />
            </div>

            <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
              <span className="mb-5 text-xs font-extrabold tracking-[0.2em] text-[#d7ad52] uppercase">
                Top Goat Building Components
              </span>

              <h2
                id="component-dialog-title"
                className="pr-12 text-4xl leading-[1.05] font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {active.title}
              </h2>

              <div className="mt-8 space-y-7">
                {active.details.map((detail, index) => (
                  <div
                    key={`${active.title}-${detail.heading ?? 'detail'}-${index}`}
                    className={
                      active.details.length > 1 && index !== active.details.length - 1
                        ? 'border-b border-white/10 pb-7'
                        : ''
                    }
                  >
                    {detail.heading && (
                      <h3 className="mb-2 text-lg font-black text-[#d7ad52] sm:text-xl">
                        {detail.heading}
                      </h3>
                    )}

                    <p className="text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                      {detail.text}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActive(null)}
                className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-black tracking-[0.08em] text-black uppercase transition hover:bg-white"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
