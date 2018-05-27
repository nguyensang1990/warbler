import {apiCall, setTokenHeader} from '../../services/api';
import {SET_CURRENT_USER} from '../actionTypes';
import {addError, removeError} from './errors';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const logOut = () => dispatch => {
  localStorage.clear();
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export const setAuthToken = (token) => {
  setTokenHeader(token);
};

export const authUser = (type, userData) => dispatch => {
  return new Promise((resolve, reject) => {
    return apiCall('post', `api/auth/${type}`, userData)
      .then(({token, ...user}) => {
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        dispatch(setCurrentUser(user));
        dispatch(removeError());
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      });
  });
};
