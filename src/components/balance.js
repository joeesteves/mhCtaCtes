import React from 'react'
import './balance.css'
import R from 'ramda'

export default (props) => (
  <div className={'account' + (esPasivo(props.accountId) ? ' neg' : '')} draggable="true" onDragStart={achicar.bind(null, props)} onDragOver={handleDrag} onDragEnter={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop.bind(null, props)}>
    <h1>{props.accountId}</h1>
    <h2>{props.balance}</h2>
  </div>
)

const esPasivo = (accountId) => {
  return !R.contains(accountId, ['Mercado Pago', 'Efectivo Carcamo', 'Banco'])
}

const achicar = (data, ev) => ev.dataTransfer.setData('data', JSON.stringify(data))
const handleDragOver = (ev) => ev.target.classList.add('over')
const handleDragLeave = (ev) => ev.target.classList.remove('over')
const handleDrop = (data, ev) => alert(ev.dataTransfer.getData('data') + JSON.stringify(data))
const handleDrag = (ev) => ev.preventDefault()