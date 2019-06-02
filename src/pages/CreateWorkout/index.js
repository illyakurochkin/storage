import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Header, Dropdown} from 'semantic-ui-react';
import SearchDropdown from './components/SearchDropdown';
import CoachCard from '../Coaches/components/CoachCard';
import GymCard from '../Gyms/components/GymCard';

const Container = styled.div`
`;

class CreateWorkout extends Component {
  state = {
    coach: this.props.coach,
    gym: this.props.gym
  };
  
  render() {
    const {client} = this.props;
    const {coach, gym} = this.state;
    
    return (
      <Container>
        <Header as="h1">Create Workout</Header>
        
        
        <Header as="h2">Coach</Header>
        <SearchDropdown
          value={coach}
          onSelect={coach => this.setState({coach})}
          type="coach"
        />
        {coach && (
          <CoachCard coach={coach}/>
        )}
  
        <hr/>
        <Header as="h2">Gym</Header>
        <SearchDropdown
          value={gym}
          onSelect={gym => this.setState({gym})}
          type="gym"
        />
        {gym && (
          <GymCard gym={gym}/>
        )}
        
        <hr/>
        <p>{JSON.stringify(coach)}</p>
        <p>{JSON.stringify(gym)}</p>
        <p>{JSON.stringify(client)}</p>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {client: state.user.userData};
};

export default connect(mapStateToProps)(CreateWorkout);
