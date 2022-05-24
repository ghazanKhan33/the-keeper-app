import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  function createNewNote(note) {
    setNewNote((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id){
    setNewNote(prevValue =>{
      return prevValue.filter((item, index) =>{
        return index !==id;
      })
    })
  }
  console.log(newNote);
  return (
    <div>
      <Header />
      <CreateArea createNewNote={createNewNote} />
      {newNote.map((toDoNote, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={newNote[index].title}
            content={newNote[index].content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
