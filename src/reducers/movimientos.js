import { movimientosActions } from '../constants/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case movimientosActions.populate:
      return action.movimientos
    case movimientosActions.create:
      return [...state, action.movimiento]
    case movimientosActions.delete:
      return deleteMovimiento(state, action.movimiento)
    default:
      return state
  }
}

const deleteMovimiento = (state, movimiento) => {
  return state.filter(mov => mov._id !== movimiento._id)
}