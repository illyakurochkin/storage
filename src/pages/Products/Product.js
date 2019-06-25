import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, Header, Icon, Input, Label, Modal, Table} from 'semantic-ui-react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteProduct, fetchCategoryProducts, fetchProducts, updateProduct} from '../../redux/actions/productsActions';
import {fetchCategories} from '../../redux/actions/categoriesActions';

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 100px;
`;

const validateProduct = product =>
  !!(product && product.product_name && product.product_maker && product.product_price >= 0 && product.product_amount >= 0);

class Product extends Component {
  state = {
    edit: false,
    editProduct: {...this.props.product},
    recycle: false,
    editAmount: 0
  };
  
  get deleteModal() {
    const {product} = this.props;
    const {open} = this.state;
    
    return (
      <Modal open={open} onClose={() => this.setState({open: false})} basic size='mini'>
        <Header icon='archive' content={`Delete product '${product.product_name}'`}/>
        <Modal.Content>
          <p>
            Are you sure you want to delete this product?
          </p>
          <ul>
            <li>Name: {product.product_name}</li>
            <li>Price: {product.product_price}</li>
            <li>Amount: {product.product_amount}</li>
            <li>Maker: {product.product_maker}</li>
            <li>Description: {product.product_description}</li>
          </ul>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.setState({open: false})} basic color='red' inverted>
            <Icon name='remove'/> No
          </Button>
          <Button onClick={this.onDelete} basic color='green' inverted>
            <Icon name='checkmark'/> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
  
  get recycleModal() {
    const {product, currentCategoryId} = this.props;
    const {editAmount, recycle} = this.state;
    
    if(!recycle) {
      return null;
    }
    
    return (
      <Modal basic size="mini" open={recycle} onClose={() => this.setState({recycle: false})}>
        <Header icon='archive' content={`Change product '${product.product_name}' amount?`}/>
        <Modal.Content>
          <p>
            Enter product amount
          </p>
          <input placeholder="amount" value={editAmount} onChange={e => this.setState({editAmount: e.target.value})}/>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => +product.product_amount - +editAmount >= 0 &&  updateProduct({...product, product_amount: +product.product_amount - +editAmount})
          .then(() => currentCategoryId ? fetchCategoryProducts(currentCategoryId) : fetchProducts())
          .then(fetchCategories)
          .then(() => this.setState({recycle: false}))} basic color='red' inverted>
            <Icon name='minus'/>
          </Button>
          <Button onClick={() => +product.product_amount + +editAmount >= 0 &&  updateProduct({...product, product_amount: +product.product_amount + +editAmount})
          .then(() => currentCategoryId ? fetchCategoryProducts(currentCategoryId) : fetchProducts())
          .then(fetchCategories)
          .then(() => this.setState({recycle: false}))} basic color='green' inverted>
            <Icon name='plus'/>
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
  
  onEdit = () => {
    const {product, currentCategoryId, fetchProducts, fetchCategoryProducts, fetchCategories} = this.props;
    const {edit, editProduct} = this.state;
    
    if (edit && validateProduct(editProduct)) {
      updateProduct(editProduct)
      .then(() => currentCategoryId ? fetchCategoryProducts(currentCategoryId) : fetchProducts())
      .then(fetchCategories)
      .then(() => this.setState({edit: false}))
    } else if (!edit) {
      this.setState({edit: true, editProduct: {...product}});
    }
  };
  
  onDelete = () => {
    const {product, currentCategoryId, fetchCategoryProducts, fetchProducts} = this.props;
    
    deleteProduct(product.product_id)
    .then(() => currentCategoryId ? fetchCategoryProducts(currentCategoryId) : fetchProducts())
    .then(() => this.setState({open: false}));
  };
  
  renderEditCells() {
    const {editProduct} = this.state;
    
    console.log(editProduct);
    
    return (
      <Fragment>
        <Table.Cell>
          <StyledInput
            value={editProduct.product_name}
            onChange={e => this.setState({editProduct: {...editProduct, product_name: e.target.value}})}
          />
        </Table.Cell>
        <Table.Cell>
          <StyledInput
            value={editProduct.product_price}
            onChange={e => this.setState({editProduct: {...editProduct, product_price: e.target.value}})}
          />
        </Table.Cell>
        <Table.Cell>
          <StyledInput
            value={editProduct.product_amount}
            onChange={e => this.setState({editProduct: {...editProduct, product_amount: e.target.value}})}
          />
        </Table.Cell>
        <Table.Cell>
          <StyledInput
            value={editProduct.product_maker}
            onChange={e => this.setState({editProduct: {...editProduct, product_maker: e.target.value}})}
          />
        </Table.Cell>
        <Table.Cell>
          <StyledInput
            value={editProduct.product_description}
            onChange={e => this.setState({editProduct: {...editProduct, product_description: e.target.value}})}
          />
        </Table.Cell>
      </Fragment>
    );
  }
  
  renderStaticCells() {
    const {product} = this.props;
    
    return (
      <Fragment>
        <Table.Cell>{product.product_name}</Table.Cell>
        <Table.Cell>{product.product_price}</Table.Cell>
        <Table.Cell>{product.product_amount}</Table.Cell>
        <Table.Cell>{product.product_maker}</Table.Cell>
        <Table.Cell>{product.product_description}</Table.Cell>
      </Fragment>
    );
  }
  
  render() {
    const {product} = this.props;
    const {edit} = this.state;
    
    return (
      <Fragment>
        <Table.Row key={product.product_id}>
          {edit ? this.renderEditCells() : this.renderStaticCells()}
          <Table.Cell>
            <ActionsContainer>
              <Label
                as="a"
                basic
                color="green"
                size="mini"
                style={{width: 24}}
                onClick={() => this.setState({recycle: true})}
              >
                <Icon name="recycle"/>
              </Label>
              <Label
                as="a"
                basic={!edit}
                color="blue"
                size="mini"
                style={{width: 24}}
                onClick={this.onEdit}
              >
                <Icon name="edit outline"/>
              </Label>
              <Label
                as="a"
                basic
                color="red"
                size="mini"
                style={{width: 24}}
                onClick={() => this.setState({open: true})}
              >
                <Icon name="trash alternate"/>
              </Label>
              {this.deleteModal}
              {this.recycleModal}
            </ActionsContainer>
          </Table.Cell>
        </Table.Row>
      </Fragment>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  fetchCategoryProducts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  currentCategoryId: PropTypes.any.isRequired
};

const mapStateToProps = state => ({
  currentCategoryId: state.currentCategory
});

export default connect(mapStateToProps, {fetchCategories, fetchProducts, fetchCategoryProducts})(Product);
