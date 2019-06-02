import React, {Component} from 'react';
import styled from 'styled-components';
import Menu from './pages/components/Menu';
import PageManager from './pages/PageManager';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Menu/>
        <PageManager/>
      </Container>
    );
  }
}


export default App;
