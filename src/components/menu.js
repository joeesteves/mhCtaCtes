import React from 'react'
import { loggedIn } from '../constants/actionTypes'

export default (props) => {
  const Common = () =>
    <div>
      <button className='btn btn-success' onClick={props.ir("/home")}>HOME</button>
      <button className='btn btn-success' onClick={props.ir("/ventas")}>VENTAS</button>
    </div>
  const Admin = () => <div> <button className='btn btn-success' onClick={props.ir("/ctas_ctes")}>CUENTAS</button>
    <button className='btn btn-success' onClick={props.ir("/movimientos")}>MOVIMIENTOS</button>
  </div>
  return (
    <p className="App-intro">
      <Common />
      {props.loggedIn == loggedIn.admin ? <Admin /> : null}
    </p>)
}
