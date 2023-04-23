import Image from 'next/image';

import myPicture from '../../public/images/dayeon.jpeg';
import ContactButton from '@/components/ContactButton';

export default function MyInfoCard() {
  return (
    <article className='flex justify-center pt-20 pb-10'>
      <div
        className='flex flex-col items-center justify-center py-6 w-96'
        style={{ background: '#FFD3B0' }}
      >
        <div className='w-48 h-48 rounded-full overflow-hidden'>
          <Image src={myPicture} alt='my avatar'></Image>
        </div>
        <p>Dayeon Yoon</p>
        <p>Junior Frontend Developer</p>
        <ContactButton />
      </div>
    </article>
  );
}
