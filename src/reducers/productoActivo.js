import { productoActivoActions } from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case productoActivoActions.fill:
      return {...action.producto, show: 'hola'}
    case productoActivoActions.clean:
      return {}
    default:
      return state
  }
}