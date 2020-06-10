import { BUY_CAKE } from './cakeTypes';

// define the initial state of the action
const initialChocolateState = {
  name: 'Chocolate',
  totalNumOfChocolateCakes: 2,
  price: 5.99
};

const chocolateCakeReducer = (state = initialChocolateState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        totalNumOfChocolateCakes: state.totalNumOfChocolateCakes - 1,
        name: state.name,
        price: state.price
      };

    default:
      return state;
  }
};

export default chocolateCakeReducer;
