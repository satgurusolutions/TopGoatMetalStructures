'use client';

import Image from 'next/image';

interface UseCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface UsesData {
  title?: string;
  highlight?: string;
  cards?: UseCard[];
  description?: string;
}

export default function UsesCard(usesData: Readonly<UsesData>) {
  const { title, highlight, cards, description } = usesData;
  return (
    <section className={`mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4`}>
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-6xl">
          {title} <span className="text-accent">{highlight}</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg">{description}</p>
      </div>

      {/* Uses Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards?.map((item) => (
          <div
            key={item.id}
            className="border-border flex cursor-pointer items-start gap-4 rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-xl"
          >
            {/* Icon with accent tint */}
            {item.icon && (
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="text-accent bg-accent rounded-2xl object-contain px-2 brightness-0 hue-rotate-[--accent-hue] invert saturate-200 sepia"
                />
              </div>
            )}

            {/* Text Content */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="bg-accent text-background flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold">
                  {item.id}
                </span>
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-black">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
