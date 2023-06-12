'use client';

import Hero from '@/components/Hero';

export default function AboutPage() {
  return (
    <section className='py-10'>
      <Hero />
      <article className='flex flex-col items-center gap-6 mt-6 px-3'>
        <div className='bg-orange-200 lg:w-2/5 sm:w-full px-2 py-5 text-center shadow-xl rounded-lg'>
          <h3 className='font-bold text-xl'>Who am I?</h3>
          <p>
            A Front-End Developer,
            <br />
            who values user experience the most.
            <br />
            I&apos;m interested in documentation, project planning and UX, UI
          </p>
        </div>
        <div className='bg-orange-300 lg:w-2/5 sm:w-full px-2 py-5 text-center shadow-xl rounded-lg'>
          <h3 className='font-bold text-xl'>Career</h3>
          <p>BankClear (2022.03 - )</p>
          <p>Admin Page - JSP, JAVA, JavaScript, jQuery, HTML, CSS</p>
          <p>KOS APP - JSP, JAVA, JavaScript, jQuery, HTML, CSS</p>
          <p>KOS PC version - React.js</p>
        </div>
        <div className='bg-orange-400 lg:w-2/5 sm:w-full px-2 py-5 text-center shadow-xl rounded-lg'>
          <h3 className='font-bold text-xl'>Education</h3>
          <p>Namseoul University - Industrial Management Engineering</p>
          <p>KSE - Smart Factory</p>
        </div>
      </article>
    </section>
  );
}
