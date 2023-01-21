import React, { useState } from 'react';




const Todo = () => {
  const [todo, setTodo] = useState("");
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };


  return (
    <div>
      <form action="">
        <input onChange={handleChange} type="text" name="todo" id="" />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

export default Todo
