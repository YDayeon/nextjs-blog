import { TPost } from '@/app/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from './PostCard';

type TPostsProps = {
  posts: TPost[];
};

export default function PostsGrids({ posts }: TPostsProps) {
  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-clos-4 gap-4'>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
