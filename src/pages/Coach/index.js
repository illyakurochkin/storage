import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainCoachInfo from './components/MainCoachInfo';

const Container = styled.div``;

class Coach extends Component {
  render() {
    const {coach} = this.props;
    
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
