'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: '18+',
    label: 'Years Building Steel',
    counter: true,
    counterEnd: 18,
    suffix: '+',
  },
  {
    value: '10,000+',
    label: 'Structures Delivered',
    counter: true,
    counterEnd: 10000,
    suffix: '+',
  },
  {
    value: '40+',
    label: 'States We Serve',
    counter: true,
    counterEnd: 40,
    suffix: '+',
  },
  {
    value: '98%',
    label: 'Would Recommend Us',
    counter: true,
    counterEnd: 98,
    suffix: '%',
  },
];

const featuredLinks = [
  {
    label: 'Google Reviews',
    href: '#reviews',
  },
  {
    label: 'Better Business Bureau',
    href: '#bbb',
  },
  {
    label: 'Facebook',
    href: '#facebook',
  },
  {
    label: 'BuildZoom',
    href: '#buildzoom',
  },
];

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 1600 }: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  const [count, setCount] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const counterElement = counterRef.current;

    if (!counterElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(counterElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.floor(end * easedProgress);

      setCount(nextValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration, end, shouldAnimate]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function InfiniteTicker() {
  return (
    <section className="border-y border-white/10 bg-[#0d0d0f] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex min-h-[112px] flex-col items-center justify-center px-4 text-center ${
                index % 2 === 0 ? 'border-r border-white/10' : ''
              } ${index < 2 ? 'border-b border-white/10 lg:border-b-0' : ''} ${
                index !== stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <strong className="font-anton text-[54px] leading-none font-normal tracking-[-0.02em] text-[#efb62e] sm:text-[64px] lg:text-[68px]">
                {stat.counter && stat.counterEnd ? (
                  <AnimatedCounter end={stat.counterEnd} suffix={stat.suffix} duration={1600} />
                ) : (
                  stat.value
                )}
              </strong>

              <span className="font-oswald mt-3 text-[11px] font-medium tracking-[0.15em] text-[#d1b78f] uppercase sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center lg:mt-20">
          <span className="font-oswald text-[10px] font-medium tracking-[0.28em] text-[#7c725f] uppercase sm:text-[11px]">
            As Featured By Owners On
          </span>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {featuredLinks.map((item, index) => (
              <div key={item.label} className="flex items-center gap-5">
                <a
                  href={item.href}
                  className="font-oswald text-sm font-medium tracking-[0.02em] text-[#d1b78f] transition hover:text-[#efb62e] sm:text-base"
                >
                  {item.label}
                </a>

                {index !== featuredLinks.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#9c7220]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
