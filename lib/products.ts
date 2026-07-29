import { Product } from '@/types';

export async function getProductsByCategory(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, {
      cache: 'force-cache', // or "no-store" if you want fresh on each request
    });

    if (!res.ok) {
      return [];
    }

    const products = await (res.json() as Promise<Product[]>);

    // filter products that contain the category slug
    return products.filter((product) => product.categories.some((cat) => cat.slug === slug));
  } catch (error) {
    console.log(`No product data for ${slug} ${error}`);
  }
  return [];
}

export async function getProductsBySKUs(pageSkus: string[]) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, {
      cache: 'force-cache',
    });

    if (!res.ok) {
      return [];
    }

    const products = (await res.json()) as Product[];

    // filter products by SKUs
    const pageProducts = products.filter(
      (product) => pageSkus.includes(product.sku), // adjust if the key is different
    );

    return pageProducts;
  } catch (error) {
    console.log(`No product data for ${pageSkus} ${error}`);
  }
  return [];
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, {
      cache: 'force-cache',
    });

    if (!res.ok) {
      return [];
    }

    const products = (await res.json()) as Product[];

    if (!query) return products;

    // normalize input
    const search = query.trim().toLowerCase();

    // 1️⃣ check for exact match
    const exactMatch = products.find((p) => p.sku.toLowerCase() === search);
    if (exactMatch) {
      return [exactMatch]; // return single exact match
    }

    // 2️⃣ fallback: partial matches
    const partialMatches = products.filter((p) => p.sku.toLowerCase().includes(search));

    return partialMatches;
  } catch (error) {
    console.error(`Error searching products: ${error}`);
    return [];
  }
}

export async function getProductsBySKUsMap(pageSkus: string[]) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, {
      cache: 'force-cache',
    });

    if (!res.ok) {
      return [];
    }

    const products = (await res.json()) as Product[];

    // Create a quick lookup map for O(1) access
    const productMap = new Map(products.map((p) => [p.sku, p]));

    // Map SKUs in given order
    const pageProducts = pageSkus.map((sku) => productMap.get(sku)).filter(Boolean) as Product[]; // remove undefined if SKU not found

    return pageProducts;
  } catch (error) {
    console.log(`No product data for ${pageSkus} ${error}`);
    return [];
  }
}

export async function getProductsByRelatedIds(relatedIds: number[]) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/products.json`, {
      cache: 'force-cache',
    });

    if (!res.ok) {
      return [];
    }

    const products = (await res.json()) as Product[];

    // filter products by IDs
    const pageProducts = products.filter((product) => relatedIds.includes(product.id));

    return pageProducts;
  } catch (error) {
    console.log(`No product data for ${relatedIds} ${error}`);
  }
  return [];
}
