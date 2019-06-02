import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Home from './Home';
import Workouts from './Workouts';
import Coaches from './Coaches';
import Gyms from './Gyms';
import Gym from './Gym';
import Clients from './Clients';

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
    case 'gym':
      return {page: <Gym gym={state.page.gym}/>};
  }
};

export default connect(mapStateToProps)(PageManager);