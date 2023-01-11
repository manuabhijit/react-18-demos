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
      dispatch(addCatFact(response.data.fact));
    } catch (error) {
    }
  };
}

export default getNewCatFact;
