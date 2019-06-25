import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Header, Icon, Input, Table, Button} from 'semantic-ui-react';
import {fetchCategoryProducts, fetchProducts} from '../../redux/actions/productsActions';
import {fetchCategories} from '../../redux/actions/categoriesActions';
import Category from './Category';
import {setCurrentCategory} from '../../redux/actions/currenCategoryActions';
import CreateCategory from './CreateCategory';

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const searchCategory = (category, query) => {
  const string = `${category.category_name}\n${category.category_description}\n${category.category_total_price}`;
  return !query || (category && string.toLowerCase().includes(query.toLowerCase()));
};

class Categories extends Component {
  state = {query: '', create: false};
  
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }
  
  renderCategories() {
    const {categories, setCurrentCategory, currentCategoryId, fetchCategoryProducts, fetchProducts} = this.props;
    const {query} = this.state;
    
    const c = categories.filter(category => searchCategory(category, query));
    
    console.log('filter categories', c);
    
    return c.map(category => (
      <Category
        category={category}
        onClick={() => {
          if (currentCategoryId !== category.category_id) {
            fetchCategoryProducts(category.category_id).then(() => setCurrentCategory(category.category_id));
          } else {
            fetchProducts().then(() => setCurrentCategory(null));
          }
        }}
      />
    ));
  }
  
  get createModal() {
    const {create} = this.state;
    
    return (
      <CreateCategory
        opened={create}
        close={() => this.setState({create: false})}
      />
    );
  }
  
  render() {
    const {query} = this.state;
    
    return (
      <Container>
        <Header>Categories</Header>
        <Button onClick={() => this.setState({create: true})} color="green">+</Button>
        <Input style={{width: '100%'}} icon placeholder='Search...'>
          <input value={query} onChange={e => this.setState({query: e.target.value})}/>
          <Icon name='search'/>
        </Input>
        <Table fixed basic="very" celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Total price</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          
          <Table.Body>
            {this.renderCategories()}
          </Table.Body>
        </Table>
        {this.createModal}
      </Container>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  currentCategoryId: PropTypes.any.isRequired,
  setCurrentCategory: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  fetchCategoryProducts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories,
  currentCategoryId: state.currentCategory
});

export default connect(mapStateToProps, {setCurrentCategory, fetchCategories, fetchProducts, fetchCategoryProducts})(Categories);
