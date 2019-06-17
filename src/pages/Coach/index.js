import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainCoachInfo from './components/MainCoachInfo';
import api from '../../utils/api';

const Container = styled.div``;

class Coach extends Component {
  state = {coach: null, timetables: null};
  
  componentDidMount() {
    const {coachId} = this.props;
    
    api.get('/coach', {params: {id: coachId}})
    .then(response => this.setState({coach: response.data.coach, timetables: response.data.gyms}));
    
  }
  
  render() {
    const {coach, timetables} = this.props;
    
    console.log(this.props);
    
    if (!coach || !timetables) {
      return null;
    }
    
    return (
      <Container>
        <MainCoachInfo coach={coach} timetables={timetables}/>
      </Container>
    );
  }
}

Coach.propTypes = {
  coachId: PropTypes.number.isRequired
};

export default Coach;
