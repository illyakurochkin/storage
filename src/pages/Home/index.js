import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClientHome from './components/ClientHome';
import CoachHome from './components/CoachHome';

class Home extends Component {
  render() {
    const {user} = this.props;
    
    switch (user.userType) {
      case 'client':
        return <ClientHome client={user.userData}/>;
      case 'coach':
        return <CoachHome coach={user.userData}/>;
      case 'admin':
      //return <GymHome gym={user.userData}/>;
      default:
        return null;
    }
  }
}

const mapStateToProps = state => ({user: state.user});

export default connect(mapStateToProps)(Home);
