import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, Header, Icon, Input, Label, Modal, Table} from 'semantic-ui-react';
import styled from 'styled-components';
import {deleteCategory, updateCategory} from '../../redux/actions/categoriesActions';
import CreateModal from './CreateModal';
import {connect} from 'react-redux';
import {fetchCategoryProducts, fetchProducts} from '../../redux/actions/productsActions';
import {fetchCategories} from '../../redux/actions/categoriesActions';

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 100px;
`;

const validateCategory = category =>
  !!(category && category.category_name);

class Category extends Component {
  state = {
    edit: false,
    editCategory: {...this.props.category},
    createOpen: false
  };
  
  get createModal() {
    const {category} = this.props;
    const {createOpen} = this.state;
    
    return (
      <CreateModal category={category} opened={createOpen} close={() => this.setState({createOpen: false})}/>
    );
  }
  
  get deleteModal() {
    const {category} = this.props;
    const {open} = this.state;
    
    return (
      <Modal open={open} onClose={() => this.setState({open: false})} basic size='mini'>
        <Header icon='archive' content={`Delete category '${category.category_name}' and all products?`}/>
        <Modal.Content>
          <p>Are you sure you want to delete this category?</p>
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
  
  onEdit = () => {
    const {category, fetchCategories} = this.props;
    const {edit, editCategory} = this.state;
    
    if (edit && validateCategory(editCategory)) {
      updateCategory(editCategory)
      .then(fetchCategories)
      .then(() => this.setState({edit: false}))
    } else if (!edit) {
      this.setState({edit: true, editCategory: {...category}});
    }
  };
  
  onDelete = () => {
    const {category, fetchCategories, currentCategoryId, fetchProducts, fetchCategoryProducts} = this.props;
    
    deleteCategory(category.category_id)
    .then(() => currentCategoryId === category.category_id ? fetchCategoryProducts(currentCategoryId) : fetchProducts())
    .then(fetchCategories)
    .then(() => this.setState({open: false}));
  };
  
  renderEditCells() {
    const {category} = this.props;
    const {editCategory} = this.state;
    
    console.log(editCategory);
    
    return (
      <Fragment>
        <Table.Cell>
          <StyledInput
            value={editCategory.category_name}
            onChange={e => this.setState({editCategory: {...editCategory, category_name: e.target.value}})}
          />
        </Table.Cell>
        <Table.Cell>{category.category_total_price}</Table.Cell>
        <Table.Cell>
          <StyledInput
            value={editCategory.category_description}
            onChange={e => this.setState({editCategory: {...editCategory, category_description: e.target.value}})}
          />
        </Table.Cell>
      </Fragment>
    );
  }
  
  renderStaticCells() {
    const {category, onClick} = this.props;
    const {create} = this.state;
    
    return (
      <Fragment>
        <Table.Cell onClick={() => !create && onClick()}
                    style={{cursor: 'pointer'}}>{category.category_name}</Table.Cell>
        <Table.Cell>{category.category_total_price}</Table.Cell>
        <Table.Cell>{category.category_description}</Table.Cell>
      </Fragment>
    );
  }
  
  render() {
    const {category, currentCategoryId} = this.props;
    const {edit} = this.state;
    
    return (
      <Fragment>
        <Table.Row
          style={{background: currentCategoryId === category.category_id ? '#d1ccc0' : '#f7f1e3'}}
          key={category.category_id}
        >
          {edit ? this.renderEditCells() : this.renderStaticCells()}
          <Table.Cell>
            <ActionsContainer>
              <Label
                as="a"
                basic
                color="green"
                size="mini"
                style={{width: 24}}
                onClick={() => this.setState({createOpen: true})}
              >
                <Icon name="add"/>
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
              {this.createModal}
            </ActionsContainer>
          </Table.Cell>
        </Table.Row>
      </Fragment>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
  currentCategoryId: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  fetchCategoryProducts: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log({state});
  return ({
    currentCategoryId: state.currentCategory
  });
};

export default connect(mapStateToProps, {fetchCategories, fetchCategoryProducts, fetchProducts})(Category);
