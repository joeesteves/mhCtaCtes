import { productoActivoActions } from '../constants/actionTypes'
import { createTransaction, addItems } from 'conty.js'
import { saveTransaction } from '../db'
import { todayString, roundTwo } from '../helpers/misc'
import R from 'ramda'
import { Maybe } from 'ramda-fantasy'

export const fillProductoActivo = (producto) => {
  return { type: productoActivoActions.fill, producto }
}

export const cleanProductoActivo = () => ({ type: productoActivoActions.clean })

export const updateProductoActivo = (updateObject) => {
  return { type: productoActivoActions.update, updateObject }
}

export const saveSaleProductoActivo = (producto) => {
  Maybe(producto)
    .map(valuesToFloat(['precio', 'costo', 'iva', 'ingreso', 'costoEnvio']))
    .map(generateItems)
    .map(putIntoTransaction(producto))
    .map(saveTransaction)
    .map(obs => obs.subscribe())


  return { type: productoActivoActions.clean }
}

const valuesToFloat = R.curry((keys, producto) => (
  keys.reduce((p, c) => ({ ...p, [c]: roundTwo(parseFloat(producto[c])) }), producto)
))

const proveedor = (enviadoPor) => {
  return {
    'Cecilia Riera': 'Mercadal',
    'Carcamo': 'produccionPropia',
    'Quero': 'Quero'
  }[enviadoPor]
}

const generateItems = (producto) => {
  return [
    { accountId: producto.metodoPago, amount: producto.precio },
    { accountId: 'costoProducción', amount: producto.costo },
    { accountId: 'costoEnvio', amount: producto.costoEnvio },
    { accountId: proveedor(producto.enviadoPor), amount: -producto.costo },
    { accountId: producto.enviadoPor + '-Envio', amount: -producto.costoEnvio },
    { accountId: 'Ingreso por Ventas', amount: -producto.ingreso },
    { accountId: 'IVA Debito', amount: -producto.iva }
  ]
    .concat(producto.conComision ? [
      { accountId: 'Costo Comisión', amount: producto.comision },
      { accountId: 'Comisiones a Pagar', amount: -producto.comision },
    ] : [])
}

const addTransactionToItems = R.curry((transaction, items) => {
  return addItems(items, transaction)
})

const putIntoTransaction = (producto) => addTransactionToItems(createTransaction({ ...producto }))