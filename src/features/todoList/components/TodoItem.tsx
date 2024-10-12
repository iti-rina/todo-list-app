import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectTodoById } from '../../addTodo/model/todosSlice';
import { RootState } from '../../../app';

type TodoProps = {
  todoId: string
}

const TodoItem: FC<TodoProps> = ({ todoId }) => {
  const todoItem = useSelector((state: RootState) => selectTodoById(state, todoId));

  return (
    <li>
      {todoItem.title}
    </li>
  );
}

export default TodoItem;