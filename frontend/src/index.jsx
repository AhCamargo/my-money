import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux' //para criar a store
import { Provider } from 'react-redux'

import promise from 'redux-promise'  //Middleware
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()

//Esse Middleware vai esperar a resolucao da Promise
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    
, document.getElementById('app'))