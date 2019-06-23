import {FETCH_PRODUCTS} from './actionsTypes';
import api from '../../utils/api';

let products = [
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
];

const fakeFetchProducts = () => new Promise(resolve => setTimeout(() => {
  console.log('fetch products', {products});
  resolve(products);
}, 500));

export const fetchProducts = () => async dispatch => {
  const products = await fakeFetchProducts();//api.get('/products');
  
  console.log('fet p', {products});
  dispatch({
    type: FETCH_PRODUCTS,
    products
  });
};

export const fetchCategoryProducts = categoryId => async dispatch => {
  const products = (await fakeFetchProducts()).filter(product => product.category_id === categoryId);
  //api.get(`/categories/${categoryId}/products`);
  
  console.log('fet pp');
  dispatch({
    type: FETCH_PRODUCTS,
    products
  });
};

export const createProduct = product => {
  //await api.put('/products', product);
  products = [...products, product];
  return Promise.resolve();
};

export const updateProduct = product => {
  //await api.post('/products', product);
  products = products.map(p => p.product_id === product.product_id ? product : p);
  console.log('updated products', products);
  return Promise.resolve();
};

export const deleteProduct = productId =>   {
  //await api.delete(`/products/${product.id}`);
  products = products.filter(p => p.product_id !== productId);
  return Promise.resolve();
};
