import {FETCH_PRODUCTS} from '../actions/actionsTypes';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, {type, products}) => {
  switch(type) {
    case FETCH_PRODUCTS:
      return products;
    default:
      return state;
  }
};
