import { FC } from 'react';
import type { BtnProps } from '../types';

const RemoveBtn: FC<BtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='w-6 h-6 flex items-center justify-center  text-white rounded-full  transition'
      aria-label='Delete'
    >
      <svg
        className='w-4 h-4 stroke-bg-2 hover:stroke-bg-1'
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6 18L18 6M6 6l12 12'
        ></path>
      </svg>
    </button>
  );
};

export default RemoveBtn;