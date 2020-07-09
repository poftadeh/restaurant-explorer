import { GET_RESTAURANTS, SET_REFINE_TEXT } from '../actions/types';

const initialState = {
  restaurants: null,
  refineText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case SET_REFINE_TEXT:
      return {
        ...state,
        refineText: action.text,
      };
    default:
      return state;
  }
};
