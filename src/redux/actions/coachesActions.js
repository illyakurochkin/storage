import {FETCH_COACHES, FETCH_GYMS} from './actionsTypes';

const fakeGetCoaches = () => new Promise(resolve => setTimeout(() => resolve([
  {
    coachId: 342343,
    name: 'Sydorenko Ivan Olegovych',
    phone: '+42389042384',
    age: 24,
    sportRang: 'super sportsman',
    payment: 20,
    photo: 'https://talksport.com/wp-content/uploads/sites/5/2018/12/GettyImages-10673991241.jpg?strip=all&w=960&quality=100'
  },
  {
    coachId: 34234232343,
    name: 'Sydorenko Ivan Olegovych',
    phone: '+42389042384',
    age: 24,
    sportRang: 'super sportsman',
    payment: 20,
    photo: 'https://talksport.com/wp-content/uploads/sites/5/2018/12/GettyImages-10673991241.jpg?strip=all&w=960&quality=100'
  },
  {
    coachId: 3434,
    name: 'Sydorenko Ivan Olegovych',
    phone: '+42389042384',
    age: 24,
    sportRang: 'super sportsman',
    payment: 20,
    photo: 'https://talksport.com/wp-content/uploads/sites/5/2018/12/GettyImages-10673991241.jpg?strip=all&w=960&quality=100'
  },
  {
    coachId: 22222222,
    name: 'Sydorenko Ivan Olegovych',
    phone: '+42389042384',
    age: 24,
    sportRang: 'super sportsman',
    payment: 20,
    photo: 'https://talksport.com/wp-content/uploads/sites/5/2018/12/GettyImages-10673991241.jpg?strip=all&w=960&quality=100'
  },

]), 500));

export const fetchCoaches = () => dispatch => fakeGetCoaches()
.then(coaches => dispatch({
  type: FETCH_COACHES,
  coaches
}));
