import Types from '../types'
import pagesPathnames from '../../utils/pagesPathnames'

const initialState = {
    pages: [
        {
            text: 'CRM',
            selected: true,
            path: pagesPathnames.CRM
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
            text: 'Выйти',
            selected: false,
            path: pagesPathnames.LOGOUT
        }
    ]
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