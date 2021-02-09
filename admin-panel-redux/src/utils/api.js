export const protocol = `http://`
export const domain = `localhost:3000`
export const BASIC_ADMIN_URL = `/admin`
export const BASIC_URL = `/`

const AUTH_URL = `${BASIC_ADMIN_URL}/auth`
const CRM_URL = `${BASIC_ADMIN_URL}/crm`
const ATTRIBUTES_URL = `${BASIC_ADMIN_URL}/attr`
const ADD_PRODUCT_URL = `${BASIC_ADMIN_URL}/add`
const ABOUT_URL = `${BASIC_ADMIN_URL}/about`
const PERSONAL_INFORMATION_URL = `${BASIC_ADMIN_URL}/personal`

export const urls = {
    AUTH: AUTH_URL,
    CRM: CRM_URL,
    ATTRIBUTES: ATTRIBUTES_URL,
    ADD_PRODUCT: ADD_PRODUCT_URL,
    ABOUT: ABOUT_URL,
    PERSONAL_INFORMATION: PERSONAL_INFORMATION_URL
}