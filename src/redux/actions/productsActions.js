import {FETCH_PRODUCTS} from './actionsTypes';
import api from '../../utils/api';

const fakeFetchProducts = () => new Promise(resolve => setTimeout(() => resolve([
  {
    product_id: 1,
    product_name: 'product-1.1',
    product_price: 500,
    product_amount: 1000,
    product_description: 'description about product-1.1',
    product_maker: 'maker-432432',
    category_id: 1
  },
  {
    product_id: 2,
    product_name: 'product-1.2',
    product_price: 400,
    product_amount: 100,
    product_description: 'description about product-1.2',
    product_maker: 'maker-545455',
    category_id: 1
  },
  {
    product_id: 3,
    product_name: 'product-2.3',
    product_price: 100,
    product_amount: 400,
    product_description: 'description about product-2.3',
    product_maker: 'maker-333455',
    category_id: 2
  },
  {
    product_id: 4,
    product_name: 'product-2.4',
    product_price: 100,
    product_amount: 550,
    product_description: 'description about product-2.4',
    product_maker: 'maker-045455',
    category_id: 2
  },
  {
    product_id: 5,
    product_name: 'product-3.5',
    product_price: 400,
    product_amount: 100,
    product_description: 'description about product-3.5',
    product_maker: 'maker-111111',
    category_id: 3
  },
  {
    product_id: 6,
    product_name: 'product-3.6',
    product_price: 400,
    product_amount: 100,
    product_description: 'description about product-3.6',
    product_maker: 'maker-111455',
    category_id: 3
  }
]), 500));

export const fetchProducts = () => async dispatch => {
  const products = await fakeFetchProducts();//api.get('/products');
  
  dispatch({
    type: FETCH_PRODUCTS,
    products
  });
};

export const fetchCategoryProducts = categoryId => async dispatch => {
  const products = (await fakeFetchProducts()).filter(product => product.category_id === categoryId);
  //api.get(`/categories/${categoryId}/products`);
  
  dispatch({
    type: FETCH_PRODUCTS,
    products
  });
};

export const createProduct = product => async dispatch => {
  await api.put('/products', product);
  dispatch(fetchProducts());
};

export const updateProduct = product => async dispatch => {
  await api.post('/products', product);
  dispatch(fetchProducts());
};

export const deleteProduct = product => async dispatch => {
  await api.delete(`/products/${product.id}`);
  dispatch(fetchProducts());
};
