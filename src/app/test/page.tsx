'use client';

import Carousel from 'react-multi-carousel';
import { useState } from 'react';

type SlideProps = {
  number: number;
  state: number;
};
interface ISlideProps {
  data: SlideProps[];
}
type TOpacityObj = {
  [key: number]: string;
};

const mocks = [
  { number: 0, state: 0 },
  { number: 1, state: 50 },
  { number: 2, state: 100 },
  { number: 3, state: 20 },
  { number: 4, state: 60 },
  { number: 5, state: 10 },
  { number: 6, state: 50 },
  { number: 7, state: 100 },
  { number: 8, state: 80 },
  { number: 9, state: 60 },
  { number: 10, state: 10 },
  { number: 11, state: 50 },
  { number: 12, state: 100 },
  { number: 13, state: 80 },
];

const opacityObj: TOpacityObj = {
  0: 'bg-neutral-500',
  5: 'bg-amber-300/95',
  10: 'bg-amber-300/90',
  15: 'bg-amber-300/85',
  20: 'bg-amber-300/80',
  25: 'bg-amber-300/75',
  30: 'bg-amber-300/70',
  35: 'bg-amber-300/65',
  40: 'bg-amber-300/60',
  45: 'bg-amber-300/55',
  50: 'bg-amber-300/50',
  55: 'bg-amber-300/45',
  60: 'bg-amber-300/40',
  65: 'bg-amber-300/35',
  70: 'bg-amber-300/30',
  75: 'bg-amber-300/25',
  80: 'bg-amber-300/20',
  85: 'bg-amber-300/15',
  90: 'bg-amber-300/10',
  95: 'bg-amber-300/5',
  100: 'bg-amber-300',
};

const Slide = ({ data }: ISlideProps) => {
  return (
    <div className='grid grid-rows-2 grid-cols-3 gap-2 w-80 border-2 bg-gray-400'>
      {data.map((el) => (
        <div
          className={`w-10 h-10 ${opacityObj[el.state]}`}
          key={el.number}
        ></div>
      ))}
    </div>
  );
};

function sliceIntoChunks(arr: SlideProps[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export default function TestPage() {
  const slides = sliceIntoChunks(mocks, 6);
  const [curIndex, setCurIndex] = useState(0);
  const dotsArr: number[] = new Array(slides.length)
    .fill(0)
    .map((el, i) => el + i);

  const goRight = () =>
    setCurIndex(curIndex < slides.length - 1 ? curIndex + 1 : curIndex);
  const goLeft = () => setCurIndex(curIndex > 0 ? curIndex - 1 : 0);

  return (
    <section className='w-full h-full flex justify-around items-center'>
      <button onClick={goLeft}>◀️</button>
      <div className='w-full h-1/2 flex flex-col items-center'>
        <div className='w-80 grow flex overflow-x-hidden'>
          <div
            className='flex ease-in-out duration-300'
            style={{ marginLeft: `-${curIndex * 100}%` }}
          >
            {slides.map((slide, i) => (
              <Slide key={i} data={slide} />
            ))}
          </div>
        </div>
        <div className='w-full h-6 text-center text-sm'>
          {dotsArr.map((dot) =>
            dot === curIndex ? (
              <span key={dot} onClick={() => setCurIndex(dot)}>
                ⚫
              </span>
            ) : (
              <span key={dot} onClick={() => setCurIndex(dot)}>
                ⚪
              </span>
            )
          )}
        </div>
      </div>
      <button onClick={goRight}>▶️</button>
    </section>
  );
}
