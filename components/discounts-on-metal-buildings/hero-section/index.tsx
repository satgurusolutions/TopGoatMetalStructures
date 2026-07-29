import Header from '@/components/header';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/discounts/discounts-hero-bg.png"
        alt="Hero Banner"
        width={1920}
        height={744}
        className="w-full md:h-auto"
        priority
      />

      {/* Header */}
      <Header />
    </div>
  );
}
