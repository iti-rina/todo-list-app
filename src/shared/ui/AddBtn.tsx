import { FC } from 'react';
import type { BtnProps } from '../types';

const AddBtn: FC<BtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label='Add new task'
    >
      <svg
        className='w-6 h-6 stroke-bg-2 hover:stroke-bg-1'
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 4v16m8-8H4'
        />
      </svg>
    </button>
  );
}

export default AddBtn;                                                   