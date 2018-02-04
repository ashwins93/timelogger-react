import { combineReducers } from 'redux';
import login, * as fromLogin from './login';

export default combineReducers({
  login
});

export const getIsWaiting = (state) => fromLogin.getIsWaiting(state.login);
export const getUser = (state) => fromLogin.getUser(state.login);
export const getToken = (state) => fromLogin.getToken(state.login);
export const getMessage = (state) => fromLogin.getMessage(state.login);