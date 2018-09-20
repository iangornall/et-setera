import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';
let CategoryScreen = (props) => (
  <div>
    <NavBar />
    <SideBar />
    <p>CategoryScreen {props.match.params.categoryId}</p>
    <ProductList {...props} />
  </div>
)
export default CategoryScreen;