import React from 'react';
import { connect } from 'react-redux';
let ProductDetail = ({product}) => (
  <div>
    <div>
      <h2>{product.title}</h2>
      <img
          className="product-image"
          alt={product.title}
          src={product.imageURL}
      />
      <div>{product.description}</div>
    </div>
    <div>
      <div>{product.price}</div>
      <button>Add to Cart</button>
      <div>Number in cart</div>
    </div>
  </div>
)
let mapStateToProps = (state, props) => ({
  product: state.products.find(product => product.id === props.match.params.productId)
});
export default connect(mapStateToProps)(ProductDetail);