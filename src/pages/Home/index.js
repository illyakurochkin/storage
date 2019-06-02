import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header} from 'semantic-ui-react';

class Home extends Component {
  render() {
    const {user} = this.props;
    
    return (
      <div>
        <Header as="h1">Home</Header>
        <p>{JSON.stringify(user)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.user};
};

export default connect(mapStateToProps)(Home);
