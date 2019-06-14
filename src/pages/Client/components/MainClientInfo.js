import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header, Icon, Image} from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  &>* {
    flex: 1;
  }
`;

const StyledHeader = styled(Header)`
  margin: 0;
  padding: 0;
`;

class MainClientInfo extends Component {
  render() {
    const {client} = this.props;
    
    return (
      <Container>
        <div>
          <Image size="medium" src={client.photo}/>
        </div>
        <div>
          <StyledHeader as="h1">{client.name}</StyledHeader>
          {client.email && <p><Icon color="blue" name="mail"/> {client.email}</p>}
          {client.phone && <p><Icon color="blue" name="phone"/> {client.phone}</p>}
          {client.age && <p><Icon color="blue" name="star outline"/> {client.age} years</p>}
        </div>
      </Container>
    );
  }
}

MainClientInfo.propTypes = {
  client: PropTypes.object.isRequired
};

export default MainClientInfo;
