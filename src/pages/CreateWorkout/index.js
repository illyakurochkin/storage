import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Button, Header, Icon} from 'semantic-ui-react';
import SearchDropdown from './components/SearchDropdown';
import CoachCard from '../Coaches/components/CoachCard';
import GymCard from '../Gyms/components/GymCard';

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
  margin-vertical: 20px;
`;

const StyledSearchDropdown = styled(SearchDropdown)`
  width: 200px;
`;

const InlineBlock = styled.div`
  display: inline-block;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled(Button).attrs({
  circular: true,
  basic: true,
  size:'mini',
  icon:'close',
  color:'red'
})``;

class CreateWorkout extends Component {
  state = {
    coach: this.props.coach,
    gym: this.props.gym,
    date: null,
  };
  
  renderCoachStep() {
    const {coach} = this.state;
    
    return (
      <StepContainer>
        <Row>
          <Header as="h3">
            {coach && <Icon name="check circle outline" color="green"/>}
            {'1. Choose coach you like'}
          </Header>
          <CloseButton onClick={() => this.setState({coach: null})}/>
        </Row>
        <FlexContainer>
          <StyledSearchDropdown
            style={{flex: 1}}
            value={coach}
            onSelect={coach => this.setState({coach})}
            type="coach"
          />
          {coach && (
            <CoachCard coach={coach}/>
          )}
        </FlexContainer>
      </StepContainer>
    )
  }
  
  renderGymStep() {
    const {gym} = this.state;
    
    return (
      <StepContainer>
        <Row>
          <Header as="h3">
            {gym && <Icon name="check circle outline" color="green"/>}
            {'2. Choose gym'}
          </Header>
          <CloseButton onClick={() => this.setState({gym: null})}/>
        </Row>
        <FlexContainer>
          <StyledSearchDropdown
            style={{flex: 1}}
            value={gym}
            onSelect={gym => this.setState({gym})}
            type="gym"
          />
          {gym && <GymCard gym={gym}/>}
        </FlexContainer>
      </StepContainer>
    )
  }
  
  renderDateStep() {
    const {date} = this.state;
    
    return (
      <StepContainer>
        <Row>
          <Header as="h3">
            {date && <Icon name="check circle outline" color="green"/>}
            {'3. Choose date'}
          </Header>
          <CloseButton onClick={() => this.setState({date: null})}/>
        </Row>
        <InlineBlock>
          <StyledDatepicker
            selected={date}
            onChange={date => this.setState({date})}
          />
        </InlineBlock>
      </StepContainer>
    );
  }
  
  render() {
    return (
      <div>
        <Header as="h1">Create Workout</Header>
        <Card>
          {this.renderCoachStep()}
          {this.renderGymStep()}
          {this.renderDateStep()}
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
