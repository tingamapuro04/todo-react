import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'
import { addTodo } from '../features/todo/todoSlice';
import './Todo.scss'




const Todo = () => {
  const dispatch = useDispatch()

  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const moto = {
      id: uniqid(),
      status: false,
      todo: todo,
    }

    dispatch(addTodo(moto))
    
    setTodo("");
  }


  return (
    <div>
      <h1 className='head'>Organize Your Day with iorganize</h1>

      <form className='form' onSubmit={handleSubmit} action="">
        <input
          className='input'
          value={todo}
          onChange={handleChange}
          placeholder='Add a Task...'
          type="text"
          name="todo"
          id=""
          required
        />
        <input className='btn' type="submit" value="Add Task" />
      </form>
    </div>
  );
}

export default Todo
