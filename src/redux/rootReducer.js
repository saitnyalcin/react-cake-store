import chocolateReducer from './cake/chocolateReducer';
import vanillaReducer from './vanilla/vanillaReducer';

const redux = require('redux');
const combineReducer = redux.combineReducers;

const rootReducer = combineReducer({
  vanilla: vanillaReducer,
  chocolate: chocolateReducer
});

export default rootReducer;
