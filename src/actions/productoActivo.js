import { productoActivoActions } from '../constants/actionTypes'

export const fillProductoActivo = (producto) => {
  return { type: productoActivoActions.fill, producto }
}

export const cleanProductoActivo = () => ({ type: productoActivoActions.clean })
