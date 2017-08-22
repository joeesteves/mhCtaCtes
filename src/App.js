import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductosContainer from './containers/productosContainer'
import VentasContainer from './containers/ventasContainer'

//Helpers
import { hotkeys } from './helpers/hotkeys'

import { ConnectedRouter, push } from 'react-router-redux'
import { Route } from 'react-router'
import { store, history } from './store'

class App extends Component {
  componentWillMount() {
    hotkeys()
  }
  ir(target) {
    store.dispatch(push(target))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <a onClick={this.ir.bind(this, "/")}>Home</a>

          <a onClick={this.ir.bind(this, "/ventas")}>Ir a ventas</a>
        </p>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path='/' component={ProductosContainer} />
            <Route path="/ventas" component={VentasContainer} />
              {/* <Route path="/topics" component={Topics}/> */}
          </div>
        </ConnectedRouter>

      </div>
    )
  }
}

export default App;
