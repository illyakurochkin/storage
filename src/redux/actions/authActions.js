import {SIGN_IN, SIGN_OUT} from './actionsTypes';
import api from '../../utils/api';
import sha256 from '../../utils/sha256';

export const signIn = (login, password) => async dispatch => {
  const hashedPassword = password; //sha256(password);
  const token = await api.post('/login', {login, password: hashedPassword});
  
  localStorage.setItem('Authorization', token);
  api.defaults.headers.common.Authorization = token;
  
  dispatch({
    type: SIGN_IN,
    token
  });
};

export const signOut = () => {
  localStorage.removeItem('Authorization');
  api.defaults.headers.common.Authorization = null;
  
  return ({
    type: SIGN_OUT
  });
};
