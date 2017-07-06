import React from 'react'
import { connect } from 'react-redux'
import { fillProductoActivo, cleanProductoActivo } from '../actions/productoActivo'
// CSS
import './productoDetalle.css'

const ProductoDetalle = (props) => (
  <div className='productoDetalle' style={{ display: props.show ? 'flex' : 'none' }}>
    <div className='heading'>
      <h2>{props.nombre}</h2>
      <h3> SKU: {props.sku} </h3>
    </div>
    <div className='main'>
      <div className='col40 offset'>
        <h3> Costo </h3>
        <h3> Envío </h3>
        <h3> Margen </h3>
        <hr />
        <h3> Final </h3>
      </div>
      <div className='col40'>
        <h3> {props.costo} </h3>
        <h3> {props.costoEnvio} </h3>
        <h3> {calcMargen(props)} </h3>
        <hr />
        <h3> {props.precio} </h3>
      </div>
      <div className='envia'>
        <h3>Envía: {props.enviadoPor} </h3>
      </div>
    </div>
    <div className='footer'>
      <button className='btn btn-success' onClick={props.onVolver}>Vover</button>
      <button className='btn btn-info'>Vender</button>
    </div>
  </div>
)

const calcMargen = (props) => (Math.round((props.precio - props.costo - props.costoEnvio) * 100) >> 0) / 100



const mapStateToProps = state => state.productoActivo
const mapDispatchToProps = {
  onVolver: cleanProductoActivo
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductoDetalle)