import { AddTodoForm } from '../features/addTodo/ui';
import { FiltersController } from '../features/filterTodos/ui';
import { TodoList } from '../features/todoList/components';

const MainPage = () => {
  return (
    <main>
      <AddTodoForm />
      <TodoList />
      <FiltersController />
    </main>
  );
}

export default MainPage;