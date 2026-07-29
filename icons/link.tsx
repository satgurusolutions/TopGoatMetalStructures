import { FC } from 'react';

const LinkIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className || 'h-full! w-full!'}
    >
      <rect
        x="0.830078"
        y="49.6636"
        width="70"
        height="70"
        rx="35"
        transform="rotate(-45 0.830078 49.6636)"
        fill="white"
        // fill={isCurrentColor ? 'currentColor' : 'white'}
      />
      <path
        d="M42.579 44.1687V42.7102C42.6122 42.0805 43.1093 41.5833 43.706 41.5833L56.5996 41.5501C57.2294 41.5833 57.7266 42.0805 57.7266 42.6771V55.6039C57.7266 56.2005 57.2294 56.6977 56.5996 56.7309H55.1412C54.5114 56.6977 54.0143 56.2005 53.9811 55.5708L54.18 47.7484L44.6672 57.2612C44.2031 57.7252 43.5402 57.7252 43.0762 57.2612L42.0155 56.2005C41.5846 55.7696 41.5515 55.0736 42.0155 54.6095L51.5283 45.0967L43.7391 45.3287C43.1093 45.2956 42.579 44.8316 42.579 44.1687Z"
        fill="black"
      />
    </svg>
  );
};

export default LinkIcon;
