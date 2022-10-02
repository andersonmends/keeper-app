import React, { useState } from "react";

function CreateArea(props) {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  function handleChangeTitle(event) {
    const newValue = event.target.value;
    setNoteTitle(newValue);
  }

  function handleChangeText(event) {
    const newValue = event.target.value;
    setNoteText(newValue);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChangeTitle}
          value={noteTitle}
          placeholder="Title"
        />
        <textarea
          onChange={handleChangeText}
          value={noteText}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(noteTitle, noteText);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
