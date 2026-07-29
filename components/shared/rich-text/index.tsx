'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import parse, { domToReact } from 'html-react-parser';
import Link from 'next/link';
import { BulletCheckIcon } from '@/icons';

interface Props {
  html: string;
}

// ✅ Custom handler for <li> elements with check icon styling
const replaceLi = (domNode: any) => {
  if (domNode.type !== 'tag') return;

  if (domNode.name === 'li') {
    return (
      <li className="flex items-start gap-3">
        <div className="pt-1.5">
          <BulletCheckIcon className="text-accent h-4 w-4" />
        </div>
        <span className="text-base leading-relaxed">{domToReact(domNode.children)}</span>
      </li>
    );
  }
};

// ✅ Main rich text renderer
const RichText = ({ html }: Props) => {
  if (!html) return null;

  return parse(html, {
    replace: (domNode: any) => {
      if (domNode.type !== 'tag') return;

      // ✅ Headings
      if (/^h[1-6]$/.test(domNode.name)) {
        const level = parseInt(domNode.name[1]);
        const sizes: { [key: number]: string } = {
          1: 'text-3xl md:text-4xl font-bold',
          2: 'text-2xl md:text-3xl font-semibold',
          3: 'text-xl md:text-2xl font-semibold',
          4: 'text-lg md:text-xl font-medium',
          5: 'text-base md:text-lg font-medium',
          6: 'text-base font-medium',
        };
        return (
          <domNode.name className={`${sizes[level]} my-4`}>
            {domToReact(domNode.children)}
          </domNode.name>
        );
      }

      // ✅ Paragraphs
      if (domNode.name === 'p') {
        return <p className="mb-4 text-base leading-relaxed">{domToReact(domNode.children)}</p>;
      }

      // ✅ Links
      if (domNode.name === 'a' && domNode.attribs?.href) {
        const href = domNode.attribs.href;

        // Internal link → Next.js <Link>
        if (href.startsWith('/')) {
          return (
            <Link href={href} className="text-accent font-medium hover:underline">
              {domToReact(domNode.children)}
            </Link>
          );
        }

        // External link → <a>
        return (
          <a
            href={href}
            className="text-accent font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {domToReact(domNode.children)}
          </a>
        );
      }

      // ✅ Unordered list
      if (domNode.name === 'ul') {
        return (
          <ul className="mt-4 mb-6 list-none space-y-3">
            {domToReact(domNode.children, { replace: replaceLi })}
          </ul>
        );
      }

      // ✅ Ordered list
      if (domNode.name === 'ol') {
        return (
          <ol className="-4 mb-6 list-inside list-decimal space-y-2">
            {domToReact(domNode.children)}
          </ol>
        );
      }

      // ✅ Strong / Bold
      if (domNode.name === 'strong' || domNode.name === 'b') {
        return <strong className="nt-semibold">{domToReact(domNode.children)}</strong>;
      }

      // ✅ Italic
      if (domNode.name === 'em' || domNode.name === 'i') {
        return <em className="italic">{domToReact(domNode.children)}</em>;
      }
    },
  });
};

export default RichText;
