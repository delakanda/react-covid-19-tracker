import React from 'react';
import { Provider } from 'react-redux';
import App from '../app/App';
import Store from './../../redux/store/Store';
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
}

export default Root;
