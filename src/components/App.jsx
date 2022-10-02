import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(noteTitle, noteText) {
    // this.preventDefault();
    const note = {
      title: noteTitle,
      text: noteText
    };
    setNoteList((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div>
        {noteList.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.text}
            onDelete={deleteNote}
          />
        ))}

        <Footer />
      </div>
    </div>
  );
}

export default App;
