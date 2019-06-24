import {SIGN_IN, SIGN_OUT} from './actionsTypes';
import api from '../../utils/api';
import sha256 from '../../utils/sha256';

export const signIn = (login, password) => async dispatch => {
  const hashedPassword = password; //sha256(password);
  const response = await api.post('/login', {login, password: hashedPassword});
  
  localStorage.setItem('Authorization', response.data);
  api.defaults.headers.common.Authorization = response.data;
  
  dispatch({
    type: SIGN_IN,
    token: response.data
  });
};

export const signOut = () => {
  localStorage.removeItem('Authorization');
  api.defaults.headers.common.Authorization = null;
  
  return ({
    type: SIGN_OUT
  });
};
