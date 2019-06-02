import { combineReducers } from 'redux'
import userReducer from './userReducer';
import pageReducer from './pageReducer';
import gymsReducer from './gymsReducer';

export default combineReducers({
  user: userReducer,
  page: pageReducer,
  gyms: gymsReducer
});
