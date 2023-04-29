import React, { useState } from "react";
import Note from "./Note";
import InputNote from "./InputNote";

var work = [];

function NoteBook(props) {
  const [notes, setNotes] = useState([]);

  function addNote(inputNote) {
    setNotes(prevNotes => {
      return [...prevNotes, inputNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((_, index) => {
        // returns all the element of the array
        // without the provided index element
        return index !== id;
      });
    });
  }

  function checkProps(array) {
    if (array.length === 0) { work = notes }
    else { work = array }
  }

  return (
    <div className='note-book'>
      <InputNote onAdd={addNote}/>
      {checkProps(props.notes)}
      {work.map((note, index) =>
        <Note id={index} key={note.title + '_' + index}
          heading={note.title} content={note.content}
          onRemove={deleteNote} />
      )}
    </div>
  );
}

export default NoteBook;