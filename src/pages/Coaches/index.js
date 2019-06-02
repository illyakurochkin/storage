import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Item} from 'semantic-ui-react';
import CoachCard from './components/CoachCard';
import styled from 'styled-components';
import {setPage} from '../../redux/actions/pageActions';
import {fetchCoaches} from '../../redux/actions/coachesActions';

const List = styled(Item.Group)`
  width: 700px;
`;

class Coaches extends Component {
  componentDidMount() {
    this.props.fetchCoaches();
  }
  render() {
    const {coaches, setPage} = this.props;
    
    return (
      <div>
        <Header as="h1">Coaches</Header>
        <List divided>
          {coaches && coaches.map(coach => (
            <CoachCard
              key={coach.coachId}
              coach={coach}
              onClick={() => setPage({name: 'coach', coach})}
            />
          ))}
        </List>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {coaches: state.coaches};
};

export default connect(mapStateToProps, {setPage, fetchCoaches})(Coaches);