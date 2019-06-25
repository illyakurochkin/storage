import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Header, Icon, List, Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {fetchCategories, createCategory} from '../../redux/actions/categoriesActions';

const Input = styled.input`
  background-color: rgba(0,0,0,0);
  border-width: 0;
  padding: 5px;
  border: 1px solid #CCC;
  margin: 5px 0;
  border-radius: 3px;
  color: white
  margin-left: 10px;
`;

class CreateCategory extends Component {
  state = {
    category_name: null,
    category_description: null
  };
  
  onCreate = () => {
    const {fetchCategories, close} = this.props;
    
    if(!this.state.category_name) {
      return alert('category name is empty');
    }
    
    createCategory(this.state)
    .then(() => fetchCategories())
    .then(() => this.setState({category_name: null, category_description: null}))
    .then(() => close())
    .catch(() => alert('category name is already used'));
  };
  
  render() {
    const {opened, close} = this.props;
    const {category_name, category_description} = this.state;
    
    return (
      <Modal open={opened} onClose={close} basic size='mini'>
        <Header icon='archive' content={`Create new category`}/>
        <Modal.Content>
          <p>
            Enter fields
          </p>
          <List>
            <li>
              {'Name:'}
              <Input
                type="text"
                value={category_name}
                onChange={e => this.setState({category_name: e.target.value})}
                placeholder="Name"
              />
            </li>
            <li>
              {'Description:'}
              <Input
                type="text"
                value={category_description}
                onChange={e => this.setState({category_description: e.target.value})}
                placeholder="Description"
              />
            </li>
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={close} basic color='red' inverted>
            <Icon name='remove'/> No
          </Button>
          <Button onClick={this.onCreate} basic color='green' inverted>
            <Icon name='checkmark'/> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

CreateCategory.propTypes = {
  opened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

export default connect(null, {fetchCategories})(CreateCategory);
