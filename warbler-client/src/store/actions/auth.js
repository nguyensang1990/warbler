import {apiCall} from '../../services/api';
import {SET_CURRENT_USER} from '../actionTypes';

export const setCurrentUser = (user) =>  ({
    type: SET_CURRENT_USER,
    payload: user
});

export const authUser = (type, userData) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `api/auth/${type}`, userData)
        .then(({token, ...user}) => {
            localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser(user));
            resolve();
        })
    })
};
