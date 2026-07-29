'use client';

import { Button } from '@/components/ui/button';
import { FC, useMemo, useRef, useState } from 'react';
import { SearchResult } from '@/lib/search';
import SearchResultsList from '../search-results-list';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchListingProps {
  results: SearchResult[];
  resultsPerPage?: number;
  name: string;
  disablePagination?: boolean;
  viewMore?: boolean;
  titleSizeClass?: string;
  searchTextSizeClass?: string;
}

const SearchListingViewMore: FC<SearchListingProps> = ({
  results: totalResults,
  resultsPerPage = 6,
  name,
  disablePagination,
  viewMore,
  titleSizeClass,
  searchTextSizeClass,
}) => {
  const options = [
    { value: 'all', label: 'Show All' },
    { value: 'posts', label: 'Blogs' },
    { value: 'products', label: 'Products' },
  ];
  const [dropDownValue, setDropDownValue] = useState(options[0].value);

  const results = useMemo(() => {
    if (dropDownValue === 'all') {
      return totalResults;
    }
    return totalResults?.filter((item) => item.type === dropDownValue);
  }, [totalResults, dropDownValue]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const currentResults = useMemo(() => {
    if (viewMore) {
      return results.slice(0, currentPage * resultsPerPage);
    }
    const start = (currentPage - 1) * resultsPerPage;
    return results.slice(start, start + resultsPerPage);
  }, [results, currentPage, resultsPerPage, viewMore]);

  const titleRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex w-full items-center justify-between">
        <div>
          <h2
            ref={titleRef}
            className={`text-accent font-bold ${titleSizeClass || 'text-[32px] lg:text-6xl'}`}
          >
            {name}
          </h2>

          <p
            className={`px-1 text-[#636569] lg:py-2 ${searchTextSizeClass || 'text-base lg:text-2xl'}`}
          >
            Showing {results.length} results
          </p>
        </div>
        <div>
          <Select
            open={open}
            onOpenChange={setOpen}
            value={dropDownValue ?? 'all'}
            onValueChange={(value) => {
              setDropDownValue(value);
            }}
          >
            <SelectTrigger
              className={`h-12! w-full rounded-[38px] bg-black px-4 text-xs text-white md:text-sm lg:text-base ${
                open || dropDownValue ? '' : 'text-[#777980]'
              }`}
            >
              <SelectValue placeholder="Select Filter" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {options?.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Grid */}
      <div className="pt-6">
        <SearchResultsList results={currentResults} />
      </div>

      {/* Pagination / View More */}
      {!disablePagination && (
        <>
          {viewMore && currentResults.length < results.length && (
            <div className="mx-auto flex w-full items-center justify-center pt-8 lg:pt-16">
              <Button
                className="p-5"
                variant="metallic"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                View More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchListingViewMore;
