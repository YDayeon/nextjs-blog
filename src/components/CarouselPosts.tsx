'use client';

import { TPost, getAllPosts } from '@/app/service/posts';
import Carousel from 'react-multi-carousel';
import PostCard from './PostCard';
import { useEffect, useState } from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const CarouselPosts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res.posts));
  }, []);

  return (
    <article className='px-10'>
      <h2 className='mt-5 mb-3 font-bold text-xl'>You may like</h2>
      <Carousel
        responsive={responsive}
        ssr={false}
        sliderClass='flex gap-2'
        containerClass='flex'
        itemClass=''
        autoPlay
        infinite={true}
        className='overflow-hidden mb-5'
      >
        {posts && posts.map((post) => <PostCard key={post.path} post={post} />)}
      </Carousel>
    </article>
  );
};

export default CarouselPosts;
