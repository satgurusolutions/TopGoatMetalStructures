'use client';

import { FC } from 'react';
import { SearchResult } from '@/lib/search';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';

interface SearchResultsListProps {
  results: SearchResult[];
}

const SearchResultsList: FC<SearchResultsListProps> = ({ results }) => {
  if (!results || results.length === 0) {
    return <p className="text-center text-xl text-gray-500">No results found.</p>;
  }

  return (
    <div className="flex flex-col divide-y divide-gray-200">
      {results.map((item) => (
        <Link
          key={item.slug}
          href={item.link}
          className="flex flex-col gap-2 py-4 md:flex-row md:items-start md:gap-6"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-2">
            <h3 className="text-accent block truncate text-lg font-medium lg:text-xl">
              {parse(item.title ?? '')}
            </h3>
            <span className="line-clamp-3 text-sm text-gray-600 lg:text-base">
              {parse(item.description ?? '')}
            </span>
          </div>

          {/* Right: Image (optional) */}
          {item.imageSrc && (
            <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50 md:h-28 md:w-36">
              <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsList;
