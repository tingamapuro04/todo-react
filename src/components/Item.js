import React from 'react'

const Item = ({ id, kazi}) => {
  return (
    <li>
      <div>
        <input type="checkbox" name="check" id="" />
        <p>{ kazi }</p>
        
      </div>
    </li>
  )
}

export default Item
