import React from 'react'
import './balance.css'
import R from 'ramda'
import { saveMovimiento } from '../actions/movimientos'
import { Maybe } from 'ramda-fantasy'
export default (props) => {
  const balance = props.accountId === 'Ajuste' ? '' : '$ ' + (props.balance || '---')

  return (<div className={dynamicClass(props.accountId)} draggable="true" onDragStart={handleDragStart.bind(null, props)} onDragOver={handleDrag} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop.bind(null, props)}>
    <div className="pc">
      <h1>{props.accountId}</h1>
      <h2>{balance}</h2>
    </div>
    <div className="mobile">
      <h3>{props.accountId}</h3>
      <h4>{balance}</h4>
    </div>
  </div>)
}

const dynamicClass = (accountId) => {
  console.log(accountId)
  return Maybe('account')
    .map(p => p + (!R.contains(accountId, ['Mercado Pago', 'Efectivo Carcamo', 'Banco']) ? ' neg' : ''))
    .map(p => p + (R.contains(accountId, ['Ajuste']) ? ' ajuste' : ''))
    .value

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