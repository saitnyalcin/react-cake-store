import React from 'react';
import './App.css';
import logo from '../src/images/steveCakeShop.png';

import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <CakeContainer />
    </div>
  );
}

export default App;
