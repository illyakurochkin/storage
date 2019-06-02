import React, {Component} from 'react';
import {Header, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setPage} from '../../redux/actions/pageActions';

class Workouts extends Component {
  render() {
    const {setPage} = this.props;
    
    return (
      <div>
        <Header as="h1">Workouts</Header>
        <Button primary onClick={() => setPage({name: 'createWorkout'})}>Create Workout</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {

};

export default connect(null, {setPage})(Workouts);
