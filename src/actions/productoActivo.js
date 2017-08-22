import { init } from 'rxjs-couchdb'
import { productoActivoActions } from '../constants/actionTypes'

const DB_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Basic am9zZTphbGZhMTM0Ng==',
  'User-Agent': 'request'
}
const db = init('http://db.ceibo.co/martin_hardoy', DB_HEADERS)


export const fillProductoActivo = (producto) => {
  return { type: productoActivoActions.fill, producto }
}

export const cleanProductoActivo = () => ({ type: productoActivoActions.clean })

export const updateProductoActivo = (updateObject) => {
  return { type: productoActivoActions.update, updateObject }
}

export const saveSaleProductoActivo = () => {
  console.log("HOLA")
  db
    .put({ _id: `probando${new Date().toISOString()}`, value: 'wow' })
    .subscribe(({ response, body }) => console.log(body))
  return { type: productoActivoActions.clean }
}
