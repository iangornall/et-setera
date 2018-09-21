import React from 'react';
import { Link } from 'react-router-dom';
let ProductList = (props) => (
  <ul className="product-list">
    {props.products.map(product => 
      <li className="product" key={product.id}>
        <h2 className="product-title">
          <Link className="product-link" to={'/products/' + product.id}>
            {product.title}
          </Link>
        </h2>
        <img
          className="product-image"
          alt={product.title}
          src={product.imageURL}
        />
        <div className="product-description">{product.description}</div>
        <div className="product-price">{'$' + product.price}</div>
      </li>
    )}
    </ul>
)
export default ProductList;