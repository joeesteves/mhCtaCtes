import React from 'react'
import { formatDate } from '../helpers/misc'
// CSS FA
import '../vendor/font-awesome-4.7.0/css/font-awesome.min.css'

export default (props) => (
  <tr title={props.transaccion.obs}>
    <td>{formatDate(props.transaccion.date)}</td>
    <td>{props.transaccion.nombre}</td>
    <td>{props.transaccion.cantidad}</td>
    <td>$ {props.transaccion.precio}</td>
    <td>{props.transaccion.enviadoPor}</td>
    <td>{props.transaccion.metodoPago}</td>
    <td><i className={props.transaccion.obs ? "fa fa-address-card-o":"fa fa-minus-square"} aria-hidden="true"></i></td>
    <td onClick={props.handleRemove}><span><i className="fa fa-trash" aria-hidden="true"></i></span></td>
  </tr>)