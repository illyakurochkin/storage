import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Timetable from '../../../pages/components/Timetable';
import {Header} from 'semantic-ui-react';

const FlexContainer = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListContainer = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
`;

const TimetableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class GymsTimetable extends Component {
  state = {currentGymId: _.get(this.props.timetables[0], 'gym.gymId')};
  
  renderList() {
    const {timetables} = this.props;
    const {currentGymId} = this.state;
    
    const gyms = timetables.map(row => row.gym);
    
    return gyms.map(gym => (
      <a
        onClick={() => this.setState({currentGymId: gym.gymId})}
        style={currentGymId === gym.gymId && {backgroundColor: '#CCC'}}
      >
        {gym.address}
      </a>
    ))
  }
  
  renderTimetable() {
    const {timetables} = this.props;
    const {currentGymId} = this.state;
    
    console.log('currentGymId', currentGymId);
    console.log('timetables', timetables);
    
    const timetable = timetables.find(t => t.gym.gymId === currentGymId).tables;
    console.log('tt', timetable);
    return <Timetable timetable={timetable}/>
  }
  
  render() {
    return (
      <div>
        <Header as="h2">Gyms timetables</Header>
        <FlexContainer>
          <Content>
            <ListContainer>
              {this.renderList()}
            </ListContainer>
            <TimetableContainer>
              {this.renderTimetable()}
            </TimetableContainer>
          </Content>
        </FlexContainer>
      </div>
    );
  }
}

GymsTimetable.propTypes = {
  timetables: PropTypes.array.isRequired
};

export default GymsTimetable;