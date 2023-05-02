import React from 'react';

export default function Item(props) {
  function handleChange(event) {
    props.onChecked(props.id);
  }
  return (
    <div className="item">
      <input type='checkbox' name='checkbox' checked={props.checked}
      onChange={handleChange}/>
      <span>{props.text}</span>
    </div>
  )
}
