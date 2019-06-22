import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Page from './pages/Page';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  
  render() {
    const {token} = this.props;
    
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
