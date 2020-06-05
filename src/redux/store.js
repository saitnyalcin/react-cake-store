import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
console.log('initial states', store.getState());

export default store;
