import React from 'react'
import { formatDate } from '../helpers/misc'

export default (props) => (
  <tr>
    <td>{formatDate(props.movimiento.date)}</td>
    <td>{props.movimiento.items[0].accountId}</td>
    <td>{props.movimiento.items[1].accountId}</td>
    <td>$ {props.movimiento.items[1].amount}</td>
    {props.hasFilter ? <td> </td> : <td onClick={props.handleRemove}><span><i className="fa fa-trash" aria-hidden="true"></i></span></td>}
  </tr>)