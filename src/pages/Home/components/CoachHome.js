import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainCoachInfo from '../../Coach/components/MainCoachInfo';
import CoachStatistic from './CoachStatistic';
import api from '../../../utils/api';

class CoachHome extends Component {
  state = {coach: null, homeStatistic: null, timetables: null};
  
  componentDidMount() {
    const {coachId} = this.props;
    
    api.get('/coach', {params: {coachId}})
    .then(response => this.setState({coach: response.data.coach, timetables: response.data.gyms}));
    
    api.get('/homeStat')
    .then(response => this.setState({homeStatistic: response.data}));
  }
  
  
  render() {
    const {coach, homeStatistic, timetables} = this.state;
    
    if(!coach) {
      return null;
    }
    
    return (
      <div>
        <MainCoachInfo coach={coach} timetables={timetables}/>
        <hr/>
        {homeStatistic && <CoachStatistic statistic={homeStatistic}/>}
      </div>
    );
  }
}

CoachHome.propTypes = {
  coachId: PropTypes.object.isRequired,
};

export default CoachHome;
