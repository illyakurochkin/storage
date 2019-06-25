import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Page from './pages/Page';
import Signin from './pages/SignIn';
import api from './utils/api';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  componentDidMount() {
    const {token} = this.props;
    
    localStorage.setItem('Authorization', token);
    api.defaults.headers.common.Authorization = token;
  }
  
  
  render() {
    const {token} = this.props;
    
    if(!token) {
      return <Signin/>
    }
    
    return (
      <Container>
        <Page/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth
});

export default connect(mapStateToProps)(App);
