import { combineReducers } from 'redux'
import userReducer from './userReducer';
import pageReducer from './pageReducer';
import gymsReducer from './gymsReducer';
import clientsReducer from './clientsReducer';
import coachesReducer from './coachesReducer';
import workoutsReducer from './workoutsReducer';

export default combineReducers({
  user: userReducer,
  page: pageReducer,
  gyms: gymsReducer,
  clients: clientsReducer,
  coaches: coachesReducer,
  workouts: workoutsReducer
});
