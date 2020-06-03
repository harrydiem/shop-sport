import * as cartConstain from '../constain/cartConstain'

const initialState = {
    carts: {},
    user: null
}



function todos(state = initialState, action) {
    switch (action.type) {
        case cartConstain.FETCH_CART:
            return {
                ...state,
                carts: action.payload.data
            }
        case cartConstain.GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
export default todos