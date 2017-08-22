import { combineReducers } from 'redux'
import productos from './productos'
import filters from './filters'
import productoActivo from './productoActivo'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  productos,
  filters,
  productoActivo,
  router: routerReducer
})

export default rootReducer