import React, { useState } from 'react';

function InputNote(props) {
  const [note, setNote] = useState({title: '', content: ''});

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevVal => {
      return {
        ...prevVal, [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({title: '', content: ''});
  }

  return (
    <div className='note form spacing'>
      <input name='title' value={note.title}
        onChange={handleChange} type='text' placeholder='Add title'/>
      <textarea name='content' value={note.content}
        onChange={handleChange} type='text' placeholder='Add content..'/>
      <div className='btn note-button'
        onClick={submitNote}><span>+</span>
      </div>
    </div>
  );
}

export default InputNote;