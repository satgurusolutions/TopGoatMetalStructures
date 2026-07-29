import { BulletListMultiColumn } from '@/components/shared';

interface CustomizationProps {
  title?: string;
  highlight?: string;
  description?: string;
  points?: string[];
}

const Customization = ({
  title = 'Garage',
  highlight = 'Customization',
  description = "These fully enclosed, free spanning metal buildings can range from 12' to 60' wide and up to 20' tall with as much space length-wise as needed.",
  points = [],
}: CustomizationProps) => {
  return (
    <div className="mx-auto max-w-7xl bg-[#FCF8F8] px-4 xl:px-0 [@media(width=1280px)]:px-4">
      <div className="pb-4">
        <h1 className="pb-4 text-center text-[32px] font-bold lg:text-6xl">
          {title} <span className="text-accent">{highlight}</span>
        </h1>
        <p className="pb-4 text-center text-base leading-[160%] lg:text-2xl">{description}</p>
      </div>
      <div className="rounded-3xl border-[17px] border-[#E9E9EA99] shadow-[4px,4px,12px,0px,#0000001A]">
        <div className="rounded-3xl bg-white p-4">
          <BulletListMultiColumn points={points} />
        </div>
      </div>
    </div>
  );
};

export default Customization;
