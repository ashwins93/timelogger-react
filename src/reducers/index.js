import { combineReducers } from 'redux';
import login, * as fromLogin from './login';
import profile, * as fromProfile from './profile';

export default combineReducers({
  login,
  profile,
});

export const getIsWaiting = state => fromLogin.getIsWaiting(state.login);
export const getUser = state => fromLogin.getUser(state.login);
export const getToken = state => fromLogin.getToken(state.login);
export const getMessage = state => fromLogin.getMessage(state.login);

export const getLogs = state => fromProfile.getLogs(state.profile);
export const getIsLoading = state => fromProfile.getIsLoading(state.profile);
