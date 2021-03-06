import {SIGN_IN, SIGN_OUT, SET_TOKEN} from './actionsTypes';
import api from '../../utils/api';
import sha256 from '../../utils/sha256';

export const signIn = (login, password) => async dispatch => {
  try {
    const hashedPassword = sha256(password);
    console.log({hashedPassword});
    const response = await api.post('/login', {login, password: hashedPassword});
  
    localStorage.setItem('Authorization', response.data);
    api.defaults.headers.common.Authorization = response.data;
  
    dispatch({
      type: SIGN_IN,
      token: response.data
    });
  } catch (e) {
    alert('incorrect login or password');
  }
};

export const setToken = token => ({
  type: SET_TOKEN,
  token
});

export const signOut = () => {
  localStorage.removeItem('Authorization');
  api.defaults.headers.common.Authorization = null;
  
  return ({
    type: SIGN_OUT
  });
};
