import { useState, useEffect } from "react";
import Axios from 'axios';
import Note from "./Note";
import InputNote from "./InputNote";

export default function NoteBook(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    function getNotes() {
      Axios.post(process.env.REACT_APP_NOTE_URL + '/allNotes',
      { mail: props.id }).then(res => setNotes(res.data));
    };
    getNotes();
  }, [notes, props.id]);

  function addNote(inputNote) {
    Axios.post(process.env.REACT_APP_NOTE_URL + '/addNote',
    { mail: props.id, note: inputNote })
  }

  function deleteNote(id) {
    Axios.post(process.env.REACT_APP_NOTE_URL + '/deleteNote',
    { mail: props.id, note: id })
  }

  return (
    <div className='note-book'>
      <InputNote onAdd={addNote}/>
      {notes.map((element) =>
        <Note id={element._id} key={element._id}
          heading={element.title} content={element.content}
          onRemove={deleteNote} />
      )}
    </div>
  );
}
