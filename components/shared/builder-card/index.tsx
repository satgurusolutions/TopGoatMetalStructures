'use client';
import { Button } from '@/components/ui/button';
import { colorOptions } from '@/configs/colours';
import { BulletCheckIcon } from '@/icons';
import LinkIconInactive from '@/icons/link-inactive';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const BuilderCard: FC<{
  title: string;
  onChangeColor: (value: string) => void;
  bulletList?: string[];
  href: string;
  activeColor?: string;
}> = ({ title, onChangeColor, bulletList, href, activeColor }) => {
  return (
    <div className="relative flex w-full flex-col rounded-b-[20px] bg-[#1E1E1E] p-6 text-white shadow-md sm:h-full sm:rounded-[40px]">
      {' '}
      {/* <span className="hidden bg-clip-text! text-[18px] font-bold text-transparent uppercase [-webkit-background-clip:text]! [-webkit-text-fill-color:transparent] [background:linear-gradient(to_bottom,_#ED2031,_#87121C)] sm:block">
        Builder
      </span> */}
      <div>
        <span className="text-[32px] font-bold text-white">{title}</span>
      </div>
      <div className="my-2 flex flex-col items-start justify-center sm:hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="flex items-center gap-2"
        >
          <ArrowDownCircle className="h-6 w-6 text-[#ED2031] drop-shadow-md" />
          <span className="animate-pulse text-sm font-bold text-[#ED2031]">
            Click Each Color To Explore
          </span>
        </motion.div>
      </div>
      <div className="mb-4 h-[1px] w-full [background-color:#FCF8F8] sm:my-4" />
      <div className="relative sm:hidden">
        {/* Scrollable row */}
        <div className="scrollbar-none flex gap-x-4 overflow-x-auto overflow-y-hidden pr-10 text-center sm:hidden sm:grid-cols-5 sm:gap-x-2 sm:gap-y-2">
          {colorOptions.map(({ name, color, imgUrl, imposingImagePath }) => (
            <div key={color} className="flex min-w-[60px] flex-col items-center gap-2">
              <button
                onClick={() => onChangeColor(imposingImagePath)}
                name={`color-${name}`}
                className="h-8 w-8 cursor-pointer rounded-full border border-white bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundColor: imgUrl ? 'transparent' : color,
                  backgroundImage: `url(${imgUrl ?? '/images/colorpalete.png'})`,
                }}
              />
              <span className="text-xs text-white">{name}</span>
            </div>
          ))}
        </div>

        {/* Gradient overlay (right side fade) */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-14 bg-gradient-to-l from-[#1E1E1E] to-transparent" />
      </div>
      <div className="my-4 block h-[1px] w-full [background-color:#FCF8F8] sm:hidden" />
      {bulletList?.map((item, index) => (
        <div key={item} className={`${index !== 0 ? 'mt-4' : ''} flex flex-row gap-6`}>
          <div>
            <BulletCheckIcon />
          </div>
          <div className="text-sm font-normal sm:text-base">{item}</div>
        </div>
      ))}
      <div className="my-4 hidden h-[1px] w-full [background-color:#FCF8F8] sm:block" />
      <div className="mb-4 hidden flex-col items-center justify-center sm:flex">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="flex items-center gap-2"
        >
          <ArrowDownCircle className="h-8 w-8 text-[#ED2031] drop-shadow-md" />
          <span className="animate-pulse text-sm font-bold text-[#ED2031]">
            Click Each Color To Explore
          </span>
        </motion.div>
      </div>
      <div className="hidden grid-cols-5 gap-x-2 gap-y-2 text-center sm:grid">
        {colorOptions.map(({ name, color, imgUrl, imposingImagePath }) => (
          <div key={color} className="flex flex-col items-center gap-2">
            {imgUrl ? (
              <button
                onClick={() => onChangeColor(imposingImagePath)}
                name={`color-${name}`}
                className={`h-8 w-8 cursor-pointer rounded-full border ${activeColor?.includes(imposingImagePath) ? 'borring-2 ring-black ring-offset-2' : 'border-white'} bg-contain bg-center bg-no-repeat`}
                style={{
                  backgroundColor: imgUrl ? 'transparent' : color,
                  backgroundImage: `url(${imgUrl ?? '/images/colorpalete.png'})`,
                }}
              />
            ) : (
              <button
                name={`color-${name}`}
                onClick={() => onChangeColor(imposingImagePath)}
                className={`h-8 w-8 cursor-pointer rounded-full border ${activeColor?.includes(imposingImagePath) ? 'ring-2 ring-black ring-offset-1' : 'border-white'} bg-center`}
                style={{
                  backgroundColor: imgUrl ? 'transparent' : color,
                  backgroundImage: `url(${imgUrl ?? '/images/colorpalete.png'})`,
                }}
              />
            )}

            <span className="text-xs text-white">{name}</span>
          </div>
        ))}
      </div>
      <Link className="absolute right-10 -bottom-[14px]" href={href ?? ''}>
        <Button className="flex flex-row text-sm xl:text-base" variant={'metallic'}>
          <span>View More</span>
          <LinkIconInactive className="h-10! w-10!" />
        </Button>
        {/* <Image src="/images/builder-link.png" alt="Arrow Right" width={59} height={59} /> */}
      </Link>
    </div>
  );
};

export default BuilderCard;
