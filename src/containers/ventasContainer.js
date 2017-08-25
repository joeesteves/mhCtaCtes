import React, { Component } from 'react'
import { connect } from 'react-redux'
//Actions
import { fetchTransacciones, requestDeleteTransaccion } from '../actions/transacciones'

//Components
import Transaccion from '../components/transaccion'
// import ProductoDetalle from '../components/productoDetalle'

import Filter from '../components/filter'
//CSS
import './productosContainer.css'
//Helpers
import { Maybe } from 'ramda-fantasy'
// Cont
const qResultadosMostrar = 50
const handleRemove = (transaccion) => {
  return window.confirm('Esta Seguro') && requestDeleteTransaccion(transaccion)
}

class VentasContainer extends Component {
  componentDidMount() {
    fetchTransacciones()
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
              <th>PRODUCTO</th>
              <th>CANT.</th>
              <th>IMPORTE</th>
              <th>ENVÍA</th>
              <th>PAGO CON</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.transacciones.map((transaccion, i) => <Transaccion key={i} transaccion={transaccion} handleRemove={handleRemove.bind(this, transaccion)} />)}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  transacciones: filterTransacciones(state.transacciones, state.filters).slice(0, qResultadosMostrar)
})

const filterTransacciones = (transacciones, filters) => {
  if (filters.length === 0) return transacciones
  return filterTransacciones(Maybe(filters[0].value)
    .map(value => transacciones.filter(transaccion => new RegExp(value, "i").test(transaccion.date + transaccion.nombre + transaccion.date + transaccion.enviadoPor + transaccion.metodoPago)))
    .getOrElse(transacciones), filters.slice(1))
}

export default connect(
  mapStateToProps, null
)(VentasContainer)