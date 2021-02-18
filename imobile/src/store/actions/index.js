import {deleteJWT, errorLogIn, getJWT, LogIn, logOut, setLoadingStateLogIn, successLogIn} from './LogIn'
import {changePath} from './navigation'
import {addVendor, deleteVendor, errorAddingAVendor, fetchVendors} from './vendors'

const Actions = {
    successLogIn,
    errorLogIn,
    setLoadingStateLogIn,
    LogIn,
    logOut,
    getJWT,
    deleteJWT,
    changePath,
    fetchVendors,
    deleteVendor,
    addVendor,
    errorAddingAVendor
}

export default Actions