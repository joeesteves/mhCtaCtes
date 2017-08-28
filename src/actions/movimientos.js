import { movimientosActions } from '../constants/actionTypes'
import { createTransaction, addItems } from 'conty.js'
import { saveTransaction } from '../db'
import { store } from '../store'
import { Maybe } from 'ramda-fantasy'
import { db } from '../db'
import { buildBalances } from './transacciones'
import { todayString } from '../helpers/misc'


export const fetchMovimientos = () => {
  db.find({ doc_type: 'movimiento' })
    .subscribe(({ response, body }) => {
      store.dispatch(populateMovimientos(body.docs))
      buildBalances()
    })
}

const populateMovimientos = (movimientos) => {
  return {
    type: movimientosActions.populate,
    movimientos
  }
}
export const saveMovimiento = (items) => {
 return Maybe(addItems(items, createTransaction({ date: todayString, doc_type: 'movimiento' })))
    .map(movimiento => {
      return saveTransaction(movimiento)
        .subscribe(() => {
          store.dispatch(addMovimiento(movimiento))
          buildBalances()
        })
    })
}

export const requestDeleteMovimiento = (movimiento) => {
  db.put({ ...movimiento, _deleted: true })
    .subscribe(({ response, body }) => {
      store.dispatch(deleteMovimiento(movimiento))
    })
}

const deleteMovimiento = (movimiento) => {
  return {
    type: movimientosActions.delete,
    movimiento
  }

}
const addMovimiento = (movimiento) => {
  return {
    type: movimientosActions.create,
    movimiento
  }
}