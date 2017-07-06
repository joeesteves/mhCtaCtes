import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductosContainer from './containers/productosContainer'
//Helpers
import { hotkeys } from './helpers/hotkeys'

class App extends Component {
  componentWillMount() {
    hotkeys()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        <ProductosContainer />
      </div>
    )
  }
}

export default App;
