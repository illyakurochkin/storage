import {SIGNIN, SIGNOUT} from '../actions/actionsTypes';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, {type, userType, userData}) => {
  console.log('user reducer', state, type, userType, userData);
  switch (type) {
    case SIGNIN:
      return {userType, userData};
    case SIGNOUT:
      return null;
    default:
      return state;
  }
};
