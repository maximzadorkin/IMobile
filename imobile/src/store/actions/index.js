import {deleteJWT, errorLogIn, getJWT, LogIn, logOut, setLoadingStateLogIn, successLogIn} from './LogIn'
import {changePath} from './navigation'

const Actions = {
    successLogIn,
    errorLogIn,
    setLoadingStateLogIn,
    LogIn,
    logOut,
    getJWT,
    deleteJWT,
    changePath
}

export default Actions