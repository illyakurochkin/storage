import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClientHome from './components/ClientHome';
import CoachHome from './components/CoachHome';
import GymHome from './components/GymHome';

class Home extends Component {
  render() {
    const {user} = this.props;
    
    switch (user.userType) {
      case 'client':
        return <ClientHome clientId={user.userData.clientId}/>;
      case 'coach':
        return <CoachHome coachId={user.userData.coachId}/>;
      case 'admin':
        return <GymHome gymId={user.userData.gymId}/>;
      default:
        return null;
    }
  }
}

const mapStateToProps = state => ({user: state.user});

export default connect(mapStateToProps)(Home);
