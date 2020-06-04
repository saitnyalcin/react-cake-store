import { createStore } from 'redux';
import chocolateCakeReducer from './cake/chocolateReducer';

const store = createStore(chocolateCakeReducer);

export default store;
