import { describe, it, expect } from 'vitest';
import { filtersReducer, statusFilterChanged, selectCompleted } from '.';

describe('todoSlice reducer', () => {
  it('should change status in state', () => {
    const initialState = { "status": 'all' };

    const nextState = filtersReducer(initialState, statusFilterChanged('completed'));

    expect(nextState.status).toEqual('completed');
  });

  it('should return only tasks with isSelected equal true', () => {
    const initialState = {
      'todos': {
        'entities': {
          '1': { id: '1', title: 'Existed task', isSelected: false },
          '2': { id: '2', title: 'New task', isSelected: true },
          '3': { id: '3', title: 'One more task', isSelected: false }
        },
        'ids': ['1', '2', '3']
      },
      'filters': {
        'status': 'all'
      }
    };

    const selectedTasks = selectCompleted(initialState);

    expect(selectedTasks).toEqual(['2']);
  });
});