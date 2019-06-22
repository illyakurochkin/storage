import { combineReducers } from 'redux'
import categories from './categoriesReducer';
import products from './productsReducer';
import auth from './authReducer';

export default combineReducers({
  categories, products, auth
});
