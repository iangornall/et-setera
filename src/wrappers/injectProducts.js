import React from 'react';
import getProducts from '../fetch/getProducts';

export default (Component) => 
  class Container extends React.Component {
    constructor(props) {
      super(props);
      this.getProducts = getProducts.bind(this);
    }
    componentDidMount() {
      this.getProducts();
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }