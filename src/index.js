import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.css';
import './styles/nav.css';
import './styles/side.css';
import './styles/products.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
