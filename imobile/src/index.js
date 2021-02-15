import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './store/reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
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
