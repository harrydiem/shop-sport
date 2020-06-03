import * as userConstain from '../constain/userConstain.js'
const initialState = {
    user: null
}

function todos(state = initialState, action) {
    switch (action.type) {
        case userConstain.FETCH_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
export default todos