import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InventoryContainer from './containers/InventoryContainer';
import { Route, Switch } from 'react-router-dom';
import Cart from './containers/CartContainer';
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/cart"
          render={props => <CartContainer {...props} />}
        />
        <Route
          exact
          path="/"
          render={props => <InventoryContainer {...props} />}
        />
        {/* <InventoryContainer /> */}
      </div>
    );
  }
}

export default App;
