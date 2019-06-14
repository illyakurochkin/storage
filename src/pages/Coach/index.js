import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainCoachInfo from './components/MainCoachInfo';
import api from '../../utils/api';

const Container = styled.div``;

class Coach extends Component {
  componentDidMount() {
    const {coachId} = this.props;
    
    api.get('/coach', {params: coachId})
    .then(response => this.setState({coach: response.data}));
  }
  
  render() {
    const {coach} = this.props;
    
    console.log(this.props);
    
    if (!coach) {
      return null;
    }
    
    return (
      <Container>
        <MainCoachInfo coach={coach}/>
      </Container>
    
    );
  }
}

Coach.propTypes = {
  coachId: PropTypes.number.isRequired
};

export default Coach;
