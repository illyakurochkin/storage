import {SET_CURRENT_CATEGORY} from '../actions/actionsTypes';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, {type, category_id}) => {
  switch(type) {
    case SET_CURRENT_CATEGORY:
      return category_id;
    default:
      return state;
  }
}