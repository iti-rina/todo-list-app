import { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../../todoList/model';
import { AddBtn } from '../../../shared/ui';

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
    <div className='bg-white rounded-lg pr-5'>
      <form className='rounded-lg flex justify-between w-full h-16 text-lg text-gray-700 align-middle bg-white appearance-none focus:outline-none focus:shadow-outline'>
        <input 
          type='text'
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder='Add new todo'
          maxLength={180}
          className='flex-1 rounded-lg pl-10 focus:outline-none focus:shadow-outline'
        />
        <AddBtn onClick={handleTaskSave} />
      </form>
    </div>
  );
}

export default AddTodoForm;