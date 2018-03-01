import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux' //para criar a store
import { Provider } from 'react-redux'

import promise from 'redux-promise'  //Middleware

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()

//Esse Middleware vai esperar a resolucao da Promise
const store = applyMiddleware(promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
, document.getElementById('app'))