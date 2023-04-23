import React from 'react';

function Item(props) {
  return (
    <div className="item">
      <input type='checkbox' name='checkbox' checked={false} onClick={() => {
      props.onChecked(props.id);
    }}/>
      <span>{props.text}</span>
    </div>
  )
}

export default Item;