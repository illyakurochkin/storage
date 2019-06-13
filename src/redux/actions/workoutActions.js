import {FETCH_WORKOUTS} from './actionsTypes';

const fakeGetWorkouts = () => new Promise(resolve => setTimeout(() => resolve([
  {
    client: {
      client_id: 232323,
      name: 354353454
    },
    coach: {
      coach_id: 23434234,
      name: 'Pavliv Denis'
    },
    gym: {
      gym_id: 4234234,
      address: 'Podil street 23A'
    },
    start_time: '5 May 15:00',
    end_time: '5 May 16:00',
    payment: 100
  },
  {
    client: {
      client_id: 232323,
      name: 354353454
    },
    coach: {
      coach_id: 23434234,
      name: 'Rak Tetiana'
    },
    gym: {
      gym_id: 4234234,
      address: 'Verhniy Val street 3'
    },
    start_time: '6 May 12:00',
    end_time: '6 May 13:00',
    payment: 100
  },
  {
    client: {
      client_id: 2432323,
      name: 354353454
    },
    coach: {
      coach_id: 23434234,
      name: 'Samovol Stepan'
    },
    gym: {
      gym_id: 4234234,
      address: 'Podil street 23A'
    },
    start_time: '7 May 15:00',
    end_time: '7 May 16:00',
    payment: 100
  }
]), 100));

export const fetchWorkouts = filter => async dispatch => {
  const workouts = await fakeGetWorkouts(filter);
  
  dispatch({
    type: FETCH_WORKOUTS,
    workouts
  })
};
