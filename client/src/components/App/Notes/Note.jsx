import React from 'react';

export default function Note(props) {
  return (
    <div className='note'>
      <button type="button" className="note-button del"
      onClick={() => {
        props.onRemove(props.id);
      }}><span>-</span></button>
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
}
