import { states } from '@/configs/navigation.config';
import { BulletCheckIcon } from '@/icons';
import { TELEPHONE_NUMBER } from '@/configs/navigation.config';

const StatesWeService = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
      <h1 className="text-center text-[32px] font-bold lg:text-6xl">
        States We <span className="text-accent">Service Garages</span>
      </h1>
      <p className="py-2 text-center text-base lg:text-2xl">
        We will deliver and install our garages in:
      </p>
      <div className="mt-4 rounded-2xl bg-[#E9E9EA99] p-[17px] shadow-[4px,4px,12px,0px,#0000001A]">
        <div className="rounded-2xl bg-white p-8">
          <ul className="grid grid-cols-1 gap-y-4 md:grid-cols-2 xl:grid-cols-5">
            {states.map((state) => (
              <li key={state} className="flex items-center gap-3">
                <BulletCheckIcon className="h-6 w-6 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800">{state}</span>
              </li>
            ))}
          </ul>
          <div className="pt-10 text-center text-base lg:text-2xl">
            Don’t see your state listed? Give us a call today at {TELEPHONE_NUMBER.formatted} to see if we service
            your area.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesWeService;
