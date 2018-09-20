import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
let ProductList = (props) => (
  <ul>
    {props.products.map(product => 
      <li key={product.id}>
        <h2>
          <Link to={'/products/' + product.id}>
            {product.title}
          </Link>
        </h2>
        <img
          className="product-image"
          alt={product.title}
          src={product.imageURL}
        />
        <div>{product.description}</div>
        <div>{product.price}</div>
      </li>
    )}
    </ul>
)

let mapStateToProps = (state, props) => {
  let products = state.products;
  console.log(props);
  if (props.match && props.match.params.categoryId) {
    products = products.filter(product => (
      product.categoryId === props.match.params.categoryId
    ))
  }
  return ({ products });
}
export default connect(mapStateToProps)(ProductList);