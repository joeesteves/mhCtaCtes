import React from 'react'
import { connect } from 'react-redux'
import { updateProductoActivo } from '../actions/productoActivo'



const ProductoVenta = (props) => (
  <div className="col12">
    {pc(props)}
    {mobile(props)}
  </div>
)


const mapStateToProps = state => state.productoActivo


const mapDispatchToProps = {
  onUpdateCantidad: (event) => updateProductoActivo({ cantidad: event.target.value }),
  onUpdateMetodoPago: (event) => updateProductoActivo({ metodoPago: event.target.value }),
  onUpdateComision: (event) => updateProductoActivo({ conComision: event.target.checked }),
  onUpdateDate: (event) => updateProductoActivo({ date: event.target.value }),
  onUpdateObservaciones: (event) => updateProductoActivo({ obs: event.target.value })
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductoVenta)

// templates for pc and mobile
const pc = (props) => (
  <div className="pc">
    <div className="ventas">
      <input type="date" value={props.date} onChange={props.onUpdateDate} />
      <label>Cantidad</label>
      <input className="cantidad" type="number" value={props.cantidad} onChange={props.onUpdateCantidad} />
      <label>Método de pago</label>
      <select value={props.metodoPago} onChange={props.onUpdateMetodoPago} >
        <option value="Mercado Pago">Mercado Pagos</option>
        <option value="Efectivo Carcamo">Efectivo Carcamo</option>
        <option value="Efectivo Hardoy">Efectivo Hardoy</option>
        <option value="Banco">Banco</option>
      </select>
      <label>Comisión ({props.comision})</label>
      <input type="checkbox" className="comision" checked={props.conComision} onChange={props.onUpdateComision} />
    </div>
    <div className="ventas">
      <textarea className="obs" rows="3" value={props.obs} placeholder="ponga aquí las observaciones" onChange={props.onUpdateObservaciones} />
    </div>
  </div>)
const mobile = (props) => (
  <div className="mobile">
    <div className="row">
      <input className="date" type="date" value={props.date} onChange={props.onUpdateDate} />
    </div>
    <div className="row">
      <label>Cantidad</label>
      <input className="cantidad" type="number" value={props.cantidad} onChange={props.onUpdateCantidad} />
    </div>
    <div className="row">
      <select value={props.metodoPago} onChange={props.onUpdateMetodoPago} >
        <option value="Mercado Pago">Mercado Pagos</option>
        <option value="Efectivo Carcamo">Efectivo Carcamo</option>
        <option value="Efectivo Hardoy">Efectivo Hardoy</option>
        <option value="Banco">Banco</option>
      </select>
    </div>
    <div className="row">
      <label>Comisión ({props.comision})</label>
      <input type="checkbox" className="comision" checked={props.conComision} onChange={props.onUpdateComision} />
    </div>
    <div className="row">
      <div className="ventas">
        <textarea className="obs" rows="3" value={props.obs} placeholder="ponga aquí las observaciones" onChange={props.onUpdateObservaciones} />
      </div>
    </div>
  </div>)