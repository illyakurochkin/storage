import React, {Component} from 'react';
import styled from 'styled-components';
import Products from './Products';
import Categories from './Categories';

const Container = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

class Page extends Component {
  
  render() {
    return (
      <Container>
        <Categories/>
        <Products/>
      </Container>
    );
  }
}

export default Page;
