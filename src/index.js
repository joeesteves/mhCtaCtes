import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'


const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={App}/>
        {/* <Route path="/topics" component={Topics}/> */}
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker()
