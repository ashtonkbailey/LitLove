import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import './index.scss';
import logo from './assets/LitLoveLogo.png';
import Navigation from './components/Navigation/Navigation';
import Search from './containers/Search/Search';
import Books from './containers/Books/Books';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img
              src={logo}
              alt="Lit Love Logo"
              className="logo"
            />
          </Link>
          <Navigation />
        </header>
        <Switch>
          <Route exact path="/" render={() => <Search type="welcome" />} />
          <Route exact path="/new" render={() => <Search type="/new" />} />
          <Route exact path="/confirmBook" render={() => <Books type="confirm" />} />
          <Route exact path="/recommendations" render={() => <Books type="recommendations" />} />
          <Route path='' render={() => 
            (<div className="wrong-path">
              <h1>Does this page exist if you're not looking at it?</h1>
              <br/>
              <h3>No. Go <Link to='/'>home</Link>.</h3>   
            </div>)
          } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
