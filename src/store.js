import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const middleware = routerMiddleware(history)

export const store =  createStore(reducer, composeWithDevTools(applyMiddleware(middleware)))