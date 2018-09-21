import { connect } from 'react-redux';
import ProductList from './ProductList';
import injectProducts from '../wrappers/injectProducts';

let ProductListContainer = injectProducts(ProductList);

export default connect()(ProductListContainer);