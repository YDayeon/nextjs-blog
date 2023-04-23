'use client';

import { sendContactForm } from '@/app/service/contact';
import { useState } from 'react';

const EMAIL = 'email';
const SUBJECT = 'subject';
const MESSAGE = 'message';

export type TContactForm = {
  email: string;
  subject: string;
  message: string;
};

const initState = {
  [EMAIL]: '',
  [SUBJECT]: '',
  [MESSAGE]: '',
};

export default function ContactEmailForm() {
  const [formState, setFormState] = useState(initState);

  const handleChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = currentTarget;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
    console.log(res);
  };

  return (
    <form className='w-full flex flex-col gap-2 px-5' onSubmit={handleSubmit}>
      <div className='w-full'>
        <label htmlFor={EMAIL} className='block'>
          Your Email
        </label>
        <input
          type='email'
          id={EMAIL}
          name={EMAIL}
          value={formState[EMAIL]}
          onChange={handleChange}
          className='w-full'
          required
        />
      </div>
      <div className='w-full'>
        <label htmlFor={SUBJECT} className='block'>
          Subject
        </label>
        <input
          type='text'
          id={SUBJECT}
          name={SUBJECT}
          value={formState[SUBJECT]}
          onChange={handleChange}
          className='w-full'
          required
        />
      </div>
      <div className='w-full'>
        <label htmlFor={MESSAGE} className='block'>
          Message
        </label>
        <input
          type='text'
          id={MESSAGE}
          name={MESSAGE}
          value={formState[MESSAGE]}
          onChange={handleChange}
          className='w-full'
          required
        />
      </div>
      <button
        className='w-full py-1 rounded-md'
        style={{ backgroundColor: '#FFD3B0' }}
      >
        submit
      </button>
    </form>
  );
}
