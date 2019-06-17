import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Header} from 'semantic-ui-react';

const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

class Timetable extends Component {
  get timetableRows() {
    const {timetable} = this.props;
    
    console.log('timetable', timetable);
    
    return [0, 1, 2, 3, 4, 5, 6]
    .map(num => {
      const t = timetable.find(row => row.day === num);
      if(!t) {
        return null;
      }
      
      return {
        startTime: t.startTime,
        endTime: t.endTime
      }
    })
    .map((row, id) => <p>{daysOfWeek[id + 1]} : {row ? `${row.startTime} - ${row.endTime}` : '-'}</p>);
  }
  
  render() {
    return (
      <Container>
        <Header as="h2">Timetable</Header>
        {this.timetableRows}
      </Container>
    );
  }
}

Timetable.propTypes = {
  timetable: PropTypes.array.isRequired
};

export default Timetable;
