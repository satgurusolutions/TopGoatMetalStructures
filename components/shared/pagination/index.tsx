'use client';

import { useEffect, useRef } from 'react';

const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect width="52" height="52" rx="26" fill="black" />
    <path
      d="M28.9997 34C29.2557 34 29.5118 33.9021 29.7068 33.7071C30.0978 33.3161 30.0978 32.684 29.7068 32.293L23.4138 26L29.7068 19.7071C30.0978 19.3161 30.0978 18.684 29.7068 18.293C29.3158 17.902 28.6837 17.902 28.2927 18.293L21.2927 25.293C20.9017 25.684 20.9017 26.3161 21.2927 26.7071L28.2927 33.7071C28.4877 33.9021 28.7437 34 28.9997 34Z"
      fill="white"
    />
  </svg>
);

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect width="52" height="52" rx="26" fill="black" />
    <path
      d="M23.0003 34C22.7443 34 22.4882 33.9021 22.2932 33.7071C21.9022 33.3161 21.9022 32.684 22.2932 32.293L28.5862 26L22.2932 19.7071C21.9022 19.3161 21.9022 18.684 22.2932 18.293C22.6842 17.902 23.3163 17.902 23.7073 18.293L30.7073 25.293C31.0983 25.684 31.0983 26.3161 30.7073 26.7071L23.7073 33.7071C23.5123 33.9021 23.2563 34 23.0003 34Z"
      fill="white"
    />
  </svg>
);

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange?: (page: number) => void;
  isDark?: boolean;
}

export default function Pagination({
  totalPages,
  currentPage,
  onChange,
  isDark,
}: Readonly<PaginationProps>) {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const paginationClass = `${isDark ? 'hover:bg-accent border-[#5E5E5E]/30 text-white' : 'border-black text-black hover:bg-gray-200'}`;
  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onChange?.(page);
  };
  useEffect(() => {
    const activeBtn = buttonsRef.current[currentPage - 1];
    const container = containerRef.current;

    if (activeBtn && container) {
      // Calculate how far the container should scroll to center the button
      const offset = activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.clientWidth / 2;

      container.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  }, [currentPage]);
  return (
    <div className="mx-auto flex w-full items-center justify-center gap-3">
      {/* Previous */}
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`shrink-0 cursor-pointer disabled:cursor-default disabled:opacity-50 ${isDark && 'rounded-full border border-[#5E5E5E]/30'}`}
      >
        <PrevIcon />
      </button>

      {/* Page Numbers */}
      <div
        className="scrollbar-none flex items-center gap-3 overflow-x-auto px-2"
        ref={containerRef}
      >
        {Array.from({ length: totalPages }, (_, idx) => {
          const pageNum = idx + 1;
          const isActive = currentPage === pageNum;
          return (
            <button
              key={pageNum}
              ref={(el) => {
                buttonsRef.current[idx] = el;
              }}
              onClick={() => changePage(pageNum)}
              className={`h-12 w-12 shrink-0 cursor-pointer rounded-full text-xl transition-colors ${
                isActive
                  ? 'bg-accent border-accent border text-white'
                  : `border ${paginationClass} bg-transparent`
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next */}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`shrink-0 cursor-pointer disabled:cursor-default disabled:opacity-50 ${isDark && 'rounded-full border border-[#5E5E5E]/30'} `}
      >
        <NextIcon />
      </button>
    </div>
  );
}
