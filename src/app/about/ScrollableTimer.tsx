import { useEffect, useState } from 'react';
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
const time = new Array(24).fill(0).map((el, i) => el + i);

export default function ScrollableTimer() {
  return (
    <div className='w-full h-28 overflow-hidden bg-orange-300 my-10 flex justify-center'>
      <ul
        className='overflow-scroll scrollbar-hide'
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {time.map((el, i) => (
          <SList i={i} key={el} className='text-center'>
            {el}
          </SList>
        ))}
      </ul>
    </div>
  );
}
