import {FETCH_CLIENTS} from './actionsTypes';
import api from '../../utils/api';

export const fetchClients = ({coachId, gymId}) => async dispatch => {
  const body = coachId ? `coachId=${coachId}` : `gymId=${gymId}`;
  const {data} = await api.get(`/clients?${body}`);
  
  dispatch({
    type: FETCH_CLIENTS,
    clients: data
  });
};
