import {SIGNIN, SIGNOUT} from './actionsTypes';

const fakeSignin = (username, password) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({userType: 'coach', userData: {coachId: 123123, name: 'Semonenko Petro Stepanovych'}}), 500));

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
  const {userType, userData} = await fakeSignin(username, password);
  
  return dispatch({
    type: SIGNIN,
    userType,
    userData
  });
};

export const signout = () => {
  console.log('signout');
  return ({type: SIGNOUT});
};
