import React from 'react';
import { connect } from 'react-redux';
const CartCounter = (props) => (
  <div>
    Cart: {props.numItems}
  </div>
)
let mapStateToProps = (state) => ({
  numItems: state.cart.length
});
export default connect(mapStateToProps)(CartCounter);