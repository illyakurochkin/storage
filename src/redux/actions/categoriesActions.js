import {FETCH_CATEGORIES} from './actionsTypes';
import api from '../../utils/api';

let categories = [
  {category_id: 1, category_name: 'category-1', category_description: 'category-1 description'},
  {category_id: 2, category_name: 'category-2', category_description: 'category-2 description'},
  {category_id: 3, category_name: 'category-3', category_description: 'category-3 description'}
];

const fakeFetchCategories = () => new Promise(resolve => setTimeout(() => resolve(categories),500));

export const fetchCategories = () => async dispatch => {
  const categories = await fakeFetchCategories();//api.get('/categories');
  
  dispatch({
    type: FETCH_CATEGORIES,
    categories
  });
};

export const createCategory = category => {
  // await api.put('/categories', category);
  categories = [...categories, category];
  return Promise.resolve();
};

export const updateCategory = category => {
  // await api.post('/categories', category);
  categories = categories.map(c => c.category_id === category.category_id ? category : c);
  return Promise.resolve();
};

export const deleteCategory = async category_id => {
  // await api.delete(`/categories/${category.id}`);
  categories = categories.filter(c => c.category_id !== category_id);
  return Promise.resolve();
};
