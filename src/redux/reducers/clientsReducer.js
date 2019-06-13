import {FETCH_CLIENTS} from '../actions/actionsTypes';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, {type, clients}) => {
  switch(type) {
    case FETCH_CLIENTS:
      return clients;
    default:
      return state;
  }
};
