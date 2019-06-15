import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../../utils/api';
import MainClientInfo from '../../Client/components/MainClientInfo';
import ClientStatistic from './ClientStatistic';

class GymHome extends Component {
  state = {statistic: null};
  
  componentDidMount() {
    api.get('/homeStat')
    .then(response => this.setState({statistic: response.data}));
  }
  
  render() {
    const {client} = this.props;
    const {statistic} = this.state;
    
    return (
      <div>
        <MainClientInfo client={client}/>
        <hr/>
        {statistic && <ClientStatistic statistic={statistic}/>}
      </div>
    );
  }
}

GymHome.propTypes = {
  gym: PropTypes.object.isRequired
};

export default GymHome;
