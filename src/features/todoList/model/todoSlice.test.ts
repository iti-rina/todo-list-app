import { describe, it, expect } from 'vitest';
import { todosReducer, addTodo, toggleTodoSelect, removeTodo, removeSome } from '.';


describe('todoSlice reducer', () => {
  it('should return the initial state with predefined mock-data', () => {
    expect(todosReducer(undefined, { type: 'unknown' })).toEqual({
      "entities": {
        "4dac7fa3-60f2-4c6e-99a3-c2d94805d690": {
          "id": "4dac7fa3-60f2-4c6e-99a3-c2d94805d690",
          "isSelected": false,
          "title": "Order poducts from grocery store",
        },
        "a65cf47c-0665-432a-8448-bb6f81a2a4e4": {
          "id": "a65cf47c-0665-432a-8448-bb6f81a2a4e4",
          "isSelected": true,
          "title": "Call Mom",
        },
        "edc39aa9-3eec-41ed-82dc-27ec8d6b9661": {
          "id": "edc39aa9-3eec-41ed-82dc-27ec8d6b9661",
          "isSelected": false,
          "title": "Make an appointment to doctor",
        },
      },
      "ids": [
        "edc39aa9-3eec-41ed-82dc-27ec8d6b9661",
        "a65cf47c-0665-432a-8448-bb6f81a2a4e4",
        "4dac7fa3-60f2-4c6e-99a3-c2d94805d690",
      ],
    })
  })
  
  it('should add one task to state', () => {
    const initialState = { "entities": {}, "ids": [] }
    const newTodo = { id: '1', title: 'Test add task', isSelected: false };
    const nextState = todosReducer(initialState, addTodo(newTodo));

    expect(nextState.ids).toHaveLength(1);
    const currentTask = nextState.entities[nextState.ids[0]];
    expect(currentTask).toEqual(newTodo);
  });

  it('should add one task to an existing list', () => {
    const previousState = {
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: false }
      },
      'ids': ['1']
    }
    const newTodo = { id: '2', title: 'New task', isSelected: false };

    const nextState = todosReducer(previousState, addTodo(newTodo));

    expect(nextState.ids).toHaveLength(2);
    expect(nextState).toEqual({
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: false },
        '2': { id: '2', title: 'New task', isSelected: false }
      },
      'ids': ['1', '2']
    })
  });

  it('should change isSelected value by toggleTodoSelect', () => {
    const initialState = {
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: false }
      },
      'ids': ['1']
    }

    const nextState = todosReducer(initialState, toggleTodoSelect({id: '1', changes: {isSelected: true}}));

    expect(nextState).toEqual({
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: true }
      },
      'ids': ['1']
    });
  });

  it('should change isSelected value by toggleTodoSelect to initial value if dispatch action twice', () => {
    const initialState = {
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: false }
      },
      'ids': ['1']
    }

    const nextState = todosReducer(initialState, toggleTodoSelect({id: '1', changes: {isSelected: true}}));
    const finalState = todosReducer(nextState, toggleTodoSelect({id: '1', changes: {isSelected: false}}));

    expect(finalState).toEqual(initialState);
  });

  it('should remove one task by ID dispatching removeTodo action', () => {
    const initialState = {
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: false }
      },
      'ids': ['1']
    }

    const nextState = todosReducer(initialState, removeTodo('1'));

    expect(nextState.ids).toHaveLength(0);
  });

  it('removeTodo action should do nothing if state is empty', () => {
    const initialState = {
      'entities': {},
      'ids': []
    }

    const nextState = todosReducer(initialState, removeTodo('1'));

    expect(nextState.ids).toHaveLength(0);
  });

  it('removeSome should delete as many tasks as exist in state', () => {
    const initialState = {
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: false },
        '2': { id: '2', title: 'New task', isSelected: false },
        '3': { id: '3', title: 'One more task', isSelected: false }
      },
      'ids': ['1', '2', '3']
    }

    const nextState = todosReducer(initialState, removeSome(['1', '2']));

    expect(nextState.ids).toHaveLength(1);
    expect(nextState).toEqual({
      'entities': {
        '3': { id: '3', title: 'One more task', isSelected: false }
      },
      'ids': ['3']
    });
  });

  it('removeSome should do nothing if there are not tasks with such ids', () => {
    const initialState = {
      'entities': {
        '1': { id: '1', title: 'Existed task', isSelected: false },
        '2': { id: '2', title: 'New task', isSelected: false },
        '3': { id: '3', title: 'One more task', isSelected: false }
      },
      'ids': ['1', '2', '3']
    }

    const nextState = todosReducer(initialState, removeSome(['5', '6']));

    expect(nextState).toEqual(initialState);
  });

});