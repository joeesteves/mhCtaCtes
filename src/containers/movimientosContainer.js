import React, { Component } from 'react'
import { connect } from 'react-redux'
//Actions
import { fetchMovimientos,  requestDeleteMovimiento} from '../actions/movimientos'
import { cleanFilter } from '../actions/filters'

//Components
import Movimiento from '../components/movimiento'
// import ProductoDetalle from '../components/productoDetalle'

import Filter from '../components/filter'
//CSS
import './productosContainer.css'
//Helpers
import { Maybe } from 'ramda-fantasy'
// Cont
const qResultadosMostrar = 50
const handleRemove = (movimiento) => {
  return window.confirm('Esta Seguro') && requestDeleteMovimiento(movimiento)
}

class VentasContainer extends Component {
  componentDidMount() {
    fetchMovimientos()
    cleanFilter()
  }

  render() {
    return (
      <div className="table">
        {/* <ProductoDetalle /> */}
        <Filter />
        <table>
          <thead>
            <tr>
              <th>FECHA</th>
              <th>ORIGEN</th>
              <th>DESTION</th>
              <th>IMPORTE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.movimientos.map((movimiento, i) => <Movimiento key={i} movimiento={movimiento} handleRemove={handleRemove.bind(this, movimiento)} />)}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  movimientos: filterMovimientos(state.movimientos, state.filters).slice(0, qResultadosMostrar)
})

const filterMovimientos = (movimientos, filters) => {
  if (filters.length === 0) return movimientos
  return filterMovimientos(Maybe(filters[0].value)
    .map(value => movimientos.filter(movimiento => new RegExp(value, "i").test(movimiento.date + movimiento.items[0].accountId + movimiento.items[1].accountId )))
    .getOrElse(movimientos), filters.slice(1))
}

export default connect(
  mapStateToProps, null
)(VentasContainer)