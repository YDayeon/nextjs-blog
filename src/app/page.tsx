import { Inter } from 'next/font/google';
import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import CarouselPosts from '@/components/CarouselPosts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className='pt-10'>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}
