import { RichText } from '@/components/shared';
import Image from 'next/image';
import { FC } from 'react';

const StateDetails: FC<{ content?: string; imgUrl?: string }> = ({ content, imgUrl }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
        <div>
          <Image
            src={imgUrl || '/images/service-area/service-area-details.png'}
            width={540}
            height={300}
            alt="Service Area Detail"
            className="rounded-3xl"
          />
        </div>
        <div>
          <div>
            {/* <h2 className="text-center text-3xl font-bold text-black md:text-start xl:text-5xl">
            Explore Our Extensive <span className="text-accent">Service Areas</span>
          </h2> */}
          </div>
          <div>
            <RichText html={content || ''} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateDetails;
