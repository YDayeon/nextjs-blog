'use client';

import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

type TProps = {
  id: string;
};

export default function PostMarkdown({ id }: TProps) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/api/mark-down?search=${id}`)
      .then((res) => res.json())
      .then((res) => setMarkdown(res.posts));
  }, []);

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className='prose prose-lg max-w-none mt-4 pb-20'
        children={markdown}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag='div'
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
}
