import React, { useState } from 'react';



const Todo = () => {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form action="">
        <input type="text" name="todo" id="" />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

export default Todo
