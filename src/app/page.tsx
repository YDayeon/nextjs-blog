import Image from 'next/image';
import { Inter } from 'next/font/google';
import MyInfoCard from '@/components/MyInfoCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <MyInfoCard />
      <article>
        <h2>Featured Posts</h2>
      </article>
      <article>
        <h2>You may Like</h2>
      </article>
    </main>
  );
}
