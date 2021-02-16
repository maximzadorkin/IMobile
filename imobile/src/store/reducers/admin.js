import ActionTypes from '../types'

const initialState = {
    errorLogIn: false,
    loading: false
}

const admin = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SUCCESS_LOG_IN:
            return {...state, errorLogIn: false, isLogIn: true}
        case ActionTypes.ERROR_LOG_IN:
            return {...state, errorLogIn: action.error, isLogIn: false}
        case ActionTypes.SET_LOADING_LOG_IN_STATE:
            return {...state, loading: action.loading}
        case ActionTypes.LOG_OUT:
            return {...state, isLogIn: false, errorLogIn: false}
        default:
            return state
    }
}

export default admin