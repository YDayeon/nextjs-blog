import { getFeaturedPosts } from '@/app/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <article className='px-10'>
      <h2 className='mt-5 mb-3 font-bold text-xl'>Featured Posts</h2>
      <PostsGrid posts={featuredPosts} />
    </article>
  );
}
