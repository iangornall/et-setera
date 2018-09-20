import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AllProductsScreen from '../components/AllProductsScreen';
import CategoryScreen from '../components/CategoryScreen';
import ProductDetailScreen from '../components/ProductDetailScreen';
const AppRouter = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/' component={AllProductsScreen} />
        <Route path='/categories/:categoryId' component={CategoryScreen} />
        <Route path='/products/:productId' component={ProductDetailScreen} />
      </Switch>
    </div>
  </HashRouter>
)
export default AppRouter;