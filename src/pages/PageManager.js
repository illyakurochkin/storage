import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Home from './Home';
import Workouts from './Workouts';
import Coaches from './Coaches';
import Gyms from './Gyms';
import Clients from './Clients';

const Container = styled.div`
  padding: 50px;
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
  
  console.log('mapStateToProos', pageName)
  
  switch(pageName) {
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
  }
};

export default connect(mapStateToProps)(PageManager);