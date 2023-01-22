import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import './Item.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Item = ({ id, kazi}) => {
  const ind = useSelector(state => state.todos)
  const mobutu = ind.findIndex(item => item.id === id)
  const dispatch = useDispatch()
  return (
    <li>
      <div className='todo_div'>
        <p>Task {mobutu + 1}</p>
        <p>{ kazi }</p>
        <RiDeleteBinLine onClick={() => dispatch(removeTodo(id))} />
      </div>
    </li>
  )
}

export default Item
