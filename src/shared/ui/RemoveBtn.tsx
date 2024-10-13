import { FC } from 'react';
import type { BtnProps } from '../types';

const RemoveBtn: FC<BtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-red-600 transition"
      aria-label="Delete"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};

export default RemoveBtn;