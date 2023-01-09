import { useSelector } from 'react-redux';
import addNotesAction from './boilerplate/actions';
import notesStore from './boilerplate/store';
import { useState } from 'react'

function ReduxComponent() {
  const { dispatch } = notesStore;

  const [note, setNote] = useState('');

  const notes = useSelector((state) => state.uiNotes);

  const addNote = () => {
    const addNoteAct = addNotesAction({title: note });
    dispatch(addNoteAct);
  }

  return <div>
    <h1>REDUX demo</h1>
    {JSON.stringify(notes.uiNotes)}

    <input onChange={(e) => setNote(e.target.value)}/>
    <button onClick={addNote}>Add</button>
  </div>


}

export default ReduxComponent;
