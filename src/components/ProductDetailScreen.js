import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductDetail from './ProductDetail';
let ProductDetailScreen = (props) => (
  <div>
    <NavBar />
    <SideBar />
    <p>ProductDetailScreen</p>
    <ProductDetail {...props} />
  </div>
)
export default ProductDetailScreen;