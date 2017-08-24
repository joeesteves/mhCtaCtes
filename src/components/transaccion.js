import React from 'react'
import { formatDate} from '../helpers/misc'
export default (props) => (
  <tr>
    <td>{formatDate(props.transaccion.date)}</td>
    <td>{props.transaccion.nombre}</td>
    <td>{props.transaccion.cantidad}</td>
    <td>$ {props.transaccion.precio}</td>
    <td>{props.transaccion.enviadoPor}</td>
    <td>{medioPago(props.transaccion.metodoPago)}</td>

  </tr>)




const medioPago = (metodoPago) => ({
  'mercadoPago': "Mercado Pago",
  'efectivoCarcamo': "Ef. Carcamo",
  'transferencia': "Transferencia"
}[metodoPago])