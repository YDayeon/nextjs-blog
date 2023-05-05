'use client';

import { useRouter } from 'next/navigation';

export default function ContactButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/contact')}
      className='bg-white px-3 py-1 text-orange-600 rounded-xl shadow-sm shadow-orange-500'
    >
      <b>Contact me:)</b>
    </button>
  );
}
