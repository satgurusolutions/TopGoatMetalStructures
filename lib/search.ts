import { BlogPost, MetalBuildingPage, Product } from '@/types';
import Fuse from 'fuse.js';

export interface SearchResult {
  link: string;
  imageSrc: string | null;
  title: string;
  description: string;
  slug: string;
  type: 'pages' | 'posts' | 'products';
  score?: number;
}

async function loadJson<T>(path: string): Promise<T[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/data/${path}`, {
    // next: { revalidate: 60 }, // cache for 1 min, tweak as needed
  });
  return res.json();
}

export async function fullTextSearch(query: string): Promise<SearchResult[]> {
  if (!query) return [];

  const [products, posts, pages] = await Promise.all([
    loadJson<Product>('products.json'),
    loadJson<BlogPost>('posts.json'),
    loadJson<MetalBuildingPage>('content-pages.json'),
  ]);

  const productFuse = new Fuse(products, {
    keys: [
      'name',
      'short_description',
      'categories.name',
      'seo_meta.title',
      'seo_meta.description',
      'sku',
    ],
    includeScore: true,
    threshold: 0.4,
  });

  const postFuse = new Fuse(posts, {
    keys: ['title', 'content', 'excerpt'],
    includeScore: true,
    threshold: 0.4,
  });

  const pageFuse = new Fuse(pages, {
    keys: [
      'name',
      'details.title',
      'details.description',
      'details.highlight',
      'seo_meta.title',
      'seo_meta.description',
    ],
    includeScore: true,
    threshold: 0.4,
  });

  const productMatches: SearchResult[] = productFuse.search(query).map((res) => ({
    link: `/product/${res.item.slug}`,
    imageSrc: res.item.images?.[0]?.src ?? null,
    title: res.item.name,
    description: res.item.short_description,
    slug: res.item.slug,
    score: res.score ?? 1,
    type: 'products',
  }));

  const postMatches: SearchResult[] = postFuse.search(query).map((res) => ({
    link: `/blog/${res.item.slug}`,
    imageSrc: res.item.localImage,
    title: res.item.title,
    description: res.item.excerpt,
    slug: res.item.slug,
    score: res.score ?? 1,
    type: 'posts',
  }));

  const pageMatches: SearchResult[] = pageFuse.search(query).map((res) => ({
    link: `/${res.item.slug}`,
    imageSrc: null,
    title: res.item.name,
    description: res.item.details?.description ?? '',
    slug: res.item.slug,
    score: res.score ?? 1,
    type: 'pages',
  }));

  return [...productMatches, ...postMatches, ...pageMatches].sort(
    (a, b) => (a.score ?? 1) - (b.score ?? 1),
  );
}
