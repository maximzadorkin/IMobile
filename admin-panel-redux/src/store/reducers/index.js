import {combineReducers} from 'redux'
import {authReducer} from './auth'
import {navigationReducer} from './navigation'

export const rootReducer = combineReducers({
    auth: authReducer,
    navigation: navigationReducer
})