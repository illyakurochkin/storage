import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainCoachInfo from '../../Coach/components/MainCoachInfo';
import CoachStatistic from './CoachStatistic';
import api from '../../../utils/api';

const Container = styled.div``;

class CoachHome extends Component {
  state = {statistic: null};
  
  componentDidMount() {
    const {coach} = this.props;
    
    api.get('/homeStat', {params: {coachId: coach.coachId}})
    .then(response => this.setState({statistic: response.data}));
  }
  
  
  render() {
    const {coach} = this.props;
    const {statistic} = this.state;
    
    console.log(coach, statistic, 'CoachHome');
    return (
      <Container>
        <MainCoachInfo coach={coach}/>
        <hr/>
        {statistic && <CoachStatistic statistic={statistic}/>}
      </Container>
    );
  }
}

CoachHome.propTypes = {
  coach: PropTypes.object.isRequired
};

export default CoachHome;
