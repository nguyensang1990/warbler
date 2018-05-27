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
