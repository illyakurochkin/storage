import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Header} from 'semantic-ui-react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ScrollBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

class GymStatistic extends Component {
  goToClient = clientId => this.props.setPage('client', {clientId});
  
  render() {
    const {statistic} = this.props;
    
    return (
      <Container>
        <Header as="h3" color="primary">Clients</Header>
        <ScrollBox>
          {statistic.clients.map(row => (
            <p key={row.client.clientId}>
              <a color="primary" onClick={() => this.goToClient(row.client.clientId)}>
                {row.client.name}
              </a>
              {' ' + row.count}
            </p>
          ))}
        </ScrollBox>
      </Container>
    );
  }
}

GymStatistic.propTypes = {
  statistic: PropTypes.object.isRequired
};

export default GymStatistic;