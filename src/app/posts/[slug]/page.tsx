'use client';

import { TPost, TPostResult, getAllPosts } from '@/app/service/posts';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsCalendarCheck } from 'react-icons/bs';
import PostMarkdown from '@/components/PostMarkdown';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Link from 'next/link';

type TParams = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: TParams) {
  const { slug } = params;
  const [post, setPost] = useState<TPostResult | undefined>();

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
          src={post?.post.backgroundImage}
          width={760}
          height={470}
          alt='background image'
        />
        <section className='w-full px-40'>
          <div className='flex justify-end gap-2 items-center mt-2'>
            <BsCalendarCheck />
            <p>{post?.post.createDate}</p>
          </div>
          <h1 className='text-5xl font-bold mt-7'>{post?.post.title}</h1>
          <h2 className='text-lg font-semibold border-b-4 border-cyan-800 pb-2 mt-4'>
            {post?.post.description}
          </h2>
          <PostMarkdown id={slug} />
        </section>
        <footer className='w-full flex'>
          <Link
            href={`posts/${post?.prevContent?.path}`}
            style={{
              backgroundImage: `url(${post.prevContent?.backgroundImage})`,
            }}
            className='bg-cover basis-1/2 w-full flex justify-between px-9 py-10 items-center'
          >
            <FiArrowLeftCircle
              color='white'
              size={50}
              className='hover:scale-110'
            />
            <div>
              <h3 className='text-xl font-bold'>{post?.prevContent?.title}</h3>
              <p>{post?.prevContent?.description}</p>
            </div>
          </Link>
          <Link
            href={`posts/${post?.nextContent?.path}`}
            style={{
              backgroundImage: `url(${post.nextContent?.backgroundImage})`,
            }}
            className='bg-cover basis-1/2 w-full bg-sky-300 flex justify-between px-9 py-10 items-center'
          >
            <div>
              <h3 className='text-xl font-bold'>{post?.nextContent?.title}</h3>
              <p>{post?.nextContent?.description}</p>
            </div>
            <FiArrowLeftCircle
              color='white'
              size={50}
              className='rotate-180 hover:scale-110'
            />
          </Link>
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
