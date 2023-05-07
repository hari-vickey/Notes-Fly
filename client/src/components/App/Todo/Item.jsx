import React from 'react';

export default function Item(props) {
  return (
    <div className="item">
      <input type='checkbox' name='checkbox' checked={props.checked}
      onChange={() => {
        props.onChecked(props.id);
      }}/>
      <span>{props.text}</span>
    </div>
  )
}
