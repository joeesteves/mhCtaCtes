import { db } from '../db'
import { transaccionesActions } from '../constants/actionTypes'
import { store } from '../store'

export const fetchTransacciones = () => {
  db.find({ doc_type: 'transaction' })
    .subscribe(({ response, body }) => {

      store.dispatch(populateTransacciones(body.docs))
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
const deleteTransaction = (transaccion) => {
  return {
    type: transaccionesActions.delete,
    transaccion
  }

}