import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

const INITIAL_STATE = {
  message: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {...state, message: action.payload};
    case REMOVE_ERROR:
      return {...state, message: null};
    default:
      return state;
  }
}
;
