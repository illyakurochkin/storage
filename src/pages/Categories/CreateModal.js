import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Header, Icon, List, Modal} from 'semantic-ui-react';
import {createProduct, fetchCategoryProducts} from '../../redux/actions/productsActions';
import {connect} from 'react-redux';

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

class CreateModal extends Component {
  state = {
    product_name: null,
    product_price: null,
    product_amount: null,
    product_maker: null,
    product_description: null
  };
  
  onCreate = () => {
    const {fetchCategoryProducts, category, close} = this.props;
    
    console.log('CREATE', this.state);
    
    createProduct({...this.state, product_amount: +this.state.product_amount, category_id: category.category_id})
    .then(() => fetchCategoryProducts(category.category_id).then(() => close()));
  };
  
  render() {
    const {category, opened, close} = this.props;
    const {product_name, product_price, product_amount, product_maker, product_description} = this.state;
    
    return (
      <Modal open={opened} onClose={close} basic size='mini'>
        <Header icon='archive' content={`Add product to category '${category.category_name}'`}/>
        <Modal.Content>
          <p>
            Enter fields
          </p>
          <List>
            <li>
              {'Name:'}
              <Input
                type="text"
                value={product_name}
                onChange={e => this.setState({product_name: e.target.value})}
                placeholder="Name"
              />
            </li>
            <li>
              {'Price:'}
              <Input
                type="number"
                value={product_price}
                onChange={e => this.setState({product_price: e.target.value})}
                placeholder="Price"
              />
            </li>
            <li>
              {'Amount:'}
              <Input
                type="number"
                value={product_amount}
                onChange={e => this.setState({product_amount: e.target.value})}
                placeholder="Amount"
              />
            </li>
            <li>
              {'Maker:'}
              <Input
                type="text"
                value={product_maker}
                onChange={e => this.setState({product_maker: e.target.value})}
                placeholder="Maker"
              />
            </li>
            <li>
              {'Description:'}
              <Input
                type="text"
                value={product_description}
                onChange={e => this.setState({product_description: e.target.value})}
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

CreateModal.propTypes = {
  category: PropTypes.object.isRequired,
  opened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  fetchCategoryProducts: PropTypes.func.isRequired
};

export default connect(null, {fetchCategoryProducts})(CreateModal);