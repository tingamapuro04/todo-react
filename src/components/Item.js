import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import './Item.scss'

const Item = ({ id, kazi}) => {
  return (
    <li>
      <div className='todo_div'>
        <input type="checkbox" name="check" id="" />
        <p>{ kazi }</p>
        <RiDeleteBinLine />
      </div>
    </li>
  )
}

export default Item
