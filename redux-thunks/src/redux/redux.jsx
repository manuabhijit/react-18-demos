/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import addNotesAction from "./boilerplate/actions";
import notesStore from "./boilerplate/store";
import { useState } from "react";
import { useEffect } from "react";
import getNewCatFact from "./api.thunk";

function ReduxComponent() {
  const { dispatch } = notesStore;

  const [note, setNote] = useState("");

  const notes = useSelector((state) => {
    return state.uiNotes;
  });

  const addNote = () => {
    const addNoteAct = addNotesAction({ title: note });
    dispatch(addNoteAct);
  };

  const apiCall = () => {
    dispatch(getNewCatFact());
  };


  return (
    <div>
      <h1>REDUX demo</h1>

      {JSON.stringify(notes.uiNotes)}
      <br />
      <input onChange={(e) => setNote(e.target.value)} />
      <button onClick={addNote}>Add</button>

      <button onClick={apiCall}>Call the API</button>

      <ol>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi alias mollitia minima fuga perspiciatis harum. Quaerat, dignissimos doloribus ducimus vel eligendi suscipit minus ipsa earum veniam consectetur harum nemo!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi alias mollitia minima fuga perspiciatis harum. Quaerat, dignissimos doloribus ducimus vel eligendi suscipit minus ipsa earum veniam consectetur harum nemo!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi alias mollitia minima fuga perspiciatis harum. Quaerat, dignissimos doloribus ducimus vel eligendi suscipit minus ipsa earum veniam consectetur harum nemo!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi alias mollitia minima fuga perspiciatis harum. Quaerat, dignissimos doloribus ducimus vel eligendi suscipit minus ipsa earum veniam consectetur harum nemo!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi alias mollitia minima fuga perspiciatis harum. Quaerat, dignissimos doloribus ducimus vel eligendi suscipit minus ipsa earum veniam consectetur harum nemo!</li>
      </ol>
      
    </div>
  );
}

export default ReduxComponent;
