import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
  border-radius: 5px;
  padding: 20px;
  margin: 20px 0;
  
  &:before {
    content: 'x';
    position: absolute;
    top: 20px;
    right: 20px;
    height: 20px;
    width: 20px;
    color: red;
    font-size: 20px;
    font-weight: 700;
  }
`;

const LinksContainer = styled.div`
  margin-bottom: 15px;
`;

const StyledHeader = styled(Header)`
  margin: 0;
  padding: 0;
`;

class WorkoutCard extends Component {
  render() {
    const {workout} = this.props;
    const {coach, gym, start_time, end_time, payment} = workout;
    
    return (
      <Container>
        <LinksContainer>
          <StyledHeader as="h2">Coach: <a>{coach.name}</a></StyledHeader>
          <StyledHeader as="h2">Gym: <a>{gym.address}</a></StyledHeader>
        </LinksContainer>
        <StyledHeader as="h3">Start: {start_time}</StyledHeader>
        <StyledHeader as="h3">End: {end_time}</StyledHeader>
        <StyledHeader as="h3">Payment: {payment}</StyledHeader>
      </Container>
    );
  }
}

WorkoutCard.propTypes = {
  workout: PropTypes.object.isRequired
};

export default WorkoutCard;
