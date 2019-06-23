import {SET_CURRENT_CATEGORY} from './actionsTypes';

export const setCurrentCategory = category_id => ({
  type: SET_CURRENT_CATEGORY,
  category_id
});
