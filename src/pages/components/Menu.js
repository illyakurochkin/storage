import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Button, Menu as SemanticMenu} from 'semantic-ui-react';
import {signin, signout} from '../../redux/actions/userActions';
import {setPage} from '../../redux/actions/pageActions';

const Container = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid black;
  width: 100%;
`;

const AuthInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const UserType = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const AuthButton = styled(Button).attrs({primary: true})`
  flex: 1;
`;

const SemanticMenuContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

class Menu extends Component {
  
  onSignin = () => this.props.signin('username', 'password');
  onSignout = () => this.props.signout();
  
  renderMenuItems() {
    const {page, setPage} = this.props;
    
    return (
      <SemanticMenuContainer>
        <SemanticMenu secondary vertical style={{paddingTop: 100}}>
          <SemanticMenu.Item
            name="home"
            active={page.name === 'home'}
            onClick={() => setPage({name: 'home'})}
          />
          <SemanticMenu.Item
            name="workouts"
            active={page.name === 'workouts'}
            onClick={() => setPage({name: 'workouts'})}
          />
          <SemanticMenu.Item
            name="coaches"
            active={page.name === 'coaches'}
            onClick={() => setPage({name: 'coaches'})}
          />
          <SemanticMenu.Item
            name="gyms"
            active={page.name === 'gyms'}
            onClick={() => setPage({name: 'gyms'})}
          />
          <SemanticMenu.Item
            name="clients"
            active={page.name === 'clients'}
            onClick={() => setPage({name: 'clients'})}
          />
        </SemanticMenu>
      </SemanticMenuContainer>
    )
  }
  
  renderAuthContainer() {
    const {user} = this.props;
    console.log('user', user);
    return (
      <AuthContainer>
        {user && (
          <AuthInfo>
            <UserType>{user.userType}</UserType>
            <p>{user.name}</p>
          </AuthInfo>
        )}
        <AuthButton
          content={user ? 'sign out' : 'sign in'}
          onClick={() => user ? this.onSignout() : this.onSignin()}
        />
      </AuthContainer>
    );
  }
  
  render() {
    return (
      <Container>
        {this.renderAuthContainer()}
        {this.renderMenuItems()}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log('redux state', state);
  return {
    user: state.user && {
      userType: state.user.userType,
      ...state.user.userData
    },
    page: state.page
  };
};

export default connect(mapStateToProps, {signin, signout, setPage})(Menu);
