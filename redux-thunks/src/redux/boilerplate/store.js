import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import notesReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const notesStore = createStore(
  combineReducers({
    uiNotes: notesReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      // logger
    ),
  ),
);

export default notesStore;
