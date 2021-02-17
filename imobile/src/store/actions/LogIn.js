import ActionTypes from '../types'
import Api from '../../utils/Api'
import Errors from '../../utils/Errors'
import uniqid from 'uniqid'
import * as CryptoJS from 'crypto-js'
import {history} from '../../index'
import pagesPathnames from '../../utils/pagesPathnames'

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
            .then(data => {
                if (data.status !== 200)
                    throw new Error(data.status)
                return data.json()
            })
            .then(_data => {
                setJWT(_data.token)
                dispatch(errorLogIn(false))
                dispatch(successLogIn())
                dispatch(setLoadingStateLogIn(false))
                history.push(pagesPathnames.CRM)
            })
            .catch(err => {
                const INVALID_AUTH_ERROR = 401
                const error = Number(err.message) === Number(INVALID_AUTH_ERROR)
                    ? Errors.INVALID_AUTH_ERROR
                    : 'network'
                dispatch(errorLogIn(error))
                dispatch(setLoadingStateLogIn(false))
            })


    }

export const logOut = () => {
    deleteJWT()
    history.push('/admin/login')
    return {type: ActionTypes.LOG_OUT}
}

export const setJWT = token => {
    const id = uniqid() // char[8]
    const ciphertext = CryptoJS.AES.encrypt(token, id).toString()
    localStorage.setItem('token', id + ciphertext)
}

export const getJWT = () => {
    const crypt = localStorage.getItem('token')

    if (!crypt) return false

    const cryptId = crypt.slice(0, 8)
    const cryptToken = crypt.slice(8)
    const bytes  = CryptoJS.AES.decrypt(cryptToken, cryptId)
    const token = bytes.toString(CryptoJS.enc.Utf8)
    return token
}

export const deleteJWT = () => localStorage.removeItem('token')