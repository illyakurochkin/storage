import React, {Component} from 'react';
import {Header} from 'semantic-ui-react';

class Workouts extends Component {
  render() {
    console.log('render workouts page');
    
    return (
      <div>
        <Header as="h1">Workouts</Header>
      </div>
    );
  }
}

export default Workouts;