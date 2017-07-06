import React from 'react'

export default (props) => (
  <tr onClick={props.handleClick}>
    <td>{props.producto.sku}</td>    
    <td>{props.producto.nombre}</td>
    <td>{props.producto.precio}</td>
  </tr>)




