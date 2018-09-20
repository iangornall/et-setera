import React from 'react';
import { connect } from 'react-redux';
let AddButton = ({inCart, product, dispatch}) => (
  !inCart ? (<button className="product-button" onClick={() => {
    dispatch({
      type: 'ADD_TO_CART',
      product
    })
  }}>Add to Cart</button>) :
  (<button className="product-button" onClick={() => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      product
    })
  }}>Remove from Cart</button>)
)
let mapStateToProps = (state, props) => {
  return ({
  inCart: state.cart.find(product => product.id === props.product.id)
})
};
export default connect(mapStateToProps)(AddButton);