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
      </div>
    );
  }
}

export default Gym;
