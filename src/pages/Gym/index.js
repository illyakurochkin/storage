import React, {Component} from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import {Header, Icon, Image} from 'semantic-ui-react';

const Images = styled(Carousel)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

class Gym extends Component {
  render() {
    const {gym} = this.props;
    
    return (
      <div>
        <Header as="h1">{gym.address}</Header>
        <Images {...settings}>
          {gym.photos.map(photo => <div key={photo}><Image src={photo}/></div>)}
        </Images>
        <p>{gym.description}</p>
        {gym.phone && <p align="right"><Icon color="blue" name="phone"/> {gym.phone}</p>}
        {gym.email && <p align="right"><Icon color="blue" name="mail"/> {gym.email}</p>}
        <FlexContainer>
          <Item>
            <Header as="h3">Coachs statistics</Header>
            <p><a>Cocon Vasyl Igorovych</a> - 4</p>
            <p><a>Sergiuk Alina Romanivna</a> - 2</p>
            <p><a>Gonchar Galyna Romanivna</a> - 5</p>
            <p><a>Sypho Danylo Olegovych</a> - 4</p>
          </Item>
          <Item>
            <Header as="h3">Clients statistics</Header>
            <p><a>Bykov Arsen Danylovych</a> - 3</p>
            <p><a>Berezniuk Olena Ivanivna</a> - 2</p>
            <p><a>Zadonceva Vasylyna Petrivna</a> - 5</p>
            <p><a>Tkachuk Marko Tarasovych</a> - 4</p>
          </Item>
        </FlexContainer>
      </div>
    );
  }
}

export default Gym;
