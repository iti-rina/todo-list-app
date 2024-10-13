import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllTodos } from '../../todoList/model';
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

export const selectCompleted = createSelector(
  selectAllTodos, 
  filteredCompleted => filteredCompleted.filter(todo => todo.isSelected).map(todo => todo.id)
);

export const selectFilteredTaskIds = createSelector(
  selectFilteredTasks,
  filteredTasks => filteredTasks.map(task => task.id)
);

export const selectActive = createSelector(
  selectAllTodos,
  filteredAll => filteredAll.filter(todo => !todo.isSelected)
);

export default filtersSlice.reducer;