'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface ApplicationCard {
  title: string;
  description: string;
  image: string;
}

interface ApplicationsData {
  title?: string;
  highlight?: string;
  description?: string;
  cards?: ApplicationCard[];
}

export default function ProductApplications(data: ApplicationsData) {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-gray-900 lg:text-6xl">
            <span className="text-primary">{data?.title}</span> {data?.highlight}
          </h2>
          {data?.description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{data?.description}</p>
          )}
        </div>

        {/* Applications Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {data?.cards?.map((app) => (
            <Card
              key={app.title}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-0 shadow-lg transition-transform hover:scale-105"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
              </div>

              {/* Content */}
              <CardContent className="relative z-10 flex h-64 flex-col justify-end p-6">
                <h3 className="mb-3 text-2xl font-semibold text-white">{app.title}</h3>
                <p className="text-sm text-white/90">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
