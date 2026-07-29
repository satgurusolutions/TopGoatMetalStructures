// types/index.ts
export type LeadInput = {
  secondsOnSite: number;
  path: string;
  enquiry: string;
  buildingType: 'garage' | 'barn' | 'warehouse' | 'carport' | 'custom';
  width: number;
  height: number;
  length: number;
  zip: string;
  city: string;
  state: string;
  email: string;
  historicLabel?: 'won' | 'lost';
};

// types/product.ts

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface ProductImage {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

export interface Dimension {
  length: string;
  width: string;
  height: string;
}

export interface MetaData {
  id: number;
  key: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string | null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount: number | null;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimension;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: Category[];
  images: ProductImage[];
  grouped_products: Product[];
  menu_order: number;
  price_html: string;
  related_ids: number[];
  meta_data: MetaData[];
  stock_status: string;
  has_options: boolean;
  seo_meta: SeoMeta;
  new3DLink?: string;
  yoast_head_json: YoastHeadJson;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string; // HTML string
  excerpt: string; // HTML string
  localImage: string | null; // path to local image, null if none
  date: string | null;
  date_gmt: string | null;
  yoast_head_json: YoastHeadJson;
}

export type SectionType = {
  title: string;
  description: string;
  slug: string;
  extra?: string;
  image: string;
  link: string;
  reverse?: boolean;
  content?: string;
  skus: string[];
  detailedDescription?: string;
};

export interface SeoMeta {
  title: string | null;
  description: string | null;
  keywords: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
}

export interface PageSections {
  content: { html: string; padding: string; background: string };
}

// Main interface
export interface MetalBuildingPage {
  slug: string; // URL-friendly identifier
  name: string; // Display name/title
  sections: PageSections;
  details: { title: string; description: string; highlight: string };
  skus: string[]; // Array of SKU identifiers
  seo_meta: SeoMeta;
}

export interface SearchResults {
  link: string;
  imageSrc: string | null;
  title: string;
  description: string;
  slug: string;
}

export interface YoastHeadJson {
  title: string;
  description: string;
  robots: {
    index: string;
    follow: string;
    'max-snippet'?: string;
    'max-image-preview'?: string;
    'max-video-preview'?: string;
    [key: string]: string | undefined;
  };
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  twitter_card: string;
  schema: Schema;
}

export interface Schema {
  '@context': string;
  '@graph': SchemaGraph[];
}

export type SchemaGraph =
  | CollectionPageSchema
  | BreadcrumbListSchema
  | WebSiteSchema
  | OrganizationSchema;

export interface CollectionPageSchema {
  '@type': 'CollectionPage';
  '@id': string;
  url: string;
  name: string;
  isPartOf: {
    '@id': string;
  };
  description: string;
  breadcrumb: {
    '@id': string;
  };
  inLanguage: string;
}

export interface BreadcrumbListSchema {
  '@type': 'BreadcrumbList';
  '@id': string;
  itemListElement: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
}

export interface WebSiteSchema {
  '@type': 'WebSite';
  '@id': string;
  url: string;
  name: string;
  description: string;
  publisher: {
    '@id': string;
  };
  potentialAction: PotentialAction[];
  inLanguage: string;
}

export interface PotentialAction {
  '@type': string;
  target: {
    '@type': string;
    urlTemplate: string;
  };
  'query-input': {
    '@type': string;
    valueRequired: boolean;
    valueName: string;
  };
}

export interface OrganizationSchema {
  '@type': 'Organization';
  '@id': string;
  name: string;
  url: string;
  logo: {
    '@type': string;
    inLanguage: string;
    '@id': string;
    url: string;
    contentUrl: string;
    width: number;
    height: number;
    caption: string;
  };
  image: {
    '@id': string;
  };
  sameAs: string[];
}
