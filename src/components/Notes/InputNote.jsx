import React, { useState } from "react";

function InputNote(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  function handleTitleChange(event) {
    let value = event.target.value;
    setInputTitle(value);
  }

  function handleContentChange(event) {
    setInputContent(event.target.value);
  }

  function submitNote() {
    let note = {
      title: inputTitle,
      content: inputContent
    }
    props.onAdd(note);
    setInputTitle("");
    setInputContent("");
  }

  return (
    <div className="note form spacing">
      <input onChange={handleTitleChange} type="text" placeholder="Add title" value={inputTitle}/>
      <textarea onChange={handleContentChange} type="text" placeholder="Add content.." value={inputContent}/>
      <button className="note-button" onClick={submitNote} type="button"><p>+</p></button>
    </div>
  );
}

export default InputNote;