import { ClearCompleted } from '../../features/clearCompleted/components';
import { FiltersController } from '../../features/filterTodos/ui';
import { useSelector } from 'react-redux';
import { selectActive } from '../../features/filterTodos/model';

const Controllers = () => {
  const activeQuantity = useSelector(selectActive).length;

  return (
    <div>
      <p>
        {activeQuantity > 1 ? `${activeQuantity} items left` : `${activeQuantity} item left`} 
      </p>
      <FiltersController />
      <ClearCompleted />
    </div>
  );
}

export default Controllers;