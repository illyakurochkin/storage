import {SET_TOKEN, SIGN_IN, SIGN_OUT} from '../actions/actionsTypes';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
    case SET_TOKEN:
      return action.token;
    case SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
