import { combineReducers } from 'redux';
import {
  FETCH_LOGS_SUCCESS,
  FETCH_LOGS_REQUEST,
  FETCH_LOGS_FAIL,
} from './actionTypes';

const logs = (state = [], action) => {
  switch (action.type) {
    case FETCH_LOGS_SUCCESS:
      return action.logs;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_LOGS_REQUEST:
      return true;
    case FETCH_LOGS_SUCCESS:
    case FETCH_LOGS_FAIL:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  logs,
  isLoading,
});

export const getLogs = state => state.logs;
export const getIsLoading = state => state.isLoading;
