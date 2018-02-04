import * as api from '../api';
import { getIsWaiting } from '../reducers';

export const authenticate = (name, password) => (dispatch, getState) => {
  if( getIsWaiting(getState()) ) {
    return Promise.resolve();
  }

  dispatch({
    type: 'LOGIN_REQUEST'
  });

 api.authenticate(name, password)
 .then( (apiResponse) => {
    if (apiResponse.message !== "ok" ) {
      return dispatch({
        type: 'LOGIN_FAIL',
        message: apiResponse.message,
      });
    }
    return dispatch({
      type: 'LOGIN_SUCCESS',
      message: apiResponse.message,
      token: apiResponse.token,
      user: name,
    });
 })
 .catch((error) => dispatch({
    type: 'LOGIN_FAIL',
    message: error.message,
  }));
  
};