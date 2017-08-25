import { transaccionesActions } from '../constants/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case transaccionesActions.populate:
      return action.transacciones
    case transaccionesActions.delete:
      return deleteTransaction(state, action.transaccion._id)
    default:
      return state
  }
}


const deleteTransaction = (state, id) => {
  return state.filter(transaccion => transaccion._id !== id)
}