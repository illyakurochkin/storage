import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Header, Icon, Image} from 'semantic-ui-react';
import Carousel from 'nuka-carousel';

const Container = styled.div``;

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

class MainGymInfo extends Component {
  render() {
    const {gym} = this.props;
    
    return (
      <Container>
        <Header as="h1">{gym.address}</Header>
        <Images {...settings}>
          {gym.photos.map(photo => <div key={photo}><Image src={photo}/></div>)}
        </Images>
        <p>{gym.description}</p>
        {gym.phone && <p align="right"><Icon color="blue" name="phone"/> {gym.phone}</p>}
        {gym.email && <p align="right"><Icon color="blue" name="mail"/> {gym.email}</p>}
        {gym.fine && <p align="right"><Icon color="blue" name="start"/> {gym.fine}</p>}
      </Container>
    );
  }
}

MainGymInfo.propTypes = {
  gym: PropTypes.object.isRequired
};

export default MainGymInfo;
