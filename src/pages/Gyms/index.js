import React, {Component} from 'react';
import styled from 'styled-components';
import {fetchGyms} from '../../redux/actions/gymsActions';
import {setPage} from '../../redux/actions/pageActions';
import {connect} from 'react-redux';
import GymCard from './components/GymCard';
import {Item, Header} from 'semantic-ui-react';

const List = styled(Item.Group)`
  width: 700px;
`;

class Gyms extends Component {
  componentDidMount() {
    this.props.fetchGyms();
  }
  
  render() {
    const {gyms, setPage} = this.props;
    console.log('gyms', gyms);
    
    return (
      <div>
        <Header as="h1">Gyms</Header>
        <List divided>
          {gyms && gyms.map(gym => (
            <GymCard
              key={gym.gymId}
              gym={gym}
              onClick={() => setPage({name: 'gym', gym})}
            />
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({page, gyms}) => ({
  page,
  gyms
});

export default connect(mapStateToProps, {fetchGyms, setPage})(Gyms);
