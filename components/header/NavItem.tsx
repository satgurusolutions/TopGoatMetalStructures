'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItemType } from '@/configs/navigation.config';

export function NavItem({ item }: Readonly<{ item: NavItemType }>) {
  const [open, setOpen] = useState(false);
  const hasDropdown = Boolean(item.groups?.length);

  if (!hasDropdown) {
    return (
      <div className="top-goat-nav-item">
        <Link href={item.href || '/'} className="top-goat-nav-link">
          {item.label}
        </Link>
      </div>
    );
  }

  const links = item.groups?.flatMap((group) => group.links) || [];

  return (
    <div
      className="top-goat-nav-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href || '#'}
        className={`top-goat-nav-trigger ${open ? 'is-open' : ''}`}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="top-goat-nav-chevron" />
      </Link>

      <div className={`top-goat-dropdown top-goat-dropdown-panel ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="top-goat-dropdown-link">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
