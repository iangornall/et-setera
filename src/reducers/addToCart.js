export default (oldStore, action) => ({
  ...oldStore,
  cart: [...oldStore.cart, action.product]
})