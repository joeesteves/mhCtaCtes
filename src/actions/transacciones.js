import { db } from '../db'
import { transaccionesActions, balanceActions } from '../constants/actionTypes'
import { store } from '../store'
import Rx from 'rxjs'
import R from 'ramda'
import { roundTwo } from '../helpers/misc'

export const fetchTransacciones = () => {
  db.find({ doc_type: 'transaction' })
    .subscribe(({ response, body }) => {
      store.dispatch(populateTransacciones(body.docs))
      buildBalances()
    })
}

const populateTransacciones = (transacciones) => {
  return {
    type: transaccionesActions.populate,
    transacciones
  }
}

export const requestDeleteTransaccion = (transaccion) => {
  db.put({ ...transaccion, _deleted: true })
    .subscribe(({ response, body }) => {
      store.dispatch(deleteTransaction(transaccion))
    })
}

const cuentas = ['Ajuste','Carcamo-Envio', 'Cecilia Riera-Envio', 'Quero-Envio', 'Mercadal', 'Quero', 'Comisiones a Pagar','Efectivo Carcamo', 'Efectivo Hardoy', 'Mercado Pago', 'Banco' ]

export const buildBalances = () => {
  Rx.Observable.merge(
    Rx.Observable.from(store.getState().transacciones),
    Rx.Observable.from(store.getState().movimientos)
  )
    .flatMap(transaccion => Rx.Observable.from(transaccion.items))
    .concat(Rx.Observable.from(cuentas.map(c => ({ accountId: c, amount: 0 }))))
    .reduce((p, c) => ({ ...p, [c.accountId]: roundTwo((p[c.accountId] || 0) + c.amount) }), {})
    .map(balances => R.pick(cuentas, balances))
    .map(toArray)
    .subscribe(balance => store.dispatch({ type: balanceActions.build, balance }))
}


const deleteTransaction = (transaccion) => {
  return {
    type: transaccionesActions.delete,
    transaccion
  }

}
const toArray = (balanceObj) => Object.keys(balanceObj).map(acc => ({ accountId: acc, balance: balanceObj[acc] })).reverse()