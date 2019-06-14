import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setPage} from '../../../redux/actions/pageActions';

const Container = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  
  &>* {
    flex: 1;
  }
`;

const ScrollContainer = styled.div`
  width: 350px;
  height: 300px;
  overflow: auto;
`;

class ClientStatistic extends Component {
  goToWorkouts = () => this.props.setPage({name: 'workouts'});
  goToGym = (gymId) => this.props.setPage({name: 'gym', gymId});
  goToCoach = (coachId) => this.props.setPage({name: 'coach', coachId});
  
  render() {
    const {statistic} = this.props;
    
    console.log('ClientStatistic', statistic);
    return (
      <Container>
        <Header as="h2">Statistic</Header>
        <p>
          <a onClick={this.goToWorkouts}>Workouts:</a>
          {` ${statistic.workouts}`}
        </p>
        <Row>
          <div>
            <ScrollContainer>
              {statistic.gyms.map(gym => (
                <p><a onClick={() => this.goToGym(gym.gym)}>{gym.address}</a></p>
              ))}
            </ScrollContainer>
          </div>
          <div>
            <ScrollContainer>
              {statistic.coaches.map(coach => (
                <p><a onClick={() => this.goToCoach(coach.coachId)}>{coach.name}</a></p>
              ))}
            </ScrollContainer>
          </div>
        </Row>
      </Container>
    );
  }
}

ClientStatistic.propTypes = {
  statistic: PropTypes.object.isRequired
};

export default connect(null, {setPage})(ClientStatistic);
