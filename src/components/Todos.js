import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import './Todos.scss'

const Todos = () => {
  const items = useSelector(state => state.todos)
  return (
    <div>
      <ul className='order'>
        {
          items.map((todo) => {
            return <Item key={todo.id} id={todo.id} kazi={todo.todo} />
          })
        }
      </ul>
    </div>
  )
}

export default Todos
