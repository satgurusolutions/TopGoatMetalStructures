'use client';
import { useEffect, useRef, useState } from 'react';

export default function Ruler({ variant = 1 }: Readonly<{ variant?: 1 | 2 }>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    const calculateTicks = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const tickWidth = 8; // 3px + 5px gap
        const ticks = Math.floor(containerWidth / tickWidth);
        setTickCount(ticks);
      }
    };

    calculateTicks();
    window.addEventListener('resize', calculateTicks);
    return () => window.removeEventListener('resize', calculateTicks);
  }, []);

  const renderTicks = () =>
    Array.from({ length: tickCount * 2 }).map((_, i) => (
      <div key={i} className={`w-[3px] ${i % 5 === 0 ? 'h-full' : 'h-2/3'} bg-[#e0e0e0]`} />
    ));

  return (
    <div ref={containerRef} className="relative h-14 w-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 flex h-full min-w-[200%] animate-[scroll-left_20s_linear_infinite] gap-[5px] lg:animate-[scroll-left_50s_linear_infinite] ${variant === 2 ? 'items-end' : ''}`}
      >
        {renderTicks()}
        {/* {renderTicks()} */}
      </div>
    </div>
  );
}
