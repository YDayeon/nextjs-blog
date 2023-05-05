import Image from 'next/image';

import myPicture from '../../public/images/dayeon.jpeg';
import ContactButton from '@/components/ContactButton';

export default function Hero() {
  return (
    <section className='text-center'>
      <div className='overflow-hidden w-48 h-48 rounded-full mx-auto mb-2'>
        <Image src={myPicture} alt='picture of the author' priority />
      </div>
      <h1 className='text-xl mt-1 font-bold'>Dayeon Yoon</h1>
      <h2 className='font-semibold'>Junior Frontend Developer</h2>
      <p className='mb-2'>
        &quot;Currently, interseted in{' '}
        <b className='text-orange-400'>Next.js</b>&quot;
      </p>
      <ContactButton />
    </section>
  );
}
