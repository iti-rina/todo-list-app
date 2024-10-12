import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllTodos } from '../../addTodo/model';
import type { RootState } from '../../../app';

export const statusFilters = {
  all: 'all',
  active: 'active',
  completed: 'completed'
}

const initialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status = (action.payload)
    }
  }
});

export const { statusFilterChanged } = filtersSlice.actions;
export const selectStatus = (state: RootState) => state.filters.status;

export const selectFilteredTasks = createSelector(
  [
    selectStatus,
    selectAllTodos,
  ],

  (status, todos) => {
    const showAllOccurences = status === statusFilters.all;
    const completedStatus = status === statusFilters.completed;

    return todos.filter(todo => showAllOccurences || todo.isSelected === completedStatus);
  }
);

export const selectFilteredTaskIds = createSelector(
  selectFilteredTasks,
  filteredTasks => filteredTasks.map(task => task.id)
);

export default filtersSlice.reducer;