'use client';

import { useRouter } from 'next/navigation';

export default function ContactButton() {
  const router = useRouter();
  return <button onClick={() => router.push('/contact')}>Contact</button>;
}
