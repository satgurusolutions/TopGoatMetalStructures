'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const slides = ['/images/1.webp', '/images/5.webp', '/images/6.webp'];

const pills = ['Garages', 'Carports', 'Barns', 'RV Covers', 'Commercial'];

const trustBadges = [
  {
    title: '★ 4.9',
    description: '2,300+ reviews',
    position: 'top-[16%] right-[6%]',
    delay: '0s',
  },
  {
    title: 'Up to 20yr',
    description: 'Rust-through warranty',
    position: 'top-[46%] right-[12%]',
    delay: '1.4s',
  },
  {
    title: 'Certified',
    description: 'Engineer-stamped plans',
    position: 'top-[70%] right-[4%]',
    delay: '2.6s',
  },
];

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 2000 }: AnimatedCounterProps) {
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
        threshold: 0.3,
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

      // Ease-out animation.
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextCount = Math.floor(end * easedProgress);

      setCount(nextCount);

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
      {count.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePill, setActivePill] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative isolate overflow-hidden bg-[#0a0a0b] pt-[70px] text-[#f4f1ea]"
      >
        {/* Background slider */}
        <div className="absolute inset-0 -z-20">
          {slides.map((slide, index) => (
            <Image
              key={slide}
              src={slide}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover object-center transition-[opacity,transform] ${
                activeSlide === index
                  ? 'scale-100 opacity-100 duration-[1400ms]'
                  : 'scale-[1.08] opacity-0 duration-[1400ms]'
              }`}
            />
          ))}
        </div>

        {/* Layered background overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                120% 90% at 78% 18%,
                rgba(231, 181, 60, 0.16),
                transparent 55%
              ),
              linear-gradient(
                90deg,
                rgba(8, 8, 9, 0.96) 0%,
                rgba(8, 8, 9, 0.82) 42%,
                rgba(8, 8, 9, 0.34) 100%
              ),
              linear-gradient(
                0deg,
                rgba(8, 8, 9, 0.96),
                transparent 60%
              )
            `,
          }}
        />

        {/* Main hero content */}
        <div className="relative mx-auto flex min-h-[min(82vh,760px)] w-full max-w-[1240px] items-center px-5 py-[80px] pb-10 sm:px-7">
          <div className="max-w-[680px]">
            {/* Eyebrow */}
            <span className="font-oswald relative mb-[18px] inline-block pl-[34px] text-[0.72rem] font-semibold tracking-[0.22em] text-[#e7b53c] uppercase before:absolute before:top-1/2 before:left-0 before:h-[2px] before:w-6 before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#f6cf63] before:via-[#e7b53c] before:to-[#a87a1c]">
              Built tougher. Engineered to last.
            </span>

            {/* Hero title */}
            <h1 className="font-anton mb-6 text-[clamp(2.7rem,7vw,5.6rem)] leading-[0.96] font-normal tracking-[-0.01em] uppercase">
              America&apos;s Trusted Source for
              <span className="mt-1 block bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
                Custom Metal Buildings
              </span>
            </h1>

            {/* Description */}
            <p className="mb-[34px] max-w-[560px] text-[1.12rem] leading-[1.6] text-[#a29c8e]">
              Heavy-gauge American steel, certified engineering, and a price you can actually
              finance. From a single carport to a clear-span commercial shop — we build it, deliver
              it, and install it like our name&apos;s on it. Because it is.
            </p>

            {/* Buttons */}
            <div className="mb-12 flex flex-wrap gap-[14px]">
              <Link
                href="/free-quote"
                className="font-oswald inline-flex min-h-[58px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-[34px] text-base font-semibold tracking-[0.05em] text-[#1a1306] uppercase shadow-[0_20px_50px_-18px_rgba(231,181,60,0.35)] transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_26px_60px_-16px_rgba(231,181,60,0.55)]"
              >
                Get Free Quote
              </Link>

              <Link
                href="#products"
                className="font-oswald inline-flex min-h-[58px] items-center justify-center rounded-[10px] border-[1.5px] border-[#e7b53c] px-[34px] text-base font-semibold tracking-[0.05em] text-[#e7b53c] uppercase transition duration-300 hover:-translate-y-[3px] hover:bg-[#e7b53c] hover:text-[#1a1306]"
              >
                Explore Buildings
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-9">
              <div className="flex flex-col">
                <strong className="font-anton text-[2.4rem] leading-none font-normal text-[#f4f1ea]">
                  4.9
                  <span className="align-top text-[1.6rem] text-[#e7b53c]">★</span>
                </strong>

                <span className="mt-1.5 text-[0.85rem] tracking-[0.06em] text-[#a29c8e] uppercase">
                  Average owner rating
                </span>
              </div>

              <div className="flex flex-col">
                <strong className="font-anton text-[2.4rem] leading-none font-normal text-[#f4f1ea]">
                  <AnimatedCounter end={10000} suffix="+" duration={2200} />
                </strong>

                <span className="mt-1.5 text-[0.85rem] tracking-[0.06em] text-[#a29c8e] uppercase">
                  Buildings delivered
                </span>
              </div>

              <div className="flex flex-col">
                <strong className="font-anton text-[2.4rem] leading-none font-normal text-[#f4f1ea]">
                  <AnimatedCounter end={40} suffix="+" duration={1600} />
                </strong>

                <span className="mt-1.5 text-[0.85rem] tracking-[0.06em] text-[#a29c8e] uppercase">
                  States served
                </span>
              </div>
            </div>
          </div>

          {/* Floating trust badges */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className={`absolute ${badge.position} flex animate-[heroFloat_6s_ease-in-out_infinite] flex-col gap-0.5 rounded-[14px] border border-[rgba(231,181,60,0.16)] bg-[rgba(20,20,23,0.62)] px-[18px] py-[14px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-[12px]`}
                style={{
                  animationDelay: badge.delay,
                }}
              >
                <span className="font-oswald text-[1.15rem] font-bold tracking-[0.02em] text-[#e7b53c]">
                  {badge.title}
                </span>

                <span className="text-[0.74rem] text-[#a29c8e]">{badge.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product pills */}
        <div className="relative mx-auto flex w-full max-w-[1240px] flex-wrap items-center gap-3 px-5 pb-[46px] sm:px-7">
          <span className="font-oswald text-[0.72rem] tracking-[0.14em] text-[#6f6a5e] uppercase">
            Most requested:
          </span>

          {pills.map((pill, index) => (
            <button
              key={pill}
              type="button"
              onClick={() => setActivePill(index)}
              className={`font-oswald rounded-[30px] border px-[18px] py-[9px] text-[0.85rem] tracking-[0.04em] uppercase transition duration-300 ${
                activePill === index
                  ? 'border-transparent bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] text-[#1a1306]'
                  : 'border-white/[0.07] text-[#a29c8e] hover:border-[#e7b53c] hover:text-[#e7b53c]'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
