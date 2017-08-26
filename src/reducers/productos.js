import { productosActions } from '../constants/actionTypes'
import { roundTwo } from '../helpers/misc'
export default (state = [], action) => {
  switch (action.type) {
    case productosActions.populate:
      return action.productos.map(processProductos)
    default:
      return state
  }
}

const processProductos = (producto) => {
  return { ...producto, margen: calcMargen(producto), iva: calcIVA(producto), comision: calcComision(0.2, producto), ingreso: calcIngreso(producto), conComision: true }
}
const calcMargen = (producto) => roundTwo((producto.precio - producto.costoEnvio) / 1.21 - producto.costo)

const calcIVA = (producto) => roundTwo((producto.precio - producto.costoEnvio) * 21 / 121)

const calcComision = (tasa, producto) => roundTwo(calcMargen(producto) * tasa)

const calcIngreso = (producto) => roundTwo(producto.precio - calcIVA(producto))

/**
 * producto
 *  precio
 *  costo
 *  costoEnvio
 *  iva
 *  margen
 *  enviadoPor
 *  ingreso
 * conComision
 */