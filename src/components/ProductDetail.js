import React from 'react';
import { connect } from 'react-redux';
import AddButton from './AddButton';
let ProductDetail = ({product, dispatch}) => (
  <div className="product-container">
    <div className="product">
      <h2 className="product-title">{product.title}</h2>
      <img
          className="product-image"
          alt={product.title}
          src={product.imageURL}
      />
      <div className="product-description">{product.description}</div>
    </div>
    <div className="product-block">
      <div className="product-price">${product.price}</div>
      <AddButton product={product} />
      <div>Number in cart</div>
    </div>
  </div>
)
let mapStateToProps = (state, props) => ({
  product: state.products.find(product => product.id === props.match.params.productId)
});
export default connect(mapStateToProps)(ProductDetail);