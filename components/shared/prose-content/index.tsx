'use client';

import parse, { DOMNode, domToReact, Element } from 'html-react-parser';

interface ProseContentProps {
  html: string;
}

export default function ProseContent({ html }: ProseContentProps) {
  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      {parse(html, {
        replace: (domNode) => {
          if (domNode instanceof Element) {
            // Handle links
            if (domNode.name === 'a') {
              return (
                <a
                  href={domNode.attribs.href}
                  className="text-accent font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {domToReact(domNode.children as DOMNode[])}
                </a>
              );
            }

            // Handle h2
            if (domNode.name === 'h2') {
              return (
                <h2 className="mt-8 mb-4 text-3xl font-bold">
                  {domToReact(domNode.children as DOMNode[])}
                </h2>
              );
            }

            // Handle h3
            if (domNode.name === 'h3') {
              return (
                <h3 className="mt-2 text-xl font-semibold">
                  {domToReact(domNode.children as DOMNode[])}
                </h3>
              );
            }

            // Handle h4
            if (domNode.name === 'h4') {
              return (
                <h4 className="mt-2 text-lg font-medium">
                  {domToReact(domNode.children as DOMNode[])}
                </h4>
              );
            }

            // Handle ol/ul
            if (domNode.name === 'ol') {
              return (
                <ol className="mt-4 list-decimal space-y-4 pl-6">
                  {domToReact(domNode.children as DOMNode[])}
                </ol>
              );
            }
            if (domNode.name === 'ul') {
              return (
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  {domToReact(domNode.children as DOMNode[])}
                </ul>
              );
            }
          }
        },
      })}
    </div>
  );
}
