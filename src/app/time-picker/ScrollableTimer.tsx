'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView();

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node: any) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    console.log(ref.current);
    console.log('inView', inView);
  }, [ref, inView]);
  console.log(inView);

  return (
    <div className='w-full h-36 overflow-hidden bg-gray-600 my-10 flex justify-around relative'>
      <ul className='overflow-scroll scrollbar-hide z-10 py-16'>
        {days.map((el, i) => (
          <li
            key={el}
            className='text-center text-base h-6'
            ref={(element) => setRefs(element)}
          >
            {el}
          </li>
        ))}
      </ul>
      <ul className='overflow-scroll scrollbar-hide z-10 py-16'>
        {time.map((el, i) => (
          <li
            key={el}
            className='text-center text-base h-6'
            ref={(element) => setRefs(element)}
          >
            {el}
          </li>
        ))}
      </ul>
      <ul className='overflow-scroll scrollbar-hide z-10 py-16'>
        {minute.map((el, i) => (
          <li
            key={el}
            className='text-center text-base h-6'
            ref={(element) => setRefs(element)}
          >
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
