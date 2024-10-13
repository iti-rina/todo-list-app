import { FC, ChangeEvent } from 'react';

type CheckboxProps = {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {

  return (
    <label onClick={(e) => e.stopPropagation()}>
        <input
          type='checkbox'
          className='hidden'
          tabIndex={0}
          onChange={onChange}
          checked={checked}
        />
      <span
        className={`w-6 h-6 flex items-center justify-center border-2 rounded ${checked ? 'bg-bg-2 border-none' : 'border-gray-400'}`}
      >
        {checked && (
          <svg
            className='w-4 h-4 text-white'
            stroke='#fff'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
          </svg>
        )}
      </span>
    </label>
  );
}

export default Checkbox;