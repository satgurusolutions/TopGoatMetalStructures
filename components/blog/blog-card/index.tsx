'use client';

import { Button } from '@/components/ui/button';
import LinkIconInactive from '@/icons/link-inactive';
import { BlogPost } from '@/types';
import parse from 'html-react-parser';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: Readonly<BlogCardProps>) {
  const router = useRouter();
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div
      onClick={() => {
        router.push(`/blog/${post.slug}`);
      }}
      className="relative flex cursor-pointer flex-col text-2xl font-bold"
    >
      <div className="relative">
        {isImageLoading && (
          <div className="absolute inset-0 z-20 flex h-[292px] w-full items-center justify-center rounded-4xl bg-black/20 backdrop-blur-sm">
            <Loader2 className="h-10 w-10 animate-spin text-white" />
          </div>
        )}
        <Image
          src={
            !post.localImage || post.localImage === '/null'
              ? '/images/blog-listing/blogs-fallback.jpg'
              : post.localImage
          }
          width={450}
          height={294}
          className={`h-[292px] w-full rounded-4xl object-cover transition-opacity duration-500 ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          alt={post.title}
          priority={false}
          onLoad={() => setIsImageLoading(false)}
        />
      </div>
      <div className="py-4 text-2xl font-medium lg:text-2xl">{parse(post.title)}</div>
      <div className="line-clamp-3 text-base font-normal text-[#4A4C56] lg:text-base">
        {parse(post.excerpt)}
      </div>
      <div className="pt-5 xl:pt-4">
        <Button
          variant="metallic"
          className="flex h-[48px] items-center gap-2 rounded-full px-6 py-6 text-sm font-normal uppercase"
        >
          <span className="px-2 text-xs font-bold lg:text-sm">Read More</span>{' '}
          <LinkIconInactive className="h-[34px]! w-[34px]!" />
        </Button>
      </div>
    </div>
  );
}
