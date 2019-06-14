import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainClientInfo from './components/MainClientInfo';
import api from '../../utils/api';

const Container = styled.div``;

class Client extends Component {
  state = {client: null};
  
  componentDidMount() {
    const {clientId} = this.props;
    
    api.get('/client', {params: {clientId}})
    .then(response => this.setState({client: response.data}));
  }
  
  
  render() {
    const {client} = this.props;
    
    if(!client) {
      return null;
    }
    
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
