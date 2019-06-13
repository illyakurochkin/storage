import {SIGNIN, SIGNOUT} from '../actions/actionsTypes';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, {type, user}) => {
  console.log('user reducer', state, type, user);
  switch (type) {
    case SIGNIN:
      return user;
    case SIGNOUT:
      return null;
    default:
      return state;
  }
};
