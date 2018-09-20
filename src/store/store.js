import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import categories from '../data/categories.json';
import products from '../data/products.json'
// JSON.parse(localStorage.getItem('reduxState')) || 
let initialState = {
  categories,
  products,
  cart: []
}

let store = createStore(
  reducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;