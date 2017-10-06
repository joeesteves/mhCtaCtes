import { productoActivoActions } from '../constants/actionTypes'
import { Maybe } from 'ramda-fantasy'
import R from 'ramda'
import { todayString, roundTwo } from '../helpers/misc'
export default (state = {}, action) => {
  switch (action.type) {
    case productoActivoActions.fill:
      return { ...action.producto, date: todayString, cantidad: 1, metodoPago: 'Mercado Pago', show: 'hola' }
    case productoActivoActions.update:
      return Maybe(action.updateObject.cantidad)
        .map(updateValues(state))
        .getOrElse({ ...state, ...action.updateObject })
    case productoActivoActions.clean:
      return {}
    case productoActivoActions.descuento:
      return applyDiscount(state, action.descuento)
    default:
      return state
  }
}

const updateValues = R.curry((producto, cantidad) => {
  if (!cantidad || cantidad < 1)
    return producto
  return {
    ...['costo', 'margen', 'costoEnvio', 'iva', 'precio', 'ingreso', 'comision', 'descuento']
      .reduce((p, c) => ({ ...p, [c]: roundTwo((p[c] * cantidad)) }), { ...producto }),
    cantidad
  }
})

const applyDiscount = (state, descuento) => {
  const applyDescuento = isNaN(parseFloat(descuento)) ? 0 : parseFloat(descuento)
  const deltaDescuento = applyDescuento - state.applyDescuento
  return { ...state, descuento, applyDescuento ,precio: roundTwo(state.precio - deltaDescuento) }
}