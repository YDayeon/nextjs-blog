import ContactEmailForm from '@/components/ContactForm';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

export default function ContactPage() {
  return (
    <main className='w-full flex justify-center'>
      <article
        className='w-96 flex flex-col justify-center items-center text-black py-3'
        style={{ background: '#FFF9DE' }}
      >
        <h2>CONTACT ME</h2>
        <p>yday1223@gmail.com</p>
        <div className='flex gap-1'>
          <BsLinkedin />
          <AiFillGithub />
        </div>
        <p>Or Send me an email</p>
        <ContactEmailForm />
      </article>
    </main>
  );
}
