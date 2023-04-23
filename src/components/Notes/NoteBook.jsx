import React, { useState } from "react";
import Note from "./Note";
import InputNote from "./InputNote";

function NoteBook() {
  const [notes, setNotes] = useState([]);

  function addNote(inputNote) {
    setNotes(prevNotes => {
      return [...prevNotes, inputNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        // returns all the element of the array
        // without the provided index element
        return index !== id;
      });
    });
  }

  return (
    <div className="note-book">
      <InputNote onAdd={addNote}/>
      {notes.map((note, index) =>
        <Note id={index} key={index} heading={note.title} content={note.content} onRemove={deleteNote} />
      )}
    </div>
  );
}

export default NoteBook;