import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

type Todo = {
  id: string;
  title: string;
  isSelected: boolean;
}

// Моковые данные, для удобства отладки
const initialTodos: Todo[] = [
  { id: 'edc39aa9-3eec-41ed-82dc-27ec8d6b9661', title: 'Убрать в комнате', isSelected: false },
  { id: 'a65cf47c-0665-432a-8448-bb6f81a2a4e4', title: 'Сходить в магазин', isSelected: false },
  { id: '4dac7fa3-60f2-4c6e-99a3-c2d94805d690', title: 'Погулять с собакой', isSelected: false },
];


const todosAdapter = createEntityAdapter<Todo>({});
const initialState = todosAdapter.getInitialState({
  ...todosAdapter.addMany(todosAdapter.getInitialState(), initialTodos),
});




const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    toggleTodoSelect: todosAdapter.updateOne,
    removeTodo: todosAdapter.removeOne,
    removeSome: todosAdapter.removeMany
  }
});

export const { addTodo, toggleTodoSelect, removeTodo, removeSome } = todosSlice.actions;
export const { selectById: selectTodoById, selectIds: selectAllTodosIds, selectAll: selectAllTodos } = todosAdapter.getSelectors((state: RootState) => state.todos);

export default todosSlice.reducer;