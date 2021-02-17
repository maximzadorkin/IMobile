import Types from '../types'
import pagesPathnames from '../../utils/pagesPathnames'

const loadPath = window.location.pathname

const pages = [
    {
        text: 'CRM',
        selected: false,
        path: pagesPathnames.CRM
    },
    {
        text: 'Производители',
        selected: false,
        path: pagesPathnames.VENDORS
    },
    {
        text: 'Разделы и атрибуты',
        selected: false,
        path: pagesPathnames.ATTRS
    },
    {
        text: 'Товары',
        selected: false,
        path: pagesPathnames.PRODUCTS
    },
    {
        text: 'Контактная информация',
        selected: false,
        path: pagesPathnames.CONTACTS
    },
    {
        text: 'Персональная информация',
        selected: false,
        path: pagesPathnames.PERSONAL
    },
    {
        text: 'Сайт',
        selected: false,
        path: pagesPathnames.MAIN
    },
    {
        text: 'Выйти',
        selected: false,
        path: pagesPathnames.LOGOUT
    }
]

const anylizePathNames = (pages, loadPath) =>
    pages.map(page => {
        const selected = page.path === loadPath
        return {...page, selected}
    })

const initialState = {
    pages: anylizePathNames(pages, loadPath)
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_PATH:
            return {...state, pages: action.links}
        default:
            return state
    }
}

export default navigation