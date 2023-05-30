'use client';

import { getAllPosts, getPostData } from '@/app/service/posts';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type TParams = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: TParams) {
  const { slug } = params;
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/api/post?search=${slug}`)
      .then((res) => res.json())
      .then((res) => setMarkdown(res.posts));
  }, []);

  return (
    <section className='px-5 w-full flex justify-center'>
      <header></header>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className='prose lg:prose-xl'
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
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
}
