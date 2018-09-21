import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';
let AllProductsScreen = (props) => (
  <div>
    <NavBar {...props} />
    <div className="container">
      <SideBar className="side" {...props} />
      <ProductList className="main" {...props} />
    </div>
  </div>
)
let mapStateToProps = (state, props) => ({
  products: state.products
});
export default connect(mapStateToProps)(AllProductsScreen);