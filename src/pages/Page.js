import React, {Component} from 'react';
import styled from 'styled-components';
import Products from './Products';
import Categories from './Categories';
import {Header as DefaultHeader, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {signOut} from '../redux/actions/authActions';

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
    const {signOut} = this.props;
    
    return (
      <Container>
        <Header as="h1">STORAGE</Header>
        <Button onClick={signOut}>Sign Out</Button>
        
        <Content>
          <Categories/>
          <Products/>
        </Content>
      </Container>
    );
  }
}

export default connect(null, {signOut})(Page);
