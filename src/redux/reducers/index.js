import { combineReducers } from 'redux'
import categories from './categoriesReducer';
import products from './productsReducer';
import auth from './authReducer';
import currentCategory from './currentCategoryReducer';

export default combineReducers({
  categories, products, auth, currentCategory
});
