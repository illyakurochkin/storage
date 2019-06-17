import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Header} from 'semantic-ui-react';

const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

class Timetable extends Component {
  get timetableRows() {
    const {timetable} = this.props;
    
    console.log('timetable', timetable);
    
    return [1, 2, 3, 4, 5, 6, 7]
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
    .map((row, id) => <p>{daysOfWeek[id]} : {row ? `${row.startTime} - ${row.endTime}` : '-'}</p>);
  }
  
  render() {
    return (
      <Container>
        <Header as="h3">Timetable</Header>
        {this.timetableRows}
      </Container>
    );
  }
}

Timetable.propTypes = {
  timetable: PropTypes.array.isRequired
};

export default Timetable;
