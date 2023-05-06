import { TPost } from '@/app/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type TPostCardProps = {
  post: TPost;
};

export default function PostCard({
  post: { title, description, path, backgroundImage, createDate, category },
}: TPostCardProps) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden shadow-md bg-white'>
        <Image
          src={backgroundImage}
          className='w-full'
          width={350}
          height={200}
          alt='post background'
        />
        <div className='flex flex-col items-center pt-2 pb-3 px-3'>
          <time className='text-sm self-end'>{createDate}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='bg-emerald-100 w-fit px-2 rounded-lg text-sm'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
