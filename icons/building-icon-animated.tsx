import { FC } from 'react';

const BuildingIconAnimated: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
    >
      <defs>
        <linearGradient id="animatedBg" x1="0%" y1="0%" x2="100%" y2="0%">
          {/* Base red */}
          <stop offset="0%" stopColor="#87121C" />
          <stop offset="100%" stopColor="#000000" />

          {/* Thin subtle black stripe */}
          {/* <stop offset="48%" stopColor="#000000" stopOpacity="1" /> */}
          <stop offset="92%" stopColor="#87121C" stopOpacity="1" />

          {/* Animate left → right → left */}
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="-1 0; 1 0; -1 0"
            dur="4s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>

      {/* Red circular background with subtle moving black shimmer */}
      <rect y="0.664062" width="50" height="50" rx="25" fill="url(#animatedBg)" />

      {/* White building icon stays fixed */}
      <path
        d="M30.25 26.7748V28.0248H20.75V26.7748C20.75 26.1848 20.91 26.0248 21.5 26.0248H29.5C30.09 26.0248 30.25 26.1848 30.25 26.7748ZM20.75 31.0248H30.25V29.5248H20.75V31.0248ZM20.75 33.9748C20.75 34.1408 20.884 34.2748 21.05 34.2748H29.95C30.116 34.2748 30.25 34.1408 30.25 33.9748V32.5248H20.75V33.9748ZM34.5 21.8649V32.7748C34.5 33.6028 33.828 34.2748 33 34.2748H32.05C31.884 34.2748 31.75 34.1408 31.75 33.9748V26.7748C31.75 25.5318 30.743 24.5248 29.5 24.5248H21.5C20.257 24.5248 19.25 25.5318 19.25 26.7748V33.9748C19.25 34.1408 19.116 34.2748 18.95 34.2748H18C17.172 34.2748 16.5 33.6028 16.5 32.7748V21.8649C16.5 21.3149 16.79 20.8149 17.27 20.5449L24.53 16.5248C25.13 16.1948 25.87 16.1948 26.47 16.5248L33.73 20.5449C34.2 20.8149 34.5 21.3149 34.5 21.8649ZM27.75 21.2748C27.75 20.8608 27.414 20.5248 27 20.5248H24C23.586 20.5248 23.25 20.8608 23.25 21.2748C23.25 21.6888 23.586 22.0248 24 22.0248H27C27.414 22.0248 27.75 21.6888 27.75 21.2748Z"
        fill="white"
      />
    </svg>
  );
};

export default BuildingIconAnimated;
