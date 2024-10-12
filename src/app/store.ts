import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from '../features/addTodo/model';
import { filtersReducer } from '../features/filterTodos/model';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;