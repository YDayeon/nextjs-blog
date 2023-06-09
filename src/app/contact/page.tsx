'use client';

import ContactEmailForm from '@/components/ContactForm';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center justify-center py-10'>
      <h2 className='text-2xl font-bold'>CONTACT ME</h2>
      <p className='text-lg'>yday1223@gmail.com</p>
      <div className='flex gap-1 py-1'>
        <BsLinkedin size={30} />
        <AiFillGithub size={30} />
      </div>
      <p className='mb-3'>Or Send me an email</p>
      <ContactEmailForm />
    </section>
  );
}
