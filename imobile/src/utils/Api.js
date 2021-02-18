const protocol = 'http://'
const domain = '192.168.137.216'
const port = ':3030'
const url = `${protocol}${domain}${port}`

const LOG_IN_API = `${url}/api/login`
const FETCH_VENDORS = `${url}/api/vendors`
const ADD_VENDOR = `${url}/api/vendor`
const DELETE_VENDOR = `${url}/api/vendor`

const Api = {
    url,
    LOG_IN_API,
    FETCH_VENDORS,
    ADD_VENDOR,
    DELETE_VENDOR
}

export default Api