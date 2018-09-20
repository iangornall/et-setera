import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductDetail from './ProductDetail';
let ProductDetailScreen = (props) => (
  <div>
    <NavBar {...props} />
    <div className="container">
      <SideBar className="side" {...props} />
      <ProductDetail className="main" {...props} />
    </div>
  </div>
)
export default ProductDetailScreen;