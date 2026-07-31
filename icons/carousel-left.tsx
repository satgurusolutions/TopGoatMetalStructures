import { FC } from 'react';

const CarouselLeftIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
    >
      <rect width="56" height="56" rx="12" fill="#d7aa22" />
      <rect width="34" height="34" rx="4" transform="matrix(-1 0 0 1 45 11)" fill="#d7aa22" />
      <path
        d="M18.2939 28.7083L25.293 35.7073C25.488 35.9023 25.744 36.0003 26 36.0003C26.256 36.0003 26.512 35.9023 26.707 35.7073C27.098 35.3163 27.098 34.6842 26.707 34.2933L21.4141 29.0003H37C37.553 29.0003 38 28.5523 38 28.0003C38 27.4483 37.553 27.0003 37 27.0003H21.4141L26.707 21.7073C27.098 21.3163 27.098 20.6842 26.707 20.2932C26.316 19.9022 25.684 19.9022 25.293 20.2932L18.2939 27.2923C18.2009 27.3853 18.1279 27.4952 18.0769 27.6182C17.9759 27.8622 17.9759 28.1384 18.0769 28.3824C18.1279 28.5054 18.2009 28.6153 18.2939 28.7083Z"
        fill="white"
      />
    </svg>
  );
};

export default CarouselLeftIcon;
