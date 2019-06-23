import React, {Component} from 'react';
import styled from 'styled-components';
import Products from './Products';
import Categories from './Categories';
import {Header as DefaultHeader} from 'semantic-ui-react';

const Container = styled.div`
  width: 1140px;
  margin: auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Header = styled(DefaultHeader)`
  padding-bottom: 50px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class Page extends Component {
  
  render() {
    return (
      <Container>
        <Header as="h1">STORAGE</Header>
        
        <Content>
          <Categories/>
          <Products/>
        </Content>
      </Container>
    );
  }
}

export default Page;
