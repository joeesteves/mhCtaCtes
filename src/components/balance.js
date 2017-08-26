import React from 'react'
import './balance.css'
import R from 'ramda'
import { saveMovimiento } from '../actions/movimientos'
export default (props) => (
  <div className={'account' + (esPasivo(props.accountId) ? ' neg' : '')} draggable="true" onDragStart={handleDragStart.bind(null, props)} onDragOver={handleDrag} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop.bind(null, props)}>
    <h1>{props.accountId}</h1>
    <h2>{props.balance}</h2>
  </div>
)

const esPasivo = (accountId) => {
  return !R.contains(accountId, ['Mercado Pago', 'Efectivo Carcamo', 'Banco'])
}

const handleDragStart = (data, ev) => ev.dataTransfer.setData('data', JSON.stringify(data))
const handleDragEnter = (ev) => ev.target.classList.add('over')
const handleDragLeave = (ev) => ev.target.classList.remove('over')
const handleDrop = (data, ev) => {
  const amount = parseFloat(prompt('Cuanto desea mover?', ''))

  saveMovimiento([
    { ...JSON.parse(ev.dataTransfer.getData('data')), amount: -amount },
    { ...data, amount }
  ])
}
const handleDrag = (ev) => ev.preventDefault()