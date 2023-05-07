'use client';

import { useEffect, useState } from 'react';
import { TPost } from '../service/posts';
import PostsGrids from '@/components/PostsGrid';

export default function PostsPage() {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [
    { title: 'All Posts', id: 'all' },
    { title: 'My Stroy', id: 'story' },
    { title: 'Technology', id: 'tech' },
    { title: 'Front-end', id: 'frontend' },
    { title: 'Full-Stack', id: 'fullstack' },
  ];

  useEffect(() => {
    fetch(`/api/posts/${selectedCategory}`)
      .then((res) => res.json())
      .then((res) => setPosts(res.posts));
  }, [selectedCategory]);

  return (
    <article className='flex gap-3 px-10 py-5'>
      <section className='basis-5/6'>
        <PostsGrids posts={posts} />
      </section>
      <aside className='basis-1/6'>
        <div className='sticky top-3'>
          <h3 className='font-bold text-lg border-b-2 border-orange-400 w-fit mb-2'>
            Category
          </h3>
          <ul className='pl-2'>
            {categories.map((category) => (
              <li
                key={category.id}
                className={`cursor-pointer mb-1 hover:text-orange-300 ${
                  category.id === selectedCategory && 'text-orange-500'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </article>
  );
}
