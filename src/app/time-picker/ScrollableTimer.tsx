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
  const daysElement = useRef<null[] | HTMLLIElement[]>([]);
  const timeElement = useRef<null[] | HTMLLIElement[]>([]);
  const minuteElement = useRef<null[] | HTMLLIElement[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!!root.current) {
      let debounceTimer: NodeJS.Timeout;
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              debounceTimer = setTimeout(() => {
                entry.target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'center',
                });
              }, 100);
            } else {
              clearTimeout(debounceTimer);
            }
          });
        },
        {
          root: root.current,
          rootMargin: '-56px 0px -56px 0px',
          threshold: 0.4,
        }
      );
    }
  }, [root]);

  useEffect(() => {
    if (!!observer.current) {
      daysElement.current?.forEach((el) => {
        if (el) {
          observer.current?.observe(el);
        }
      });
      timeElement.current?.forEach((el) => {
        if (el) {
          observer.current?.observe(el);
        }
      });
      minuteElement.current?.forEach((el) => {
        if (el) {
          observer.current?.observe(el);
        }
      });
    }
  }, [observer.current]);

  return (
    <div
      className='w-full h-36 overflow-hidden bg-gray-600 my-10 flex relative px-5 text-white'
      ref={root}
    >
      <ul className='overflow-scroll scrollbar-hide z-10 py-16 w-full basis-1/3 pl-6'>
        {days.map((el, i) => (
          <li
            ref={(el) => (daysElement.current[i] = el)}
            key={el}
            className='h-6'
          >
            {el}
          </li>
        ))}
      </ul>
      <ul className='overflow-scroll scrollbar-hide z-10 py-16 w-full text-center pr-5 basis-1/3'>
        {time.map((el, i) => (
          <li
            ref={(el) => (timeElement.current[i] = el)}
            key={el}
            className='h-6'
          >
            {el}
          </li>
        ))}
      </ul>
      <ul className='overflow-scroll scrollbar-hide z-10 py-16 w-full text-end basis-1/3 pr-10'>
        {minute.map((el, i) => (
          <li
            ref={(el) => (minuteElement.current[i] = el)}
            key={el}
            className='h-6'
          >
            {el}
          </li>
        ))}
      </ul>
      <div className='w-full h-full absolute top-0 left-0 flex items-center z-0 px-5'>
        <div className='h-8 w-full bg-white/40 rounded-md flex items-center font-bold'>
          <span className='basis-1/3 pl-11'>요일</span>
          <span className='basis-1/3 text-center pl-5'>시</span>
          <span className='basis-1/3 pr-5 text-end'>분</span>
        </div>
      </div>
    </div>
  );
}
