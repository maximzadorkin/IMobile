import ActionTypes from '../types'

const initialState = {
    isAdmin: false,
    errorLogIn: false,
    loading: false
}

const admin = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SUCCESS_LOG_IN:
            return {...state, errorLogIn: false, isAdmin: true}
        case ActionTypes.ERROR_LOG_IN:
            return {...state, errorLogIn: action.error, isAdmin: false}
        case ActionTypes.SET_LOADING_LOG_IN_STATE:
            return {...state, loading: action.loading}
        default:
            return state
    }
}

export default admin