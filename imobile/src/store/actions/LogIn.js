import ActionTypes from '../types'
import Api from '../../utils/Api'

export const successLogIn = () => ({
    type: ActionTypes.SUCCESS_LOG_IN
})

export const errorLogIn = error => ({
    type: ActionTypes.ERROR_LOG_IN,
    error
})

export const setLoadingStateLogIn = loading => ({
    type: ActionTypes.SET_LOADING_LOG_IN_STATE,
    loading
})

export const LogIn = (email, password) =>
    async dispatch => {
        dispatch(errorLogIn(false))
        dispatch(setLoadingStateLogIn(true))

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credential: "same-origin",
            body: JSON.stringify({
                user: {email, password}
            })
        }

        fetch(Api.LOG_IN_API, options)
            // .then(data => data.json())
            .then(_ => {
                dispatch(errorLogIn(false))
                dispatch(successLogIn())
                dispatch(setLoadingStateLogIn(false))
            })
            .catch(_ => {
                //TODO error for password or network
                const error = 'network' // 'network'
                dispatch(errorLogIn(error))
                dispatch(setLoadingStateLogIn(false))
            })


    }