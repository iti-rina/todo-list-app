import { AddTodoForm } from '../features/addTodo/ui';
import { TodoList } from '../features/todoList/components';

const MainPage = () => {
  return (
    <main>
      <AddTodoForm />
      <TodoList />
    </main>
  );
}

export default MainPage;