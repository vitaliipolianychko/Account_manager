import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";
import App from './App';
import * as serviceWorker from './serviceWorker';

export const render = state => {
ReactDOM.render(
  <Provider store={store}>       
    <BrowserRouter basename="/Account_manager/">
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
};

render(store.getState());
store.subscribe(() => {
  render(store.getState());
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
