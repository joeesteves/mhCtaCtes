import React, { Component } from 'react'
import { connect } from 'react-redux'
//Actions
import { fetchTransacciones } from '../actions/transacciones'

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
            </tr>
          </thead>
          <tbody>
            {this.props.transacciones.map((transaccion, i) => <Transaccion key={i} transaccion={transaccion} />)}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  transacciones: state.transacciones
})

// const filterProductos = (productos, filters) => {
//   if (filters.length === 0) return productos
//   return filterProductos(Maybe(filters[0].value)
//     .map(value => productos.filter(producto => new RegExp(value, "i").test(producto.nombre + producto.sku)))
//     .getOrElse(productos), filters.slice(1))
// }

// const mapDispatchToProps = {
//   fillProducto: fillProductoActivo
// }
export default connect(
  mapStateToProps, null
)(VentasContainer)