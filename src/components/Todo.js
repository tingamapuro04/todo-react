import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'
import { addTodo } from '../features/todo/todoSlice';




const Todo = () => {
  const dispatch = useDispatch()

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // useEffect(() => {
  //   window.localStorage.setItem("Todos", JSON.stringify(todos));
  // }, [todos]);

  

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

  // useEffect(() => {
  //   const old_data = localStorage.getItem("Todos");
  //   if (old_data) {
  //     setTodos(old_data)
  //   }
  // }, []);



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
