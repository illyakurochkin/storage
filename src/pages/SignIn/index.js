import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Button, Form, Header} from 'semantic-ui-react';
import {signIn} from '../../redux/actions/authActions';

const Container = styled.div`
  margin: 60px auto;
  padding: 50px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
  width: 500px;
  border-radius: 5px;
`;

const StyledForm = styled(Form)`
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const StyledButton = styled(Button)`
  width: 200px;
  margin: 0 auto;
`;

class SignIn extends Component {
  state = {login: '', password: ''};
  
  onSubmit = () => {
    const {signIn} = this.props;
    const {login, password} = this.state;
    
    signIn(login, password);
  };
  
  render() {
    const {login, password} = this.state;
    console.log('state', this.state);
    
    return (
      <Container>
        <Header as="h1">Sign In</Header>
        <StyledForm onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Login</label>
            <input
              value={login}
              onChange={e => this.setState({login: e.target.value})}
              placeholder='login'
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              value={password}
              onChange={e => this.setState({password: e.target.value})}
              type="password"
              placeholder='******'
            />
          </Form.Field>
          <ButtonContainer>
            <StyledButton primary type='submit'>Submit</StyledButton>
          </ButtonContainer>
        </StyledForm>
      </Container>
    );
  }
}

export default connect(null, {signIn})(SignIn);
