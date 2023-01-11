/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import addNotesAction from "./boilerplate/actions";
import notesStore from "./boilerplate/store";
import { useState } from "react";
import { useEffect } from "react";
// import getNewCatFact from "./api.thunk";

function ReduxComponent() {
  const { dispatch } = notesStore;

  const [note, setNote] = useState("");

  const notes = useSelector((state) => state.uiNotes);

  const addNote = () => {
    const addNoteAct = addNotesAction({ title: note });
    dispatch(addNoteAct);
  };

  useEffect(() => {
    // dispatch(getNewCatFact());
  }, []);

  return (
    <div>
      <h1>REDUX demo</h1>

      {JSON.stringify(notes.uiNotes)}
      <br />
      <input onChange={(e) => setNote(e.target.value)} />
      <button onClick={addNote}>Add</button>
    </div>
  );
}

export default ReduxComponent;
