import parse from 'html-react-parser';
import { FC } from 'react';

const HTMLRenderer: FC<{ content: string }> = ({ content }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
      {parse(content)}
    </div>
  );
};

export default HTMLRenderer;
