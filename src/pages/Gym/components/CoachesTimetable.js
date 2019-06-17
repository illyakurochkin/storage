import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Timetable from '../../../pages/components/Timetable';
import {Header} from 'semantic-ui-react';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListContainer = styled.div`
  display: flex;
  width: 100px;
`;

const TimetableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class CoachesTimetable extends Component {
  state = {currentCoachId: _.get(this.props.timetables[0], 'coach.coachId')};
  
  renderList() {
    const {timetables} = this.props;
    const {currentCoachId} = this.state;
    
    const coaches = timetables.map(row => row.coach);
    
    return coaches.map(coach => (
      <a
        onClick={() => this.setState({currentCoachId: coach.coachId})}
        style={currentCoachId === coach.coachId && {backgroundColor: '#CCC'}}
      >
        {coach.name}
      </a>
    ))
  }
  
  renderTimetable() {
    const {timetables} = this.props;
    const {currentCoachId} = this.state;
    
    console.log(timetables);
    const timetable = timetables.find(t => t.coach.coachId === currentCoachId).table;
    
    return <Timetable timetable={timetable}/>
  }
  
  render() {
    return (
      <Container>
        <Content>
          <ListContainer>
            <Header as="h3">Coaches</Header>
            {this.renderList()}
          </ListContainer>
          <TimetableContainer>
            {this.renderTimetable()}
          </TimetableContainer>
        </Content>
      </Container>
    );
  }
}

CoachesTimetable.propTypes = {
  timetables: PropTypes.array.isRequired
};

export default CoachesTimetable;