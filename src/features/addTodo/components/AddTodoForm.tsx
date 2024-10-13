import { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../../todoList/model';

const AddTodoForm = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');

  const handleTaskSave = (e: MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault();
    if (!inputText) return;

    const todoContent = inputText.trim();

    const id = nanoid();
    dispatch(addTodo({ id, title: todoContent, isSelected: false }));
    setInputText('');
  }

  return (
    <div>
      <form>
        <input 
          type='text'
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder='Add new todo'
          maxLength={180}
        />
        <button onClick={handleTaskSave}>
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;