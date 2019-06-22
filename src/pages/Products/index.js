import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Header, Table, Input, Icon} from 'semantic-ui-react';

const Container = styled.div`
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
    
    
    const p =  products.filter(product => searchProduct(product, query));
    
    console.log('filter products', p);
    
    return p.map(product => (
      <Table.Row key={product.product_id}>
        <Table.Cell>{product.product_name}</Table.Cell>
        <Table.Cell>{product.product_price}</Table.Cell>
        <Table.Cell>{product.product_amount}</Table.Cell>
        <Table.Cell>{product.product_maker}</Table.Cell>
        <Table.Cell>{product.product_description}</Table.Cell>
      </Table.Row>
    ));
  }
  
  render() {
    console.log('-products-', this);
    const {query} = this.state;
    
    return (
      <Container>
        <Header>Products</Header>
        
        <Input icon placeholder='Search...'>
          <input value={query} onChange={e => {
            return this.setState({query: e.target.value});
          }} />
          <Icon name='search' />
        </Input>
        
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Maker</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
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

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Products);
