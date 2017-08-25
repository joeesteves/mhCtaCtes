import React from 'react'
import { formatDate} from '../helpers/misc'
// CSS FA
import '../vendor/font-awesome-4.7.0/css/font-awesome.min.css'

export default (props) => (
  <tr>
    <td>{formatDate(props.transaccion.date)}</td>
    <td>{props.transaccion.nombre}</td>
    <td>{props.transaccion.cantidad}</td>
    <td>$ {props.transaccion.precio}</td>
    <td>{props.transaccion.enviadoPor}</td>
    <td>{medioPago(props.transaccion.metodoPago)}</td>
    <td onClick={props.handleRemove}><span><i className="fa fa-trash" aria-hidden="true"></i></span></td>
  </tr>)




const medioPago = (metodoPago) => ({
  'mercadoPago': "Mercado Pago",
  'efectivoCarcamo': "Ef. Carcamo",
  'transferencia': "Transferencia"
}[metodoPago])
