import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainGymInfo from './components/MainGymInfo';
import api from '../../utils/api';

const Container = styled.div``;

class Gym extends Component {
  state = {gym: null, timetables: null, statistic: null};
  
  componentDidMount() {
    const {gymId} = this.props;
    
    api.get('/gym', {params: {gymId}})
    .then(response => this.setState({
      gym: response.data.gym,
      timetables: response.data.coaches,
      statistic: response.data.statistic
    }));
    
  }
  
  render() {
    const {gym, statistic, timetables} = this.state;
    
    if (!gym) {
      return null;
    }
    
    return (
      <Container>
        <MainGymInfo
          gym={gym}
          timetables={timetables}
          statistic={statistic}
        />
      </Container>
    )
  }
}

Gym.propTypes = {
  gymId: PropTypes.number.isRequired
};

export default Gym;
