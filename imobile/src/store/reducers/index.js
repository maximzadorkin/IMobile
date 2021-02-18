import {combineReducers} from 'redux'
import admin from './admin'
import navigation from './navigation'
import vendors from './vendors'

const rootReducer = combineReducers({
    admin,
    navigation,
    vendors
})

export default rootReducer