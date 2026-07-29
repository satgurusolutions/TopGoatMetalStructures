'use client';

import { Pagination } from '@/components/shared';
import { BlogPost } from '@/types';
import { useMemo, useRef, useState } from 'react';
import BlogGrid from '../blog-grid';

interface BlogListingProps {
  posts: BlogPost[];
  postsPerPage?: number;
  title?: string;
  disablePagination?: boolean;
}

export default function BlogListing({
  posts,
  postsPerPage = 12,
  title = 'Blogs',
  disablePagination,
}: Readonly<BlogListingProps>) {
  const [currentPage, setCurrentPage] = useState(1);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return posts.slice(start, start + postsPerPage);
  }, [posts, currentPage, postsPerPage]);

  const startIdx = (currentPage - 1) * postsPerPage + 1;
  const endIdx = Math.min(currentPage * postsPerPage, posts.length);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-12 px-4 lg:flex-row xl:px-0 [@media(width=1280px)]:px-4">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2 ref={titleRef} className="text-accent text-[32px] font-bold lg:text-6xl">
              {title}
            </h2>
            {!disablePagination && (
              <p className="px-1 py-2 text-base text-[#636569] lg:text-2xl">
                Showing {startIdx}–{endIdx} of {posts.length} blogs
              </p>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="pt-6">
          <BlogGrid posts={currentPosts} />
        </div>

        {/* Pagination */}
        {!disablePagination && (
          <div className="mx-auto flex w-full items-center justify-center pt-6">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={(page) => {
                titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setCurrentPage(page);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
