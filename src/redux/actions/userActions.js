import {SIGNIN, SIGNOUT} from './actionsTypes';
import sha256 from '../../utils/sha256';
import api from '../../utils/api';

const fakeSignin = (username, password) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({
      userType: 'client',
      userData: {clientId: 123123, name: 'Gonchar Galyna Romanivna'}
    }), 500));

/*const fakeGetCoach = (coachId) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({coachId: 123123, name: 'Semonenko Petro Stepanovych'}), 500));

const fakeGetClient = (clientId) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({clientId: 332323, name: 'Kurochking Illya'}), 500));

const fakeGetGym = (gymId) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({gymId: 3534342324, name: 'Kyiv, Kontraktova street, 5'}), 500));*/

export const signin = (username, password) => async dispatch => {
  const token = `${username}+${password}`;
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.Authorization = token;
  
  const {date: {userType, userData}} = api.get('/auth');
  
  return dispatch({
    type: SIGNIN,
    userType,
    userData
  });
};

export const signout = () => {
  console.log('signout');
  api.defaults.headers.common.Authorization = null;
  return ({type: SIGNOUT});
};
