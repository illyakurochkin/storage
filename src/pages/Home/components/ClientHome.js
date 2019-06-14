import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import api from '../../../utils/api';
import MainClientInfo from '../../Client/components/MainClientInfo';
import ClientStatistic from './ClientStatistic';

const Container = styled.div``;

class ClientHome extends Component {
  state = {statistic: null};
  
  componentDidMount() {
    api.get('/homeStat')
      .then(response => this.setState({statistic: response.body}));
  }
  
  render() {
    const {client} = this.props;
    const {statistic} = this.state;
    
    console.log('statistic', statistic);
    
    return (
      <Container>
        <MainClientInfo client={client}/>
        <hr/>
        {statistic && <ClientStatistic statistic={statistic}/>}
      </Container>
    );
  }
}

ClientHome.propTypes = {
  client: PropTypes.object.isRequired
};

export default ClientHome;
