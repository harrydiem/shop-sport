import * as cartConstain from '../constain/cartConstain'

const initialState = {
    carts: (localStorage.dataCart) ? JSON.parse(localStorage.dataCart) : {},
    user: null,
    countCart: (localStorage.id) ? 0 : (localStorage.dataCart) ? JSON.parse(localStorage.dataCart).countCart : 0
}
function todos(state = initialState, action) {
    switch (action.type) {
        case cartConstain.FETCH_CART:
            return {
                ...state,
                carts: action.payload
            }
        case cartConstain.GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case cartConstain.COUNT_CART:
            return {
                ...state,
                countCart: action.payload
            }
        default:
            return state
    }
}
export default todos