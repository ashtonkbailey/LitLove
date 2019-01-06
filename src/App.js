import React, { Component } from 'react';

import './index.scss';
import logo from './assets/LitLoveLogo.png';
import MainDisplay from './containers/MainDisplay/MainDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            alt="Lit Love Logo"
            className="logo"
          />
        </header>
        <MainDisplay />
      </div>
    );
  }
}

export default App;
