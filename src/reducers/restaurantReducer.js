import { GET_RESTAURANTS } from '../actions/types';

const initialState = {
  restaurants: null,
};

export default (state = initialState, action) => {
  console.log('Dispatched Action:', action);
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};
