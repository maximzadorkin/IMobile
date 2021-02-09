import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {createStore} from 'redux'
import {rootReducer} from './store/reducers'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

reportWebVitals()
