import { combineReducers } from 'redux'
import userReducer from './userReducer';
import pageReducer from './pageReducer';
import gymsReducer from './gymsReducer';
import coachesReducer from './coachesReducer';
import workoutsReducer from './workoutsReducer';

export default combineReducers({
  user: userReducer,
  page: pageReducer,
  gyms: gymsReducer,
  coaches: coachesReducer,
  workouts: workoutsReducer
});
