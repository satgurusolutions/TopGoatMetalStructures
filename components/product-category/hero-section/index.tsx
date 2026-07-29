import Header from '@/components/header';
import { ArrowRightActive } from '@/icons';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({
  name,
  bgImg,
  isBlur,
  category,
  headerTitle,
  hideBreadcrumb = false,
  heightClass,
  description,
  removeOverlay = false,
}: Readonly<{
  name: string;
  bgImg?: string;
  isBlur?: boolean;
  category?: { slug?: string; name?: string };
  headerTitle?: string;
  hideBreadcrumb?: boolean;
  heightClass?: string;
  hideSocialIcon?: boolean;
  description?: string;
  removeOverlay?: boolean;
}>) {
  return (
    <div className={`relative w-full ${heightClass || 'h-[350px] xl:h-[550px]'}`}>
      <Image
        src={bgImg || '/images/products/garages/hero-bg.png'}
        fill
        alt="hero bg"
        priority
        className={`fill absolute inset-0 object-cover ${isBlur ? 'blur-sm' : ''}`}
      />
      {!removeOverlay && <div className="absolute inset-0 z-[1] bg-black/40" />}

      {/* Header */}
      <Header />
      {/* <div className="xl:max-w-screen-[1343px] absolute inset-0 z-10 flex flex-col justify-end px-10 py-4">
        <div>
          <h1 className="relative text-[24px] leading-tight font-bold text-white uppercase lg:text-[48px] xl:text-[48px]">
            {name}
          </h1>
          <div className="flex items-center gap-2 pl-1">
            <Link className="text-base font-semibold text-white" href="/">
              Home
            </Link>
            <div>
              <ArrowRightActive />
            </div>
            <div className="text-accent text-base font-semibold">{name}</div>
          </div>
        </div>
      </div> */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="mx-auto w-full px-4 pt-12 sm:text-center lg:px-0 xl:max-w-7xl xl:text-start [@media(width=1280px)]:px-4">
          {/* Top Rounded Badge */}
          <div>
            <h1 className="relative text-[24px] leading-tight font-bold text-white uppercase lg:text-[48px] xl:text-[48px]">
              {parse(headerTitle || name || '')}
            </h1>
            {description && <p className="pb-4 text-lg text-white">{parse(description || '')}</p>}
            {!hideBreadcrumb ? (
              <div className="flex items-center gap-2 sm:justify-center xl:justify-start xl:pl-1">
                <Link className="text-base font-semibold text-white" href="/">
                  Home
                </Link>
                {category?.name && (
                  <>
                    <ArrowRightActive />
                    <Link
                      href={`/${category?.slug}`}
                      className="text-base font-semibold text-white"
                    >
                      {parse(category?.name)}
                    </Link>
                  </>
                )}
                <ArrowRightActive />
                <div className="text-accent truncate text-base font-semibold">{name}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
