import {FETCH_CATEGORIES} from '../actions/actionsTypes';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, {type, categories}) => {
  switch(type) {
    case FETCH_CATEGORIES:
      return categories;
    default:
      return state;
  }
};
