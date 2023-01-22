import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import './Item.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Item = ({ id, kazi }) => {
  const ind = useSelector((state) => state.todos);
  const mobutu = ind.findIndex((item) => item.id === id);
  const dispatch = useDispatch();
  return (
    <li className="item">
      <div className="todo_div">
        <p className="para1">
          Task
          {mobutu + 1}
          :
        </p>
        <p className="para2">{ kazi }</p>
        <RiDeleteBinLine className="para3" onClick={() => dispatch(removeTodo(id))} />
      </div>
    </li>
  );
};

export default Item;
