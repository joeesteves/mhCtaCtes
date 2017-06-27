import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { store } from '../store'
import { fetchProductos } from '../actions/productos'
//Component
import Producto from '../components/producto'

class ProductosContainer extends Component {
  componentDidMount() {
    fetchProductos()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.productos.map((producto,i) => <Producto key={i} producto={producto} />) }
        </ul>
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