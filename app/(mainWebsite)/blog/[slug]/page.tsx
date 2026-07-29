import Footer from '@/components/footer';
import { HeroSection } from '@/components/product-category';
import { Ruler } from '@/components/shared';
import ProseContent from '@/components/shared/prose-content';
import { buildMetadata } from '@/configs/meta-data';
import { BlogPost } from '@/types';
import { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/posts.json`, // Adjust the URL to your API endpoint or data source
    { cache: 'force-cache' },
  );
  const { slug } = await params;
  const blogs = ((await res.json()) as Array<BlogPost>) || [];
  const blog = blogs.find((c) => c.slug === slug);

  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  return buildMetadata(blog.yoast_head_json);
}

// Generates all dynamic routes at build time
export async function generateStaticParams() {
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

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/posts.json`, // Adjust the URL to your API endpoint or data source
    { cache: 'force-cache' },
  );
  const { slug } = await params;
  const posts = ((await res.json()) as Array<BlogPost>) || [];
  const post = posts.find((c) => c.slug === slug);
  if (!post) {
    return <div>Blog not found</div>;
  }

  const blogSchema = post?.yoast_head_json?.schema || {};

  return (
    <div className="font-jost">
      <Script id={`blogs-schema-${slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(blogSchema)}
      </Script>
      <HeroSection
        category={{
          name: 'Blog',
          slug: `blog`,
        }}
        name={post?.title ?? ''}
        bgImg={post?.localImage ?? ''}
      />
      <div className="bg-[#FCF8F8]">
        <div className="pb-8 lg:pb-14">
          <Ruler />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-14 xl:px-0 [@media(width=1280px)]:px-4">
          {<ProseContent html={post?.content ?? ''} />}
        </div>
        <div>
          <Ruler variant={2} />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
