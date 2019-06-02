import {FETCH_COACHES} from '../actions/actionsTypes';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, {type, coaches}) => {
  switch(type) {
    case FETCH_COACHES:
      return coaches;
    default:
      return state;
  }
};
