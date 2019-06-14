import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimetableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getCoaches = timetable => timetable.map()

class CoachesTimetable extends Component {
  
  renderList() {
  
  }
  
  renderTimetable() {
  
  }
  
  render() {
    return (
      <Container>
        <Content>
          <ListContainer>
          
          </ListContainer>
          <TimetableContainer>
          
          </TimetableContainer>
        </Content>
      </Container>
    );
  }
}

CoachesTimetable.propTypes = {
  timetable: PropTypes.object.isRequired
};

export default CoachesTimetable;