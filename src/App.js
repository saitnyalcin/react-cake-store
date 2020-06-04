import React from 'react';
import './App.css';
import logo from '../src/images/steveCakeShop.png';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

import StoreContainer from './components/StoreContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="container">
          <StoreContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
