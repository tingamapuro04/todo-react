import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid'




const Todo = () => {

  

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    const old_data = JSON.parse(window.localStorage.getItem('Todos'));
    if (old_data === null) {
      JSON.stringify(window.localStorage.setItem('Todos', []));
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const moto = {
      id: uniqid(),
      status: false,
      todo: todo,
    }

    
    setTodo("");
  }

  useEffect(()=>{
    window.localStorage.setItem('Todos', JSON.stringify(todos))
  }, [todos])

  


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
