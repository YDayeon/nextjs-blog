'use client';

import { TPost, getAllPosts } from '@/app/service/posts';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsCalendarCheck } from 'react-icons/bs';
import PostMarkdown from '@/components/PostMarkdown';

type TParams = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: TParams) {
  const { slug } = params;
  const [post, setPost] = useState<TPost | undefined>();

  useEffect(() => {
    fetch(`/api/post?path=${slug}`)
      .then((res) => res.json())
      .then((res) => setPost(res.post));
  }, []);

  return (
    post && (
      <article className='w-full flex flex-col justify-center items-center'>
        <Image
          className='w-full max-h-96'
          src={post?.backgroundImage}
          width={760}
          height={470}
          alt='background image'
        />
        <section className='w-full px-40'>
          <div className='flex justify-end gap-2 items-center mt-2'>
            <BsCalendarCheck />
            <p>{post.createDate}</p>
          </div>
          <h1 className='text-5xl font-bold mt-7'>{post.title}</h1>
          <h2 className='text-lg font-semibold border-b-4 border-cyan-800 pb-2 mt-4'>
            {post.description}
          </h2>
          <PostMarkdown id={slug} />
        </section>
        <footer>
          <div></div>
        </footer>
      </article>
    )
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
}
