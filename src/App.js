import React, { Component } from 'react';

import './index.scss';
import logo from './assets/LitLoveLogo.png';
import MainDisplay from './containers/MainDisplay/MainDisplay';
import Navigation from './components/Navigation/Navigation';

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
          <Navigation />
        </header>
        <MainDisplay />
      </div>
    );
  }
}

export default App;
