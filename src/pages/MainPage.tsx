import { AddTodoForm } from '../features/addTodo/components';
import { TodoList } from '../features/todoList/components';
import { Controllers } from '../widgets/ui';

const MainPage = () => {
  return (
    <>
      <header>
        <h1>TODOS</h1>
      </header>
      <main>
        <AddTodoForm />
        <TodoList />
        <Controllers />
      </main>
    </>
  );
}

export default MainPage;