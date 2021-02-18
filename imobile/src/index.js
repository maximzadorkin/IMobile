import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'fontsource-roboto'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './store/reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*<React.StrictMode>*/}
                <App/>
            {/*</React.StrictMode>*/}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

reportWebVitals()
