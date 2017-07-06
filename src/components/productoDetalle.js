import React from 'react'
import './productoDetalle.css'
import '../vendor/bootstrap.min.css'
export default (props) => (
  <div className='productoDetalle'>
    <div className='heading'>
      <h2>Producto Nombre</h2>
      <h2> SKU: ##### </h2>
    </div>
    <div className='main'>
      <div className='col40 offset'>
        <h3> Costo </h3>
        <h3> Envío </h3>
        <hr />
        <h3> Final </h3>
      </div>
      <div className='col40'>
        <h3> 500 </h3>
        <h3> 200 </h3>
        <hr />
        <h3> 700 </h3>
      </div>
    </div>
    <div className='footer'>
      <button className='btn btn-large btn-success'>Vover</button>
      <button className='btn btn-large btn-info'>Vender</button>
    </div>
  </div>
)




