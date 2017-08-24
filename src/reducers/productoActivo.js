import { productoActivoActions } from '../constants/actionTypes'
import { Maybe } from 'ramda-fantasy'
import R from 'ramda'
export default (state = {}, action) => {
  switch (action.type) {
    case productoActivoActions.fill:
      return { ...action.producto,  cantidad: 1, metodoPago: 'efecivoCarcamo', show: 'hola' }
    case productoActivoActions.update:
      return Maybe(action.updateObject.cantidad)
        .map(updateValues(state))
        .getOrElse({ ...state, ...action.updateObject })
    case productoActivoActions.clean:
      return {}
    default:
      return state
  }
}

const updateValues = R.curry((producto, cantidad) => {
  if(!cantidad || cantidad < 1)
    return producto
  return {
    ...['costo','margen','costoEnvio', 'iva', 'precio', 'ingreso', 'comision'] 
      .reduce((p, c) => ({ ...p, [c]: (Math.floor(p[c] / p.cantidad * cantidad * 100) / 100) }), { ...producto }),
    cantidad
  }
})

