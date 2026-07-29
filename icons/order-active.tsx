import { FC } from 'react';

const OrderActiveIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
    >
      <rect y="0.273438" width="60" height="60" rx="30" fill="url(#paint0_linear_5558_3029)" />
      <path
        d="M30 19.3672C35.8867 19.3672 40.6562 24.1367 40.6562 30.0234C40.6562 35.9102 35.8867 40.6797 30 40.6797C24.1133 40.6797 19.3438 35.9102 19.3438 30.0234C19.3438 24.1367 24.1133 19.3672 30 19.3672ZM33.9531 32.8164C34.0391 32.7305 34.125 32.5586 34.125 32.3867C34.125 32.1719 33.9961 32 33.8672 31.8711L31.375 30.0234V23.8359C31.375 23.4922 31.0312 23.1484 30.6875 23.1484H29.3125C28.9258 23.1484 28.625 23.4922 28.625 23.8359V30.5391C28.625 31.0977 28.8398 31.5703 29.2695 31.8711L32.1484 34.0195C32.2344 34.1055 32.4062 34.1914 32.5352 34.1914C32.793 34.1914 32.9648 34.0625 33.0938 33.8906L33.9531 32.8164Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5558_3029"
          x1="30"
          y1="0.273437"
          x2="30"
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

export default OrderActiveIcon;
