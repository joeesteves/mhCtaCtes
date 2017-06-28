import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { store } from '../store'
import { fetchProductos } from '../actions/productos'
//Component
import Producto from '../components/producto'
//CSS
import './productosContainer.css'

class ProductosContainer extends Component {
  componentDidMount() {
    fetchProductos()
  }

  render() {
    return (
      <div className="table">
        <input type="text" placeholder="Buscar..." /> 
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productos.map((producto, i) => <Producto key={i} producto={producto} />)}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  productos: state.productos
})

export default connect(
  mapStateToProps, null
)(ProductosContainer)