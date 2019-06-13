import React, {Component} from 'react';
import styled from 'styled-components';
import {Header, Icon, Image} from 'semantic-ui-react';

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
`;

const StyledImage = styled(Image)`
  margin-right: 20px;
`;

const Content = styled.div`

`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class Gym extends Component {
  render() {
    const {coach} = this.props;
    
    return (
      <Content>
        <FlexContainer>
          <div>
            <StyledImage size="medium" src={coach.photo}/>
          </div>
          <div>
            <StyledHeader as="h1">{coach.name}</StyledHeader>
            {coach.age && <p><Icon color="blue" name="star outline"/> {coach.age} years</p>}
            {coach.sportRang && <p><Icon color="blue" name="trophy"/> {coach.sportRang}</p>}
            {coach.email && <p><Icon color="blue" name="mail"/> {coach.email}</p>}
            {coach.phone && <p><Icon color="blue" name="phone"/> {coach.phone}</p>}
          </div>
        </FlexContainer>
        <Header as="h3">Common Clients</Header>
        <p><a>Bykov Arsen Danylovych</a> - 3</p>
        <p><a>Berezniuk Olena Ivanivna</a> - 2</p>
        <p><a>Zadonceva Vasylyna Petrivna</a> - 5</p>
        <p><a>Tkachuk Marko Tarasovych</a> - 4</p>
      </Content>
    
    );
  }
}

export default Gym;
