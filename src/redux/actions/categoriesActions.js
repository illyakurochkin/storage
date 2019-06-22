import {FETCH_CATEGORIES} from './actionsTypes';
import api from '../../utils/api';

const fakeFetchCategories = () => new Promise(resolve => setTimeout(() => resolve([
  {category_id: 1, category_name: 'category-1'},
  {category_id: 2, category_name: 'category-2'},
  {category_id: 3, category_name: 'category-3'}
]),500));

export const fetchCategories = () => async dispatch => {
  const categories = await fakeFetchCategories();//api.get('/categories');
  
  dispatch({
    type: FETCH_CATEGORIES,
    categories
  });
};

export const createCategory = category => async dispatch => {
  await api.put('/categories', category);
  dispatch(fetchCategories());
};

export const updateCategory = category => async dispatch => {
  await api.post('/categories', category);
  dispatch(fetchCategories());
  
};

export const deleteCategory = category => async dispatch => {
  await api.delete(`/categories/${category.id}`);
  dispatch(fetchCategories());
};
