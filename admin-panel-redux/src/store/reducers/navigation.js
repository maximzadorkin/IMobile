import {SET_ACTIVE_NAV_TAB, SET_NAVBAR_SHOW_STATE} from '../types'
import uniqid from 'uniqid'
import {urls} from '../../utils/api'

export const tabs = {
    AUTH: 'Вход',
    CRM: 'CRM',
    ATTRIBUTES: 'Разделы и атрибуты',
    ADD_PRODUCT: 'Добавление товара',
    ABOUT: 'Контактная информация',
    PERSONAL_INFORMATION: 'Персональная информация'
}

const initialState = {
    tabs: [
        // {id: `nav-${uniqid()}`, text: AUTH_PAGE, selected: true},
        {
            id: `nav-${uniqid()}`,
            text: tabs.CRM,
            url: urls.CRM,
            selected: true
        },
        {
            id: `nav-${uniqid()}`,
            text: tabs.ATTRIBUTES,
            url: urls.ATTRIBUTES,
            selected: false
        },
        {
            id: `nav-${uniqid()}`,
            text: tabs.ADD_PRODUCT,
            url: urls.ADD_PRODUCT,
            selected: false
        },
        {
            id: `nav-${uniqid()}`,
            text: tabs.ABOUT,
            url: urls.ABOUT,
            selected: false
        },
        {
            id: `nav-${uniqid()}`,
            text: tabs.PERSONAL_INFORMATION,
            url: urls.PERSONAL_INFORMATION,
            selected: false
        }
    ],
    navbar: {show: false}
}

const handlers = {
    [SET_ACTIVE_NAV_TAB]: (state, action) => ({
        ...state,
        tabs: state.tabs.map(tab =>
            tab.id !== action.tab.id
                ? {...tab, selected: false}
                : {...tab, selected: true}
        ),
        navbar: {
            ...state.navbar,
            show: window.innerWidth > 768
        }
    }),

    [SET_NAVBAR_SHOW_STATE]: (state, action) => ({
        ...state,
        navbar: {
            ...state.navbar,
            show: action.state
        }
    }),

    DEFAULT: state => state
}

export const navigationReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}