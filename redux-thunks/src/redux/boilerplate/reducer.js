export const initialState = {
  uiNotes: [
    {
      title: "First Note",
    },
    {
      title: "Second Note",
    },
  ],
  catFact: [],
  counter: 1,
};

const notesReducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NOTE": {
      const uiNotes = state.uiNotes;
      uiNotes.push(action.myNoteObject);

      state = {
        ...state,
        uiNotes: JSON.parse(JSON.stringify(uiNotes)),
      };
      break;
    }
    case "ADD_CAT_FACT": {
      console.log(action);
      state = {
        ...state,
      }
      break;
    }
    default: {
      console.log("UNKNOWN ACTION");
    }
  }

  return state;
};

export default notesReducer;
