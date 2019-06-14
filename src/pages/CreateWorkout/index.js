import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Button, Header, Icon} from 'semantic-ui-react';
import SearchDropdown from './components/SearchDropdown';
import CoachCard from '../Coaches/components/CoachCard';
import GymCard from '../Gyms/components/GymCard';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StepContainer = styled.div`
  padding: 30px;
`;

const FlexContainer = styled.div`
  border-bottom: 1px solid gba(0,0,0,0.35);
`;

const Card = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
  border-radius: 5px;
  margin: 30px 0 60px 0;
`;

const StyledDatepicker = styled(Datepicker)`
  border: 1px solid #CCC;
  height: 20px;
  border-radius: 20px;
  padding: 18px;
  width: 200px;
  margin-bottom: 20px;
  margin-vertical: 20px;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoachName = styled.h4.attrs({className: 'blue'})`
  cursor: pointer;
`;

const CloseButton = styled(Button).attrs({
  circular: true,
  basic: true,
  size: 'mini',
  icon: 'close',
  color: 'red'
})``;

class CreateWorkout extends Component {
  state = {
    coach: null,
    gym: this.props.gym,
    date: null,
    time: ['10:00', '11:00'],
    coaches: [],
    loading: false,
    withCoach: false
  };
  
  renderCoachStep(n) {
    const {coach, coaches, loading} = this.state;
    console.log('coach', this.state);
    return (
      <StepContainer>
        <Row>
          <Header as="h3">
            {coach && <Icon name="check circle outline" color="green"/>}
            {`${n}. Choose available coach`}
          </Header>
          <CloseButton onClick={() => this.setState({coach: null})}/>
        </Row>
        <FlexContainer>
          {!coaches.length && !loading ?
            <p>There are no coaches available coaches. Please, try another time or gym.</p> :
            <ul>{coaches.map(coach => <CoachName color="primary">{coach.name}</CoachName>)}</ul>
          }
          {coach && (
            <CoachCard coach={coach}/>
          )}
        </FlexContainer>
      </StepContainer>
    )
  }
  
  renderGymStep(n) {
    const {gym} = this.state;
    
    return (
      <StepContainer>
        <Row>
          <Header as="h3">
            {gym && <Icon name="check circle outline" color="green"/>}
            {`${n}. Choose gym`}
          </Header>
          <CloseButton onClick={() => this.setState({gym: null, coaches: []})}/>
        </Row>
        <FlexContainer>
          <SearchContainer>
            <SearchDropdown
              style={{flex: 1}}
              value={gym}
              onSelect={gym => this.setState({gym, coaches: []})}
              type="gym"
            />
          </SearchContainer>
          {gym && <GymCard gym={gym}/>}
        </FlexContainer>
      </StepContainer>
    )
  }
  
  renderDateStep(n) {
    const {date, time} = this.state;
    
    return (
      <StepContainer>
        <Row>
          <Header as="h3">
            {date && time && <Icon name="check circle outline" color="green"/>}
            {`${n}. Choose date and time range`}
          </Header>
          <CloseButton onClick={() => this.setState({date: null, time: null})}/>
        </Row>
        <Column>
          <StyledDatepicker
            placeholder={'date'}
            selected={date}
            onChange={date => this.setState({date, coaches: []})}
          />
          <TimeRangePicker
            value={time}
            onChange={time => this.setState({time, coaches: []})}
            clearIcon={null}
            disableClock
          />
        </Column>
      </StepContainer>
    );
  }
  
  onWithCoachClick = () => {
    
    const {gym, date, time} = this.state;
    
    if (!(date && time && gym)) {
      console.log('data', date, 'time', time, 'gym', gym);
      return;
    }
    
    const withCoach = !this.state.withCoach;
    const day = date.getDay() || 7;
    
    this.setState({withCoach});
    console.log(this.state);
    
    if (false && withCoach) {
      const {start, end} = {};
      
      this.setState({loading: true});
      //api.get(`/availableCoaches`, {params: {gymId: gym.gymId, day, start, end}})
      new Promise(resolve => {
        setTimeout(() => resolve([{name: 'first'}, {name: 'second'}, {name: 'third'}]), 100);
      })
      .then(coaches => console.log('---@@@___;', coaches) || coaches)
      .then(response => this.setState({loading: false, coaches: response}));
    }
  };
  
  render() {
    const {withCoach} = this.state;
    
    return (
      <div>
        <Header as="h1">Create Workout</Header>
        <Card>
          {this.renderGymStep(1)}
          {this.renderDateStep(2)}
          <ButtonContainer>
            <Button
              color={withCoach && 'green'}
              onClick={() => console.log('hello world') || this.onWithCoachClick()}
            >With Coach</Button>
          </ButtonContainer>
          {withCoach && this.renderCoachStep(3)}
          <ButtonContainer>
            <Button size="big" primary><Icon name="add"/>Create Workout</Button>
          </ButtonContainer>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {client: state.user.userData};
};

export default connect(mapStateToProps)(CreateWorkout);
