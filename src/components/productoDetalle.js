import React from 'react'
import { connect } from 'react-redux'
//Acciones
import { cleanProductoActivo, saveSaleProductoActivo, descuento } from '../actions/productoActivo'
import ProductoVenta from './productoVenta'
// CSS
import './productoDetalle.css'

const ProductoDetalle = (props) => (
  <div className='productoDetalle' style={{ display: props.show ? 'flex' : 'none' }}>
    {pc(props)}
    {mobile(props)}
    <ProductoVenta />
  </div>
)

const mapStateToProps = state => state.productoActivo
const mapDispatchToProps = {
  onVolver: cleanProductoActivo,
  onSave: saveSaleProductoActivo,
  onDescuento: (event) => descuento(event.target.value)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductoDetalle)

const pc = (props) => (
  <div className="pc">
    <div className='heading'>
      <h2>{props.nombre}</h2>
      <h3> SKU: {props.sku} </h3>
    </div>
    <div className='main'>
      <div className='col40 offset'>
        <h3> Costo </h3>
        <h3> Margen </h3>
        <h3> IVA </h3>
        <h3> Envío </h3>
        <h3> Desc </h3>
        <hr />
        <h3> Final </h3>
      </div>
      <div className='col40'>
        <h3> {props.costo} </h3>
        <h3> {props.margen} </h3>
        <h3> {props.iva} </h3>

        <h3> {props.costoEnvio} </h3>
        <input style={{height: '36px' }}type="text" value={props.descuento} onChange={props.onDescuento} />
        <hr />
        <h3> {props.precio} </h3>
      </div>
      <div className='envia'>
        <h3>Envía: {props.enviadoPor} </h3>
      </div>
    </div>
    <div className='footer'>
      <button className='btn btn-success' onClick={props.onVolver}>Vover</button>
      <button className='btn btn-info' onClick={props.onSave.bind(this, props)}>Vender</button>
    </div>
  </div>
)
const mobile = (props) => (
  <div className="mobile">
    <div className='heading'>
      <h4>{props.nombre}</h4>
      <h4> SKU: {props.sku} </h4>
    </div>
    <div className='main'>
      <div className='col40 offset'>
        <h5> Costo </h5>
        <h5> Margen </h5>
        <h5> IVA </h5>
        <h5> Envío </h5>
        <h5 style={{marginBottom: '15px' }}> Desc </h5>
        <hr />
        <h5> Final </h5>
      </div>
      <div className='col40'>
        <h5> {props.costo} </h5>
        <h5> {props.margen} </h5>
        <h5> {props.iva} </h5>

        <h5> {props.costoEnvio} </h5>
        <input style= {{height: '20px', width: '30px'}}type="text" value={props.descuento} onChange={props.onDescuento} />
        <hr />
        <h5> {props.precio} </h5>
      </div>
      <div className='envia'>
        <h5>Envía: {props.enviadoPor} </h5>
      </div>
    </div>
    <div className='footer_mobile'>
      <button className='btn btn-success' onClick={props.onVolver}>Vover</button>
      <button className='btn btn-info' onClick={props.onSave.bind(this, props)}>Vender</button>
    </div>
  </div>
)