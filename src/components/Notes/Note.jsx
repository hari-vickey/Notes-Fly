import React from 'react';

function Note(props) {
  return (
    <div className='note'>
      <button type="button" className="note-button del" onClick={() => {
        props.onRemove(props.id);
      }} ><p>-</p></button>
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;