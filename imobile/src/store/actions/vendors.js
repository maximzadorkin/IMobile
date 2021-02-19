import Api from '../../utils/Api'
import ActionTypes from '../types'
import Actions from './index'

export const setUploadingNewVendor = () => ({
    type: ActionTypes.SET_UPLOADING_NEW_VENDOR
})

export const setFetchVendorsLoading = () => ({
    type: ActionTypes.SET_FETCH_VENDORS_LOADING
})

export const setVendors = vendors => ({
    type: ActionTypes.SET_VENDORS,
    vendors
})

export const errorAddingAVendor = (error, name) => ({
    type: ActionTypes.ERROR_ADDING_A_VENDOR,
    error,
    name
})

export const fetchingVendors = () =>
    async dispatch => {
        const fetched = await fetch(Api.FETCH_VENDORS)
        const data = await fetched.json()
        const vendors = data.vendors.map(vendor => ({
            id: vendor._id,
            name: vendor.name,
            image: `${Api.url}${vendor.image}`,
            basicUrlImage: vendor.image
        }))
        dispatch(setVendors(vendors))
    }

export const fetchVendors = () =>
    async dispatch => {
        dispatch(setFetchVendorsLoading())
        await dispatch(fetchingVendors())
        dispatch(setFetchVendorsLoading())
    }

export const deleteVendor = vendor =>
    async dispatch => {
        const options = {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${Actions.getJWT()}`
            }
        }
        await fetch(`${Api.DELETE_VENDOR}?id=${vendor.id}`, options)

        dispatch(fetchVendors())
    }

export const addVendor = (vendor, vendors) =>
    async dispatch => {
        dispatch(setUploadingNewVendor())
        dispatch(errorAddingAVendor(false, ''))

        const nameJSONParse = JSON.parse(vendor.get('vendor'))
        const nameOfAddingVendor = nameJSONParse.name
        const haveThisVendor = vendors.filter(v => v.name === nameOfAddingVendor).length > 0
        if (haveThisVendor) {
            dispatch(errorAddingAVendor(true, nameOfAddingVendor))
        } else {
            const options = {
                method: 'POST',
                headers: {
                    authorization: `Bearer ${Actions.getJWT()}`
                },
                body: vendor
            }
            await fetch(Api.ADD_VENDOR, options)
            await dispatch(fetchVendors())
        }
        dispatch(setUploadingNewVendor())
    }

export const loadingUpdateVendor = () => ({
    type: ActionTypes.LOADING_UPDATE_VENDOR
})

export const updateVendor = (vendorID, vendorFormData) =>
    async dispatch => {
        dispatch(loadingUpdateVendor())
        dispatch(setFetchVendorsLoading())

        const options = {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${Actions.getJWT()}`
            },
            body: vendorFormData
        }
        await fetch(`${Api.UPDATE_VENDOR}?id=${vendorID}`, options)

        dispatch(fetchingVendors())
        dispatch(loadingUpdateVendor())
        dispatch(setFetchVendorsLoading())
    }