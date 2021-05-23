import React from 'react'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import Main from './Components/Main'

const composer = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer,composer)

ReactDOM.render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>,document.getElementById('root'))


//thunk return function from action creators