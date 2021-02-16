import Actions from './index'
import Types from '../types'
import pagesPathnames from '../../utils/pagesPathnames'

export const changePath = (links, toLink) => {
    const changedLinks = links.map(link =>
        link.text === toLink.text
            ? {...link, selected: true}
            : {...link, selected: false}
    )

    if (toLink.path === pagesPathnames.LOGOUT)
        Actions.deleteJWT()

    return {
        type: Types.CHANGE_PATH,
        links: changedLinks
    }
}