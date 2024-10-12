import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from '../features/addTodo/model';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
