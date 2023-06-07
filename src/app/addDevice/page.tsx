'use client';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

type Inputs = {
  host: string;
  port: number;
  address: number;
  switch: number;
  kind: 'DALI_MASTER' | 'N_6SRM';
  state: number;
  floor: number;
  direction: 'SOUTH' | 'NORTH';
  section: number;
  sectionPositionX: number;
  sectionPositionY: number;
};

const ERROR_MESSAGE = '입력한 값을 확인해주세요.';

export default function AddDevice() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className='p-5 bg-slate-300'>
          <h1>SCU</h1>
          <label htmlFor='host'>HOST</label>
          <input id='host' {...register('host', { required: true })} />
          {errors.host && <span>{ERROR_MESSAGE}</span>}
          <label htmlFor='port'>PORT</label>
          <input
            id='port'
            type='number'
            {...register('port', { required: true })}
          />
          {errors.port && <span>{ERROR_MESSAGE}</span>}
        </section>
        <div className='flex'>
          <section className='p-5 bg-slate-400 basis-1/2'>
            <h1>Device</h1>
            <label htmlFor='kind'>KIND</label>
            <select {...register('kind')}>
              <option value='DALI_MASTER'>DALI_MASTER</option>
              <option value='N_6SRM'>N_6SRM</option>
            </select>
            <label htmlFor='address'>ADDRESS</label>
            <input
              id='address'
              type='number'
              {...register('address', { required: true })}
            />
            {errors.address && <span>{ERROR_MESSAGE}</span>}
            <label htmlFor='switch'>SWITCH</label>
            <input
              id='switch'
              type='number'
              {...register('switch', { required: true })}
            />
            {errors.switch && <span>{ERROR_MESSAGE}</span>}
            <label htmlFor='state'>STATE</label>
            <input
              id='state'
              type='number'
              {...register('state', { required: true })}
            />
            {errors.state && <span>{ERROR_MESSAGE}</span>}
          </section>
          <section className='p-5 bg-slate-500 basis-1/2'>
            <h1>Position</h1>
            <label htmlFor='floor'>FLOOR</label>
            <input
              id='floor'
              type='number'
              {...register('floor', { required: true })}
            />
            {errors.floor && <span>{ERROR_MESSAGE}</span>}
            <label htmlFor='direction'>direction</label>
            <select {...register('direction')}>
              <option value='SOUTH'>SOUTH</option>
              <option value='NORTH'>NORTH</option>
            </select>
            <label htmlFor='section'>SECTION</label>
            <input
              id='section'
              type='number'
              {...register('section', { required: true })}
            />
            {errors.section && <span>{ERROR_MESSAGE}</span>}
            <label htmlFor='sectionPositionX'>SECTION POSITION X</label>
            <input
              id='sectionPositionX'
              type='number'
              {...register('sectionPositionX', { required: true })}
            />
            {errors.sectionPositionX && <span>{ERROR_MESSAGE}</span>}
            <label htmlFor='sectionPositionY'>SECTION POSITION Y</label>
            <input
              id='sectionPositionY'
              type='number'
              {...register('sectionPositionY', { required: true })}
            />
            {errors.sectionPositionY && <span>{ERROR_MESSAGE}</span>}
          </section>
        </div>

        <button
          type='button'
          className='w-full bg-slate-700 text-white py-2 hover:bg-slate-900'
        >
          Device 추가
        </button>

        <input type='submit' className='bg-pink-300 px-5 py-2 rounded-md' />
      </form>
    </section>
  );
}

/**
 * Scu
 * Device
 * Position
 */
