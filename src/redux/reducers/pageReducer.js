import {SET_PAGE} from '../actions/actionsTypes';

const INITIAL_STATE = {name: 'home'};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
};
