import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '../service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <article className='flex gap-3 px-10 py-5'>
      <FilterablePosts posts={posts} categories={categories} />
    </article>
  );
}
