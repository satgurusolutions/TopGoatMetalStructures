'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { METAL_3D_LINK, NAV_ITEMS, TELEPHONE_NUMBER } from '@/configs/navigation.config';
import QuoteFormSmall from '../shared/quote-form/quote-form-small';
import MetalBuildingsMegaMenu from './MetalBuildingsMegaMenu';
import { NavItem } from './NavItem';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
        <DialogContent className="border border-[#d9a91a]/30 bg-[#151516] text-white sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-jost text-2xl font-extrabold uppercase">
              Get a Free Quote
            </DialogTitle>
          </DialogHeader>

          <QuoteFormSmall leadSourceName="Website Get a Quote Form Header" />
        </DialogContent>
      </Dialog>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-[0_14px_35px_rgba(0,0,0,0.35)]' : ''
        }`}
      >
        {/* Top bar */}
        <div className="hidden h-[45px] border-t-[3px] border-b border-t-[#d6a61b] border-b-white/10 bg-[#111112] text-[#aaa7a0] lg:block">
          <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-4 xl:px-7">
            <div className="flex items-center gap-4 text-[14px]">
              <span>★ 4.9/5 from 2,300+ owners</span>
              <span className="h-4 w-px bg-white/10" />
              <span>Made in the USA steel</span>
              <span className="h-4 w-px bg-white/10" />
              <span>Financing available</span>
            </div>

            <div className="flex items-center gap-6 text-[13px] font-bold">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="text-[#efbd2d] transition-colors hover:text-[#ffd766]"
              >
                Get Free Quote
              </button>

              <a
                href={TELEPHONE_NUMBER.href}
                className="font-jost text-[15px] font-extrabold text-white uppercase transition-colors hover:text-[#efbd2d]"
              >
                Call {TELEPHONE_NUMBER.formatted}
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="h-[80px] border-b border-white/10 bg-[#090a0b]">
          <div className="mx-auto flex h-full max-w-[1240px] items-center px-4 xl:px-7">
            {/* Logo */}
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

              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-jost text-[20px] font-extrabold tracking-[0.055em] text-white uppercase">
                  Top Goat
                </span>

                <span className="mt-1.5 text-[8px] font-extrabold tracking-[0.31em] text-[#e4b62a] uppercase">
                  Metal Structures
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="ml-auto hidden items-center gap-0.5 xl:flex"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) =>
                item.href === '/metal-buildings' ? (
                  <MetalBuildingsMegaMenu key={item.label} item={item} />
                ) : (
                  <NavItem key={item.label} item={item} />
                ),
              )}
            </nav>

            {/* Builder phone */}
            <a
              href={TELEPHONE_NUMBER.href}
              className="ml-7 hidden items-center gap-3 border-l border-white/10 pl-5 xl:flex"
              aria-label={`Call ${TELEPHONE_NUMBER.formatted}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d6a61b]/45 text-[#e5b423]">
                <Phone className="h-[17px] w-[17px]" />
              </span>

              <span className="flex flex-col leading-none">
                <span className="text-[10px] font-semibold tracking-[0.12em] text-[#888681] uppercase">
                  Talk to a Builder
                </span>

                <span className="font-jost mt-1 text-[17px] font-extrabold text-white">
                  {TELEPHONE_NUMBER.formatted}
                </span>
              </span>
            </a>

            {/* Desktop CTA */}
            <Link
              href={METAL_3D_LINK}
              target="_blank"
              className="font-jost ml-5 hidden h-[53px] min-w-[174px] items-center justify-center rounded-[12px] bg-gradient-to-r from-[#f3c54a] to-[#c89411] px-6 text-[16px] font-extrabold text-[#15120a] uppercase shadow-[0_8px_24px_rgba(210,161,24,0.18)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 xl:flex"
            >
              Design Your Own
            </Link>

            {/* Mobile controls */}
            <div className="ml-auto flex items-center gap-2 xl:hidden">
              <a
                href={TELEPHONE_NUMBER.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6a61b]/40 text-[#e5b423]"
                aria-label={`Call ${TELEPHONE_NUMBER.formatted}`}
              >
                <Phone className="h-[18px] w-[18px]" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileOpen((current) => !current)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-[#d6a61b]/50 hover:text-[#e5b423]"
                aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm xl:hidden"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close navigation"
          />

          <div className="fixed inset-x-0 top-[80px] z-50 max-h-[calc(100vh-80px)] overflow-y-auto border-t border-[#d6a61b]/20 bg-[#111113] px-4 pb-8 lg:top-[125px] lg:max-h-[calc(100vh-125px)] xl:hidden">
            {NAV_ITEMS.map((item) => {
              const hasGroups = Boolean(item.groups?.length);
              const isExpanded = mobileSection === item.label;

              return (
                <div key={item.label} className="border-b border-white/10">
                  {hasGroups ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileSection(isExpanded ? null : item.label)}
                        className="font-jost flex min-h-14 w-full items-center justify-between text-left text-[17px] font-extrabold text-white uppercase"
                      >
                        {item.label}

                        <ChevronDown
                          className={`h-4 w-4 text-[#e4b62a] transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="space-y-1 pb-4">
                          {item.href && (
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[#e4b62a]"
                            >
                              View All {item.label}
                            </Link>
                          )}

                          {item.groups
                            ?.flatMap((group) => group.links)
                            .map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="block rounded-md px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                              >
                                {link.label}
                              </Link>
                            ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-jost flex min-h-14 items-center text-[17px] font-extrabold text-white uppercase"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="font-jost h-12 rounded-lg border border-[#d6a61b]/45 text-sm font-extrabold text-[#e4b62a] uppercase transition hover:bg-[#d6a61b]/10"
              >
                Get Free Quote
              </button>

              <Link
                href={METAL_3D_LINK}
                target="_blank"
                className="font-jost flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#f3c54a] to-[#c89411] text-sm font-extrabold text-[#15120a] uppercase"
              >
                Design Your Own
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Header spacing */}
      <div className="h-[80px] lg:h-[35px]" aria-hidden="true" />
    </>
  );
}
