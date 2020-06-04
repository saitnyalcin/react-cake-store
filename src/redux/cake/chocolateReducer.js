import { BUY_CAKE } from './cakeTypes';

const initialChocolateState = {
  name: 'Chocolate',
  totalNumOfChocolateCakes: 2
};

const chocolateCakeReducer = (state = initialChocolateState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        totalNumOfChocolateCakes: state.totalNumOfChocolateCakes - 1,
        name: state.name
      };

    default:
      return state;
  }
};

export default chocolateCakeReducer;
