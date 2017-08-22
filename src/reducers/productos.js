import { productosActions } from '../constants/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case productosActions.populate:
      return action.productos.map(processProductos)
    default:
      return state
  }
}

const processProductos = (producto) => {
  return {...producto, margen: calcMargen(producto), iva: calcIVA(producto)} 
}
const calcMargen = (producto) => (Math.round(((producto.precio - producto.costoEnvio )/1.21 - producto.costo) * 100) >> 0) / 100

const calcIVA = (producto) => (Math.round((producto.precio - producto.costoEnvio )*21/121 * 100) >> 0) / 100