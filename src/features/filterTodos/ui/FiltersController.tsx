import { FC } from 'react';
import { statusFilters } from '../model';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilterChanged, selectStatus } from '../model/filtersSlice';



const FiltersController:FC = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector(selectStatus);

  const handleStatusFilterChanged = (status: string) => {
    dispatch(statusFilterChanged(status));
  }

  const renderedFilters = Object.entries(statusFilters).map(([key, value]) => {
    const handleClick = () => handleStatusFilterChanged(value);
    return (
      <button 
        onClick={handleClick}
        key={key}
        className={`capitalize hover:underline ${value === currentStatus ? 'underline' : ''}`}
      >
        {value}
      </button>
    );
  });

  return (
    <div className='flex justify-between gap-x-5 text-white'>
      {renderedFilters}
    </div>
  );
}

export default FiltersController;

