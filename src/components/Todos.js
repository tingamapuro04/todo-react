import React from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {
  const items = useSelector(state => state.todos)
  console.log(Array.isArray(items))
  return (
    <div>
      <ul>
        {
          items.map((todo) => {
            
          })
        }
      </ul>
    </div>
  )
}

export default Todos
