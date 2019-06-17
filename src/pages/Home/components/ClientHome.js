import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../../utils/api';
import MainClientInfo from '../../Client/components/MainClientInfo';
import ClientStatistic from './ClientStatistic';

class ClientHome extends Component {
  state = {client: null, statistic: null};
  
  componentDidMount() {
    const {clientId} = this.props;
    
    api.get('client', {params: {id: clientId}})
    .then(response => this.setState({client: response.data.client}))
    
    api.get('/homeStat')
    .then(response => this.setState({statistic: response.data}));
  }
  
  render() {
    const {client, statistic} = this.state;
    
    console.log('HOME CLIENT ___+++', client);
    
    if(!client) {
      return null;
    }
    
    return (
      <div>
        <MainClientInfo client={client}/>
        <hr/>
        {statistic && <ClientStatistic statistic={statistic}/>}
      </div>
    );
  }
}

ClientHome.propTypes = {
  clientId: PropTypes.number.isRequired
};

export default ClientHome;
