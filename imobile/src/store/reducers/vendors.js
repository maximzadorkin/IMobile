import ActionTypes from '../types'

const initialState = {
    vendors: [],
    uploadingNewVendor: false,
    fetchVendorsLoading: false,
    errorAddingAVendor: {error: false, name: ''},
    loadingUpdateVendor: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_VENDORS:
            return {...state, vendors: action.vendors}
        case ActionTypes.SET_UPLOADING_NEW_VENDOR:
            return {...state, uploadingNewVendor: !state.uploadingNewVendor}
        case ActionTypes.SET_FETCH_VENDORS_LOADING:
            return {...state, fetchVendorsLoading: !state.fetchVendorsLoading}
        case ActionTypes.ERROR_ADDING_A_VENDOR:
            return {
                ...state,
                errorAddingAVendor: {
                    error: action.error,
                    name: action.name
                }
            }
        case ActionTypes.LOADING_UPDATE_VENDOR:
            return {...state, loadingUpdateVendor: !state.loadingUpdateVendor}
        default:
            return state
    }
}

export default reducer