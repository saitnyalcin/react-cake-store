import { BUY_VANILLA } from './vanillaTypes';

const initialVanillaState = {
  name: 'Vanilla',
  totalNumOfVanillaCakes: 5
};

const vanillaCakeReducer = (state = initialVanillaState, action) => {
  switch (action.type) {
    case BUY_VANILLA:
      return {
        ...state,
        totalNumOfVanillaCakes: state.totalNumOfVanillaCakes - 1,
        name: state.name
      };

    default:
      return state;
  }
};

export default vanillaCakeReducer;
