'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Building2,
  ChevronDown,
  Factory,
  House,
  PanelsTopLeft,
  Tractor,
  Warehouse,
} from 'lucide-react';
import { NavItemType } from '@/configs/navigation.config';

const fallbackItems = [
  {
    label: 'Metal Buildings',
    href: '/metal-buildings',
    description: 'Workshops & clear-span steel',
    icon: Building2,
  },
  {
    label: 'Metal Garages',
    href: '/metal-garages',
    description: 'Single & multi-car, fully enclosed',
    icon: Warehouse,
  },
  {
    label: 'Metal Carports',
    href: '/metal-carports',
    description: 'Open, regular & vertical roof',
    icon: PanelsTopLeft,
  },
  {
    label: 'Metal Barns',
    href: '/metal-barns',
    description: 'Horse, hay & raised-center barns',
    icon: Tractor,
  },
  {
    label: 'RV Covers',
    href: '/rv-covers',
    description: 'Tall covers & enclosed RV garages',
    icon: House,
  },
  {
    label: 'Commercial',
    href: '/commercial-buildings',
    description: 'Workshops & clear-span steel',
    icon: Factory,
  },
];

const descriptions: Record<string, string> = {
  'Metal Buildings': 'Workshops & clear-span steel',
  'Metal Garages': 'Single & multi-car, fully enclosed',
  'Metal Carports': 'Open, regular & vertical roof',
  'Metal Barns': 'Horse, hay & raised-center barns',
  'RV Carports': 'Tall covers & enclosed RV garages',
  'RV Covers': 'Tall covers & enclosed RV garages',
  Commercial: 'Workshops & clear-span steel',
  'Commercial Buildings': 'Workshops & clear-span steel',
};

const icons = [Building2, Warehouse, PanelsTopLeft, Tractor, House, Factory];

export default function MetalBuildingsMegaMenu({ item }: Readonly<{ item: NavItemType }>) {
  const [open, setOpen] = useState(false);
  const configuredLinks = item.groups?.flatMap((group) => group.links).slice(0, 6) || [];

  const menuItems = configuredLinks.length
    ? configuredLinks.map((link, index) => ({
        label: link.label,
        href: link.href,
        description: descriptions[link.label] || 'Custom steel structures built for your needs',
        icon: icons[index % icons.length],
      }))
    : fallbackItems;

  return (
    <div
      className="top-goat-nav-item top-goat-mega-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href || '/metal-buildings'}
        className={`top-goat-nav-trigger ${open ? 'is-open' : ''}`}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="top-goat-nav-chevron" />
      </Link>

      <div className={`top-goat-mega-menu top-goat-menu-panel ${open ? 'is-open' : ''}`}>
        <div className="top-goat-mega-grid">
          {menuItems.map(({ label, href, description, icon: Icon }) => (
            <Link key={label} href={href} className="top-goat-mega-card">
              <span className="top-goat-mega-icon">
                <Icon />
              </span>
              <span>
                <span className="top-goat-mega-title block">{label}</span>
                <span className="top-goat-mega-description block">{description}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
