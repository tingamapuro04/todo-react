import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'
import { addTodo } from '../features/todo/todoSlice';




const Todo = () => {
  const [todo, setTodo] = useState("");
  const [value, setValues] = useState({
    id: '',
    todo: '',
  })
  const dispatch = useDispatch()
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
    setTodo("")
  }


  return (
    <div>
      <form  onSubmit={handleSubmit} action="">
        <input value={todo} onChange={handleChange} type="text" name="todo" id="" />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

export default Todo
