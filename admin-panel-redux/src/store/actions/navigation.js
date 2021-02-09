import {SET_ACTIVE_NAV_TAB, SET_NAVBAR_SHOW_STATE} from '../types'

export const setActiveNavTab = (tab) => ({
    type: SET_ACTIVE_NAV_TAB,
    tab
})

export const setNavbarShowState = (state) => ({
    type: SET_NAVBAR_SHOW_STATE,
    state
})