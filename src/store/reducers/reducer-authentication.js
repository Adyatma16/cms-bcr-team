
const initialState = {
    isLoggedIn: false
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case "IS_LOGGEDIN":
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return {
                ...state
            }
    }
}