import React from 'react';
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
export default AllProductsScreen;