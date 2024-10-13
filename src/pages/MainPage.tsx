import { AddTodoForm } from '../features/addTodo/components';
import { TodoList } from '../features/todoList/components';
import { Controllers } from '../widgets/ui';

const MainPage = () => {
  return (
      <div className='w-screen min-h-screen flex flex-col px-10 mx-auto bg-gradient-to-br from-bg-1 via-bg-2 to-bg-3'>
        <div className='max-w-xl mx-auto md:mx-auto w-full my-20 text-left flex flex-col gap-12'>
          <header className='text-4xl font-bold text-white tracking-widest'>
            <h1>TODOS</h1>
          </header>
          <main className='flex flex-col gap-12 bg-inherit rounded-lg'>
            <AddTodoForm />
            <TodoList />
            <Controllers />
          </main>
        </div>
      </div>
  );
}

export default MainPage;