import Footer from '@/components/footer';
import { HeroSection, ProductListing } from '@/components/product-category';
import { StateDetails, WhyChoose } from '@/components/service-area';
import { Faqs, Ruler } from '@/components/shared';
import { buildMetadata } from '@/configs/meta-data';
import { stateDetails } from '@/configs/navigation.config';
import { getProductsBySKUsMap } from '@/lib/products';
import { Metadata } from 'next';
import Script from 'next/script';

// Generates all dynamic routes at build time
export async function generateStaticParams() {
  return stateDetails.map((state) => ({
    slug: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params)?.slug;
  const metaDataObj = stateDetails.find((item) => item.slug === slug)?.metaData;
  return buildMetadata(metaDataObj);
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = stateDetails.find((item) => item.slug === slug);
  const productList = await getProductsBySKUsMap(state?.skus ?? []);

  return (
    <div className="font-jost">
      <Script id={`service-area-${slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(state?.schema || '{}')}
      </Script>
      <HeroSection
        category={{
          name: 'Service Area',
          slug: 'service-area',
        }}
        name={state?.name ?? ''}
        bgImg={state?.imgUrl}
        headerTitle={`Metal Buildings ${state?.name}`}
        description="Top Goat Metal Structures"
      />
      <div className="bg-[#FCF8F8]">
        <div className="pb-8 xl:pb-16">
          <Ruler />
        </div>
        <div className="pb-8 xl:pb-16">
          <ProductListing
            products={productList}
            name={`Top Selling Steel Structures in ${state?.name}`}
          />
        </div>

        <div>
          <Ruler variant={2} />
        </div>
      </div>

      <div className="pt-8 xl:pt-16">
        <StateDetails content={state?.description} imgUrl={state?.descriptionImgUrl} />
      </div>

      <div className="pt-8 lg:pt-14">
        <WhyChoose
          description1={`Top Goat Metal Structures is a supplier of high-quality metal buildings in the United States, delivering top-notch service to each and every customer. Our company is founded by a combat veteran who understands attention to detail, ensuring that each customer receives a product tailored precisely to their specifications and built to last.`}
          description2={`Our commitment to delivering exceptional metal buildings crafted with care and precision sets Top Goat Metal Structures apart as a leader in the industry. `}
          description3={`Whether you need a simple carport or a complex custom structure, we are equipped to meet your needs with the highest standards of excellence.`}
        />
      </div>
      {state?.extraDetails && (
        <div className="">
          <div className="pb-8 xl:pb-16">
            <Ruler />
          </div>
          <Faqs
            title={state?.extraDetails?.title}
            highlight={state?.extraDetails?.highlight}
            description={state?.extraDetails?.description || ''}
            faqData={state?.extraDetails?.accordionData?.map((item) => ({
              id: item.id,
              answer: item.content,
              question: item.header,
            }))}
            initialOpenIds={[state?.extraDetails?.accordionData?.[0]?.id]}
          />
        </div>
      )}
      <div className="pt-8 xl:pt-16">
        <Footer />
      </div>
    </div>
  );
}
