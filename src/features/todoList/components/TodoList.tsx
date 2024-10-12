import { useSelector } from 'react-redux';
import { selectAllTodosIds } from '../../addTodo/model';
import TodoItem from './ToDoItem';

const TodoList = () => {
  const allTodosIds = useSelector(selectAllTodosIds) || [];


  return (
    <ul>
      {allTodosIds.map(id => <TodoItem todoId={id} key={id} />)}
    </ul>
  );
}

export default TodoList;