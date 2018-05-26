import {SET_CURRENT_USER} from '../actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {} // all the user info when logged in
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        // if the object have key turn true, false if it doesn't
        isAuthenticated: !!Object.keys(action.payload).length,
        user: action.payload
      };
    default:
      return state;
  }
};
