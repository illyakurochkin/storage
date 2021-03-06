import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Header, Icon, Input, Table, Label, Divider} from 'semantic-ui-react';
import {fetchCategoryProducts, fetchProducts} from '../../redux/actions/productsActions';
import {fetchCategories} from '../../redux/actions/categoriesActions';
import Category from './Category';
import {setCurrentCategory} from '../../redux/actions/currenCategoryActions';
import CreateCategory from './CreateCategory';

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Sum = styled.h1`
  font-width: 700;
  font-size: 28px;
  font-color: #CCC;
  width: 100%;
`;

const searchCategory = (category, query) => {
  const string = `${category.category_name}\n${category.category_description}\n$${category.category_total_price}`;
  return !query || (category && string.toLowerCase().includes(query.toLowerCase()));
};

const AddButton = styled.div`
  position: absolute;
  right: 10px;
`;

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
    const {categories} = this.props;
    const {query} = this.state;
    
    return (
      <Container>
        <Header>Categories</Header>
        <AddButton>
          <Label
            as="a"
            basic
            color="green"
            size="medium"
            style={{width: 32}}
            onClick={() => this.setState({create: true})}
          >
            <Icon name="add"/>
          </Label>
        </AddButton>
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
        <Divider/>
        <Sum>Total sum: ${categories.map(category => category.category_total_price).reduce((a, b) => a + b, 0)}</Sum>
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
