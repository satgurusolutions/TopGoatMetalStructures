import { FC } from 'react';

const LocationActiveIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
    >
      <rect
        x="0.5"
        y="0.273438"
        width="60"
        height="60"
        rx="30"
        fill="url(#paint0_linear_5558_3037)"
      />
      <path
        d="M18.125 24.0938C18.125 23.5352 18.4688 23.0195 18.9844 22.8047L25 20.3984V36.8984L19.0273 39.6055C18.5977 39.8203 18.125 39.4766 18.125 38.9609V24.0938ZM26.375 36.8984V20.3984L34.625 23.1484V39.6484L26.375 36.8984ZM41.9297 20.4844C42.3594 20.2695 42.875 20.6133 42.875 21.1289V35.9961C42.875 36.5547 42.4883 37.0703 41.9727 37.2852L36 39.6484V23.1484L41.9297 20.4844Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5558_3037"
          x1="30.5"
          y1="0.273437"
          x2="30.5"
          y2="60.2734"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ED2031" />
          <stop offset="1" stopColor="#87121C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LocationActiveIcon;
