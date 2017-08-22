import React from 'react'
import { connect } from 'react-redux'
import { updateProductoActivo } from '../actions/productoActivo'



const ProductoVenta = (props) => (
  <div className="ventas">
    <label>Cantidad</label>
    <input type="number" value={props.cantidad} onChange={props.onUpdateCantidad} />
    <label>Metodo de pago</label>
    <select value={props.metodoPago} onChange={props.onUpdateMetodoPago} >
      <option value="mercadoPago">Mercado Pagos</option>
      <option value="efectivoCarcamo">Ef. Carcamo</option>
      <option value="transferencia">Transferencia</option>
    </select>
  </div>
)


const mapStateToProps = state => state.productoActivo


const mapDispatchToProps = {
  onUpdateCantidad: (event) => updateProductoActivo({ cantidad: event.target.value }),
  onUpdateMetodoPago: (event) => updateProductoActivo({ metodoPago: event.target.value })

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductoVenta)