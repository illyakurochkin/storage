import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Header, Icon, Input, Table} from 'semantic-ui-react';
import Product from './Product';

const Container = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const searchProduct = (product, query) => {
  const string = `${product.product_name}\n${product.product_price}\n${product.product_maker}\n${product.product_amount}\n${product.product_description}`;
  return !query || (product && string.toLowerCase().includes(query.toLowerCase()));
};

class Products extends Component {
  state = {query: '', editProduct: null};
  
  renderProducts() {
    const {products} = this.props;
    const {query} = this.state;
    
    const p = products.filter(product => searchProduct(product, query));
    
    console.log('filter products', p);
    
    return p.map(product => (<Product product={product}/>));
  }
  
  render() {
    const {query} = this.state;
    
    return (
      <Container>
        <Header>Products</Header>
        
        <Input style={{width: '100%'}} icon placeholder='Search...'>
          <input value={query} onChange={e => {
            return this.setState({query: e.target.value});
          }}/>
          <Icon name='search'/>
        </Input>
        
        <Table fixed basic="very" celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Maker</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          
          <Table.Body>
            {this.renderProducts()}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  console.log('########', {products: state.products});
  return ({
    products: state.products
  });
};

export default connect(mapStateToProps)(Products);
