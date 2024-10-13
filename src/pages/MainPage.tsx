import { AddTodoForm } from '../features/addTodo/components';
import { TodoList } from '../features/todoList/components';
import { Controllers } from '../widgets/ui';

const MainPage = () => {
  return (
    <main>
      <AddTodoForm />
      <TodoList />
      <Controllers />
    </main>
  );
}

export default MainPage;