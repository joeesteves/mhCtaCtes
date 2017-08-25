import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductosContainer from './containers/productosContainer'
import VentasContainer from './containers/ventasContainer'
import { connect } from 'react-redux'

//Helpers
import { hotkeys } from './helpers/hotkeys'

import { ConnectedRouter, push } from 'react-router-redux'
import { Route } from 'react-router'
import { store, history } from './store'
import { tryLogIn } from './actions/loggedIn'
class App extends Component {
  componentWillMount() {
    hotkeys()
  }
  ir(target) {
    store.dispatch(push(target))
  }
  handleLogIn(e) {
    tryLogIn(e.target.value)
  }
  render() {
    let routes = null
    if (this.props.loggedIn) {
      routes = (
        <ConnectedRouter history={history}>
          <div>
            <Route exact path='/' component={ProductosContainer} />
            <Route path="/ventas" component={VentasContainer} />
            {/* <Route path="/topics" component={Topics}/> */}
          </div>
        </ConnectedRouter>)
    } else {
      routes = (
        <div className="filter">
          <span><i className="fa fa-key" aria-hidden="true"></i></span>
          <input className="filter" type="password" onChange={this.handleLogIn} />
        </div>
    
    )
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button className='btn btn-success' onClick={this.ir.bind(this, "/")}>Home</button>

          <button className='btn btn-success' onClick={this.ir.bind(this, "/ventas")}>Ir a ventas</button>
        </p>

        {routes}

      </div>
    )
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(
  mapStateToProps, null
)(App)
