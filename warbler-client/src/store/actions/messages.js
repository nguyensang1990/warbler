import { apiCall } from '../../services/api';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';
import { addError } from './errors';

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  payload: messages
});

export const fetchMessages = () => dispatch => {
  return apiCall('get', 'api/messages')
    .then(res => dispatch(loadMessages(res)))
    .catch(err => dispatch(addError(err)));
};

export const postNewMessage = text => (dispatch, getState) => {
  let {currentUser} = getState();
  const id = currentUser.user.id;
  return apiCall('post', `/api/user/${id}/messages`, {text})
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};

export const remove = id => ({
  type: REMOVE_MESSAGE,
  payload: id
});

export const removeMessage = (userId, messageId) => dispatch => {
  return apiCall('delete', `/api/user/${userId}/messages/${messageId}`)
    .then(() => dispatch(remove(messageId)))
    .catch(err => dispatch(addError(err)));
};
