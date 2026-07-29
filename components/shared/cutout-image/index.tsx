'use client';

import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function CutoutImage({
  imageUrl,
  cut = 'right',
  className,
  imposingImageUrl,
  cutColor = 'bg-[#FCF8F8]',
  autoChange = false,
}: Readonly<{
  imageUrl: string;
  cut?: 'left' | 'right';
  className?: string;
  imposingImageUrl?: string; // new prop
  cutColor?: string;
  autoChange?: boolean;
}>) {
  const [isImposingLoading, setIsImposingLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (imposingImageUrl) setIsImposingLoading(true);
    }, 400);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [imposingImageUrl]);
  return (
    <div className={`relative w-full px-2 sm:h-full ${className}`}>
      <Image
        src={imageUrl}
        alt="Building"
        fill
        className="rounded-t-[24px] object-cover sm:rounded-[40px]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Optional imposing overlay image */}
      {/* Imposing overlay image with loader */}
      {imposingImageUrl && (
        <div className="absolute inset-0 z-30">
          {isImposingLoading && !autoChange && (
            <div className="absolute inset-0 z-30 flex items-center justify-center rounded-t-[24px] backdrop-blur-xs sm:rounded-[40px]">
              <Loader2 className="h-10 w-10 animate-spin text-white" />
            </div>
          )}

          <Image
            src={imposingImageUrl}
            alt="Imposing Overlay"
            fill
            className={`pointer-events-none z-10 rounded-t-[24px] object-cover sm:rounded-[40px]`}
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={() => {
              if (timerRef.current) {
                clearTimeout(timerRef.current);
              }
              setIsImposingLoading(false);
            }}
          />
        </div>
      )}
      <div
        className={`pointer-events-none absolute top-[-2px] ${
          cut === 'left' ? 'left-0' : 'right-0'
        } h-[40px] w-1/2 ${cutColor} sm:h-[112px]`}
        style={{
          WebkitMaskImage: `url(/images/mask-${cut}.png)`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskImage: `url(/images/mask-${cut}.png)`,
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
        }}
      />
    </div>
  );
}
