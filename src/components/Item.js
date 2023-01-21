import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

const Item = ({ id, kazi}) => {
  return (
    <li>
      <div>
        <input type="checkbox" name="check" id="" />
        <p>{ kazi }</p>
        <RiDeleteBinLine />
      </div>
    </li>
  )
}

export default Item
