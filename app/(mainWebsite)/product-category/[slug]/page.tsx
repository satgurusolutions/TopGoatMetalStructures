import Footer from '@/components/footer';
import {
  Advantages,
  CommonUses,
  Customization,
  FeatureTabsCarousel,
  GetAQuote,
  HeroSection,
  ProductListing,
  ProductStyle,
  UsesCard,
} from '@/components/product-category';
import ProductApplications from '@/components/product-category/product-application';
import { RichText, Ruler } from '@/components/shared';
import { buildMetadata } from '@/configs/meta-data';
import { getProductsByCategory } from '@/lib/products';
import { SeoMeta } from '@/types';
import { Metadata } from 'next';
export interface CategoryComponentBlock {
  type: keyof typeof componentMap; // ensures only mapped components allowed
  padding?: string;
  background?: string;
  props?: Record<string, unknown>; // if you want to pass dynamic props
}

export interface CategoryImage {
  id: number;
  date_created?: string;
  date_created_gmt?: string;
  date_modified?: string;
  date_modified_gmt?: string;
  src: string;
  name: string;
  alt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: CategoryImage | null;
  menu_order: number;
  count: number;
  components?: CategoryComponentBlock[];
  details: { title: string; description: string; highlight: string };
  seo_meta: SeoMeta;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/categories.json`, // Adjust the URL to your API endpoint or data source
    { cache: 'force-cache' },
  );
  const { slug } = await params;
  const categories = ((await res.json()) as Array<Category>) || [];
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return buildMetadata(category.seo_meta, category.name, `product-category/${slug}`);
}

// Generates all dynamic routes at build time
export async function generateStaticParams() {
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

  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

const componentMap: Record<string, React.FC<{ [key: string]: unknown }>> = {
  Customization,
  ProductStyle,
  CommonUses,
  Ruler,
  FeatureTabsCarousel,
  Advantages,
  ProductApplications,
  UsesCard,
  RichText,
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/categories.json`, // Adjust the URL to your API endpoint or data source
    { cache: 'force-cache' },
  );
  const { slug } = await params;
  const categories = ((await res.json()) as Array<Category>) || [];
  const category = categories.find((c) => c.slug === slug);
  if (!category) {
    return <div>Category not found</div>;
  }

  const products = await getProductsByCategory(slug);

  return (
    <div className="font-inter">
      <HeroSection name={category?.name ?? ''} />
      <div className="bg-[#EBF7FC]/40">
        {products?.length ? (
          <div className="py-8 lg:py-16">
            <ProductListing products={products} name={category?.name} />
          </div>
        ) : null}
        <div className="pb-8 lg:pb-16">
          <GetAQuote
            title={category?.details?.title ?? ''}
            description={category?.details?.description ?? ''}
            highlight={category?.details?.highlight ?? ''}
          />
        </div>
        {category?.components?.map((block, index) => {
          const Component = componentMap[block.type];
          if (!Component) return null;

          return (
            <div
              key={index}
              className={`${block.background || ''} ${block.padding || ''} mx-auto px-4 pb-8 text-base lg:pb-16 xl:container xl:px-0 xl:text-lg [@media(width=1280px)]:px-4`}
            >
              <Component {...(block.props || {})} />
            </div>
          );
        }) ?? null}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
