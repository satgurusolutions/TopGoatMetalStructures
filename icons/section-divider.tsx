import Image from 'next/image';
import { FC } from 'react';

const SectionDivider: FC<{ variant?: 2 }> = ({ variant }) => {
  return (
    <div className="relative h-[70px] w-full">
      {/* Background Image */}
      <Image
        src={`/images/separator${variant ? '-' + variant : ''}.png`}
        alt="Background"
        priority
        objectFit="cover"
        fill
      />
    </div>
  );
};

export default SectionDivider;
