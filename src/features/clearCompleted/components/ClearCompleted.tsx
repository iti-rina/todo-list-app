import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompleted } from '../../filterTodos/model';
import { removeSome } from '../../addTodo/model';


const ClearCompleted: FC = () => {
  const dispatch = useDispatch();
  const completedTodos = useSelector(selectCompleted);

  const handleRemoveCompleted = () => {
    dispatch(removeSome(completedTodos));
  }

  return (
    <button onClick={handleRemoveCompleted}>
      Clear Completed
    </button>
  );
}

export default ClearCompleted;