import Image from 'next/image';
import Header from '../header';
import parse from 'html-react-parser';

export default function HeroSection({
  name,
  bgImg,
  isBlur,
  //   category,
  headerTitle,
  //   hideBreadcrumb = false,
  heightClass,
  //   description,
  removeOverlay = false,
}: {
  name: string;
  bgImg?: string;
  isBlur?: boolean;
  category?: { slug?: string; name?: string };
  headerTitle?: string;
  hideBreadcrumb?: boolean;
  heightClass?: string;
  description?: string;
  removeOverlay?: boolean;
}) {
  return (
    <div
      className={`relative w-full ${heightClass || 'h-[350px] xl:h-[550px]'} cyber_monday_2024 bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${bgImg || '/images/products/garages/hero-bg.png'})`,
        // backgroundSize: 'cover', // or 'contain', 'auto', etc.
        backgroundRepeat: 'no-repeat', // or 'repeat', 'repeat-x', etc.
        backgroundPosition: 'center', // 'top', 'bottom', 'left top', etc.
        filter: isBlur ? 'blur(4px)' : 'none',
        backgroundSize: '100% 100%',
      }}
    >
      {!removeOverlay && <div className="absolute inset-0 z-[1] bg-black/40" />}

      <Header />

      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="mx-auto w-full px-4 pt-12 sm:text-center lg:px-0 xl:max-w-7xl xl:text-start">
          <div className="lg:flex">
            <h1 className="text-center text-[24px] font-bold text-white uppercase lg:text-start lg:text-[48px]">
              {parse(headerTitle || name)}
            </h1>
            <Image
              width={779}
              height={315}
              src="/images/offers-page-texts.webp"
              alt="Offers text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
