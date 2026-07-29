import { stateDetails } from '@/configs/navigation.config';
import StateItem from './state-item';

const StateList = () => {
  return (
    <div>
      {' '}
      <h2 className="pb-8 text-center text-[32px] font-bold text-white xl:pb-16 xl:text-6xl">
        See the Details <span className="text-accent">of All Areas</span>
      </h2>
      <div className="mx-auto grid grid-cols-1 items-center items-stretch gap-4 md:grid-cols-3">
        {stateDetails?.map((item) => (
          <StateItem
            slug={item.slug}
            key={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StateList;
