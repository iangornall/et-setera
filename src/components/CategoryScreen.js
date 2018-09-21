import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';
let CategoryScreen = (props) => (
  <div>
    <NavBar {...props} />
    <div className="container">
      <SideBar className="side" {...props} />
      <ProductList className="main" {...props} />
    </div>
  </div>
)
let mapStateToProps = (state, props) => ({
  products: state.products.filter(product => (
      product.categoryId === props.match.params.categoryId
    ))
})
export default connect(mapStateToProps)(CategoryScreen);