import { ACTION_TYPE_01, ACTION_TYPE_02 } from './actionTypes';

export const actionOne = (parameter_01) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPE_01, payload: parameter_01 })
  }
};

export const actionTwo = (parameter_02) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPE_02, payload: parameter_02 })
  }
};