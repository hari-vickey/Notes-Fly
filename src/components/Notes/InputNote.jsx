import React, { useState } from "react";

function InputNote(props) {
  const [note, setNote] = useState({title: '', content: ''});

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote, [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote("");
  }

  return (
    <div className="note form spacing">
      <input name="title" value={note.title}
        onChange={handleChange} type="text" placeholder="Add title"/>
      <textarea name="content" value={note.content}
        onChange={handleChange} type="text" placeholder="Add content.."/>
      <button type="button" className="note-button"
        onClick={submitNote}><p>+</p>
      </button>
    </div>
  );
}

export default InputNote;