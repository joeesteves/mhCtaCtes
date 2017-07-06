import { combineReducers } from 'redux'
import productos from './productos'
import filters from './filters'
import productoActivo from './productoActivo'

const rootReducer = combineReducers({
  productos,
  filters,
  productoActivo
})

export default rootReducer