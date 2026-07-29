import { FC } from 'react';

const CallActiveIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
    >
      <rect y="0.883789" width="60" height="60" rx="30" fill="url(#paint0_linear_5558_3013)" />
      <path
        d="M40.1836 20.708C40.6562 20.8369 41 21.2236 41 21.6963C41 32.7393 32.0625 41.6338 21.0625 41.6338C20.5469 41.6338 20.1602 41.333 20.0312 40.8604L19 36.3916C18.9141 35.9189 19.1289 35.4033 19.6016 35.1885L24.4141 33.126C24.8438 32.9541 25.3164 33.083 25.6172 33.4268L27.7656 36.0479C31.1172 34.458 33.8242 31.708 35.3711 28.4424L32.75 26.2939C32.4062 25.9932 32.2773 25.5205 32.4492 25.0908L34.5117 20.2783C34.7266 19.8057 35.2422 19.5479 35.7148 19.6768L40.1836 20.708Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5558_3013"
          x1="30"
          y1="0.883789"
          x2="30"
          y2="60.8838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ED2031" />
          <stop offset="1" stopColor="#87121C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CallActiveIcon;
