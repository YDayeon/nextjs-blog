'use client';

import { useState } from 'react';

export default function MenuList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => setIsOpen(!isOpen);
  return (
    <section>
      <div className='mt-20 px-4'>
        <div className='w-full flex justify-center gap-3 py-2 bg-sky-200'>
          <span>test</span>
          <button
            onClick={toggleList}
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`}
          >
            ▼
          </button>
        </div>
        <div>
          <ul
            className={`${
              isOpen ? 'h-0' : 'h-40'
            } bg-amber-200 overflow-hidden block transition-all duration-300`}
          >
            <li className='w-full text-center py-2 border-b-2 border-blue-700'>
              test1
            </li>
            <li className='w-full text-center py-2 border-b-2 border-blue-700'>
              test2
            </li>
            <li className='w-full text-center py-2 border-b-2 border-blue-700'>
              test3
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
