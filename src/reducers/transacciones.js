import { transaccionesActions } from '../constants/actionTypes'

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case transaccionesActions.populate:
      return action.transacciones
    default:
      return state
  }
}
