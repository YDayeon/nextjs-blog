'use client';

import { TPost, getAllPosts, getPost } from '@/app/service/posts';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import { BsCalendarCheck } from 'react-icons/bs';

type TParams = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: TParams) {
  const { slug } = params;
  const [markdown, setMarkdown] = useState('');
  const [post, setPost] = useState<TPost | undefined>();

  useEffect(() => {
    fetch(`/api/post?path=${slug}`)
      .then((res) => res.json())
      .then((res) => setPost(res.post));

    fetch(`/api/mark-down?search=${slug}`)
      .then((res) => res.json())
      .then((res) => setMarkdown(res.posts));
  }, []);

  console.log(post);

  return (
    post && (
      <section className='w-full flex flex-col justify-center items-center'>
        <header className='w-full h-80 relative mb-2'>
          <Image
            fill={true}
            src={post?.backgroundImage}
            alt='background image'
          />
        </header>
        <article className='w-full px-40'>
          <div className='flex justify-end gap-2 items-center'>
            <BsCalendarCheck />
            <p>{post.createDate}</p>
          </div>
          <h1 className='text-5xl font-bold mt-7'>{post.title}</h1>
          <h2 className='text-lg font-semibold border-b-4 border-cyan-800 pb-2 mt-4'>
            {post.description}
          </h2>
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
        </article>
      </section>
    )
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
}
