'use client';

import { TPost } from '@/app/service/posts';
import PostsGrids from './PostsGrid';
import { useState } from 'react';
import Categories from './Categories';

type TProps = {
  posts: TPost[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: TProps) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_POSTS);
  const filteredPosts =
    selectedCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className='basis-5/6'>
      <PostsGrids posts={filteredPosts} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selectedCategory={selectedCategory}
        onClick={(selectedCategory) => setSelectedCategory(selectedCategory)}
      />
    </section>
  );
}
