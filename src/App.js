import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Menu from './pages/components/Menu';
import PageManager from './pages/PageManager';
import Signin from './pages/Signin';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  render() {
    const {user} = this.props;
    
    return (
      <Container>
        {user && (
          <Fragment>
            <Menu/>
            <PageManager/>
          </Fragment>
        )}
        {!user && <Signin/>}
      </Container>
    );
  }
}

const mapStateToProps = state => ({user: state.user});

export default connect(mapStateToProps)(App);
