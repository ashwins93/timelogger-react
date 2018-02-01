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
  .then( (response) => {
    response = response.data;
    if(response.message !== "ok") {
      dispatch({
        type: 'LOGIN_FAIL',
        message: response.message
      });
    } else {
      dispatch({
        type: 'LOGIN_SUCCESS',
        message: response.message,
        token: response.token,
        user: name,
      });
    }
  })
  .catch( (error) => {
    console.log('error', error);
    dispatch({
      type: 'LOGIN_FAIL',
      message: error.message
    });
  });
};