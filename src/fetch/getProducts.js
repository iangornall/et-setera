import backupProductData from '../data/products.json';
let getProducts = function() {
  fetch('http://0.tcp.ngrok.io:19987/product')
  .then(res => res.json())
  .then(products => {
    this.props.dispatch({
      type: 'LOAD_PRODUCTS',
      products
    });
  })
  .catch(err => {
    console.log(err);
    console.log('Loading backup data');
    let products = backupProductData;
    this.props.dispatch({
      type: 'LOAD_PRODUCTS',
      products
    })
  })
}
export default getProducts;