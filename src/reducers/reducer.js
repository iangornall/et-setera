//reducers
// import these
import addToCart from './addToCart';
import removeFromCart from './removeFromCart';
//reducer router
let reducers = {
  // add these
  ADD_TO_CART: addToCart,
  REMOVE_FROM_CART: removeFromCart
}
let reducer = (oldState, action) => (
  reducers[action.type] ?
    reducers[action.type](oldState, action) :
    oldState
)
export default reducer;