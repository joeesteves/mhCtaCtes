import { db } from '../db'
import { transaccionesActions } from '../constants/actionTypes'
import { store } from '../store'

export const fetchTransacciones = () => {
  db.find({ doc_type: 'transaction' })
    .subscribe(({response, body}) => {
      
      store.dispatch(populateTransacciones(body.docs))
    })
}

const populateTransacciones = (transacciones) => {
  return {
    type: transaccionesActions.populate,
    transacciones
  }
}
