export default (oldStore, action) => ({
  ...oldStore,
  products: action.products
})