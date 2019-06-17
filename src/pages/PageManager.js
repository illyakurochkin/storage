import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Home from './Home';
import Workouts from './Workouts';
import Coaches from './Coaches';
import Gyms from './Gyms';
import Gym from './Gym';
import Clients from './Clients';
import Coach from './Coach';
import Client from './Client';
import EquipmentList from './EquipmentList';
import CreateWorkout from './CreateWorkout';

const Container = styled.div`
  width: 700px;
  margin: 50px auto;
`;

class PageManager extends Component {
  render() {
    const {page} = this.props;
    
    return (
      <Container>
        {page}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const pageName = state.page.name;
  
  console.log('mapStateToProps', pageName);
  
  switch (pageName) {
    case 'home':
      return {page: <Home/>};
    case 'workouts':
      return {page: <Workouts/>};
    case 'coaches':
      return {page: <Coaches/>};
    case 'gyms':
      return {page: <Gyms/>};
    case 'clients':
      return {page: <Clients/>};
    case 'equipment':
      return {page: <EquipmentList/>};
    case 'gym':
      return {page: <Gym gymId={state.page.gymId}/>};
    case 'coach':
      return {page: <Coach coachId={state.page.coachId}/>};
    case 'client':
      return {page: <Client clientId={state.page.clientId}/>};
    case 'createWorkout':
      return {
        page: <CreateWorkout
          coach={state.page.coach}
          client={state.page.client}
          gym={state.page.gym}
        />
      };
  }
};

export default connect(mapStateToProps)(PageManager);