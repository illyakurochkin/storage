import {FETCH_WORKOUTS} from '../actions/actionsTypes';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, {type, workouts}) => {
  switch(type) {
    case FETCH_WORKOUTS:
      return workouts;
    default:
      return state;
  }
};
