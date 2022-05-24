import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function updateNotes(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function clickHandler(event) {
    props.createNewNote(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={updateNotes}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={updateNotes}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={clickHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
