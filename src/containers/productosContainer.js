import React, { Component } from 'react'
import { connect } from 'react-redux'
//Actions
import { fetchProductos } from '../actions/productos'
import { fillProductoActivo, cleanProductoActivo } from '../actions/productoActivo'

//Components
import Producto from '../components/producto'
import ProductoDetalle from '../components/productoDetalle'

import Filter from '../components/filter'
//CSS
import './productosContainer.css'
//Helpers
import { Maybe } from 'ramda-fantasy'
// Cont
const qResultadosMostrar = 50
class ProductosContainer extends Component {
  componentDidMount() {
    fetchProductos()
  }

  render() {
    return (
      <div className="table">
        <ProductoDetalle />
        <Filter />
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productos.map((producto, i) => <Producto key={i} producto={producto} handleClick={() => this.props.fillProducto(producto)}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  productos: filterProductos(state.productos, state.filters).slice(0, qResultadosMostrar)
})

const filterProductos = (productos, filters) => {
  if (filters.length === 0) return productos
  return filterProductos(Maybe(filters[0].value)
    .map(value => productos.filter(producto => new RegExp(value, "i").test(producto.nombre + producto.sku)))
    .getOrElse(productos), filters.slice(1))
}

const mapDispatchToProps = {
  fillProducto: fillProductoActivo
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(ProductosContainer)