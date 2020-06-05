import React from 'react';
import { Provider } from 'react-redux';
import logo from '../src/images/steveCakeShop.png';
import store from '../src/redux/store';
import './App.css';
import ChocolateContainer from './components/ChocolateContainer';
import VanillaContainer from './components/VanillaContainer';

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
          <ChocolateContainer />
          <VanillaContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
