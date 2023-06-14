'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

interface ListProps {
  i: number;
}
const SList = styled.li<ListProps>`
  transform-style: preserve-3d;
  transform: translate(-50%, -50%)
    rotateX(calc(${(props) => props.i}*(360 / 24) deg)) translateZ(100px);
  font-size: large;
`;

const days = ['월', '화', '수', '목', '금', '토', '일'];
const time = new Array(24).fill(0).map((el, i) => el + i);
const minute = new Array(60).fill(0).map((el, i) => el + i);

export default function ScrollableTimer() {
  const elements = useRef<null[] | HTMLLIElement[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!!root.current) {
      console.log(root.current.offsetHeight - 24);
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
              });
              console.log(entry.target, 'isIntersecting!!');
            }
          });
        },
        {
          root: root.current,
          rootMargin: '-60px 0px -60px 0px',
          threshold: 0.6,
        }
      );

      elements.current?.forEach((el) => {
        if (el) {
          observer.current?.observe(el);
        }
      });
    }
  }, [elements, root]);

  return (
    <div
      className='w-full h-36 overflow-hidden bg-gray-600 my-10 flex justify-around relative'
      ref={root}
    >
      <ul className='overflow-scroll scrollbar-hide z-10 py-16'>
        {days.map((el, i) => (
          <li
            ref={(el) => (elements.current[i] = el)}
            key={el}
            className='text-center text-base h-6'
          >
            {el}
          </li>
        ))}
      </ul>
      <ul className='overflow-scroll scrollbar-hide z-10 py-16'>
        {time.map((el, i) => (
          <li key={el} className='text-center text-base h-6'>
            {el}
          </li>
        ))}
      </ul>
      <ul className='overflow-scroll scrollbar-hide z-10 py-16'>
        {minute.map((el, i) => (
          <li key={el} className='text-center text-base h-6'>
            {el}
          </li>
        ))}
      </ul>
      <div className='w-full h-full absolute top-0 flex items-center z-0 px-3'>
        <div className='h-6 w-full bg-white/40 rounded-md flex'>
          <span className='basis-1/3 text-end pr-5'>요일</span>
          <span className='basis-1/3 text-end pr-6'>시</span>
          <span className='basis-1/3 text-end pr-5'>분</span>
        </div>
      </div>
    </div>
  );
}
