import { useState, useEffect } from 'react';
import { ClearCompleted } from '../../features/clearCompleted/components';
import { FiltersController } from '../../features/filterTodos/ui';
import { useSelector } from 'react-redux';
import { selectActive } from '../../features/filterTodos/model';

const Controllers = () => {
  const activeQuantity = useSelector(selectActive).length;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isHidden = windowWidth < 768;

  return (
    <div className='flex flex-col items-start'>
      <div className='flex justify-between text-white w-full'>
        <p>
          {activeQuantity > 1 ? `${activeQuantity} items left` : `${activeQuantity} item left`} 
        </p>
        { !isHidden ? <FiltersController /> : null}
        <ClearCompleted />
      </div>
      {isHidden ? <FiltersController /> : null}
    </div>
  );
}

export default Controllers;