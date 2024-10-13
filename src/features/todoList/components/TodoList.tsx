import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { selectFilteredTaskIds } from '../../filterTodos/model';

const TodoList = () => {
  const allTodosIds = useSelector(selectFilteredTaskIds) || [];


  return (
    <ul className='flex-grow bg-white rounded-lg'>
      {allTodosIds.map(id => <TodoItem todoId={id} key={id} />)}
    </ul>
  );
}

export default TodoList;