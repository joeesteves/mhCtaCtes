import React, { Component } from 'react';
import logo from './animatedHorse.gif';
import './App.css';
import ProductosContainer from './containers/productosContainer'
import VentasContainer from './containers/ventasContainer'
import CuentasCorrientes from './containers/cuentasCorrientes'
import Movimientos from './containers/movimientosContainer'
import { connect } from 'react-redux'
import { loggedIn } from './constants/actionTypes'

//Helpers
import { hotkeys } from './helpers/hotkeys'

import { ConnectedRouter, push } from 'react-router-redux'
import { Route, Redirect } from 'react-router'
import { store, history } from './store'
import { tryLogIn } from './actions/loggedIn'

//Fonts
import './vendor/font-awesome-4.7.0/css/font-awesome.min.css'

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
  constructBody(rol){
    let routes = []
    switch (rol) {
      case loggedIn.admin:
        routes = [<Route path="/ctas_ctes" component={CuentasCorrientes} />,<Route path="/movimientos" component={Movimientos} />]
      case loggedIn.seller: 
        routes = routes.concat([<Redirect from="/" to="/home" />, <Route path='/home' component={ProductosContainer} />, <Route path="/ventas" component={VentasContainer} />])
    }
    return (routes.length > 0) ? (
      <ConnectedRouter history={history}>
        <div>
          {routes.map((r,i) => ({...r, key:i}))}
        </div>
      </ConnectedRouter> ) : (
        <div className="filter">
          <span><i className="fa fa-key" aria-hidden="true"></i></span>
          <input className="filter" type="password" onChange={this.handleLogIn} />
        </div>
      )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MHG</h2>
        </div>
        <p className="App-intro">
          <button className='btn btn-success' onClick={this.ir.bind(this, "/home")}>HOME</button>
          <button className='btn btn-success' onClick={this.ir.bind(this, "/ventas")}>VENTAS</button>
          <button className='btn btn-success' onClick={this.ir.bind(this, "/ctas_ctes")}>CUENTAS</button>
          <button className='btn btn-success' onClick={this.ir.bind(this, "/movimientos")}>MOVIMIENTOS</button>

        </p>

        {this.constructBody(this.props.loggedIn)}

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
