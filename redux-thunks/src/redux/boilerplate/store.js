import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import notesReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const notesStore = createStore(
  combineReducers({
    uiNotes: notesReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      // logger
      thunk
    ),
  ),
);

export default notesStore;
