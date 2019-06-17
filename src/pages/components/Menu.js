import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Button, Menu as SemanticMenu} from 'semantic-ui-react';
import {signin, signout} from '../../redux/actions/userActions';
import {setPage} from '../../redux/actions/pageActions';

const Container = styled.div`
  left: 50px;
  position: fixed;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  border-radius: 10px;
  
  margin-top: 100px;
  
  background-color: #EEF6FB;
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 100px;
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
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
`;

class Menu extends Component {
  onSignin = () => this.props.signin('username', 'password');
  onSignout = () => this.props.signout();
  
  renderMenuItems() {
    const {page, setPage, user: {userType}} = this.props;
    
    return (
      <SemanticMenuContainer>
        <SemanticMenu secondary vertical>
          <SemanticMenu.Item
            name="home"
            active={page.name === 'home'}
            onClick={() => setPage({name: 'home'})}
          />
          <SemanticMenu.Item
            name="workouts"
            active={page.name === 'workouts' || page.name === 'createWorkout'}
            onClick={() => setPage({name: 'workouts'})}
          />
          <SemanticMenu.Item
            name="coaches"
            active={page.name === 'coaches' || page.name === 'coach'}
            onClick={() => setPage({name: 'coaches'})}
          />
          <SemanticMenu.Item
            name="gyms"
            active={page.name === 'gyms' || page.name === 'gym'}
            onClick={() => setPage({name: 'gyms'})}
          />
          {(userType === 'manager' || userType === 'coach') && (
            <SemanticMenu.Item
              name="clients"
              active={page.name === 'clients' || page.name === 'client'}
              onClick={() => setPage({name: 'clients'})}
            />
          )}
          {userType === 'manager' && (
            <SemanticMenu.Item
              name="equipment"
              active={page.name === 'equipment'}
              onClick={() => setPage({name: 'equipment'})}
            />
          )}
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
            <p>{user.userData.name ? user.userData.name : user.userData.address}</p>
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
    user: state.user,
    page: state.page
  };
};

export default connect(mapStateToProps, {signin, signout, setPage})(Menu);
