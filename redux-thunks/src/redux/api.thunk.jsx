import axios from 'axios'

const addCatFact = (myNoteObject) => ({
  type: 'ADD_CAT_FACT',
  myNoteObject,
});

function getNewCatFact() {
  const resource = `https://catfact.ninja/fact`;

  return async (dispatch) => {
    try {
      const response = await axios.get(resource);
      const factText = response.data.fact;

      const action = addCatFact(factText);
      dispatch(action);
    } catch (error) {

      const action = addCatFact("Not found.")
      dispatch(action);
    }
  };
}

export default getNewCatFact;
