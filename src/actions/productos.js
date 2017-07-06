import { getDataFromUrl } from '../lib/http'
import { productosActions } from '../constants/actionTypes'
import { store } from '../store'

export const fetchProductos = () => {
  console.log("Fetching Productos")
  getDataFromUrl('http://woomh.elcaminosoftware.com/productos_info')
    .subscribe(productos => {
      store.dispatch(populateProductos(productos))
    })
  return { type: productosActions.fetch }
}

const populateProductos = (productos) => {
  return {
    type: productosActions.populate,
    productos
  }
}