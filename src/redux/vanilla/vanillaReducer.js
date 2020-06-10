import { BUY_VANILLA } from './vanillaTypes';

// define the initial state of the action
const initialVanillaState = {
  name: 'Vanilla',
  totalNumOfVanillaCakes: 5,
  price: 3.99
};

const vanillaCakeReducer = (state = initialVanillaState, action) => {
  switch (action.type) {
    case BUY_VANILLA:
      return {
        ...state,
        totalNumOfVanillaCakes: state.totalNumOfVanillaCakes - 1,
        name: state.name,
        price: state.price
      };

    default:
      return state;
  }
};

export default vanillaCakeReducer;
