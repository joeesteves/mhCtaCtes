import React from 'react'
import { connect } from 'react-redux'
import { updateProductoActivo } from '../actions/productoActivo'



const ProductoVenta = (props) => (
  <div className="ventas">
    <input type="date" value={props.date} onChange={props.onUpdateDate} />
    <label>Cantidad</label>
    <input className="cantidad"  type="number" value={props.cantidad} onChange={props.onUpdateCantidad} />
    <label>Metodo de pago</label>
    <select value={props.metodoPago} onChange={props.onUpdateMetodoPago} >
      <option value="Mercado Pago">Mercado Pagos</option>
      <option value="Efectivo Carcamo">Efectivo Carcamo</option>
      <option value="Banco">Banco</option>
    </select>
    <label>Comisión ({props.comision})</label>
    <input type="checkbox" checked={props.conComision} onChange={props.onUpdateComision} />
  </div>
)


const mapStateToProps = state => state.productoActivo


const mapDispatchToProps = {
  onUpdateCantidad: (event) => updateProductoActivo({ cantidad: event.target.value }),
  onUpdateMetodoPago: (event) => updateProductoActivo({ metodoPago: event.target.value }),
  onUpdateComision: (event) => updateProductoActivo({ conComision: event.target.checked }),
  onUpdateDate: (event) => updateProductoActivo({ date: event.target.value })


}
export default connect(mapStateToProps, mapDispatchToProps)(ProductoVenta)