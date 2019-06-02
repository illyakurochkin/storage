import {FETCH_GYMS} from '../actions/actionsTypes';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, {type, gyms}) => {
  switch(type) {
    case FETCH_GYMS:
      return gyms;
    default:
      return state;
  }
};
