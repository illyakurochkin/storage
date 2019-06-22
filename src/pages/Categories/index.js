import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Header, Menu} from 'semantic-ui-react';
import {fetchProducts, fetchCategoryProducts} from '../../redux/actions/productsActions';
import {fetchCategories} from '../../redux/actions/categoriesActions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Categories extends Component {
  state = {categoryId: null};
  
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }
  
  renderCategories() {
    const {categories} = this.props;
    const {categoryId} = this.state;
    
    return categories.map(category => (
      <Menu.Item
        key={category.category_id}
        name={category.category_name}
        active={categoryId === category.category_id}
        onClick={() => {
          if(categoryId !== category.category_id) {
            this.props.fetchCategoryProducts(category.category_id)
            .then(() => this.setState({categoryId: category.category_id}))
          } else {
            this.props.fetchProducts()
            .then(() => this.setState({categoryId: null}));
          }
        }}
      />
    ));
  }
  
  render() {
    console.log('-categories-', this);
    
    return (
      <Container>
        <Header>Categories</Header>
        <Menu secondary vertical>
          {this.renderCategories()}
        </Menu>
      </Container>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps, {fetchCategories, fetchProducts, fetchCategoryProducts})(Categories);
