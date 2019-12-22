import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-less/semantic.less'
// import * as serviceWorker from './serviceWorker';

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept('./App', () => {})
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
