import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../../utils/api';
import MainGymInfo from '../../Gym/components/MainGymInfo';
import GymStatistic from './GymStatistic';

class GymHome extends Component {
  state = {gym: null, homeStatistic: null, timetables: null};
  
  componentDidMount() {
    const {gymId} = this.props;
    
    api.get('/gym', {params: {id: gymId}})
    .then(response => this.setState({gym: response.data.gym, timetables: response.data.coaches}));
    
    api.get('/homeStat')
    .then(response => this.setState({homeStatistic: response.data}));
  }
  
  render() {
    const {gym, homeStatistic, timetables} = this.state;
    
    if(!gym) {
      return null;
    }
    
    return (
      <div>
        <MainGymInfo gym={gym} timetables={timetables}/>
        <hr/>
        {homeStatistic && <GymStatistic statistic={homeStatistic}/>}
      </div>
    );
  }
}

GymHome.propTypes = {
  gymId: PropTypes.object.isRequired,
};

export default GymHome;
