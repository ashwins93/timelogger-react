import { combineReducers } from 'redux';

const user = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return action.user;
    default:
      return state;
  }
};

const token = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return action.token;
    default:
      return state;
  }
};

const isWaiting = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return true;
    case 'LOGIN_SUCCESS':
    case 'LOGIN_FAIL':
      return false;
    default:
      return state;
  }
}

const message = (state = null, action) => {
  if(action.message) {
    return action.message;
  }
  return state;
}

export default combineReducers({
  user,
  token,
  isWaiting,
  message,
});

export const getIsWaiting = (state) => state.isWaiting;
export const getUser = (state) => state.user;
export const getToken = (state) => state.token;
export const getMessage = (state) => state.message;