import * as api from '../api';
import { 
  getIsWaiting,
  getIsLoading,
} from '../reducers';
import * as actionTypes from '../reducers/actionTypes';


export const authenticate = (name, password) => (dispatch, getState) => {
  if( getIsWaiting(getState()) ) {
    return Promise.resolve();
  }

  dispatch({
    type: actionTypes.LOGIN_REQUEST
  });

 api.authenticate(name, password)
 .then( (apiResponse) => {
    if (apiResponse.message !== "ok" ) {
      return dispatch({
        type: actionTypes.LOGIN_FAIL,
        message: apiResponse.message,
      });
    }
    return dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      message: apiResponse.message,
      token: apiResponse.token,
      user: name,
    });
 })
 .catch((error) => dispatch({
    type: actionTypes.LOGIN_FAIL,
    message: error.message,
  }));
  
};

export const fetchLogs = ( name ) => ( dispatch, getState ) => {
  if ( getIsLoading( getState() ) ) {
    return Promise.resolve();
  }
  
  dispatch({
    type: actionTypes.FETCH_LOGS_REQUEST
  });
  
  api.getLogs(name)
  .then( response => {
    if ( response.logs ) {
      return dispatch({
        type: actionTypes.FETCH_LOGS_SUCCESS,
        logs: response.logs,
      });
    }
    return dispatch({
      type: actionTypes.FETCH_LOGS_FAIL,
      message: response.message,
    });
  })
  .catch((error) => dispatch({
    type: actionTypes.FETCH_LOGS_FAIL,
    message: error.message,
  }));
  
  return;
};