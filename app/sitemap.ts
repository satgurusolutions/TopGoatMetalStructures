import { stateDetails } from '@/configs/navigation.config';
import { BlogPost, Product } from '@/types';
import { MetadataRoute } from 'next';

async function getPages(): Promise<string[]> {
  const staticPages = [
    'about-us',
    'contact-us',
    'blog',
    'military-discount',
    'rent-to-own-metal-buildings',
    'buyers-guide',
    'service-area-map',
    'metal-building-roof-styles',
    'metal-building-financing',
    'warranties',
    'metal-buildings-offers',
    'metal-building-installation',
  ];

  return [...staticPages];
}

async function getCategories(): Promise<string[]> {
  let categories: Array<{ slug: string }> = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/categories.json`, // Adjust the URL to your API endpoint or data source
      { cache: 'force-cache' },
    );

    categories = (await res.json()) as Array<{ slug: string }>;
  } catch (error) {
    console.warn(
      '⚠️ categories.json not found at build time. No static params generated and dynamic pages might be slow to load',
      error,
    );
  }

  return categories.map((cat) => `${cat.slug}`);
}

async function getProducts(): Promise<string[]> {
  let products: Array<Product> = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, // Adjust the URL to your API endpoint or data source
      { cache: 'force-cache' },
    );

    products = (await res.json()) as Array<Product>;
  } catch (error) {
    console.warn(
      '⚠️ products.json not found at build time. No static params generated and dynamic pages might be slow to load',
      error,
    );
  }

  return products?.map((item) => item.slug);
}

async function getServiceAreas(): Promise<string[]> {
  const state = stateDetails.map((item) => item.slug);
  return state;
}

async function getBlogs(): Promise<string[]> {
  let posts: Array<{ slug: string }> = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/posts.json`, // Adjust the URL to your API endpoint or data source
      { cache: 'force-cache' },
    );

    posts = (await res.json()) as Array<BlogPost>;
  } catch (error) {
    console.warn(
      '⚠️ categories.json not found at build time. No static params generated and dynamic pages might be slow to load',
      error,
    );
  }

  return posts.map((post) => post.slug);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.topgoatmetalstructures.com';

  const [pages, categories, products, serviceAreas, blogs] = await Promise.all([
    getPages(),
    getCategories(),
    getProducts(),
    getServiceAreas(),
    getBlogs(),
  ]);
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...pages.map((slug): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    ...categories.map((slug): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...products.map((slug): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}/product/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...serviceAreas.map((slug): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}/service-area/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...blogs.map((slug): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
  ];
}
