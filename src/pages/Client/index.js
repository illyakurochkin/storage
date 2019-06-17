import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainClientInfo from './components/MainClientInfo';
import api from '../../utils/api';

const Container = styled.div``;

class Client extends Component {
  state = {client: null};
  
  componentDidMount() {
    console.log('in client');
    const {clientId} = this.props;
    
    api.get('/client', {params: {id: clientId}})
    .then(response => this.setState({client: response.data.client}));
  }
  
  render() {
    const {client} = this.state;
    
    if(!client) {
      return null;
    }
  
    console.log('client', client);
    
    return (
      <Container>
        <MainClientInfo client={client}/>
        <hr/>
      </Container>
    );
  }
}

Client.propTypes = {
  clientId: PropTypes.number.isRequired
};

export default Client;
