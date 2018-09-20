import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';
let AllProductsScreen = (props) => (
  <div>
    <NavBar />
    <SideBar />
    <p>AllProductsScreen</p>
    <ProductList />
  </div>
)
export default AllProductsScreen;