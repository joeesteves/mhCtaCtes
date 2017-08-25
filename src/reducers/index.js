import { combineReducers } from 'redux'
import productos from './productos'
import transacciones from './transacciones'
import loggedIn from './loggedIn'
import filters from './filters'
import balance from './balance'

import productoActivo from './productoActivo'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  productos,
  filters,
  productoActivo,
  transacciones,
  loggedIn,
  balance,
  router: routerReducer
})

export default rootReducer