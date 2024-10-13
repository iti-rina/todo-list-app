import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app';
import { toggleTodoSelect, selectTodoById } from '../../addTodo/model';
type TodoProps = {
  todoId: string
}

const TodoItem: FC<TodoProps> = ({ todoId }) => {
  const { title, id, isSelected } = useSelector((state: RootState) => selectTodoById(state, todoId));

  const dispatch = useDispatch();

  const handleTodoSelection = () => {
    dispatch(toggleTodoSelect({id, changes: {isSelected: !isSelected}}))
  }



  return (
    <li onClick={handleTodoSelection} style={isSelected ? {'textDecoration': 'line-through'} : {}} >
      {title}
    </li>
  );
}

export default TodoItem;