import { productosActions } from '../constants/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case productosActions.populate:
      return action.productos
    default:
      return state
  }
}