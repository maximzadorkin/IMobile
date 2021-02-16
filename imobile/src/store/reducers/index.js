import {combineReducers} from 'redux'
import admin from './admin'
import navigation from './navigation'

const rootReducer = combineReducers({
    admin,
    navigation
})

export default rootReducer