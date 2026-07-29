import Footer from '@/components/footer';
import { ProductDetails, ProductListingDark } from '@/components/product';
import { HeroSection } from '@/components/product-category';
import { Faqs, Ruler } from '@/components/shared';
import { buildMetadata } from '@/configs/meta-data';
import { getProductsByRelatedIds } from '@/lib/products';
import { Product } from '@/types';
import { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, // Adjust the URL to your API endpoint or data source
    { cache: 'force-cache' },
  );
  const { slug } = await params;
  const products = ((await res.json()) as Array<Product>) || [];
  const product = products.find((c) => c.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return buildMetadata(product.yoast_head_json);
}
// Generates all dynamic routes at build time
export async function generateStaticParams() {
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

  return products.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, // Adjust the URL to your API endpoint or data source
    { cache: 'force-cache' },
  );
  const { slug } = await params;
  const products = ((await res.json()) as Array<Product>) || [];
  const product = products.find((c) => c.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = await getProductsByRelatedIds(product.related_ids ?? []);

  const productSchema = product?.yoast_head_json?.schema;
  return (
    <div className="font-jost">
      <Script id={`product-schema-${slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(productSchema)}
      </Script>
      <HeroSection
        category={{
          name: 'Products',
          slug: `product`,
        }}
        isBlur
        name={product.name}
        bgImg={product?.images?.[0]?.src ?? ''}
      />
      <div className="bg-[#FCF8F8]">
        <div className="pb-8 lg:pb-14">
          <Ruler />
        </div>
        <div className="pb-8 lg:pb-14">
          <ProductDetails product={product} products={products} />
        </div>
        <div>
          <Ruler variant={2} />
        </div>
      </div>

      <div>
        <ProductListingDark
          products={relatedProducts}
          name={'Suggested For You'}
          disablePagination
        />
      </div>

      <div className="py-8 lg:py-14">
        <Faqs />
      </div>
      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
