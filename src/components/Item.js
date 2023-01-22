import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import './Item.scss'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Item = ({ id, kazi}) => {
  const dispatch = useDispatch()
  return (
    <li>
      <div className='todo_div'>
        <input type="checkbox" name="check" id="" />
        <p>{ kazi }</p>
        <RiDeleteBinLine onClick={() => dispatch(removeTodo(id))} />
      </div>
    </li>
  )
}

export default Item
