const initialState = {

}

const handlers = {
    DEFAULT: state => state
}

export const authReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}