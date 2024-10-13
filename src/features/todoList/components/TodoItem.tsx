import { FC, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app';
import { toggleTodoSelect, removeTodo, selectTodoById } from '../model';
import { Checkbox, RemoveBtn } from '../../../shared/ui';
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
    <li onClick={handleTodoSelection} className='flex w-full min-h-16 px-6 items-center shadow appearance-none gap-6' >
      <Checkbox checked={isSelected} />
      <p className={`text-lg text-gray-700	 ${isSelected ? 'line-through' : ''} flex-grow hover:text-bg-2 text-ellipsis overflow-hidden`}>{title}</p>
      <RemoveBtn onClick={handleRemoveOne} />
    </li>
  );
}

export default TodoItem;