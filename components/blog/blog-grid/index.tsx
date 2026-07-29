'use client';

import BlogCard from '../blog-card';
import { BlogPost } from '@/types';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: Readonly<BlogGridProps>) {
  if (!posts || posts.length === 0) {
    return <p className="text-center text-xl text-gray-500">No blogs found.</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
