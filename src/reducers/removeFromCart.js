export default (oldStore, action) => ({
  ...oldStore,
  cart: oldStore.cart.filter(product => product.id !== action.product.id)
})