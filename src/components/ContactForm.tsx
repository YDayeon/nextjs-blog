'use client';

import { useState } from 'react';

const FROM = 'from';
const SUBJECT = 'subject';
const MESSAGE = 'message';

export type TContactForm = {
  from: string;
  subject: string;
  message: string;
};

const initState = {
  [FROM]: '',
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
    console.log('formState', formState);
    const res = await fetch(`api/contact`, {
      method: 'POST',
      body: JSON.stringify({ ...formState }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
  };

  return (
    <form
      className='w-11/12 lg:w-2/6 p-5 flex flex-col gap-2 bg-blue-300'
      onSubmit={handleSubmit}
    >
      <div className='w-full'>
        <label htmlFor={FROM} className='block mb-0.5 font-bold text-sm'>
          Your Email
        </label>
        <input
          type='email'
          id={FROM}
          name={FROM}
          value={formState[FROM]}
          onChange={handleChange}
          className='w-full px-2 py-0.5 rounded-md'
          required
        />
      </div>
      <div className='w-full'>
        <label htmlFor={SUBJECT} className='block mb-0.5 font-bold text-sm'>
          Subject
        </label>
        <input
          type='text'
          id={SUBJECT}
          name={SUBJECT}
          value={formState[SUBJECT]}
          onChange={handleChange}
          className='w-full px-2 py-0.5 rounded-md'
          required
        />
      </div>
      <div className='w-full'>
        <label htmlFor={MESSAGE} className='block mb-0.5 font-bold text-sm'>
          Message
        </label>
        <input
          type='text'
          id={MESSAGE}
          name={MESSAGE}
          value={formState[MESSAGE]}
          onChange={handleChange}
          className='w-full px-2 py-0.5 rounded-md'
          required
        />
      </div>
      <button
        className='w-full py-1 rounded-md mt-2 font-bold'
        style={{ backgroundColor: '#FFD3B0' }}
      >
        submit
      </button>
    </form>
  );
}
