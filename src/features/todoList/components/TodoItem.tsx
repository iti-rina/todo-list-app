import { FC, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app';
import { toggleTodoSelect, removeTodo, selectTodoById } from '../model';
type TodoProps = {
  todoId: string
}

const TodoItem: FC<TodoProps> = ({ todoId }) => {
  const { title, id, isSelected } = useSelector((state: RootState) => selectTodoById(state, todoId));

  const dispatch = useDispatch();

  const handleTodoSelection = () => {
    dispatch(toggleTodoSelect({id, changes: {isSelected: !isSelected}}))
  }

  const handleRemoveOne = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeTodo(id));
  }



  return (
    <li onClick={handleTodoSelection} style={isSelected ? {'textDecoration': 'line-through'} : {}} >
      {title}
      <button onClick={handleRemoveOne}>Remove</button>
    </li>
  );
}

export default TodoItem;