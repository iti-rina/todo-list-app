import { FC } from 'react';
import { statusFilters } from '../model';
import { useDispatch } from 'react-redux';
import { statusFilterChanged } from '../model/filtersSlice';



const FiltersController:FC = () => {
  const dispatch = useDispatch();

  const handleStatusFilterChanged = (status: string) => {
    dispatch(statusFilterChanged(status));
  }

  const renderedFilters = Object.entries(statusFilters).map(([key, value]) => {
    const handleClick = () => handleStatusFilterChanged(value);
    return (
      <button 
        onClick={handleClick}
        key={key}
      >
        {value}
      </button>
    );
  });

  return (
    <div>
      {renderedFilters}
    </div>
  );
}

export default FiltersController;

