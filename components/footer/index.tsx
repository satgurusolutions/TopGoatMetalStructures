'use client';

// import { FileText, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const buildingLinks = [
  { label: 'Metal Garages', href: '/metal-garages' },
  { label: 'Metal Carports', href: '/metal-carports' },
  { label: 'Metal Barns', href: '/metal-barns' },
  { label: 'RV Garages', href: '/rv-garages' },
  { label: 'Commercial', href: '/commercial' },
];

const companyLinks = [
  { label: 'Why Top Goat', href: '/#why' },
  { label: 'Recent Builds', href: '/#showcase' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Service Area', href: '/service-area' },
];

const resourceLinks = [
  {
    label: 'Free Quote',
    href: '/free-quote',
  },
  {
    label: 'Service Area',
    href: '/service-area',
  },
  {
    label: 'Color Planner',
    href: '/color-planner',
  },
  {
    label: 'Building Components',
    href: '/components',
  },
  {
    label: "FAQ'S",
    href: '/faq',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];

const phoneNumber = '(336) 509-3443';
const phoneHref = 'tel:tel:+13365093443';

export default function Footer() {
  return (
    <>
      <section
        id="quote"
        className="relative overflow-hidden border-y border-white/5 bg-[#0b0b0d] py-20 text-[#f4f1ea] sm:py-24 lg:min-h-[650px] lg:py-[120px]"
      >
        {/* Soft Top Goat glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a225]/[0.035] blur-[150px]" />

        <div className="relative mx-auto flex w-full max-w-[1040px] flex-col items-center px-5 text-center sm:px-7">
          <span className="font-oswald text-[10px] font-semibold tracking-[0.24em] text-[#d9a225] uppercase sm:text-[11px]">
            Ready When You Are
          </span>

          <h2 className="font-anton mt-5 max-w-[900px] text-[clamp(3.3rem,7vw,6.2rem)] leading-[0.88] font-normal tracking-[-0.025em] uppercase">
            Let&apos;s Build Something
            <span className="mt-1 block bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] bg-clip-text text-transparent">
              That Lasts
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[690px] text-[16px] leading-[1.7] text-[#aaa397] sm:text-[18px]">
            Tell us what you&apos;re protecting and we&apos;ll send a no-pressure quote — usually
            the same day. Free delivery and installation are included on most standard buildings.
          </p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="tel:tel:+13365093443"
              className="font-oswald inline-flex min-h-[62px] w-full items-center justify-center rounded-[10px] border border-[#d9a225] px-8 text-sm font-bold tracking-[0.04em] text-[#e7b53c] uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#d9a225] hover:text-[#171109] sm:w-auto sm:min-w-[225px]"
            >
              Call (336) 509-3443
            </Link>

            <Link
              href="/free-quote"
              className="font-oswald inline-flex min-h-[62px] w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-8 text-sm font-bold tracking-[0.04em] text-[#171109] uppercase shadow-[0_20px_45px_-18px_rgba(231,181,60,0.65)] transition duration-300 hover:-translate-y-1 hover:brightness-105 sm:w-auto sm:min-w-[210px]"
            >
              Get My Free Quote
            </Link>
          </div>

          <p className="font-oswald mt-2 text-[13px] tracking-[0.08em] text-[#b9ac99] uppercase sm:text-[15px]">
            4.9★ from 2,300+ owners 
          </p>
        </div>
      </section>
      <footer className="border-t border-[#d9a225]/20 bg-[#070708] text-[#f4f1ea]">
        <div className="mx-auto w-full max-w-[1240px] px-5 pt-16 pb-8 sm:px-7 lg:pt-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.75fr_.75fr_.75fr] lg:gap-16">
            {/* Brand */}
            <div className="max-w-[350px]">
              <Link
                href="/"
                className="flex shrink-0 items-center gap-3"
                aria-label="Top Goat Metal Structures home"
              >
                <Image
                  src="/images/logo.png"
                  alt="Top Goat Metal Structures"
                  width={49}
                  height={58}
                  priority
                  className="h-[55px] w-[46px] object-contain"
                />

                <span className="flex flex-col leading-none">
                  <span className="font-jost text-[20px] font-extrabold tracking-[0.055em] text-white uppercase">
                    Top Goat
                  </span>

                  <span className="mt-1.5 text-[8px] font-extrabold tracking-[0.31em] text-[#e4b62a] uppercase">
                    Metal Structures
                  </span>
                </span>
              </Link>

              <p className="mt-6 text-[15px] leading-6 text-[#b3aa9b]">
                Custom American steel garages, carports, barns, RV Garages and commercial buildings
                — engineered, delivered and installed.
              </p>

              <Link
                href={phoneHref}
                className="font-oswald mt-6 inline-flex text-[26px] font-bold text-[#e7b53c] transition hover:text-[#f6cf63]"
              >
                {phoneNumber}
              </Link>
            </div>

            {/* Buildings */}
            <div>
              <h3 className="font-oswald text-sm font-bold tracking-[0.08em] text-[#e7b53c] uppercase">
                Buildings
              </h3>

              <ul className="mt-6 space-y-4">
                {buildingLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-[#c5b9a8] transition hover:text-[#e7b53c]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-oswald text-sm font-bold tracking-[0.08em] text-[#e7b53c] uppercase">
                Company
              </h3>

              <ul className="mt-6 space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-[#c5b9a8] transition hover:text-[#e7b53c]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-oswald text-sm font-bold tracking-[0.08em] text-[#e7b53c] uppercase">
                Resources
              </h3>

              <ul className="mt-6 space-y-4">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-[#c5b9a8] transition hover:text-[#e7b53c]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 border-t border-white/10 pt-7 lg:mt-16">
            <div className="flex flex-col gap-4 text-sm text-[#817866] sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Top Goat Metal Structures. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                <Link href="/privacy-policy" className="transition hover:text-[#e7b53c]">
                  Privacy
                </Link>

                <span aria-hidden="true">·</span>

                <Link href="/terms" className="transition hover:text-[#e7b53c]">
                  Terms
                </Link>

                <span aria-hidden="true">·</span>

                <Link href="/warranty" className="transition hover:text-[#e7b53c]">
                  Warranty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Space for fixed mobile bar */}
      {/* <div className="h-[58px] lg:hidden" /> */}

      {/* Mobile fixed bottom actions */}
      {/* <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.45)] lg:hidden">
        <div className="grid h-[58px] grid-cols-2">
          <Link
            href={phoneHref}
            className="flex items-center justify-center gap-2 bg-[#111113] px-3 text-white transition active:bg-[#080809]"
          >
            <Phone className="h-5 w-5 shrink-0 text-[#e7b53c]" strokeWidth={2} />

            <div className="leading-tight">
              <span className="block text-[9px] font-semibold tracking-[0.1em] text-white/55 uppercase">
                Call Now
              </span>

              <span className="block text-[12px] font-bold whitespace-nowrap sm:text-[13px]">
                {phoneNumber}
              </span>
            </div>
          </Link>

          <Link
            href="/#quote"
            className="flex items-center justify-center gap-2 border-l border-black/20 bg-gradient-to-r from-[#f6cf63] via-[#e7b53c] to-[#a87a1c] px-3 text-[#171109] transition active:brightness-90"
          >
            <FileText className="h-5 w-5 shrink-0" strokeWidth={2.2} />

            <span className="font-oswald text-[13px] font-bold tracking-[0.03em] uppercase">
              Get Your Quote
            </span>
          </Link>
        </div>
      </div> */}
    </>
  );
}
