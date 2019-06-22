import {SIGN_IN, SIGN_OUT} from './actionsTypes';
import api from '../../utils/api';
import sha256 from '../../utils/sha256';

export const signIn = (username, password) => async dispatch => {
  const hashedPassword = sha256(password);
  const token = await api.post('/login', {username, password: hashedPassword});
  
  dispatch({
    type: SIGN_IN,
    token
  });
};

export const signOut = () => ({
  type: SIGN_OUT
});
