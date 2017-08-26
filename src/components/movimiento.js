import React from 'react'
import { formatDate} from '../helpers/misc'
// CSS FA
import '../vendor/font-awesome-4.7.0/css/font-awesome.min.css'

export default (props) => (
  <tr>
    <td>{formatDate(props.movimiento.date)}</td>
    <td>{props.movimiento.items[0].accountId}</td>
    <td>{props.movimiento.items[1].accountId}</td>
    <td>$ {props.movimiento.items[1].amount}</td>
    <td onClick={props.handleRemove}><span><i className="fa fa-trash" aria-hidden="true"></i></span></td>
  </tr>)