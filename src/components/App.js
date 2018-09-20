import React from 'react';
import store from '../store/store';
import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';

let App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App;
